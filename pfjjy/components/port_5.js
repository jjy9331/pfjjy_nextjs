import React, {useState, useEffect} from "react";

import Pfback from './pfback';
import Pfnext from './pfnext';

export default function Port_5({ }) {
    
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imageFrames_p5, setImageFrames_p5] = useState([]);
    const [imageLoaded_p5, setImageLoaded_p5] = useState(Array(45).fill(true));

    // port 5 hover ani _volvo

    let frameAnimationId_p5 = null;
    const startFrame_p5 = 0;
    const endFrame_p5 = 44;

    const handleMouseEnterPort5 = () => {
        let frame_go = startFrame_p5;

        const animate = () => {
            if (frame_go < endFrame_p5) {
                setCurrentFrame(frame_go);
                frame_go++;
                frameAnimationId_p5 = requestAnimationFrame(animate);
            }
        };

        animate();
    };

    const handleMouseLeavePort5 = () => {
        cancelAnimationFrame(frameAnimationId_p5);
        frameAnimationId_p5 = null;

        let frame_back = endFrame_p5;

        const animateBack = () => {
            if (frame_back > startFrame_p5) {
                setCurrentFrame(frame_back);
                frame_back--;
                if (frame_back >= startFrame_p5) {
                    frameAnimationId_p5 = requestAnimationFrame(animateBack);
                }
            }
        };

        animateBack();
    };


    const handleImageLoad_p5 = (index_p5) => {
        setImageLoaded_p5((prevLoaded) => {
            const loaded_p5 = [...prevLoaded];
            loaded_p5[index_p5] = true;
            return loaded_p5;
        });
    };

    useEffect(() => {
        const loadImageFrames_port5 = async () => {
            const frames = Array.from({ length: 44 }, (_, index_p5) => {
                const src = `/volvo_crop_intro_ani/${(index_p5 + 1).toString().padStart(3, "0")}.jpg`; // 이미 로드한 이미지 URL
                return { src, loaded: true };
            });
            setImageFrames_p5(frames);
        };
    
        loadImageFrames_port5();
    }, []);



    return (
        <div className='port'>
            <div className='p_wrap'>
                <div className="pf5back pfbn_mv">
                    <Pfback scrollYValue={28680} />
                </div>
                <img 
                    className='port_pc' 
                    src="/img/monitor.webp" 
                    alt="volvo" 
                    onMouseEnter={handleMouseEnterPort5}
                    onMouseLeave={handleMouseLeavePort5}
                />
                <img 
                    src="/img/pf5_lg.png" 
                    alt="pf5_logo" 
                    className="pf5_lg" 
                    loading="lazy" 
                />
                <p className="pf5_tt1">보전형 소비자를 위한</p>
                <p className="pf5_tt2">메인사이트 리뉴얼</p>
                <div className='port_5'>
                    {imageFrames_p5.map((frame, index) => {
                            if (!imageLoaded_p5[index]) return null;
                            return (
                                <img
                                    key={index}
                                    className="volvo_intro"
                                    src={frame.src} 
                                    style={{ 
                                        display: currentFrame === index ? "block" : "none",
                                        transform: 'scale(1)',
                                        width: '34vw',
                                        // height: '20vh',
                                    }}
                                    alt="volvo_intro_ani" 
                                    onLoad={() => handleImageLoad_p5(index)}
                                />
                            );
                    })}
                </div>
            </div>
            <div className="pf5next pfbn_mv">
                <Pfnext scrollYValue={32520} />
            </div>
        </div>
    );
}
