import React, {useState, useEffect} from "react";

import Pfback from './pfback';
import Pfnext from './pfnext';

export default function Port_4({ }) {

    let enterTime, leaveTime;
    
    // port 4 hover ani

    const handleMouseEnterPort4 = () => {
        enterTime = new Date(); // 마우스가 요소 위에 올라간 시간(특정시간_순차적 카우트X)을 기록
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
        pf4subp.style.visibility = "visible";
        pf4yph1.style.transition = '0.35s ease-out 0.28s';
        pf4yph2.style.transition = '0.6s ease-out 0.4s';
        smile.style.transition = "0.5s ease-out 0.38s";
        smile2.style.animation = "growsmile 1.5s ease-in-out";
        pf4subp.style.animation = "pf4sp1 2.5s ease-out";
    };

    const handleMouseLeavePort4 = () => {
        leaveTime = new Date(); // 마우스가 요소에서 떠난 시간을 기록
        const stayTime = leaveTime - enterTime; // 마우스가 요소 위에 머무른 시간 계산
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
        pf4subp.style.visibility = "hidden";
        pf4yph1.style.transition = '0.35s ease-out 0.28s';
        pf4yph2.style.transition = '0.6s ease-out 0.4s';
        smile.style.transition = "0.5s ease-out 0.38s";
        smile2.style.animation = "backsmile 0.9s ease-in-out";

        if (stayTime >= 2000) { // 마우스가 요소 위에 2초 이상 머물렀을 경우
            pf4subp.style.animation = "pf4sp2 0.5s ease-in-out";
        } else { // 마우스가 요소 위에 2초 미만으로 머무른 경우
            pf4subp.style.visibility = "hidden";
        }
        // 마우스가 요소를 떠날 때마다 animation 속성을 초기화
        pf4subp.style.animation = "";

    };


    return (
        <div className='port'>
            <div className="pf4back pfbn_mv">
                <Pfback scrollYValue={26701} />
            </div>
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
            <div className="pf4next pfbn_mv">
                <Pfnext scrollYValue={30557} />
            </div>
        </div>
    );
}
