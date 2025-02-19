import React from 'react'
import Image from 'next/image'
import ImageCard from '@/components/ImageCard'


const Intro2 = () => {
  return (
<main className="relative flex flex-col items-center justify-center min-h-10 px-5">
 <div className='absolute left-0 top-0 z-10 flex h-full w-full justify-between '>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
  <div className='h-full w-0 border-l-[1px] border-l-[#383738]'/>
 </div>
 <div className='flex flex-col justify-center items-center z-20 '>
  <div className="w-full max-w-[600px] mt-24">
    <Image src="/gotoconsult.png" alt="gotoconsult" layout="responsive" width={16} height={9} />
  </div>
 </div>
 <div>
 <ImageCard/>
 </div>
  </main>
  )
}

export default Intro2