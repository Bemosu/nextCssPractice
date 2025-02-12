import FramerMotion from '@/components/FramerMotion'
import Scrollbox from '@/components/Scrollbox'
import React from 'react'

const page = () => {
  return (
    <div className='felx flex-col items-center justify-center w-full h-auto px-10'>
    <div className='h-[100vh] bg-white'>이것은 테스트 프로젝트의 about 페이지입니다</div>
    <Scrollbox/>
    <FramerMotion/>
    </div>
  )
}

export default page