import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navlinks() {
  return (
    <>
        <div className='  lg:text-xl  lg:gap-16 lg:pe-10 lg:flex lg:pl-0 lg:mt-0   gap-5 grid  text-3xl pl-[25%] mt-16 '>
            <NavLink className='hover:underline active:underline' to="/">Home</NavLink>
            <NavLink className='hover:underline active:underline' to="/about_me">About Me</NavLink>
            <NavLink className='hover:underline active:underline' to="/my_projects">My Projects</NavLink>
            <NavLink className='hover:underline active:underline' to="/contacts">Contacts</NavLink>
        </div>
    </>
  )
}
