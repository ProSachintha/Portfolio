import React from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from './My_img.jsx'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className=' bg-slate-500 h-[100vh]  lg:flex lg:pt-0 pt-16 lg:justify-between flex lg:flex-row flex-col  justify-center lg:justify-between  '>
          <div className='order-2 lg:order-1 '>
            <h1 className='font-mono text-3xl font-extrabold text-center lg:text-left lg:text-9xl'>Hello! <br /> I AM <br /> SACHINTHA</h1>
            <h3 className='font-bold text-1xl lg:text-3xl'>You can get a better idea about me from this site.</h3>
            
          </div>
          <div className='order-1 lg:order-2'>
            <Profile/>
          </div>

        </div>
    </div>
  )
}
