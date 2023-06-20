import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";


export default function Item_introduce() {
    const [scrollY, setScrollY] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [display, setDisplay] = useState("none");
    const [imageFrames, setImageFrames] = useState([]);

    const introRef = useRef(null);
    const bkRef = useRef(null);
    const typewriterRef = useRef(null);
    const rnRef = useRef(null)

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

    // intro sequence ani

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


    useEffect(() => {
        const { current: rnElement } = rnRef;
        
        if (scrollY >= 12000 && scrollY <= 12897) {
            const opacity = 1 - ((scrollY - 12449) / (12897 - 12000));
            rnElement.style.opacity = opacity.toString();
        } else if (scrollY > 12897 && scrollY <= 16968) {
            rnElement.style.opacity = "0.5";
        } else if (scrollY > 16968) {
            const opacity = (scrollY - 16968) / (18000 - 16968);
            rnElement.style.opacity = (opacity + 0.5).toString();
        }
    }, [scrollY]);

    const handleImageLoad = (index) => {
        setImageLoaded((prevLoaded) => {
            const loaded = [...prevLoaded];
            loaded[index] = true;
            return loaded;
        });
    };

    useEffect(() => {
        const loadImageFrames = async () => {
            const frames = await Promise.all(
                Array.from({ length: 153 }, async (_, index) => {
                    const response = await fetch(`/introduce_ani/${index.toString().padStart(3, "0")}.png`);
                    const src = URL.createObjectURL(await response.blob());
                    return { src, loaded: true };
                })
            );
            setImageFrames(frames);
        };

        loadImageFrames();
    }, []);

        

    return (
        <div>
            <div className="bkbox" ref={bkRef}></div>
            <div className="intro">
                <h3 ref={introRef} className="intro_tt">
                    자기소개
                </h3>
            </div>
            <div className="intro_sc">
                <div className="intro_wrap" style={{ display }}>
                    <div className="sc_wrap">
                        <div ref={rnRef}>
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
        </div>
    )
}
