import CustomCursor from '../components/cursor.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Item_home from '../components/item_home.js'
import Sctracker from '../components/sctracker.js'
import Item_introduce from '../components/item_introduce.js'
import  React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {

  const triggerRef = useRef(null);
  const portRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const pin = gsap.fromTo(portRef.current,{
      translateX: 0
    },{
      translateX:"-850vw",
      ease:"none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6, 
        pin: true,
        markers:true,
      }
    })

    
    // const pf_more = gsap.timeline({scrollTrigger:{trigger:".pf_more",  start:"top 30%", end:"top 10%", scrub: true, markers:true, pin:true, translateX:"750vw"}})

    // pf_more.from(".pf_more",{opacity:1,translateX:"750vw" })
    // pf_more.to(".pf_more",{opacity:1, y:100})
    // pf_more.to(".pf_more",{opacity:0})

    return() => {
      pin.kill()
    }

  },[])

  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });

  return (
    <div>
      <Sctracker />
      <CustomCursor />
      <Header />
      <Item_home />
      <Item_introduce />
      {/* <div className="lottie_intro">
          <lottie-interactive lottie-interactive path="/data/introduce_ani.json" interaction="hover"></lottie-interactive>
      </div> */}
      <div className='portfolio' ref={triggerRef}>
          <div className='port_wrap' ref={portRef}>
              <div className='port_start'>
              </div>
              <div className='port'>
                <h3 className='port_tt'>포트폴리오</h3>
              </div>
              <div className='port'>
                <img className='port_1' src="/img/port1.png" alt="UI,UX_mindset" />
              </div>
              <div className='port'>
                <img className='port_pc' src="/img/monitor.webp" alt="zerolab" />
                <div className='port_2'>
                    <h3>zero<span>lab</span></h3>
                    <p>리디자인</p>
                    <div className="eye_hide1"></div>
                    <div className="eye_hide2"></div>
                    <img src="/img/pf2_eye.webp" alt="mouseover_ani_source" className="pf2_eye" loading="lazy" />
                </div>
              </div>
              <div className='port'>
                <div className='p_wrap'>
                  <img className='port_pc' src="/img/monitor.webp" alt="mohenic" />
                  <div className="lottie_ani">
                    <lottie-interactive  lottie-interactive path="/data/mohenic_ani.json" interaction="morph"></lottie-interactive>
                  </div>
                </div>
              </div>
              <div className='port'>
                <img className='port_ph' src="/img/iphone.webp" alt="happysocks" />
                <div className='port_4'>
                    <img src="/img/hss_log.svg" alt="happy_socks_logo" class="hss_logo" loading="lazy" />
                    <p class="pf4_subp">모바일 리디자인</p>
                    <div class="ypaint_hide1"></div>
                    <div class="ypaint_hide2"></div>
                    <div class="ypaint_hide3"></div>
                    <div class="pf4bg"></div>
                    <img src="/img/ypaint.webp" alt="mouseover_pf4_ypaint_ani_source" class="pf4_ypaint1" loading="lazy" />
                    <img src="/img/ypaint.webp" alt="mouseover_pf4_ypaint_ani_source" class="pf4_ypaint2" loading="lazy" />
                    <svg className="smile"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.62 31.62" preserveAspectRatio="none">
                            <circle className="cls-1" cx="15.81" cy="15.81" r="15.81"/>
                            <g id="smile2">
                                <path className="cls-3" d="M1216.67,463.09h0a.49.49,0,0,0-.58.36,1.49,1.49,0,0,1-2.9,0,.64.64,0,0,0,0-.07.48.48,0,1,0-.92.3,2.46,2.46,0,0,0,1.89,1.81,9.15,9.15,0,0,1-18.29,0,2.45,2.45,0,0,0,1.89-1.8h0a.47.47,0,0,0-.35-.58h0a.5.5,0,0,0-.59.36,1.49,1.49,0,0,1-2.9,0s0-.05,0-.07a.49.49,0,0,0-.61-.31.49.49,0,0,0-.31.61,2.44,2.44,0,0,0,1.91,1.81,10.12,10.12,0,0,0,20.23,0,2.47,2.47,0,0,0,1.92-1.81h0A.49.49,0,0,0,1216.67,463.09Z" transform="translate(-1189.16 -449.4)"/>
                            </g>
                    </svg>
                </div>
              </div>
              <div className='port'>
                <div className='p_wrap'>
                  <img className='port_pc' src="/img/monitor.webp" alt="volvo" />
                  <div className='lottie_ani'>
                    <lottie-interactive  lottie-interactive path="/data/volvo_ani.json" interaction="morph"></lottie-interactive>
                  </div>
                </div>
              </div>
              <div className='port'>
                <div className='pf_more'>
                  <img className='port_ph' src="/img/iphone.webp" alt="port_more" />
                </div>
                <div className='port_more'>
                    <img src="/img/more_bg.svg" className="pf_more_img" alt="pf_more" loading="lazy"/>
                    <img src="/img/hover_runner.gif" className="hover_runner" alt="hover_runner" loading="lazy"/>
                    <div className="pfmore_bg"></div>
                </div>
              </div>
          </div>
          <div>
            <div className='contact'></div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

