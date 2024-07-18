import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import images from './images'
import img1 from '../img/project/UI/ssg_mart/1.PNG'
import img2 from '../img/project/UI/ssg_mart/1.PNG'
import img3 from '../img/project/UI/ssg_mart/1.PNG'
import img4 from '../img/project/UI/ssg_mart/1.PNG'
export default function MyProject() {
  const [select,setselect]=useState(1)

  const tabselection =(index)=>{
    setselect(index)
  }
  return (
    <div>
      <Navbar/>
      <div className='w-full h-[97vh] bg-gradient-to-br from-black to-gray-500 flex flex-col text-white  '>
          <div className='title w-[80vw] h-5  font-bold mx-auto  mt-auto flex justify-center gap-12  lg:my-5 lg:mt-24 '>
            <span onClick={()=>{tabselection(1)}} className={select===1 ? 'underline cursor-pointer' : 'cursor-pointer'}>Design</span>
            <span onClick={()=>{tabselection(2)}} className={select===2 ? 'underline cursor-pointer' : 'cursor-pointer'}>FrontEnd</span>
            <span onClick={()=>{tabselection(3)}} className={select===3 ? 'underline cursor-pointer' : 'cursor-pointer'}>Full Stack</span>
          </div>
          <div className='content w-[80vw] lg:w-[60vw] h-[60%] border-t-2 border-b-2 mx-auto mb-auto mt-5 lg:mt-0 relative  overflow-hidden  '>
            {/* Design Secton */}
            <div className={select===1 ? '  visible ' : 'invisible'}>              
              <div className='absolute flex flex-wrap justify-center w-full h-full gap-5 overflow-y-scroll scrollbar-none '>
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2 flex overflow-hidden'>
                  <img src={img1} alt="" className=''/>
                  <div className='w-[200PX] h-[150PX] bg-black/80  absolute flex flex-col items-center justify-center opacity-0 hover:opacity-100'>
                    <h3 className='text-lg font-merriweather '>Project SSG Mart</h3>
                    <h1 className='text-4xl font-extrabold'>-></h1>
                  </div>
                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2 flex overflow-hidden'>
                  <img src={img2} alt=""/>
                  <div className='w-[200PX] h-[150PX] bg-black/80  absolute flex flex-col items-center justify-center opacity-0 hover:opacity-100'>
                    <h3 className='text-lg font-merriweather '>Project 2</h3>
                    <h1 className='text-4xl font-extrabold'>-></h1>
                    
                  </div>
                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2 flex  overflow-hidden'>
                  <img src={img3} alt=""/>
                  
                  <div className='w-[200PX] h-[150PX] bg-black/80  absolute flex flex-col items-center justify-center opacity-0 hover:opacity-100'>
                    <h3 className='text-lg font-merriweather '>Project 3</h3>
                    <h1 className='text-4xl font-extrabold'>-></h1>
                  </div>
                </div>               
                <div className='w-[200PX] h-[150PX] border-dotted border-2 mt-2 flex  overflow-hidden'>
                  <img src={img4} alt=""/>
                  <div className='w-[200PX] h-[150PX] bg-black/80  absolute flex flex-col items-center justify-center opacity-0 hover:opacity-100'>
                    <h3 className='text-lg font-merriweather '>Project 4</h3>
                    <h1 className='text-4xl font-extrabold'>-></h1>
                  </div>
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
