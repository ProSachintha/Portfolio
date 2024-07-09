import React from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from './My_img.jsx'
import  {useTypewriter,Cursor}  from 'react-simple-typewriter'

export default function Home() {
  const[texts]= useTypewriter({
    words:['Sachintha','a Designer','a Developer'],
    loop:{},
  });
  return (
    <div >
        <Navbar/>
        <div className='flex flex-col justify-center w-full h-full pt-16 bg-gradient-to-b from-green-400 to-blue-400 lg:h-[97vh] lg:w-[100vw] lg:flex lg:pt-0 lg:justify-between lg:flex-row'>
          <div className='order-2 w-[100%] lg:order-1 mt-5 lg:mt-24'>
            <h1 className='text-3xl text-center font-baskervville lg:text-left lg:text-9xl'>Hello! <br /> I am <br />{texts}<Cursor/></h1>
            <h3 className='text-xl font-bold text-center lg:text-left lg:text-3xl'>You can get a better idea about me from this site.</h3>
            
          </div>
          <div className='flex items-baseline order-1 lg:order-2 '>
            <Profile/>
          </div>

        </div>
    </div>
  )
}
