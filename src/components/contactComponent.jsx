import React from 'react';
import { Link } from 'react-router-dom';

const ContactComponent = () => {
  return (
    <section id='contact' className='contactSect pt-4'>
      <div className="contactBox">
        <h4 className='text-center'>Get in touch</h4>
        <span className='text-center'>Do you have any idea or work you want done? leave a message</span>
        <form className='contactForm my-4'>
          <input type="text" placeholder='Your Name' id="name" name='name' className='formInput mb-3'/>
          <input type="email" name="email" id="email" placeholder='Your Email' className='formInput mb-3' />
          <textarea name="message" id="message"  rows="3" placeholder='Your Message' className='formInput mb-3'>

          </textarea>
          <input type="submit" value="Submit" className='submitBtn mt-3' />
        </form>
      </div>
    </section>
  )
}

export default ContactComponent
