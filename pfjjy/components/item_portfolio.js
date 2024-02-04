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

        if (scrollY >= 16736 && scrollY <= 17346) {
            progress = (scrollY - 16736) / (17346 - 16736);
            leftPosition = 100 - progress * 100;
        } else if (scrollY > 17346 && scrollY <= 21328) {
            progress = 0;
            leftPosition = 0;
        } else if (scrollY > 21328 && scrollY <= 22328) {
            progress = (scrollY - 21328) / (22328 - 21328);
            leftPosition = -progress * 100;
            document.getElementById("pf1back").style.visibility = "hidden";
            document.getElementById("pf1next").style.visibility = "hidden";
        } else if (scrollY > 22328 && scrollY <= 23328) {
            progress = 0;
            leftPosition = -100;
            document.getElementById("pf1back").style.visibility = "visible";
            document.getElementById("pf1next").style.visibility = "visible";
        } else if (scrollY > 23328 && scrollY <= 24328) {
            progress = (scrollY - 23328) / (24328 - 23328);
            leftPosition = -100 - progress * 100;
            document.getElementById("pf1back").style.visibility = "hidden";
            document.getElementById("pf1next").style.visibility = "hidden";
            document.getElementById("pf2back").style.visibility = "hidden";
            document.getElementById("pf2next").style.visibility = "hidden";
        } else if (scrollY > 24328 && scrollY <= 25328) {
            progress = 0;
            leftPosition = -200;
            document.getElementById("pf2back").style.visibility = "visible";
            document.getElementById("pf2next").style.visibility = "visible";
        } else if (scrollY > 25328 && scrollY <= 26328) {
            progress = (scrollY - 25328) / (26328 - 25328);
            leftPosition = -200 - progress * 100;
            document.getElementById("pf2back").style.visibility = "hidden";
            document.getElementById("pf2next").style.visibility = "hidden";
            document.getElementById("pf3back").style.visibility = "hidden";
            document.getElementById("pf3next").style.visibility = "hidden";
        } else if (scrollY > 26328 && scrollY <= 27328) {
            progress = 0;
            leftPosition = -300;
            document.getElementById("pf3back").style.visibility = "visible";
            document.getElementById("pf3next").style.visibility = "visible";
        } else if (scrollY > 27328 && scrollY <= 28328) {
            progress = (scrollY - 27328) / (28328 - 27328);
            leftPosition = -300 - progress * 100;
            document.getElementById("pf3back").style.visibility = "hidden";
            document.getElementById("pf3next").style.visibility = "hidden";
            document.getElementById("pf4back").style.visibility = "hidden";
            document.getElementById("pf4next").style.visibility = "hidden";
        } else if (scrollY > 28328 && scrollY <= 29328) {
            progress = 0;
            leftPosition = -400;
            document.getElementById("pf4back").style.visibility = "visible";
            document.getElementById("pf4next").style.visibility = "visible";
        } else if (scrollY > 29328 && scrollY <= 30328) {
            progress = (scrollY - 29328) / (30328 - 29328);
            leftPosition = -400 - progress * 100;
            document.getElementById("pf4back").style.visibility = "hidden";
            document.getElementById("pf4next").style.visibility = "hidden";
            document.getElementById("pf5back").style.visibility = "hidden";
            document.getElementById("pf5next").style.visibility = "hidden";
        } else if (scrollY > 30328 && scrollY <= 31328) {
            progress = 0;
            leftPosition = -500;
            document.getElementById("pf5back").style.visibility = "visible";
            document.getElementById("pf5next").style.visibility = "visible";
        } else if (scrollY > 31328 && scrollY <= 32328) {
            progress = (scrollY - 31328) / (32328 - 31328);
            leftPosition = -500 - progress * 100;
            document.getElementById("pf5back").style.visibility = "hidden";
            document.getElementById("pf5next").style.visibility = "hidden";
            document.getElementById("pf6back").style.visibility = "hidden";
            document.getElementById("pf6next").style.visibility = "hidden";
        } else if (scrollY > 32328 && scrollY <= 33328) {
            progress = 0;
            leftPosition = -600;
            document.getElementById("pf6back").style.visibility = "visible";
            document.getElementById("pf6next").style.visibility = "visible";
        } else {
            progress = 0;
            leftPosition = -600;
            document.getElementById("pf1back").style.visibility = "hidden";
            document.getElementById("pf1next").style.visibility = "hidden";
            document.getElementById("pf2back").style.visibility = "hidden";
            document.getElementById("pf2next").style.visibility = "hidden";
            document.getElementById("pf3back").style.visibility = "hidden";
            document.getElementById("pf3next").style.visibility = "hidden";
            document.getElementById("pf4back").style.visibility = "hidden";
            document.getElementById("pf4next").style.visibility = "hidden";
            document.getElementById("pf5back").style.visibility = "hidden";
            document.getElementById("pf5next").style.visibility = "hidden";
            document.getElementById("pf6back").style.visibility = "hidden";
            document.getElementById("pf6next").style.visibility = "hidden";
        } 
        
        portElement.style.left = `${leftPosition}%`;

    },[scrollY])

    return (
        <div>
            <div className='portfolio'>
                <div ref={hzportRef} className="port_wrap1">
                    <div ref={portRef} className='port_wrap2'>
                        <div className='port'>
                            <h3 className='port_tt'>포트폴리오</h3>
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

