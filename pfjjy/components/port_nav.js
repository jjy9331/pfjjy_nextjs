
import React, { useState, useEffect } from 'react';

export default function Port_nav() {

    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (scrollY >= 17668 && scrollY <= 34395) {
                setDisplayNav(true);
                // setDisplayCopyRight(false);
            } else {
                setDisplayNav(false);
                // setDisplayCopyRight(true);
            }

            const sections = [
                { id: 'gebiscon', start: 22338, end: 23278 },
                { id: 'zerolab', start: 24419, end: 25323 },
                { id: 'mohenic', start: 26480, end: 27231 },
                { id: 'happysocks', start: 28462, end: 29209 },
                { id: 'volvo', start: 30343, end: 31291 },
                { id: 'more', start: 32331, end: 33325 }
            ];
            sections.forEach(section => {
                const elem = document.querySelector(`.${section.id} .pf-nav-sb`);
                if (elem) {
                    if (scrollY >= section.start && scrollY < section.end) {
                        elem.classList.add('pf_nav_active');
                    } else {
                        elem.classList.remove('pf_nav_active');
                    }
                }
            });
        };

        const portLinks = document.querySelectorAll('.pf-nav-sb');

        const scrollToSection = (event) => {
            if (displayNav) {
                const targetValue = event.currentTarget.getAttribute('data-value');
                console.log("pf-nav-sb: " + targetValue);
                if (targetValue) {
                    window.scrollTo({
                        top: targetValue,
                        behavior: 'smooth',
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        if (portLinks) {
            portLinks.forEach(link => {
                link.addEventListener('click', scrollToSection);
            });

            return () => {
                window.removeEventListener('scroll', handleScroll);
                portLinks.forEach(link => {
                    link.removeEventListener('click', scrollToSection);
                });
            };
        }
        
    
    }, [displayNav]);


    return (
        <div id="pf-nav" className="pf-nav">
            <ul>
                <li className="gebiscon" data-descr="gebiscon">
                    <span className="pf-nav-sb" data-value="22527"></span>
                </li>
                <li className="zerolab" data-descr="zerolab">
                    <span className="pf-nav-sb" data-value="24594"></span>
                </li>
                <li className="mohenic" data-descr="mohenic">
                    <span className="pf-nav-sb" data-value="26701"></span>
                </li>
                <li className="happysocks" data-descr="happysocks">
                    <span className="pf-nav-sb" data-value="28680"></span>
                </li>
                <li className="volvo" data-descr="volvo">
                    <span className="pf-nav-sb" data-value="30557"></span>
                </li>
                <li className="more" data-descr="more">
                    <span className="pf-nav-sb" data-value="32520"></span>
                </li>
            </ul>
        </div>
    )
}

