import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
export default function Navlinks() {
  const [activePage, setActivePage] = useState('Home');
  return (
    <>
        <div className='  lg:text-xl  lg:gap-16 lg:pe-10 lg:flex lg:pl-0 lg:mt-0   gap-5 grid  text-3xl pl-[25%] mt-16 lg:text-gray-400 '>
            <NavLink className='lg:px-3 pb-0.5 rounded-2xl hover:underline active:underline lg:hover:bg-black lg:hover:text-white' to="/">Home</NavLink>
            <NavLink className='lg:px-3 pb-0.5 rounded-2xl hover:underline active:underline  lg:hover:bg-black lg:hover:text-white' to="/about_me">About Me</NavLink>
            <NavLink className='lg:px-3 pb-0.5 rounded-2xl hover:underline active:underline  lg:hover:bg-black lg:hover:text-white' to="/my_projects">My Projects</NavLink>
            <NavLink className='lg:px-3 pb-0.5 rounded-2xl hover:underline active:underline  lg:hover:bg-black lg:hover:text-white' to="/contacts">Contacts</NavLink>
        </div>
    </>
  )
}
