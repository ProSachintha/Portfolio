import React from 'react'
import ProfilePic from '../img/my.png'
export default function My_img() {
  return (
    <div className='lg:h-[83vh] lg:overflow-hidden z-10    '>
        <img className='lg:w-[40vw]'src={ProfilePic} alt="" />
    </div>
  )
}
