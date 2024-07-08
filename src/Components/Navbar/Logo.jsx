import React from 'react'
import My from '../img/mylogo.png'
export default function Logo() {
  return (
    <div className="w-20 h-20 pt-1 mt-2 bg-black  lg:w-16 lg:h-16 lg:ml-0 lg:-p-2">
        <img src={My} alt="" />
    </div>
    
  )
}
