import React from 'react'
import Image from 'next/image'
import IntroImage1 from './IntroImage1'
import IntroImage2 from './IntroImage2'
import IntroImage3 from './IntroImage3'
import IntroAnimation from '@/components/IntroAnimation'


const Intro2 = () => {

  return (
<main className="relative flex flex-col items-center justify-center min-h-10 ">
 <div className='absolute left-0 top-0 z-10 flex h-full w-full justify-between px-80 '>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
 </div>
 <div className='flex flex-col justify-center items-center z-20 '>
  <div className="w-full max-w-[800px] mt-24">
    <Image src="/assets/gotoconsult.png" alt="gotoconsult" layout="responsive" width={16} height={9} />
  </div>
  <IntroAnimation direction="left">
    <IntroImage1/>
  </IntroAnimation>
  <IntroAnimation direction="right">
    <IntroImage2/>
  </IntroAnimation>
  <IntroAnimation direction="left">
    <IntroImage3/>
  </IntroAnimation>



 </div>
</main>
  )
}

export default Intro2