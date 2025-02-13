'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scrollbox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 100 },
        {
          keyframes: [
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", rotate:45 },
            { y: -120, ease: "bounce.out", duration: 1, rotate:60 },
            { y: -60, ease: "bounce.out", duration: 1, rotate:75 },
            { y: -100, ease: "bounce.out", duration: 1, rotate:90 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:115 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:130 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:180 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:210 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:240 },
            { y: -30, ease: "bounce.out", duration: 1, rotate:280 },


          ],
          
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: true, // 스크롤에 따라 부드럽게 움직임
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="h-[200vh] flex items-center justify-center">
      <div ref={boxRef} className="p-10 bg-blue-500 text-white text-2xl rounded-md">
        Scroll을 내리면 나타나는 박스!
      </div>
    </div>
  );
};

export default Scrollbox;