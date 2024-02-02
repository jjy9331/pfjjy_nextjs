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
            <div className='pop_test'>test1</div>
            <div className='pop_test'>test2</div>
            <div className='pop_test'>test3</div>
            <div className='pop_test'>test4</div>
            <div className='pop_test'>test5</div>
            <div className='pop_test'>test6</div>
            <Pop_f/>
        </div>
    )
}
