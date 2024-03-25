import React, { useEffect, useState, useRef, createRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';


export default function Gebiscon({onClose, isVisible}) {

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
        <div id='port_pop1' className='port_pop' ref={modalRef} style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <Pop_h title="UI UX mindset" onClose={handleCloseClick} onPpTClick={handlePpTClick} />
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
