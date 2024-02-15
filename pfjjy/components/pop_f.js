import React, { useRef, useEffect, useState } from "react";


export default function Pop_f({ copyrightDisplay, isScrolling, sheetCount,  onSpanClick, spanRefs }) {

    return (
        <div className="pop_f">
            <div className="pop_f_inner">
                    <p 
                        className="copyright" 
                        style={{display: isScrolling ? 'none' : copyrightDisplay}}
                    >
                        Copyright &copy; my portfolio, all right reserved
                    </p>
                    <div className="pf-nav" style={{ display: isScrolling ? 'block' : 'none' }}>
                        <ul className="pf-nav-wrap">
                            {Array.from({ length: sheetCount }, (_, i) => (
                                <li key={i} onClick={() => onSpanClick(i)}>
                                    <span
                                        key={i} 
                                        className='pp-nav-sb' 
                                        ref={spanRefs.current[i]}
                                        
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                <div className="pop_fnc">
                    <a href="javascript:void(0);" className="pop_darkmode">
                        <img src="img/contrast.svg" alt="contrast" title="Darkmode on/off" loading="lazy" />
                    </a>
                    <a href="javascript:void(0);">
                        <img src="img/volume_mute.svg" class="pop_sound_toggle" alt="volume_mute" title="Sound on/off" loading="lazy" />
                    </a>
                    <a href="javascript:void(0);">
                        <img src="img/fullscreen.svg" className="pop_fullscreen_toggle" alt="fullscreen" title="To fullscreen" loading="lazy" />
                    </a>
                </div>
            </div>
        </div>
    );
}