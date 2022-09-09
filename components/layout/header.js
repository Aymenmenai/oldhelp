import {React,useState} from 'react'
import Logo from '../icons/logo'
import {setFlag} from '../app/flag'
// import {changeLanguage} from '../app/language'

export const Header = (props) => {
  // DATA
  const language =props.lang
  // STATE
  const [open, setopen] = useState(0)
  // FUNCTION
  const setNewLanguage =(value)=>{
    // SET LANGUAGE IN LOCALHOST
    // SET NEW LANGUAGE
    // props.func(value)
    // console.log(value)
    // CLOSE WINDOW
    setopen(!open)
  }
  return (
    <div className=' bg-white fixed w-screen z-20 flex items-center justify-between px-5 md:px-32 py-5'>
      <div className='flex gap-1 items-center'>
      <Logo/>
      <p className='text-[#f00] uppercase text-xs font-bold'>beta.</p>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <div onClick={()=>setopen(!open)} className='w-7 h-7  cursor-pointer rounded-full '>
          {setFlag('english')}
        </div>
        <ul className={`${open ? 'grid':'hidden'} absolute bg-white mt-10 gap-3 p-4 border-2 rounded-md grid-cols-2  `}>
            {language.map(el=>{
              return<li onClick={()=>setNewLanguage(el)} className='py-2 gap-3 px-6 rounded-lg cursor-pointer hover:bg-gray-300/30 flex justify-start items-center' key={language.indexOf(el)}>
                <div className='w-7 h-7  rounded-full'>
                  {setFlag(el)}
                </div>
                <div>
                  {el}
                </div>
              </li>
            })}
        </ul>
      </div>
    </div>
  )
}
