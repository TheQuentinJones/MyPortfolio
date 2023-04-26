import React from 'react'
import './Contact.css'
import { AiTwotoneMail } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">  
          <article className="contact__option">
            <AiTwotoneMail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="mailto:quentin.mcc.jones@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=12409181791" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact