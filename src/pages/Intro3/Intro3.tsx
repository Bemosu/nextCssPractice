import LoopTest from '@/components/LoopTest'
import React from 'react'

const Intro3 = () => {
  return (
    <div className='bg-[hsl(0,0%,11%)] h-[500px]'>
      <div className='flex flex-col'>
        <LoopTest firstx='-10%' secondx='-30%'/>
        <LoopTest firstx='-30%' secondx='0%'/>
        </div>

    </div>
  )
}

export default Intro3