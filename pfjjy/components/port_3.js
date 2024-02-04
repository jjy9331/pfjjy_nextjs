import React, {useState, useEffect} from "react";

import Pfback from './pfback';
import Pfnext from './pfnext';

export default function Port_3({ }) {

    const [currentFrame, setCurrentFrame] = useState(0);
    const [imageFrames_p3, setImageFrames_p3] = useState([]);
    const [imageLoaded_p3, setImageLoaded_p3] = useState(Array(60).fill(true));

    // port 3 hover ani _ mohenic

    let frameAnimationId_p3 = null;
    const startFrame_p3 = 0;
    const endFrame_p3 = 59;
    // let frame_go = startFrame_p3 + 1;
    // let frame_back = endFrame_p3 - 1;
    const handleMouseEnterPort3 = () => {
        let frame_go = startFrame_p3;

        const animate = () => {
            if (frame_go < endFrame_p3) {
                setCurrentFrame(frame_go);
                frame_go++;
                frameAnimationId_p3 = requestAnimationFrame(animate);
            }
        };

        animate();
    };

    
    const handleMouseLeavePort3 = () => {
        cancelAnimationFrame(frameAnimationId_p3);
        frameAnimationId_p3 = null;

        let frame_back = endFrame_p3;

        const animateBack = () => {
            if (frame_back > startFrame_p3) {
                setCurrentFrame(frame_back);
                frame_back--;
                if (frame_back >= startFrame_p3) {
                    frameAnimationId_p3 = requestAnimationFrame(animateBack);
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
