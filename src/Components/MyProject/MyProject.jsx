import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
export default function MyProject() {
  const [select,setselect]=useState(1)

  const tabselection =(index)=>{
    setselect(index)
  }
  return (
    <div>
      <Navbar/>
      <div className='w-full h-[97vh] bg-gradient-to-b from-green-400 to-blue-400 flex flex-col   '>
          <div className='title w-[80vw] h-5  font-bold mx-auto  mt-auto flex justify-center gap-12  lg:my-5 lg:mt-24 '>
            <span onClick={()=>{tabselection(1)}} className={select===1 ? 'underline cursor-pointer' : 'cursor-pointer'}>Design</span>
            <span onClick={()=>{tabselection(2)}} className={select===2 ? 'underline cursor-pointer' : 'cursor-pointer'}>FrontEnd</span>
            <span onClick={()=>{tabselection(3)}} className={select===3 ? 'underline cursor-pointer' : 'cursor-pointer'}>Full Stack</span>
          </div>
          <div className='content w-[80vw] lg:w-[60vw] h-[60%] border-t-2 border-b-2 mx-auto mb-auto mt-5 lg:mt-0 relative  overflow-hidden  '>
            {/* Design Secton */}
            <div className={select===1 ? '  visible ' : 'invisible'}>              
              <div className='absolute flex flex-wrap justify-center w-full h-full gap-5 overflow-y-scroll scrollbar-none '>
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>               
              </div>              
            </div> 
            {/* FrontEnd Section */}
            <div className={select===2 ? 'visible' : 'invisible'}>
              <div className='absolute flex flex-wrap justify-center w-full h-full gap-5 overflow-y-auto '>
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

                </div>
              </div>
            </div>
            {/* Full Stack Section */}
            <div className={select===3 ? 'visible ' : 'invisible'}>
            <div className='absolute flex flex-wrap justify-center w-full h-full gap-5 overflow-y-auto '>
              <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2'>

              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}
