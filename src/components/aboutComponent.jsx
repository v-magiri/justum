import React from 'react';
import profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AboutComponent = () => {
  return (
    <section id='about' className='aboutSect'>
      <h4 className='text-center'>Meet Victor</h4>
      <div className="aboutContainer">
          <div className="profileContainer">
              <img src={profile} alt="Profile Image" className='profileImg' />
          </div>
        <div className="summaryContainer">
          <p>
            I'm a Full Stack developer in Kenya, blending a strong computer science background
             with over two years of industry experience to bring software ideas to life. Proficient 
             across the development lifecycle, I excel in creating impactful solutions, from web 
             applications to backend systems.</p>
          <p>
            I am committed to staying ahead in technology, I strive to 
             make a positive impact by delivering innovative software solutions that empower individuals 
             and organizations in Kenya and beyond.
          </p>
          <p>Do you have a software idea you would like implemented? I’m here for you!</p>
          <div className=''>
            <Link to='https://drive.google.com/file/d/1cwtSK38YjjRfccl6MPj3Dl1K3q8ZzYYK/view?usp=drive_link' className='downloadBtn'>
              <FontAwesomeIcon icon={faCloudArrowDown}/>
              <span className='downloadTitle'>Download Resume</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutComponent
