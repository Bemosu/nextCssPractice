"use client"; 

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedTextProps {
  texts: {id: string, text:string}[]; 
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts }) => {
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : textRefs.current[0],
        start : "top 100%",
        toggleActions : "play none none none"
      },
    });

    texts.forEach((_,index) => {
      tl.fromTo(
        textRefs.current[index],
        {y:50, opacity:0},
        {y:0, opacity:1, duration:1 , ease:"power3.out"},
        index === 0 ? 0 : "+=0.5"
      );
    });
  }, [texts]);


  return (
    <div  className="text-center">
      {texts.map((item, index)=>(
        <p 
          key={item.id}
          ref={(el)=> {
            if(el) textRefs.current[index] = el;
          }}
          className="text-4xl font-bold opacity-0"
          >
            {item.text}
          </p>
      ))}
    </div>
  );
};

export default AnimatedText;