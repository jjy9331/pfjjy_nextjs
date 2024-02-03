import React, {useState, useEffect, useRef} from "react";

export default function Port_6({ }) {

    const portpmRef = useRef(null);
    

    // port more hover ani

    const handleMouseEnterPortm = () => {
        const portmElement = document.querySelector('.port_more');
        const pfmg = portmElement.querySelector('.hover_runner');
        pfmg.style.zIndex =  -2;

    };

        const handleMouseLeavePortm = () => {
        const portmElement = document.querySelector('.port_more');
        const pfmg = portmElement.querySelector('.hover_runner');
        pfmg.style.zIndex =  -4;
    };


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
        <div className='port' ref={portpmRef}>
            <div className='pf_more'>
                <img 
                    className='port_ph' 
                    src="/img/iphone.webp" 
                    alt="port_more" 
                    onMouseEnter={handleMouseEnterPortm}
                    onMouseLeave={handleMouseLeavePortm} 
                />
            </div>
            <div className='port_more'>
                <img src="/img/more_bg.svg" className="pf_more_img" alt="pf_more" loading="lazy"/>
                <img src="/img/hover_runner.gif" className="hover_runner" alt="hover_runner" loading="lazy"/>
                <div className="pfmore_bg"></div>
            </div>
        </div>
    );
}
