import React, { useEffect, useState, useRef, createRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';


export default function Gebiscon({onClose, isVisible}) {

    const modalRef = useRef(); 
    const [showCopyright, setShowCopyright] = useState(true); 
    const [isScrolling, setIsScrolling] = useState(false);
    const [sheetCount, setSheetCount] = useState(0);

    const sheetRefs = useRef([]);
    const spanRefs = useRef([]); 

    sheetRefs.current = Array(sheetCount).fill().map((_, i) => sheetRefs.current[i] || createRef());
    spanRefs.current = Array(sheetCount).fill().map((_, i) => spanRefs.current[i] || createRef());
    
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
            setShowCopyright(true);
            setIsScrolling(false);
            
        }
    };

    useEffect(() => {
        const portPop = modalRef.current;
        if (portPop) {
            portPop.addEventListener('wheel', handleWheel);

            // sheet 갯수를 세는 코드
            const sheetElements = document.getElementsByClassName('sheet');
            setSheetCount(sheetElements.length);

            console.log("sheetCount: "+ sheetCount); 

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

        setShowCopyright(true); 
    };


    const handleSpanClick = index => {
        const sheetRef = sheetRefs.current[index];
        if (sheetRef.current) {
            const portPop = modalRef.current;
            portPop.style.scrollSnapType = 'none';

            // portPop.scrollTop = sheetRef.current.offsetTop;

            scroll.scrollTo(sheetRef.current.offsetTop - 42, {
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
    
        sheetRefs.current.forEach((ref, i) => {
            const top = ref.current.offsetTop - 36;
            const bottom = top + ref.current.offsetHeight - 36;
            // console.log(`Sheet ${i}: ${top} ~ ${bottom}`);
    
            // console.log(spanRefs.current[i].current)

            if (spanRefs.current[i].current) {  
                if (scrollTop >= top && scrollTop < bottom) {
                    spanRefs.current[i].current.classList.add('pf_nav_active');
                    // console.log(`Sheet ${i} is active`);
                    
                } else {
                    spanRefs.current[i].current.classList.remove('pf_nav_active');
                }
            }
        });
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
        <div id='port_pop' className='port_pop' ref={modalRef} style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <Pop_h title="UI UX mindset" onClose={handleCloseClick} onPpTClick={handlePpTClick} />
            <div className='sc_al'>
                <img className="sc_w" src="/img/port_1/screen_size_control.svg" alt="interactive_screen_alert" loading="lazy"/>
            </div>
            <div className='sheet s1' ref={sheetRefs.current[0]}>
                <div className="s1_left"></div>
                <div className="s1_right"></div>
                <img className='s1_img' src="/img/port_1/sec1.webp" alt="sec1" />
            </div>
            <div className='sheet s2' ref={sheetRefs.current[1]}>
                <img src="/img/port_1/sec2.webp" alt="sec2" />
            </div>
            <div className='sheet s3' ref={sheetRefs.current[2]}>
                <img src="/img/port_1/sec3.webp" alt="sec3" />
            </div>
            <div className='sheet s4' ref={sheetRefs.current[3]}>
                <img src="/img/port_1/sec4.webp" alt="sec4" />
            </div>
            <div className='sheet s5' ref={sheetRefs.current[4]}>
                <img src="/img/port_1/sec5.webp" alt="sec5" />
            </div>
            <div className='sheet s6' ref={sheetRefs.current[5]}>
                <div className="s6_left"></div>
                <div className="s6_right"></div>
                <img className='s6_img' src="/img/port_1/sec6.gif" alt="sec6" />
            </div>
            <Pop_f 
                copyrightDisplay={showCopyright ? "block" : "none"}
                isScrolling={isScrolling} 
                sheetCount={sheetCount}
                onSpanClick={handleSpanClick}
                spanRefs={spanRefs} 
            />
        </div>
    )
}
