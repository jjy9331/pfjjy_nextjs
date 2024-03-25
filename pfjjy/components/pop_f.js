import React, { useRef, useEffect, useState } from "react";


export default function Pop_f({ }) {

    return (
        <div className="pop_f">
            <div className="pop_f_inner">
                    <p 
                        className="copyright" 
                    >
                        Copyright &copy; my portfolio, all right reserved
                    </p>
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