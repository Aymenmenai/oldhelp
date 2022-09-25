import React from 'react'
import Thought from '../../../icons/thought'

export default function Main(props) {
  return (
    <div className=' text-[#333] h-screen flex justify-between pt-40 text-4xl text-center md:text-7xl font-bold  items-center flex-col relative'>
        <h1>{props.lang}</h1>
        <div className='absolute bottom-10'>
          <Thought/>
        </div>
    </div>
  )
}
