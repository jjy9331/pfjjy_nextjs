import  React, {useState,useRef, useEffect} from "react";


export default function Item_home() {

    const [scrollY, setScrollY] = useState(0);
    const titleRef = useRef(null);
    const sec1T_Ref = useRef(null);
    const sec1RN_Ref = useRef(null);
    const sec2T_Ref = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imageFrames, setImageFrames1] = useState([]);
    const [display, setDisplay] = useState("none");

    const [imageLoaded, setImageLoaded1] = useState(Array(32).fill(true));
    
    // Please, scroll down

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    // sec1 animation

    useEffect(() => {
        const { current: titleElement } = titleRef;
    
        const pl_sd = Math.max(1 - scrollY / 1000, 0);

        titleElement.style.display = scrollY <= 1000 ? 'block' : 'none';
        titleElement.style.opacity = pl_sd.toString();

    }, [scrollY]);

    useEffect(() => {
        const { current: sec1T_Element } = sec1T_Ref;
    
        if (scrollY >= 1000 && scrollY <= 3000) {
            const opacity = Math.max((scrollY - 1000) / 2000, 0);
            sec1T_Element.style.opacity = opacity.toString();
            sec1T_Element.style.display = "block";
        } else if (scrollY > 3000 && scrollY <= 5000) {
            const opacity = Math.max(1 - (scrollY - 3000) / 2000, 0);
            sec1T_Element.style.opacity = opacity.toString();
            sec1T_Element.style.display = "block";
        } else {
            sec1T_Element.style.display = "none";
        }
    }, [scrollY]);
    
    useEffect(() => {
        const { current: sec1RN_Element } = sec1RN_Ref;
    
        if (scrollY >= 1000 && scrollY <= 3000) {
            const progress = (scrollY - 1000) / 2000; // Calculate the progress between 0 and 1
            const leftPosition = -35 + progress * 70; // Calculate the left position between -35% and 35%
            sec1RN_Element.style.left = `${leftPosition}%`; 
            sec1RN_Element.style.display = "block";
        } else if (scrollY > 3000 && scrollY <= 5000) {
            const opacity = Math.max(1 - (scrollY - 3000) / 2000, 0);
            sec1RN_Element.style.left = "35%"
            sec1RN_Element.style.opacity = opacity.toString();
            sec1RN_Element.style.display = "block";
        } else {
            sec1RN_Element.style.display = "none";
            sec1RN_Element.style.left = "35%"
        }
    }, [scrollY]);


    useEffect(() => {
        const startFrame = 1;
        const endFrame = 32;
        const startScrollY = 1000;
        const endScrollY = 5000;
        const speed = 4;
    
        // Calculate the progress with speed doubled
        const progress = speed * (scrollY - startScrollY) / (endScrollY - startScrollY);
    
        // Calculate the looped progress from 0 to 1
        const loopedProgress = progress % 1;
    
        // Calculate the frame using the looped progress value
        const frame = Math.abs(Math.floor(startFrame + loopedProgress * (endFrame - startFrame)));
    
        setCurrentFrame(frame);
        setDisplay("block");
    
    }, [scrollY]);

    const handleImageLoad = (index) => {
        setImageLoaded1((prevLoaded) => {
            const loaded1 = [...prevLoaded];
            loaded1[index] = true;
            return loaded1;
        });
    };

    // home_seq_webworker

    // useEffect(() => {
    //     const loadImageFrames1 = async () => {
    //         const frames = await Promise.all(
    //             Array.from({ length: 32 }, async (_, index) => {
    //                 const response = await fetch(`/team_runner_ani/${( index + 1 ).toString()}.svg`);
    //                 const src = URL.createObjectURL(await response.blob());
    //                 return { src, loaded: true };
    //             })
    //         );
    //         setImageFrames1(frames);
    //     };

    //     loadImageFrames1();
    // }, []);

    useEffect(() => {
        // const loadImageFrames1 = async () => {
        //     const frames = Array.from({ length: 32 }, (_, index) => {
        //         const src = `/team_runner_ani/${(index + 1).toString()}.svg`; // 이미 로드한 이미지 URL
        //         return { src, loaded: true };
        //     });
        //     setImageFrames1(frames);
        //     };

        //     loadImageFrames1();
            const loadImageFrames1 = async () => {
                const frames = Array.from({ length: 32 }, (_, index) => {
                    const paddedIndex = (index + 1).toString().padStart(3, '0'); // 3자리수로 만들어주고, 빈 자리는 '0'으로 채움
                    const src = `/team_runner_ani/${paddedIndex}.svg`; // 이미 로드한 이미지 URL
                    return { src, loaded: true };
                });
                setImageFrames1(frames);
            };
            loadImageFrames1();

        }, []);


    // sec2 animation 

    useEffect(() => {
        const { current: sec2T_Element } = sec2T_Ref;

        if (scrollY >= 5000 && scrollY <= 7000) {
            const opacity = Math.max((scrollY - 5000) / 2000, 0);
            sec2T_Element.style.opacity = opacity.toString();
            sec2T_Element.style.display = "block";
        } else if (scrollY > 7000 && scrollY <= 9000) {
            const opacity = Math.max(1 - (scrollY - 7000) / 2000, 0);
            sec2T_Element.style.opacity = opacity.toString();
            sec2T_Element.style.display = "block";
        } else {
            sec2T_Element.style.display = "none";
        }

    },[scrollY])

    return (
        <div>
            <div  className="sd_wrap">
                <h2 ref={titleRef} className="pl_sd">Please, scroll down</h2>
            </div>
            <div className="sec1" >
                {/* <img ref={sec1RN_Ref} className="runners" src="/img/main.gif" alt="teamwork visual icon" /> */}
                <div className="runners_wrap" ref={sec1RN_Ref}>
                    {imageFrames.map((frame, index) => {
                        if (!imageLoaded[index]) return null;
                        return (
                            <img
                                key={index}
                                className="runners"
                                src={frame.src} 
                                style={{ display: currentFrame === index ? "block" : "none" }}
                                alt="runner_scroll_ani" 
                                onLoad={() => handleImageLoad(index)}
                            />
                        );
                    })}
                </div>
                <div className="typo1" ref={sec1T_Ref}>
                    <h3 className="tw_1" >팀이 <span className="kw1">__</span>하면, 프로젝트가 <span className="kw2">__</span>된다</h3>
                    <p className="tw_2">일은 <span className="kw3">__</span> 하는 것이라 배웠습니다</p>
                </div>
            </div>
            <div className="sec2"ref={sec2T_Ref}>
                <div className="sec2_wrap" >
                    <div className="typo2" ref={sec2T_Ref}>
                        <h3>팀이 단결하면, 프로젝트가 완결된다</h3>
                        <p>일은 같이 하는 것이라 배웠습니다</p>
                        <div className="d1"></div>
                        <div className="d2"></div>
                        <div className="d3"></div>
                        <div className="d4"></div>
                        <div className="d5"></div>
                        <div className="d6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
