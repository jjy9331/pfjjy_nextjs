import React, { useState, useRef, useEffect } from 'react';

import Port_nav from '@/components/port_nav.js';

export default function Footer() {
    const [toggle, setToggle] = useState(false);
    const [displayNav, setDisplayNav] = useState(false);
    const [displayCopyRight, setDisplayCopyRight] = useState(true);
    const listRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Apply styles to hfm_list and its children
            const hfmList = document.querySelector('.hfm_list');
            const hfmItems = document.querySelectorAll('.hfm_list li');

            // Check if scrollY is within the specified range
            if (hfmList && hfmItems) {
                hfmItems.forEach((item, index) => {
                    const startY = 8339 + 81 * (3 - index); // Calculate startY for each li item
                    const endY = 16742;
                    
                    if (scrollY >= startY && scrollY <= endY) {
                        item.style.color = toggle ? 'white' : 'black'; // Toggle color based on toggle state
                    } else {
                        item.style.color = 'black';
                    }
                });
            }

            if (scrollY >= 17668 && scrollY <= 34395) {
                setDisplayNav(true);
                setDisplayCopyRight(false);
            } else {
                setDisplayNav(false);
                setDisplayCopyRight(true);
            }
                    
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

    }, [displayNav, toggle]);
    

    const handleClickOutside = (event) => {
        if (listRef.current && !listRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="footer">
            <div className="inner">
                {displayCopyRight && (
                    <p style={{ display: displayCopyRight ? 'block' : 'none' }}>
                        Copyright &copy; my portfolio, all right reserved
                    </p>
                )}
                {displayNav && (
                    <Port_nav/>
                )}
                <button className="hfm_btn" onClick={(event) => {
                    event.stopPropagation();
                    setToggle(!toggle);
                }}>
                    <div className="hfm_wrap">
                        ●&nbsp;●&nbsp;●
                    </div>
                </button>
                {toggle && (
                    <ul className="hfm_list" ref={listRef}>
                        <li className="sound_toggle">Sound on</li>
                        <li className="screen_toggle">Full screen off</li>
                        <li className="menu_hide">Menu bar hide</li>
                        <li className="darkmode">Dark mode off</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
