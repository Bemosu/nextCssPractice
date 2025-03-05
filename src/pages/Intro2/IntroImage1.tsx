import AnimatedObj from '@/components/AnimatedObj'
import ImageCard from '@/components/ImageCard'
import NameBox from '@/components/NameBox'
import TriangleCircle from '@/components/TriangleCircle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'

const IntroImage1 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [animationChildren, setAnimationChildren] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if(leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        {x:"-100%", opacity:0},
        {x:"0%", 
          duration: 1, 
          opacity:1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start : "top 80%",
            end : "top 100%",
            scrub : 2,
            toggleActions : "play reverse play reverse",
          },
          onComplete: () =>{
            setAnimationChildren(true)
            console.log('콘슬 오나료', animationChildren )
          }
        },
      );
    }
    if(rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        {x:"100%", opacity:0},
        {x:"0%", duration: 1, opacity:1, ease: "power3.out",
          scrollTrigger:{
            trigger: rightRef.current,
            start : "top 80%",
            end : "top 40%",
            scrub:2,
            toggleActions: "play reverse play reverse",
          }
        },
      )
    }
    },  [])

  return (
    <div className='flex flex-row justify-center gap-[30%] z-20'>
    <div ref={leftRef} className='z-20 mt-[60%]'>
      <ImageCard src="/assets/svgBackGround.jpg" alt="backgrounImage"  >
      {animationChildren && <div className='felx'>
         <AnimatedObj firstY={70} secondY={35} OBJSrc="/assets/letterEnvelope.svg"/>
          <AnimatedObj firstY={50} secondY= {35} OBJSrc="/assets/calender.png"/>
      </div>
}
      </ImageCard>
      <div className="relative z-30 mt-4">
        <NameBox name="app" />
      </div>
    </div>
    <div ref={rightRef} className='z-20 mt-[30%]'>
        <TriangleCircle/>
    </div>
  </div>
  )
}

export default IntroImage1