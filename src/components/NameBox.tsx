import React from 'react'

interface NameBoxPRops {
    name : string;
}

const NameBox: React.FC<NameBoxPRops> = ({name}) => {
  return (
    <div className='w-5 h-3 rounded-md'>{name.toUpperCase()}</div>
  )
}

export default NameBox