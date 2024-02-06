import React, { useEffect, useState, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';
import Sctracker from '../components/sctracker.js'

export default function Gebiscon({onClose}) {

    const modalRef = useRef();

    const handlePpTClick = (event) => {
        event.preventDefault();
        // 모달 팝업 요소의 스크롤 위치를 부드럽게 맨 위로 설정
        if (modalRef.current) {
            scroll.scrollToTop({
                containerId: modalRef.current.id,
                duration: 500,  // 스크롤 애니메이션 시간(ms)
                smooth: "easeInOutQuart",  // 애니메이션 종류
            });
        }
    };

    return (
        <div id='port_pop' className='port_pop' ref={modalRef} >
            <Pop_h title="UI UX mindset" onClose={onClose} onPpTClick={handlePpTClick} />
            <div className='sc_al'>
                <img className="sc_w" src="/img/port_1/screen_size_control.svg" alt="interactive_screen_alert" loading="lazy"/>
            </div>
            <div className='sheet s1'>
                <div className="s1_left"></div>
                <div className="s1_right"></div>
                <img className='s1_img' src="/img/port_1/sec1.webp" alt="sec1" />
            </div>
            <div className='sheet s2'>
                <img src="/img/port_1/sec2.webp" alt="sec2" />
            </div>
            <div className='sheet s3'>
                <img src="/img/port_1/sec3.webp" alt="sec3" />
            </div>
            <div className='sheet s4'>
                <img src="/img/port_1/sec4.webp" alt="sec4" />
            </div>
            <div className='sheet s5'>
                <img src="/img/port_1/sec5.webp" alt="sec5" />
            </div>
            <div className='sheet s6'>
                <div className="s6_left"></div>
                <div className="s6_right"></div>
                <img className='s6_img' src="/img/port_1/sec6.gif" alt="sec6" />
            </div>
            <Pop_f/>
        </div>
    )
}
