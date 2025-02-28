import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

interface OBJprops {
    OBJSrc:string;
}

const AnimatedObj: React.FC<OBJprops> = ({ OBJSrc }) => {
    const svgref = useRef(null)

    useEffect(() =>{
        gsap.registerPlugin()
        if(!svgref) return
        gsap.fromTo (
            svgref.current,
            {y: 50,opacity : 0 },
            {y:0, opacity:1, ease: "power3.out",duration:3},
        )
    }, [])
  return (
    <Image ref={svgref} src={OBJSrc} alt="SVGIMage" width={240} height={240}   ></Image>
  )
}

export default AnimatedObj