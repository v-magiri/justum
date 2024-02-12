import React from 'react';
import banner from '../assets/banner-icon.svg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import '../styles/styles.css';

const BannerComponent = () => {
  return (
    <section id='home' className='bannerContainer '>
      <div className="intro">
        <span className='helloTxt'>Hello,</span>
        <span className="nameContainer">I'm <span className="nameTxt">Victor Ndung'u,</span> <span className="careerTitle">A Full Stack Developer</span></span>
        <p className='careerDsc mt-2'>
           Crafting innovative software solutions, I prioritize quality above all else. 
           With a commitment to excellence, I ensure that every product delivers exceptional 
           performance and user satisfaction, setting new standards in the industry.
        </p>
        <div className="intro-cta mt-3">
          <a className='ctaBtn' href='https://www.linkedin.com/in/victor-m-ndungu/'>
            <img src={linkedin} alt="LinkedIn"  className='socialIcon'/> <span className="ctaBtnTxt"> | LinkedIn</span> 
          </a>
          <a className='ctaBtn' href='https://github.com/v-magiri'>
             <img src={github} alt="Github" className='socialIcon' /> <span className="ctaBtnTxt"> | Github</span> 
          </a>
        </div>
      </div>
      <div className="introIllustration">
        <img src={banner} alt="Intro Image" className='intro-icon' />
      </div>
    </section>
  )
}

export default BannerComponent