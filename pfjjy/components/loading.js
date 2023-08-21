import React, { useEffect, useState } from 'react';

const Loading = ({ onImagesLoaded }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImageFrames = async (directory, numFrames, extension) => {
      const frames = await Promise.all(
        Array.from({ length: numFrames }, async (_, index) => {
          const paddedIndex = index.toString().padStart(3, '0');
          const response = await fetch(`/${directory}/${paddedIndex}.${extension}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch image ${index}: ${response.status} ${response.statusText}`);
          }
          const src = URL.createObjectURL(await response.blob());
          console.log(`Loaded image frame ${index}: ${src}`);
          return { src, loaded: false }; // 이미지 로드 상태를 false로 초기화
        })
      );
      return frames;
    };

    const loadImages = async () => {
      try {
        const contactAniFrames = await loadImageFrames('contact_ani', 64, 'svg');
        const introduceAniFrames = await loadImageFrames('introduce_ani', 153, 'png');
        const imgPaths = [
          '/img/hover_runner.gif',
          '/img/hss_log.svg',
          '/img/monitor.webp',
          '/img/iphone.webp',
          '/img/more_bg.svg',
          '/img/pf2_eye.webp',
          '/img/port1.png',
          '/img/ypaint.webp',
          // 다른 이미지 경로들도 여기에 추가
        ];
        const totalImages = contactAniFrames.length + introduceAniFrames.length + imgPaths.length;
        let loadedImages = 0;

        // console.log("totalImages: "+ totalImages);

        const loadImage = (url) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              // console.log('Loaded image:', url);
              resolve();
            };
            img.onerror = () => {
              // console.error('Failed to load image:', url);
              reject();
            };
            img.src = url;
          });

        const updateProgress = () => {
          loadedImages++;
          // console.log("loadedImages: "+ loadedImages);
          const progress = Math.floor((loadedImages / totalImages) * 100);
          
          setLoadingProgress(progress);

          // console.log("progress: "+ progress);
          if (loadedImages === totalImages) {
            setLoadingProgress(100);
            setImagesLoaded(true);
          }
        };

        const allImagePromises = [
          ...contactAniFrames.map((frame) => {
            return loadImage(frame.src).then(() => {
              frame.loaded = true; // 이미지 로드 상태를 업데이트
              updateProgress();
            });
          }),
          ...introduceAniFrames.map((frame) => {
            return loadImage(frame.src).then(() => {
              frame.loaded = true; // 이미지 로드 상태를 업데이트
              updateProgress();
            });
          }),
          ...imgPaths.map((url) => loadImage(url).then(updateProgress)),
        ];

        // 모든 이미지 로딩 프로미스 실행
        await Promise.all(allImagePromises);
        onImagesLoaded(); // 이미지 로딩 완료를 부모 컴포넌트에 알림
        setImagesLoaded(true);
      } catch (error) {
        console.error('Image loading error:', error);
      }
    };

    if (!imagesLoaded) {
      loadImages();
    }
  }, []); // 처음 로딩 시에만 실행

  // console.log('loadingProgress:', loadingProgress);

  return (
    <div className="loading-container">
      <p className="loading-text">{loadingProgress}%</p>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${loadingProgress}%` }} />
      </div>
    </div>
  );
};

export default Loading;
