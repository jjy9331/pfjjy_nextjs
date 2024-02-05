import React, {useState, useEffect} from "react";

import Pfback from './pfback';
import Pfnext from './pfnext';

export default function Port_3({ }) {

    const [currentFrame, setCurrentFrame] = useState(0);
    const [imageFrames_p3, setImageFrames_p3] = useState([]);
    const [imageLoaded_p3, setImageLoaded_p3] = useState(Array(60).fill(true));
    const [frameAnimationId_p3, setFrameAnimationId_p3] = useState(null); // frameAnimationId_p3 상태 추가

    // port 3 hover ani _ mohenic

    const startFrame_p3 = 0;
    const endFrame_p3 = 59;

    const handleMouseEnterPort3 = () => {
        
        let frame = startFrame_p3; // frame 변수 선언 및 초기화

        const animate = () => {
            if (frame <  endFrame_p3) {
                setCurrentFrame(frame);
                frame++;
                // console.log("mouse_enter: "+ frame)
                setFrameAnimationId_p3(requestAnimationFrame(animate)); // frameAnimationId_p3 업데이트
            }
        };

        animate();
    };

    
    const handleMouseLeavePort3 = () => {
        cancelAnimationFrame(frameAnimationId_p3);
        setFrameAnimationId_p3(null);

        let frame = currentFrame; // 현재 프레임 값 가져오기

        const animateBack = () => {
            if (frame > startFrame_p3) {
                setCurrentFrame(frame);
                frame--;
                // console.log("mouse_leave: "+ frame)
                if (frame >= 0) {
                    setFrameAnimationId_p3(requestAnimationFrame(animateBack)); // frameAnimationId_p3 업데이트
                }
            }
        };

        animateBack();
    };


    const handleImageLoad_p3 = (index_p3) => {
        setImageLoaded_p3((prevLoaded) => {
            const loaded_p3 = [...prevLoaded];
            loaded_p3[index_p3] = true;
            return loaded_p3;
        });
    };

    useEffect(() => {
        const loadImageFrames_port3 = async () => {
            const frames = Array.from({ length: 59 }, (_, index_p3) => {
                const src = `/mohenic_crop_intro_ani/${(index_p3 + 1).toString().padStart(3, "0")}.jpg`; // 이미 로드한 이미지 URL
                return { src, loaded: true };
            });
            setImageFrames_p3(frames);
        };

        loadImageFrames_port3();
    }, []);


    return (
        <div className='port'>
            <div className='p_wrap'>
                <div className="pf3back pfbn_mv">
                    <Pfback scrollYValue={24594} />
                </div>
                <img 
                    className='port_pc' 
                    src="/img/monitor.webp" 
                    alt="mohenic" 
                    onMouseEnter={handleMouseEnterPort3}
                    onMouseLeave={handleMouseLeavePort3}
                />
                <img 
                    src="/img/pf3_mt.png" 
                    alt="pf3_main_title" 
                    className="pf3_mt" 
                    loading="lazy" 
                />
                <p className="pf3_st">리디자인 & 퍼블리싱</p>
                <div className="port_3">
                    {imageFrames_p3.map((frame, index) => {
                        if (!imageLoaded_p3[index]) return null;
                        return (
                            <img
                                key={index}
                                className="mohenic_intro"
                                src={frame.src} 
                                style={{ 
                                    display: currentFrame === index ? "block" : "none",
                                    transform: 'scale(1)',
                                    width: '34vw',
                                    // height: '20vh',
                                }}
                                alt="mohenic_intro_ani" 
                                onLoad={() => handleImageLoad_p3(index)}
                            />
                        );
                    })}
                </div>
                <div className="pf3next pfbn_mv">
                    <Pfnext scrollYValue={28675} />
                </div>
            </div>
        </div>
    );
}
