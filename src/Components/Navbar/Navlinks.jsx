import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navlinks() {
  return (
    <>
        <div className='  lg:text-xl  lg:gap-16 lg:pe-10 lg:flex lg:pl-0 lg:mt-0  text-white gap-5 grid  text-3xl pl-[25%] mt-16 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about_me">About Me</NavLink>
            <NavLink to="/my_projects">My Projects</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
    </>
  )
}
