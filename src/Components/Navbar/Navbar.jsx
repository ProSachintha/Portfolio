import React, { useState } from 'react';
import Logo from './Logo.jsx';
import Navlinks from './Navlinks.jsx';

export default function Navbar() {
  const [open,setopen]=useState(false);
  
  return (
    <div className='absolute w-full'>
        <div onClick={()=>setopen(!open)}>
          {open ? <svg className='absolute lg:invisible w-[8vw]  ml-[80%] mt-8 border border-white text-white z-20' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path  stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path>
            </svg> : <svg className='absolute lg:invisible w-[8vw]  ml-[80%] mt-8  border border-white text-white z-20 'data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path name='close' stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"></path>
            </svg>}
            
            

        </div>
        <div className='absolute w-full h-[15vh] py-1 pl-2 bg-gray-600/40 lg:invisible lg:bg-none' >
          <Logo />
        </div>

      <header className=' lg:visible lg:h-[13vh]  lg:top-0 lg:p-2  lg:mx-auto lg:flex lg:w-full lg:items-center lg:justify-between lg:sticky bg-gray-700/40 invisible  absolute  z-20 grid   '>
          <Logo />
          <Navlinks/>
      </header>
      <header
        className={`lg:invisible  bg-gray-600/40 absolute z-20 grid w-[75vw] h-[75vh] transition-all  duration-300 ease-in-out ${
          open ? 'visible ml-[25%] mt-[15vh]' : 'invisible  ml-[100%]'
        }`}
      >
        
        <Navlinks />
      </header>
    </div>
  )
}
