import  React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Item_home() {
    const  sectionRef = useRef(null);
    const  plsdRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {


        gsap.to(".pl_sd",{
            opacity:0,
            duration:2,
            scrollTrigger: {
                trigger: ".pl_sd",
                // markers: true,
                start:"top 25%",
                end:"top 10%",
                scrub: true,
            }
        })

        const sc1 = gsap.timeline({
            scrollTrigger: {
                trigger:".sec1",
                markers:true,
                start:"top 80%",
                end:"top 10%",
                scrub: true,

            }
        })

        sc1.from(".runners",{
            opacity:0,
            x:-300
        })
        sc1.from(".sec1",{
            opacity:0,
            // y:"50%"
        })

        sc1.to(".sec1",{
            opacity:1,
            // y:"50%"
        })

        sc1.to(".runners",{
            opacity:1,
            x:0
        })

        sc1.to(".sec1",{
            opacity:0,
            // y:"50%"
        })




        return () => {
            // rnn.scrollTrigger.kill()
        }
    },[])

    return (
        <div>
            <div className="sd_wrap">
                <h2 className="pl_sd" ref={plsdRef}>Please, scroll down</h2>
            </div>
            <div className="sec1">
                <img className="runners" src="/img/main.gif" alt="teamwork visual icon" />
                <div className="typo1">
                    <h3 className="tw_1" >팀이 <span className="kw1">__</span>하면, 프로젝트가 <span className="kw2">__</span>된다</h3>
                    <p className="tw_2">일은 <span className="kw3">__</span> 하는 것이라 배웠습니다</p>
                </div>
            </div>
            <div className="sec2">
                <div className="typo2">
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
    )
}
