import  React, {useState,useRef, useEffect} from "react";


export default function Item_home() {

    const [scrollY, setScrollY] = useState(0);
    const titleRef = useRef(null);
    const sec1T_Ref = useRef(null);
    const sec1RN_Ref = useRef(null);
    const sec2T_Ref = useRef(null);
    
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
            const marginLeft = `${-200 + ((scrollY - 1000) / 2000) * 200}%`;
            sec1RN_Element.style.marginLeft = marginLeft;
            sec1RN_Element.style.display = "block";
        } else if (scrollY > 3000 && scrollY <= 5000) {
            const opacity = Math.max(1 - (scrollY - 3000) / 2000, 0);
            sec1RN_Element.style.opacity = opacity.toString();
            sec1RN_Element.style.display = "block";
        } else {
            sec1RN_Element.style.display = "none";
        }
    }, [scrollY]);


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
                <img ref={sec1RN_Ref} className="runners" src="/img/main.gif" alt="teamwork visual icon" />
                <div className="typo1" ref={sec1T_Ref}>
                    <h3 className="tw_1" >팀이 <span className="kw1">__</span>하면, 프로젝트가 <span className="kw2">__</span>된다</h3>
                    <p className="tw_2">일은 <span className="kw3">__</span> 하는 것이라 배웠습니다</p>
                </div>
            </div>
            <div className="sec2">
                <div className="sec2_wrap">
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
