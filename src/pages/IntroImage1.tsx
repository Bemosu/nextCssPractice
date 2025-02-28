import AnimatedObj from '@/components/AnimatedObj'
import ImageCard from '@/components/ImageCard'
import NameBox from '@/components/NameBox'
import TriangleCircle from '@/components/TriangleCircle'
import React from 'react'

const IntroImage1 = () => {
  return (
    <div className='flex flex-row justify-center gap-[30%] z-20'>
    <div className='z-20 mt-[60%]'>
      <ImageCard src="/assets/svgBackGround.jpg" alt="backgrounImage">
        <AnimatedObj OBJSrc='/assets/letterEnvelope.svg'></AnimatedObj>
      </ImageCard>
      <div className="relative z-30 mt-4">
        <NameBox name="app" />
      </div>
    </div>
    <div className='z-20 mt-[30%]'>
        <TriangleCircle/>
    </div>
  </div>
  )
}

export default IntroImage1