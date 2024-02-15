import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year =new Date().getFullYear();
  return (
    <section>
        <div className="footer">
            <div className="socials mb-2">
            <Link className="socialItem" to='https://twitter.com/magirindungu'><img src="/icons/twitter.png" alt="Twitter" className='socialIcon'/></Link>
            <Link className="socialItem" to='https://www.linkedin.com/in/victor-m-ndungu/'><img src="/icons/linkedin.png" alt="LinkedIn" className='socialIcon'/></Link>
            <Link className="socialItem" to='https://github.com/v-magiri'><img src="/icons/github.png" alt="Github" className='socialIcon'/></Link>
            <Link className="socialItem" to='mailto:magirivictor@gmail.com'><img src="/icons/mail.png" alt="Mail" className='socialIcon'/></Link>
            </div>
            <span>&copy; {year} <span> Magiri Ndung'u.</span> All rights reserved.</span>
        </div>
    </section>
  )
}

export default Footer;
