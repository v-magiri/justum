import React from 'react'

const contactComponent = () => {
  return (
    <sections>
      <h4 className='text-center'>Get in touch</h4>
      <span>Do you have any idea or work you want done? leave a message</span>
      <form>
        <input type="text" placeholder='Your Name' id="name" name='name'/>
        <input type="email" name="email" id="email" placeholder='Your Email' />
        <textarea name="message" id="message"  rows="3">

        </textarea>
        <input type="button" value="Submit" />
      </form>

      <div className="footer">
        <span>CopyRight $copy <script>document.write(new Date().getFullYear());</script>  All rights reserved <span>Magiri Ndung'u</span></span>
      </div>
    </sections>
  )
}

export default contactComponent
