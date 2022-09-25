import React from 'react'

export const Section = (props) => {
  return (
    <div className={`py-24 w-3/5 ${props.style} gap-7 text-center mx-auto flex justify-between items-center flex-col`}>
        <div>
            {props.children}
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold text-[#333] '>{props.lang[0]}</h2>
            <p className='text-[#444] text-lg '>
              {props.lang[1]}
            </p>
        </div>
    </div>
  )
}
