import React, { useRef, useEffect, useState } from "react";


export default function Item_introduce() {
    const [scrollY, setScrollY] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [display, setDisplay] = useState("none");
    const [imageFrames, setImageFrames] = useState([]);

    const introRef = useRef(null);
    const bkRef = useRef(null); 
    const rnRef = useRef(null);
    const sub1Ref = useRef(null);
    const sub2Ref = useRef(null);

    const [imageLoaded, setImageLoaded] = useState(Array(153).fill(true));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // bkbox ani

    useEffect(() => {
        const { current: bkElement } = bkRef;

        if (scrollY >= 0 && scrollY <= 8000){
            bkElement.style.display = "none";
        } else if (scrollY > 8000 && scrollY <= 11000) {
            const progress = (scrollY - 8000) / 3000;
            const topPosition = 100 - progress * 100;
            bkElement.style.top = `${topPosition}%`;
            bkElement.style.display = "block";
        } else if (scrollY > 11000 && scrollY <= 18000) {
            bkElement.style.top = "0%";
            bkElement.style.display = "block";
        } else {
            bkElement.style.display = "none";
        }
    }, [scrollY]);

    // intro title ani

    useEffect(() => {
        const { current: introElement } = introRef;

        if (scrollY >= 0 && scrollY <= 11000){
            introElement.style.display = "none";
        } else if (scrollY > 11000 && scrollY <= 12000) {
            introElement.style.display = "block";
        } else {
            introElement.style.display = "none";
        }
    }, [scrollY]);

    // intro sequence ani_display_section

    useEffect(() => {
        
    
        const startFrame = 0;
        const endFrame = 153;
        const startScrollY = 12000;
        const endScrollY = 18000;
    
        if (scrollY >= startScrollY && scrollY <= endScrollY) {
            const progress = (scrollY - startScrollY) / (endScrollY - startScrollY);
            const frame = Math.round(startFrame + progress * (endFrame - startFrame));
            setCurrentFrame(frame);
        
            setDisplay("block");
        } else {
            setDisplay("none");
        }
    }, [scrollY]);

    // introduce_seq_opacity

    useEffect(() => {
        const { current: rnElement } = rnRef;
        
        if (scrollY > 0 && scrollY <= 12885){
            rnElement.style.opacity = "1";
        } else if (scrollY > 12885 && scrollY <= 13078) {
            const opacity = 1 - ((scrollY - 12449) / (13078 - 12000));
            rnElement.style.opacity = opacity.toString();
        } else if (scrollY > 13078 && scrollY <= 16744) {
            rnElement.style.opacity = "0.5";
        } else if (scrollY > 16744) {
            const opacity = (scrollY - 16744) / (16824 - 16744);
            rnElement.style.opacity = (opacity + 0.5).toString();
        }
    }, [scrollY]);

    // intro_seq_ani_moving_position

    useEffect(() => {
        const { current: rnElement } = rnRef;

        if (scrollY >= 12000 && scrollY <= 13122){
            const progress = (scrollY - 12000) / 1122;
            const rightPosition = -13 + progress * 57 ;
            rnElement.style.right = `${rightPosition}%`; 
        } else if ( scrollY > 13122 && scrollY <= 13947) {
            rnElement.style.right = "44%"; 
        } else if ( scrollY > 13947 && scrollY <= 14440 ) {
            const progress = (scrollY - 13947) / 493;
            const centerPosition = 44 - progress * 4 ;
            rnElement.style.right = `${centerPosition}%`; 
        }  else if ( scrollY > 14440 && scrollY <= 16640 ) {
            rnElement.style.right = "40%"; 
        }  else if ( scrollY > 16640 && scrollY <= 18000 ) {
            const progress = (scrollY - 16640) / 1360;
            const Run = 40 + progress * 80 ;
            rnElement.style.right = `${Run}%`; 
        }
    }, [scrollY]);

    // sub1 

    useEffect(()=>{
        const { current: sub1Element } = sub1Ref;

        if( scrollY >= 0 && scrollY <= 13100){
            sub1Element.style.display = "none";
        } else if ( scrollY >= 13101 && scrollY <= 14040 ){
            sub1Element.style.display = "block";
        } else {
            sub1Element.style.display = "none";
        }

    },[scrollY])

    // sub2 

    useEffect(()=>{
        const { current: sub2Element } = sub2Ref;

        if( scrollY >= 0 && scrollY <= 14484){
            sub2Element.style.display = "none";
        } else if ( scrollY > 14484 && scrollY <= 16684 ){
            sub2Element.style.display = "block";
        } else {
            sub2Element.style.display = "none";
        }

    },[scrollY])

    const handleImageLoad = (index) => {
        setImageLoaded((prevLoaded) => {
            const loaded = [...prevLoaded];
            loaded[index] = true;
            return loaded;
        });
    };

    // intro_seq_webworker

    useEffect(() => {
        const loadImageFrames = async () => {
            const frames = Array.from({ length: 153 }, (_, index) => {
                const src = `/introduce_ani/${index.toString().padStart(3, "0")}.png`; // 이미 로드한 이미지 URL
                return { src, loaded: true };
            });
            setImageFrames(frames);
        };
        loadImageFrames();
    }, []);

        

    return (
        <div>
            <div className="bkbox" ref={bkRef}></div>
            <div className="intro">
                <h3 ref={introRef} className="intro_tt">
                    INTRODUCE
                </h3>
            </div>
            <div className="intro_sc">
                <div className="intro_wrap" style={{ display }}>
                    <div className="sc_wrap">
                        <div className="intro_rnn_wrap" ref={rnRef}>
                            {imageFrames.map((frame, index) => {
                                if (!imageLoaded[index]) return null;
                                return (
                                    <img
                                        key={index}
                                        className="intro_rn"
                                        src={frame.src}
                                        style={{ display: currentFrame === index ? "block" : "none" }}
                                        alt="Animation Frame"
                                        onLoad={() => handleImageLoad(index)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div  className="sub1_wrap">
                <h4 ref={sub1Ref} className="intro_sub1">안녕하세요</h4>
            </div>
            <div className="sub2_wrap">
                <h4 ref={sub2Ref} className="intro_sub2">당사와 달릴 준비가 된 정지용입니다</h4>
            </div>
        </div>
    )
}
