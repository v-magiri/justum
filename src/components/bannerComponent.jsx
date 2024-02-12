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
        <span className="nameContainer">I'm <span className="nameTxt">Victor Ndung'u,</span> <span className="careerTitle">A Software Developer</span></span>
        <p className='careerDsc mt-2'>
           Crafting innovative software solutions, I specialize in designing impactful designs and seamless user interactions.
           Utilized across web platforms and apps, 
          my dedication ensures enhanced engagement and satisfaction without compromising quality.
        </p>
        <div className="intro-cta mt-3">
          <a className='ctaBtn'><img src={linkedin} alt="LinkedIn"  className='socialIcon'/> <span className="ctaBtnTxt"> | LinkedIn</span> </a>
          <a className='ctaBtn'> <img src={github} alt="Github" className='socialIcon' /> <span className="ctaBtnTxt"> | Github</span> </a>
        </div>
      </div>
      <div className="introIllustration">
        <img src={banner} alt="Intro Image" className='intro-icon' />
      </div>
    </section>
  )
}

export default BannerComponent