import React, { useEffect, useState, useRef, createRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';


export default function Zerolab({onClose, isVisible}) {
    const modalRef = useRef();
    const [isScrolling, setIsScrolling] = useState(false);

    // smooth scrollTop solution about scrollsnap
    const handleWheel = (e) => {
        const portPop = modalRef.current;
        if (portPop) {
            if (e.deltaY > 0 || e.deltaY < 0) {
                portPop.style.scrollSnapType = 'y mandatory';
                setIsScrolling(true);
            }
        }
    };

    // pop_h close scrolltop move
    const handleCloseClick = () => {
        if (modalRef.current) {
            const portPop = modalRef.current;
            portPop.style.scrollSnapType = 'none';
    
            portPop.scrollTo({
                top: 0,
                behavior: 'instant'
            });

            onClose(); // 팝업창 닫기 동작 수행
            setIsScrolling(false);
            
        }
    };

    useEffect(() => {
        const portPop = modalRef.current;
        if (portPop) {
            portPop.addEventListener('wheel', handleWheel);

            return () => {
                if (portPop) {
                    portPop.removeEventListener('wheel', handleWheel);
                }
            };
        }
    }, []);

    const handlePpTClick = (event) => {
        event.preventDefault();

        // 모달 팝업 요소의 스크롤 위치를 부드럽게 맨 위로 설정
        if (modalRef.current) {
            const portPop = modalRef.current;
            portPop.style.scrollSnapType = 'none';

            scroll.scrollToTop({
                containerId: modalRef.current.id,
                duration: 1000,  
                delay: 100, 
                smooth: "easeInOutQuart",  
            });
        }
    };

    const handleScroll = () => {
        const scrollTop = modalRef.current.scrollTop + 30;
        // console.log(`ScrollTop: ${scrollTop}`);
    
    };

    useEffect(() => {
        modalRef.current.addEventListener('scroll', handleScroll);
        return () => {
            if (modalRef.current) {
                modalRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div id='port_pop2' className='port_pop' ref={modalRef} style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <Pop_h title="zerolab design renewal" onClose={handleCloseClick} onPpTClick={handlePpTClick} />
            <div className='sc_al'>
                <img className="sc_w" src="/img/port_1/screen_size_control.svg" alt="interactive_screen_alert"/>
            </div>
            <div className='sheet pf2_1'>
                <img src="img/pf2_eye.webp" alt="pf2_1_eye" className="pf2_1_eye" />
                <img src="/img/port_2/pop1.webp" alt="d1" className="pf2_1" />
            </div>
            <div className='sheet pf2_2'>
                <img src="/img/port_2/pop2_b_01.webp" alt="d2_b" className="pf2_2_l" />
                <img src="/img/port_2/pop2_b_01.webp" alt="d2_b" className="pf2_2_r" />
                <img src="/img/port_2/pop2_1.webp" alt="d2_left" className="pf2_2_img" />
                <img src="/img/port_2/pop2_2.webp" alt="d2_right" className="pf2_2_img" />
            </div>
            <div className='sheet pf2_3'>
                <img src="/img/port_2/pop3_l.webp" alt="d3" className="pf2_3_d3_l" />
                <img src="/img/port_2/pop3_r.webp" alt="d3" className="pf2_3_d3_r" />
            </div>
            <div className='sheet pf2_4'>
                <img src="/img/port_2/pop4.webp" alt="d4" className="d4"/>
            </div>
            <div className='sheet pf2_5'>
                <img src="/img/port_2/pop5_l.webp" alt="d5" className="pf2_5_d5_l" />
                <img src="/img/port_2/pop5_r6.webp" alt="d5" className="pf2_5_d5_r" />
            </div>
            <div className='sheet pf2_6'>
                <img src="/img/port_2/pop6.webp" alt="d6"/>
            </div>
            <Pop_f />
        </div>
    )
}