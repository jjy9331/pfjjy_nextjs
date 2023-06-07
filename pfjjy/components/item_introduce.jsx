import React, { useRef, useEffect, useState } from "react";

export default function Item_introduce() {
    const [scrollY, setScrollY] = useState(0);
    const introRef = useRef(null);
    const bkRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [display, setDisplay] = useState("none");
    const [imageFrames, setImageFrames] = useState([]);

    const [imageLoaded, setImageLoaded] = useState(Array(94).fill(true));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const { current: bkElement } = bkRef;

        if (scrollY >= 8000 && scrollY <= 11000) {
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

    useEffect(() => {
        const { current: introElement } = introRef;

        if (scrollY > 11000 && scrollY <= 12000) {
            introElement.style.display = "block";
        } else {
            introElement.style.display = "none";
        }
    }, [scrollY]);

    useEffect(() => {
        const startFrame = 0;
        const endFrame = 93;
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
    }, [scrollY, imageLoaded]);

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
                Array.from({ length: 94 }, async (_, index) => {
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
    )
}
