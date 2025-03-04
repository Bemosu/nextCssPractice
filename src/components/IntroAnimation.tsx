import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

interface AniProps {
    children: React.ReactNode;
    direction : "left" | "right";
}

const IntroAnimation: React.FC<AniProps> = ({children, direction}) => {
    const aniRef = useRef(null)


useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!aniRef.current) return;

    gsap.fromTo(
      aniRef.current,
      { x: direction === "left" ? "-100%" : "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aniRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return <div ref={aniRef} className="relative">{children}</div>;
};



export default IntroAnimation