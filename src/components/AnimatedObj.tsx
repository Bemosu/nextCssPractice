import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

interface OBJprops {
    OBJSrc:string;
    firstY:number;
    secondY:number;
}

const AnimatedObj: React.FC<OBJprops> = ({ OBJSrc,firstY = 50, secondY=0 }) => {
    const svgref = useRef(null)
    useEffect(() =>{
        gsap.registerPlugin()
        if(!svgref) return
        gsap.fromTo (
            svgref.current,
            {y: firstY ,opacity:0 },
            {y: secondY, opacity:1, ease: "power3.out",duration:0.5},
        )
    }, [])
  return (
    <Image ref={svgref} src={OBJSrc} alt="SVGIMage" width={160} height={160} className='.animated-child' ></Image>
  )
}

export default AnimatedObj