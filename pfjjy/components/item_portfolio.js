import React, { useRef, useEffect, useState } from "react";

export default function Item_portfolio() {
    const [scrollY, setScrollY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const portRef = useRef(null);
    const hzportRef = useRef(null);
    const portpmRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imageFrames_p3, setImageFrames_p3] = useState([]);
    const [imageFrames_p5, setImageFrames_p5] = useState([]);
    const [imageLoaded_p3, setImageLoaded_p3] = useState(Array(60).fill(true));
    const [imageLoaded_p5, setImageLoaded_p5] = useState(Array(45).fill(true));
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(()=>{
        const { current: hzportElement } = hzportRef;
        if(scrollY >= 0 && scrollY <= 16736){
            hzportElement.style.display = "none";
        } else if (scrollY > 16736 && scrollY <= 35328){
            hzportElement.style.display = "block";
        } else {
            hzportElement.style.display = "none";
        }

    },[scrollY])

    useEffect(()=>{
        const { current: portElement } = portRef;

        let progress, leftPosition;

        if (scrollY >= 16736 && scrollY <= 17346) {
            progress = (scrollY - 16736) / (17346 - 16736);
            leftPosition = 100 - progress * 100;
        } else if (scrollY > 17346 && scrollY <= 21328) {
            progress = 0;
            leftPosition = 0;
        } else if (scrollY > 21328 && scrollY <= 22328) {
            progress = (scrollY - 21328) / (22328 - 21328);
            leftPosition = -progress * 100;
        } else if (scrollY > 22328 && scrollY <= 23328) {
            progress = 0;
            leftPosition = -100;
        } else if (scrollY > 23328 && scrollY <= 24328) {
            progress = (scrollY - 23328) / (24328 - 23328);
            leftPosition = -100 - progress * 100;
        } else if (scrollY > 24328 && scrollY <= 25328) {
            progress = 0;
            leftPosition = -200;
        } else if (scrollY > 25328 && scrollY <= 26328) {
            progress = (scrollY - 25328) / (26328 - 25328);
            leftPosition = -200 - progress * 100;
        } else if (scrollY > 26328 && scrollY <= 27328) {
            progress = 0;
            leftPosition = -300;
        } else if (scrollY > 27328 && scrollY <= 28328) {
            progress = (scrollY - 27328) / (28328 - 27328);
            leftPosition = -300 - progress * 100;
        } else if (scrollY > 28328 && scrollY <= 29328) {
            progress = 0;
            leftPosition = -400;
        } else if (scrollY > 29328 && scrollY <= 30328) {
            progress = (scrollY - 29328) / (30328 - 29328);
            leftPosition = -400 - progress * 100;
        } else if (scrollY > 30328 && scrollY <= 31328) {
            progress = 0;
            leftPosition = -500;
        } else if (scrollY > 31328 && scrollY <= 32328) {
            progress = (scrollY - 31328) / (32328 - 31328);
            leftPosition = -500 - progress * 100;
        } else if (scrollY > 32328 && scrollY <= 33328) {
            progress = 0;
            leftPosition = -600;
        } else {
            progress = 0;
            leftPosition = -600;
        } 
        
        portElement.style.left = `${leftPosition}%`;

    },[scrollY])

    useEffect(()=>{

        let progress, bottomPosition;

        const { current: portpmElement } = portpmRef;
        if(scrollY >= 0 && scrollY <= 33328){
            bottomPosition = 0
        } else if(scrollY > 33328 && scrollY <= 34328){
            progress = (scrollY - 33328) / (34328 - 33328);
            bottomPosition = 0 - progress * 100;
        } else {
            progress = 0;
            bottomPosition = -100;
        }

        portpmElement.style.bottom = `${bottomPosition}%`;

    },[scrollY])

    // port 1 hover ani

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // port 2 hover ani

    const handleMouseEnterPort2 = () => {
        const port2Element = document.querySelector('.port_2');
        const pf2EyeElement = port2Element.querySelector('.pf2_eye');
        pf2EyeElement.style.bottom = '-11%';
        pf2EyeElement.style.left = '-8%';
        pf2EyeElement.style.transition = '0.3s ease-in-out 0.2s';
    };

    const handleMouseLeavePort2 = () => {
        const port2Element = document.querySelector('.port_2');
        const pf2EyeElement = port2Element.querySelector('.pf2_eye');
        pf2EyeElement.style.bottom = '-54%';
        pf2EyeElement.style.left = '-36%';
        pf2EyeElement.style.transition = '0.3s ease-in-out';
    };

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
            const frames = await Promise.all(
                Array.from({ length: 59 }, async (_, index_p3) => {
                    const response = await fetch(`/mohenic_crop_intro_ani/${( index_p3 + 1 ).toString().padStart(3, "0")}.jpg`);
                    const src = URL.createObjectURL(await response.blob());
                    return { src, loaded: true };
                })
            );
            setImageFrames_p3(frames);
        };

        loadImageFrames_port3();
    }, []);

    // port 4 hover ani

    const handleMouseEnterPort4 = () => {
        const port4Element = document.querySelector('.port_4');
        const pf4yph1 = port4Element.querySelector('.ypaint_hide1');
        const pf4yph2 = port4Element.querySelector('.ypaint_hide2');
        const smile = port4Element.querySelector('.smile');
        const smile2p = port4Element.querySelector('.cls-3');
        const smile2 = port4Element.querySelector('#smile2');
        const pf4subp = port4Element.querySelector('.pf4_subp');
        pf4yph1.style.marginLeft = "23%";
        pf4yph2.style.marginLeft = "23%";
        smile.style.marginBottom = "7%";
        pf4subp.style.opacity = '0.7';
        pf4yph1.style.transition = '0.35s ease-out 0.28s';
        pf4yph2.style.transition = '0.6s ease-out 0.4s';
        smile.style.transition = "0.5s ease-out 0.38s";
        smile2.style.animation = "growsmile 1.5s ease-in-out";
        pf4subp.style.transition = "0.6s ease-out 0.38s";
    };

        const handleMouseLeavePort4 = () => {
        const port4Element = document.querySelector('.port_4');
        const pf4yph1 = port4Element.querySelector('.ypaint_hide1');
        const pf4yph2 = port4Element.querySelector('.ypaint_hide2');
        const smile = port4Element.querySelector('.smile');
        const smile2p = port4Element.querySelector('.cls-3');
        const smile2 = port4Element.querySelector('#smile2');
        const pf4subp = port4Element.querySelector('.pf4_subp');
        pf4yph1.style.marginLeft = "0%";
        pf4yph2.style.marginLeft = "0%";
        smile.style.marginBottom = "0%";
        pf4subp.style.opacity = '0.3';
        pf4yph1.style.transition = '0.35s ease-out 0.28s';
        pf4yph2.style.transition = '0.6s ease-out 0.4s';
        smile.style.transition = "0.5s ease-out 0.38s";
        smile2.style.animation = "backsmile 0.9s ease-in-out";
        pf4subp.style.transition = "0.6s ease-out 0.38s";
    };


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
            const frames = await Promise.all(
                Array.from({ length: 44 }, async (_, index_p5) => {
                    const response = await fetch(`/volvo_crop_intro_ani/${( index_p5 + 1 ).toString().padStart(3, "0")}.jpg`);
                    const src = URL.createObjectURL(await response.blob());
                    return { src, loaded: true };
                })
            );
            setImageFrames_p5(frames);
        };

        loadImageFrames_port5();
    }, []);

    return (
        <div>
            <div className='portfolio'>
                <div ref={hzportRef} className="port_wrap1">
                    <div ref={portRef} className='port_wrap2'>
                        <div className='port'>
                            <h3 className='port_tt'>포트폴리오</h3>
                        </div>
                        <div className='port'>
                        <img 
                            className='port_1'
                            src={isHovering ? "/img/port1.gif" : "/img/port1.png"}
                            alt="UI,UX_mindset"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                        </div>
                        <div className='port'>
                            <img 
                                className='port_pc' src="/img/monitor.webp" alt="zerolab" 
                                onMouseEnter={handleMouseEnterPort2}
                                onMouseLeave={handleMouseLeavePort2} 
                            />
                            <div className='port_2'>
                                <h3>zero<span>lab</span></h3>
                                <p>리디자인</p>
                                <div className="eye_hide1"></div>
                                <div className="eye_hide2"></div>
                                <img 
                                    src="/img/pf2_eye.webp" 
                                    alt="mouseover_ani_source" 
                                    className="pf2_eye" 
                                    loading="lazy" 
                                />
                            </div>
                        </div>
                        <div className='port'>
                            <div className='p_wrap'>
                            <img 
                                className='port_pc' 
                                src="/img/monitor.webp" 
                                alt="mohenic" 
                                onMouseEnter={handleMouseEnterPort3}
                                onMouseLeave={handleMouseLeavePort3}
                            />
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
                            </div>
                        </div>
                        <div className='port'>
                            <img 
                                className='port_ph' 
                                src="/img/iphone.webp" 
                                alt="happysocks" 
                                onMouseEnter={handleMouseEnterPort4}
                                onMouseLeave={handleMouseLeavePort4} 
                            />
                            <div className='port_4'>
                                <img src="/img/hss_log.svg" alt="happy_socks_logo" className="hss_logo" loading="lazy" />
                                <p className="pf4_subp">모바일 리디자인</p>
                                <div className="ypaint_hide1"></div>
                                <div className="ypaint_hide2"></div>
                                <div className="ypaint_hide3"></div>
                                <div className="pf4bg"></div>
                                <img src="/img/ypaint.webp" alt="mouseover_pf4_ypaint_ani_source" className="pf4_ypaint1" loading="lazy" />
                                <img src="/img/ypaint.webp" alt="mouseover_pf4_ypaint_ani_source" className="pf4_ypaint2" loading="lazy" />
                                <svg className="smile"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.62 31.62" preserveAspectRatio="none">
                                        <circle className="cls-1" cx="15.81" cy="15.81" r="15.81"/>
                                        <g id="smile2">
                                            <path className="cls-3" d="M1216.67,463.09h0a.49.49,0,0,0-.58.36,1.49,1.49,0,0,1-2.9,0,.64.64,0,0,0,0-.07.48.48,0,1,0-.92.3,2.46,2.46,0,0,0,1.89,1.81,9.15,9.15,0,0,1-18.29,0,2.45,2.45,0,0,0,1.89-1.8h0a.47.47,0,0,0-.35-.58h0a.5.5,0,0,0-.59.36,1.49,1.49,0,0,1-2.9,0s0-.05,0-.07a.49.49,0,0,0-.61-.31.49.49,0,0,0-.31.61,2.44,2.44,0,0,0,1.91,1.81,10.12,10.12,0,0,0,20.23,0,2.47,2.47,0,0,0,1.92-1.81h0A.49.49,0,0,0,1216.67,463.09Z" transform="translate(-1189.16 -449.4)"/>
                                        </g>
                                </svg>
                            </div>
                        </div>
                        <div className='port'>
                            <div className='p_wrap'>
                            <img 
                                className='port_pc' 
                                src="/img/monitor.webp" 
                                alt="volvo" 
                                onMouseEnter={handleMouseEnterPort5}
                                onMouseLeave={handleMouseLeavePort5}
                            />
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
                        </div>
                        <div className='port' ref={portpmRef}>
                            <div className='pf_more'>
                            <img className='port_ph' src="/img/iphone.webp" alt="port_more" />
                            </div>
                            <div className='port_more'>
                                <img src="/img/more_bg.svg" className="pf_more_img" alt="pf_more" loading="lazy"/>
                                <img src="/img/hover_runner.gif" className="hover_runner" alt="hover_runner" loading="lazy"/>
                                <div className="pfmore_bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

