import React, { useState, useRef, useEffect } from 'react';

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
