import AnimatedObj from '@/components/AnimatedObj'
import ImageCard from '@/components/ImageCard'
import NameBox from '@/components/NameBox'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const IntroImage3 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if(leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        {x:"-100%", opacity:0},
        {x:"0%", duration: 1, opacity:1, ease: "power3.out",
          scrollTrigger:{
            trigger: leftRef.current,
            start : "top 90%",
            end : "top 30%",
            scrub:2,
            toggleActions: "play reverse play reverse",
          }
        },
      )
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
    <div ref={leftRef}className='z-20 mt-[60%]'>
      <ImageCard src='/assets/iphonePv.webm' type="video"></ImageCard>
      <div className="relative z-30 mt-4">
        <NameBox name="app" />
      </div>
    </div>
    <div ref={rightRef} className='z-20 mt-[30%]'>
      <ImageCard src="/assets/svgBackGround.jpg" alt="backgrounImage">
        <AnimatedObj firstY={50} secondY={0} OBJSrc='/assets/letterEnvelope.svg'></AnimatedObj>
      </ImageCard>
      <div className="relative z-30 mt-4">
        <NameBox name="app" />
      </div>
    </div>
  </div>
  )
}

export default IntroImage3