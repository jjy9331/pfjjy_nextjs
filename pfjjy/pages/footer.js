import React, { useState, useRef, useEffect } from 'react'

export default function Footer() {
    const [toggle, setToggle] = useState(false)
    const listRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (listRef.current && !listRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="footer">
            <div className="inner">
                <p>Copyright &copy; my portfolio, all right reserved</p>
                <div id="pf-nav" className="pf-nav">
                    <ul>
                        <li data-descr="gebiscon" >
                            <span className="pf-nav0" data-value="86420"></span>
                        </li>
                        <li data-descr="zerolab" >
                            <span className="pf-nav1" data-value="107499"></span>
                        </li>
                        <li data-descr="mohenic" >
                            <span className="pf-nav2" data-value="137370"></span>
                        </li>
                        <li data-descr="happysocks" >
                            <span className="pf-nav3" data-value="163483"></span>
                        </li>
                        <li data-descr="volvo" >
                            <span className="pf-nav4" data-value="186503"></span>
                        </li>
                        <li data-descr="more" >
                            <span className="pf-nav5" data-value="204717"></span>
                        </li>
                    </ul>
                </div>
                <button className="hfm_btn" onClick={(event) => {
                    event.stopPropagation();
                    setToggle(!toggle);
                }}>
                    <div  className="hfm_wrap">
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
    )
}