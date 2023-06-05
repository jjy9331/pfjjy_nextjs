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
                <img className='port_ph' src="/img/iphone.webp" alt="port_4" />
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

