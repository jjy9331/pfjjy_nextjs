import React, {useState} from "react";

export default function Port_2({ }) {


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


    return (
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
    );
}
