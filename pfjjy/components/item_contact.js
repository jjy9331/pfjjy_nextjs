import React, { useRef, useEffect, useState } from "react";

export default function Item_contact() {
    const [scrollY, setScrollY] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [display, setDisplay] = useState("none");
    const [imageFrames1, setImageFrames1] = useState([]);
    const [imageFrames2, setImageFrames2] = useState([]);

    const cont = useRef(null);
    const cont_t1Ref = useRef(null);
    const cont_ani_l = useRef(null);
    const cont_ani_r = useRef(null);
    const cont_tt2 = useRef(null);
    const cont_tt3 = useRef(null);
    

    const [imageLoaded1, setImageLoaded1] = useState(Array(64).fill(true));
    const [imageLoaded2, setImageLoaded2] = useState(Array(64).fill(true));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // contact title ani

    useEffect(() => {
        const { current: cont_t1Element } = cont_t1Ref;

        if (scrollY >= 0 && scrollY <= 34500){
            cont_t1Element.style.display = "none";
        } else if (scrollY > 34500 && scrollY <= 36848) {
            cont_t1Element.style.display = "block";
        } else {
            cont_t1Element.style.display = "none";
        }
    }, [scrollY]);


    useEffect(() => {
        const startFrame = 0;
        const endFrame = 64;
        const startScrollY = 36200;
        const endScrollY = 39828;
        if (scrollY >= startScrollY && scrollY <= endScrollY) {
            const progress = (scrollY - startScrollY) / (endScrollY - startScrollY);
            const frame1 = Math.round(startFrame + progress * (endFrame - startFrame));
            setCurrentFrame(frame1);
            setDisplay("block");
        } else {
            setDisplay("none");
        }
    },[scrollY]) 

    const handleImageLoad1 = (index1) => {
        setImageLoaded1((prevLoaded) => {
            const loaded1 = [...prevLoaded];
            loaded1[index1] = true;
            return loaded1;
        });
    };

    // contact_seq_webworker

    useEffect(() => {
        const loadImageFrames1 = async () => {
            const frames = await Promise.all(
                Array.from({ length: 64 }, async (_, index) => {
                    const response = await fetch(`/contact_left/${index.toString().padStart(3, "0")}.png`);
                    const src = URL.createObjectURL(await response.blob());
                    return { src, loaded: true };
                })
            );
            setImageFrames1(frames);
        };

        loadImageFrames1();
    }, []);

    const handleImageLoad2 = (index2) => {
        setImageLoaded2((prevLoaded) => {
            const loaded2 = [...prevLoaded];
            loaded2[index2] = true;
            return loaded2;
        });
    };

    useEffect(() => {
        const loadImageFrames2 = async () => {
            const frames = await Promise.all(
                Array.from({ length: 64 }, async (_, index) => {
                    const response = await fetch(`/contact_right/${index.toString().padStart(3, "0")}.png`);
                    const src = URL.createObjectURL(await response.blob());
                    return { src, loaded: true };
                })
            );
            setImageFrames2(frames);
        };

        loadImageFrames2();
    }, []);

    useEffect(() => {
        const { current: cont_tt2Element } = cont_tt2;
        
        if (scrollY >= 0 && scrollY <= 39560){
            cont_tt2Element.style.display = "none";
        } else if (scrollY > 39560 && scrollY <= 40560) {
            cont_tt2Element.style.display = "block";
        } else {
            cont_tt2Element.style.display = "none";
        }
    },[scrollY])

    useEffect(() => {
        const { current: cont_tt3Element } = cont_tt3;
        
        if (scrollY >= 0 && scrollY <= 40560){
            cont_tt3Element.style.display = "none";
        } else if (scrollY > 40560 && scrollY <= 45328) {
            cont_tt3Element.style.display = "block";
        } else {
            cont_tt3Element.style.display = "none";
        }
    },[scrollY])

    // // contact background
    // useEffect(() => {
    //     const { current: contElement } = cont;
        
    //     if (scrollY >= 0 && scrollY <= 36732){
    //         contElement.style.background = "white";
    //     } else if (scrollY > 36732 && scrollY <= 39828) {
    //         contElement.style.background = "black";
    //     } else {
    //         contElement.style.background = "white";
    //     }
    // },[scrollY])

    // useEffect(() => {
    //     const { current: cont_aniLElement } = cont_ani_l;
        
    //     if (scrollY >= 0 && scrollY <= 36732){
    //         cont_aniLElement.style.filter = "invert(0)";
    //     } else if (scrollY > 36732 && scrollY <= 39828) {
    //         cont_aniLElement.style.filter = "invert(100)";
    //     } else {
    //         cont_aniLElement.style.filter = "invert(0)";
    //     }
    // },[scrollY])

    //     // contact ani right
    //     useEffect(() => {
    //         const { current: cont_aniRElement } = cont_ani_r;
            
    //         if (scrollY >= 0 && scrollY <= 36732){
    //             cont_aniRElement.style.filter = "invert(0)";
    //         } else if (scrollY > 36732 && scrollY <= 39828) {
    //             cont_aniRElement.style.filter = "invert(100)";
    //         } else {
    //             cont_aniRElement.style.filter = "invert(0)";
    //         }
    //     },[scrollY])

    return (
        <div>
            {/* <div className="contact" ref={cont}> */}
            <div className="contact">
                <div className="cont_wrap1">
                    <div className="cont_wrap2">
                        <div className="cont">
                            <h3 ref={cont_t1Ref} className="cont_tt1">컨텍트</h3>
                        </div>
                    </div>
                </div>
                <div className="cont_sc">
                    <div className="contsc_wrap" style={{ display }}>
                        {/* <div className="cont_wrap_l" ref={cont_ani_l}> */}
                        <div className="cont_wrap_l">
                            {imageFrames1.map((frame1, index1) => {
                                if (!imageLoaded1[index1]) return null;
                                return (
                                    <img
                                        key={index1}
                                        className="contsc_l"
                                        src={frame1.src} 
                                        style={{ display: currentFrame === index1 ? "block" : "none" }}
                                        alt="contact_scroll_ani_left" 
                                        onLoad={() => handleImageLoad1(index1)}
                                    />
                                );
                            })}
                        </div>
                        {/* <div className="cont_wrap_r" ref={cont_ani_r}> */}
                        <div className="cont_wrap_r">
                            {imageFrames2.map((frame2, index2) => {
                                if (!imageLoaded2[index2]) return null;
                                return (
                                    <img
                                        key={index2}
                                        className="contsc_r"
                                        src={frame2.src} 
                                        style={{ display: currentFrame === index2 ? "block" : "none" }}
                                        alt="contact_scroll_ani_right" 
                                        onLoad={() => handleImageLoad2(index2)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="cont_tt2">
                    <h4 ref={cont_tt2}>귀사와 좋은 인연이 되길 기대합니다</h4>
                </div>
                <div className="cont_tt3" ref={cont_tt3}>
                    <div className="cont_tt3_wrap1">
                        <h5 className="cont_tt3_t1">Mail</h5>
                        <p className="cont_tt3_p1">jjy9331@naver.com</p>
                    </div>
                    <div className="cont_tt3_wrap2">
                        <h5 className="cont_tt3_t2">H.P</h5>
                        <p className="cont_tt3_p2">010-4414-3031</p>
                    </div>
                </div>
            </div>
        </div>
    )
}