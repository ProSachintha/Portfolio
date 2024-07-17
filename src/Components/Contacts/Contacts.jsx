import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from '../Navbar/Navbar'

import Mobile from '../img/mobile.png';
import Gmail from '../img/mail.png';
import Linkedin from '../img/linkedin.png';
import Github from '../img/github1.png';
import Youtube from '../img/youtube.png';
import Facebook from '../img/facebook.png';
export default function Contacts() {

 
  const form= useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ii607un', 'template_wbsnv2c', form.current, {
        publicKey: 'WrAsQWnVTnPIN60-y',
      })
      .then(
        () => {
          alert('Message Send Success!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div>
      <Navbar/>
      <div className='w-full h-[97vh] bg-gradient-to-br from-black to-gray-500 flex flex-col lg:flex-row text-gray-400'>
        <div className='flex items-center justify-center gap-5 mt-32 lg:mx-auto lg:justify-center lg:text-lg lg:mt-10 lg:[&_span]:py-3'>
          <div className='flex flex-col items-end [&_img]:w-7'>
            <span><img src={Mobile} alt="" /></span>
            <span><img src={Gmail} alt="" /></span>
            <span><img src={Linkedin} alt="" /></span>
            <span><img src={Github} alt="" /></span>
            <span><img src={Youtube} alt="" /></span>
            <span><img src={Facebook} alt="" /></span>
            
          </div>
          <div className='flex flex-col items-end '>
            <span>Mobile</span>
            <span>Email</span>
            <span>Linkedin</span>
            <span>GitHub</span>
            <span>Youtube</span>
            <span>Facebook</span>
          </div>
          <div className='flex flex-col items-start [&_span]:text-blue-600 underline '>
            <span>+94-785808418</span>
            <span>sachintha.s.gunawardhana@gmail.com</span>
            <span><a href="https://www.linkedin.com/in/sachinthagunawardhana/">Sachintha Gunawardhana</a></span>
            <span><a href="https://github.com/ProSachintha">Sachintha Gunawardhana</a></span>
            <span><a href="https://www.youtube.com/@sankoola5711">sankoola</a></span>
            <span><a href="https://web.facebook.com/sachintha_sandaruwan_gunawardhana">Sachintha Gunawardhana</a></span>
          </div>
        </div>
        <div className='w-[90vw] h-[50vh] bg-black/50 mt-5 mx-auto lg:w-[30vw] lg:flex lg:items-center lg:justify-center lg:mt-40'>
          <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center '>
            <input type="email" name='user_email' className='w-[82%] p-2 my-2 ' placeholder='Email' required/>
            <input type="text" name='user_name' className='w-[82%] p-2 my-2' placeholder='Your Name'required/>
            <textarea name="message"  rows={5} cols={52} className='p-2 my-2 w-[82%]' placeholder='Message'required></textarea>
            <input type="submit" value={'SEND'} className='cursor-pointer'/>
          </form>
        </div>
      </div>
    </div>
  )
}
