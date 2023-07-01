import React, { useRef, useEffect, useState } from "react";

export default function Item_portfolio() {
    const [scrollY, setScrollY] = useState(0);
    const portRef = useRef(null);
    const hzportRef = useRef(null);
    const portpmRef = useRef(null);

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
        if(scrollY >= 0 && scrollY <= 17010){
            hzportElement.style.display = "none";
        } else if (scrollY > 17010 && scrollY <= 35328){
            hzportElement.style.display = "block";
        } else {
            hzportElement.style.display = "none";
        }

    },[scrollY])

    useEffect(()=>{
        const { current: portElement } = portRef;

        let progress, leftPosition;

        if (scrollY >= 17010 && scrollY <= 19484) {
            progress = (scrollY - 17010) / (19484 - 17010);
            leftPosition = 100 - progress * 100;
        } else if (scrollY > 19484 && scrollY <= 21328) {
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

    return (
        <div>
            <div className='portfolio'>
                <div ref={hzportRef} className="port_wrap1">
                    <div ref={portRef} className='port_wrap2'>
                        <div className='port'>
                            <h3 className='port_tt'>포트폴리오</h3>
                        </div>
                        <div className='port'>
                            <img className='port_1' src="/img/port1.png" alt="UI,UX_mindset" />
                        </div>
                        <div className='port'>
                            <img className='port_pc' src="/img/monitor.webp" alt="zerolab" />
                            <div className='port_2'>
                                <h3>zero<span>lab</span></h3>
                                <p>리디자인</p>
                                <div className="eye_hide1"></div>
                                <div className="eye_hide2"></div>
                                <img src="/img/pf2_eye.webp" alt="mouseover_ani_source" className="pf2_eye" loading="lazy" />
                            </div>
                        </div>
                        <div className='port'>
                            <div className='p_wrap'>
                            <img className='port_pc' src="/img/monitor.webp" alt="mohenic" />
                            <div className="lottie_ani">
                                <lottie-interactive  lottie-interactive path="/data/mohenic_ani.json" interaction="morph"></lottie-interactive>
                            </div>
                            </div>
                        </div>
                        <div className='port'>
                            <img className='port_ph' src="/img/iphone.webp" alt="happysocks" />
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
                            <img className='port_pc' src="/img/monitor.webp" alt="volvo" />
                            <div className='lottie_ani'>
                                <lottie-interactive  lottie-interactive path="/data/volvo_ani.json" interaction="morph"></lottie-interactive>
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

