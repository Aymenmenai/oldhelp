import Link from 'next/link'
import React from 'react'
import AppIcon from '../icons/app-icon'

export const AppSection = (props) => {
  return (
    <div className='relative pb-5 h-44 bg-yellow-400/25'>
        <div className='absolute flex justify-center gap-4 flex-col w-full top-0 text-center py-5 bg-[#f00] '>
            <h2 className='text-2xl font-semibold  text-white'>{props.lang[0]}</h2>
            <p className='text-lg text-gray-100'>{props.lang[1]}</p>
            <ul className='flex gap-5 justify-center items-center flex-wrap'>
                <li>
                    <AppIcon/>
                </li>
                <li>
                    <AppIcon/>
                </li>
                <li>
                    <AppIcon/>
                </li>
                <li>
                    <AppIcon/>
                </li>
               
            </ul>
        </div>
    </div>
  )
}
