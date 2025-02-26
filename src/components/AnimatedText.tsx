"use client"; 

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedTextProps {
  texts: string[]; 
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts }) => {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      { y:50, opacity:0},
      { y: 0, opacity:1,
        duration:1,
        ease:"power3.out",
        scrollTrigger: {
          trigger : textRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )
  }, []);

  return (
    <div ref={textRef} className="text-4xl font-bold opacity-0">
      {text} 
    </div>
  );
};

export default AnimatedText;