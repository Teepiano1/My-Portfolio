import React from 'react'
import '../Contact/contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2myq8o', 'template_lknz4pw', form.current, 'yuXG0klwvZzoH-Qdt')
    e.target.reset()
  }
  return (
    <form id='Contact' ref={form} onSubmit={sendEmail} className=' contact pt-[7rem]'>
      <h1 className=' text-center text-[3rem] font-bold pb-[4rem]'>CONTACT ME</h1>
      <div className=' m-auto'>
        <input type='text' className='input pl-[1rem] w-[30rem] h-[3rem] rounded-[1rem]' name='name' placeholder='Your Name' required />
      </div>
      <div className=' m-auto'>
        <input type='email' className='input pl-[1rem] w-[30rem] h-[3rem] rounded-[1rem]' name='email' placeholder='Your email' required />
      </div>
      <div className=' m-auto'>
        <textarea row='7' className='input pl-[1rem] w-[30rem] h-[7rem] rounded-[1rem] pt-3' name='message' placeholder='Your Message' required />
      </div>
      <div className=' m-auto'>
        <button type='submit' className=' rounded-2xl text-[white] bg-[#2c2c6c] border border-[#4db5ff] h-[2.5rem] w-[8rem]'>Send Message</button>
      </div>
    </form>
  )
}

export default Contact