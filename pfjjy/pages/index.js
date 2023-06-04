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
                <img className='port_pc' src="/img/monitor.webp" alt="port_3" />
              </div>
              <div className='port'>
                <img className='port_ph' src="/img/iphone.webp" alt="port_4" />
              </div>
              <div className='port'>
                <img className='port_pc' src="/img/monitor.webp" alt="port_5" />
              </div>
              <div className='port'>
                <img className='port_ph' src="/img/iphone.webp" alt="port_more" />
              </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

