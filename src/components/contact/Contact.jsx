import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u1z3tpi', 'template_nh4s9jr', form.current, 'Cl8zGR7prJBYb2c4R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
            <AiOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>dikshantbisht02@gmail.com</h5>
            <a href="mailto:dikshantbisht02@gmail.com">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='icon'/>
            <h4>Instagram</h4>
            <h5>dkbisht</h5>
            <a href="https://www.instagram.com/dkbisht/">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='icon'/>
            <h4>WhatsaApp</h4>
            <h5>+919988841556</h5>
            <a href=" https://wa.me/9988841556">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact