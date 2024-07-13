import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from '../Navbar/Navbar'
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
      <div className='w-full h-[97vh] bg-gradient-to-b from-green-400 to-blue-400 flex flex-col lg:flex-row'>
        <div className='flex items-center justify-center gap-5 mt-32 lg:mx-auto lg:justify-center lg:text-lg lg:mt-10 lg:[&_span]:py-2'>
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
        <div className='w-[90vw] h-[50vh] bg-black/50 mt-5 mx-auto lg:w-[30vw] lg:flex lg:items-center lg:justify-center lg:mt-32'>
          <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center '>
            <input type="email" name='user_email' className='w-[82%] p-2 my-2 ' placeholder='Email' required/>
            <input type="text" name='user_name' className='w-[82%] p-2 my-2' placeholder='Your Name'required/>
            <textarea name="message"  rows={5} cols={52} className='p-2 my-2 w-[82%]' placeholder='Massege'required></textarea>
            <input type="submit" value={'SEND'} className='cursor-pointer'/>
          </form>
        </div>
      </div>
    </div>
  )
}
