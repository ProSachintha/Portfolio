import React from 'react'
import ProfilePic from '../img/my.png'
export default function My_img() {
  return (
    <div className='  lg:overflow-hidden z-10  mt-[53px]  '>
        <img className='lg:w-[50vw] w-[80vw ]'src={ProfilePic} alt="" />
    </div>
  )
}
