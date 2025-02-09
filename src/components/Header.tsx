"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './button'

const SiteHeader = () => {
  const [aboutstate,setAboutstate] = useState(false)
  const [productstate,setProductstate] = useState(false)
  const toggleAbout = () => {
    setAboutstate(!aboutstate)
    if(productstate == true){
    setProductstate(!productstate)
    }
  }
  const toggleProduct = () => {
    setProductstate(!productstate)
    if(aboutstate == true){
    setAboutstate(!aboutstate)
    }
  }

  return (
    <div className='flex w-full flex-col items-center gap-5 mt-12 '>
        <Link href='/'>
        <h1 className='font-bold text-lg'>테스트용 사이트 개설!</h1>
        </Link>
        <ul className='flex flex-row gap-10'>
          <li className='relative'>
            <Button classes={`bg-primary text-white transition-colors duration-500 ease-in-out hover:text-black hover:bg-[#fce6e6] hover:border-transparent hover:cursor-none ${aboutstate? `text-black bg-[#fce6e6] border-transparent cursor-none`:''}`} onClick={toggleAbout}>About</Button>
            {aboutstate && (<ul className="bg-white text-black w-auto py-[14px] px-5 rounded gap-[26px] shadow-md hidden flex-wrap absolute max-md:relative max-md:flex-col max-md:shadow-none max-md:w-full max-md:px-0 animate-drop-down !flex min-w-[600px] max-md:min-w-0">
              <li>
              <span className='font-bold hover:text-blue-300 block' >about</span>
              <span>테스트용 사이트는 무엇인가?</span>
              </li>
            </ul>)}
            </li>
            <li className='relative'>
            <Button classes={`bg-primary text-white transition-colors duration-500 ease-in-out hover:text-black hover:bg-[#fce6e6] hover:border-transparent hover:cursor-none ${productstate? `text-black bg-[#fce6e6] border-transparent cursor-none`:''}`} onClick={toggleProduct} >Product</Button>
            {productstate && (<ul className="bg-white text-black w-auto py-[14px] px-5 rounded gap-[26px] shadow-md hidden flex-wrap absolute max-md:relative max-md:flex-col max-md:shadow-none max-md:w-full max-md:px-0 animate-drop-down !flex min-w-[600px] max-md:min-w-0">
              <li className='w-[calc(50%-13px)] flex-1 min-w-[250px] hover:[&_]:text-color-primary  false'>
              <span className='block'>테스트1</span>
              <span  className='block'>멋진 상품</span>
              </li>
              <li className='w-[calc(50%-13px)] flex-1 min-w-[250px] hover:[&_]:text-color-primary  false'>
              <span  className='block'>테스트2</span>
              <span  className='block'>아름다운 상품</span>
              </li>
              <li className='w-[calc(50%-13px)] flex-1 min-w-[250px] hover:[&_]:text-color-primary  false'>
              <span  className='block'>테스트3</span>
              <span  className='block'>훌륭한 상품</span>
              </li>
            </ul>)}
            </li>
            <li className='relative'>
            <Button>Q&A</Button>
          </li>
        </ul>
    </div>
  )
}

export default SiteHeader