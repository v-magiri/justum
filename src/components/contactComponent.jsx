import React,{useRef}from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs
    .sendForm('service_r4lyysr', 'template_0ievxi5', form.current, {
      publicKey: 'eQPoM9McMkQmUMLmy',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert("Mail Sent");
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset();
  }
  return (
    <section id='contact' className='contactSect pt-4'>
      <div className="contactBox">
        <h4 className='text-center'>Get in touch</h4>
        <span className='text-center'>Do you have any idea or work you want done? leave a message</span>
        <form className='contactForm my-4' ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Name' id="to_name" name='your_name' className='formInput mb-3'/>
          <input type="email" name="your_email" id="email" placeholder='Your Email' className='formInput mb-3' />
          <textarea name="message" id="message"  rows="3" placeholder='Your Message' className='formInput mb-3'>

          </textarea>
          <input type="submit" value="Submit" className='submitBtn mt-3' />
        </form>
      </div>
    </section>
  )
}

export default ContactComponent
