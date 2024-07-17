import React from 'react'
import Navbar from '../Navbar/Navbar'
import Resum from '../doc/Sachintha.pdf';

export default function AboutMe() {
  return (
    <div>
      <Navbar/>
      <div className='w-full h-[97vh] bg-gradient-to-br from-black to-gray-500 flex flex-col text-gray-400'>
          <div className='lg:w-[50vw] w-[75vw] h-[25vh] font-bold flex text-justify justify-center items-center mx-auto lg:mt-16 mt-28'>
              <span >I am a person who likes to introduce new solutions and face challenges by thinking out of the box, able to work harmoniously and
                        efficiently with teams, learning quickly,adapting to changing environments with new knowledge.
              </span>
          </div>
          <div className='flex items-center justify-center mx-auto'>
            <div className="flex mt-8 items-center justify-between w-full lg:gap-16 h-[50vh] mx-auto lg:text-lg text-sm lg:font-bold font-extrabold  ">
                <div className='h-[100%] w-[100%] lg:block flex flex-col  my-auto'>
                    <span >Name</span><br />
                    <span >Birth Day</span><br />
                    <span>Address</span><br />
                    <span>Status</span><br />
                    <span>School</span><br />
                    <span>University</span><br />
                    <span>Degree</span><br />
                </div>
                <div className='h-[100%] w-[110%] lg:block flex flex-col  -ml-[80px] '>
                    <span>B.V.G.S.S.Gunawardhana</span><br />
                    <span>24<sup>th</sup> September 1999</span><br />
                    <span>Polonnaruwa</span><br />
                    <span>Unmarried</span><br />
                    <span>Po/Royal Central College</span><br />
                    <span>Open University of Sri Lanka</span><br />
                    <span className='text-wrap'>Bachelor of Software Engineering (honse)-UG</span><br />
                </div>
            </div>
          </div>
          
            <div className="h[25vh w-[50vw] -mt-8 flex font-bold text-lg mx-auto text-black underline hover:text-red-600">
                <a className='mx-auto' href={Resum} target='_blank' >Download My Resum</a>
            </div>
      </div>
    </div>
  )
}
