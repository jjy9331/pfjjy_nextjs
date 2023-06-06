import  React, {useRef, useEffect, useState} from "react";


export default function Item_introduce() {

    const [scrollY, setScrollY] = useState(0);
    const introRef = useRef(null);
    const bkRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    },[])

    // bkbox moving

    useEffect(() => {
        const { current: bkElement } = bkRef;
        if (scrollY >= 8000 && scrollY <= 11000){
            const progress = (scrollY - 8000) / 3000; // Calculate the progress between 0 and 1
            const topPosition = 100 - progress * 100; // Calculate the left position between -35% and 35%
            bkElement.style.top = `${topPosition}%`; 
            bkElement.style.display = "block";
        } else if (scrollY > 11000 && scrollY <= 18000) {
            bkElement.style.top = "0%"
            bkElement.style.display = "block";
        } else {
            bkElement.style.display = "none";
        }

    },[scrollY])


    // introduce title

    useEffect(() => {
        const { current: introElement } = introRef;

        if (scrollY > 11000 && scrollY <= 12000) {
            introElement.style.display = "block";
        } else {
            introElement.style.display = "none";
        }

    },[scrollY])

    // introduce  sequence animation


    const [currentFrame, setCurrentFrame] = useState(0);
    const [display, setDisplay] = useState('none');
    

    useEffect(() => {
        const startFrame = 0; // 시작 프레임
        const endFrame = 93; // 종료 프레임
        const startScrollY = 12000; // 시작 스크롤 Y 값
        const endScrollY = 18000; // 종료 스크롤 Y 값
    
        // scrollY 값이 범위에 포함되면서 프레임이 증가하도록 처리
        if (scrollY >= startScrollY && scrollY <= endScrollY) {
            const progress = (scrollY - startScrollY) / (endScrollY - startScrollY);
            const frame = Math.round(startFrame + progress * (endFrame - startFrame));
            setCurrentFrame(frame);
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }, [scrollY]);
    

    return (
        <div>
            <div className="bkbox" ref={bkRef}></div>
            <div className="intro">
                <h3 ref={introRef} className="intro_tt">자기소개</h3>
            </div>
            <div className="intro_sc" >
                <div className="intro_wrap" style={{ display }}>
                    <div className="sc_wrap">
                        {/* <canvas ref={canvasRef} className="intro_rn" /> */}
                        {currentFrame >= 0 && currentFrame <= 93 && (
                            <img className="intro_rn" src={`/introduce_ani/${currentFrame.toString().padStart(3, '0')}.png`} style={{ display }} alt="Animation Frame" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
