import React, { useRef, useEffect, useState } from "react";

import Port_1 from './port_1.js';
import Port_2 from './port_2.js';
import Port_3 from './port_3.js';
import Port_4 from './port_4.js';
import Port_5 from './port_5.js';
import Port_6 from './port_6.js';

export default function Item_portfolio({onPortClick}) {
    const [scrollY, setScrollY] = useState(0);
    
    const portRef = useRef(null);
    const hzportRef = useRef(null);

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

        let progress, leftPosition ;
        const pfbn_mvElements = document.getElementsByClassName("pfbn_mv");

        // portfolio_horizontality_scroll_controls

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

        // pfback,pfnext_visibility_controls

        if (
            (scrollY > 22328 && scrollY <= 23328) ||
            (scrollY > 24328 && scrollY <= 25328) ||
            (scrollY > 26328 && scrollY <= 27328) ||
            (scrollY > 28328 && scrollY <= 29328) ||
            (scrollY > 30328 && scrollY <= 31328) ||
            (scrollY > 32328 && scrollY <= 33328)
        ) {
            for (let i = 0; i < pfbn_mvElements.length; i++) {
                pfbn_mvElements[i].style.visibility = "visible";
            }
        } else {
            for (let i = 0; i < pfbn_mvElements.length; i++) {
                pfbn_mvElements[i].style.visibility = "hidden";
            }
        }
        
        portElement.style.left = `${leftPosition}%`;

    },[scrollY])

    return (
        <div>
            <div className='portfolio'>
                <div ref={hzportRef} className="port_wrap1">
                    <div ref={portRef} className='port_wrap2'>
                        <div className='port'>
                            <h3 className='port_tt'>PORTFOLIO</h3>
                        </div>
                        <Port_1 onPortClick={onPortClick} />
                        <Port_2/>
                        <Port_3/>
                        <Port_4/>
                        <Port_5/>
                        <Port_6/>
                    </div>
                </div>
            </div>
        </div>
    )
}

