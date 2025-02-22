import React from 'react'

interface NameBoxPRops {
    name : string;
}

const NameBox: React.FC<NameBoxPRops> = ({name}) => {
  return (
    <div className='w-[50px] flex items-center justify-center rounded-lg border border-gray-500 '>{name.toUpperCase()}</div>
  )
}

export default NameBox