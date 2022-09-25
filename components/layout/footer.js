import React from 'react'
import Company from '../icons/footer/companey'
import Dev from '../icons/footer/developer'

export const Footer = (props) => {
  let language =props.lang

  // GET YEAR
  const date = new Date()
  const year =date.getFullYear()
  return (
    <div className=' relative bg-gray-200 text-gray-500 grid gap-3 '>
      <div className='flex px-4 flex-wrap justify-center gap-4  w-full bg-[#f00] text-white py-2'>
        {language.map(el=>{
        return <div className='cursor-pointer' onClick={()=>props.func(el)} key={language.indexOf(el)}>{el}</div>
        })}
      </div>
      <div>
        <div>
          Pages
        </div>
        <div>
          Terms and privacy
        </div>
        <div>
          Social medias
        </div>
      </div>
      <div className='flex justify-center items-center gap-10 py-4'>
        <Company/>
        <Dev/>
      </div>
      <div className='text-center font-semibold pb-10'>
      ©copyright {year}
      </div>
    </div>
  )
}
