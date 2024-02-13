import React, { useEffect, useState } from 'react';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import Project_2 from '../assets/project_2.svg';
import project_3 from '../assets/project_3.png';
import axios from 'axios';
import '../styles/styles.css';

const Projects = () => {  
  return (
    <section id='projects' className='projectSect container'>
      <h4 className='text-center mt-3'>What I have worked on:</h4>
      <div className="projectContainer row mt-4">
        <div className="projectCard col">
            <div className="illustration">
              <img src={project_1} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className="projectTitle">AEUAFRICA Website </span>
              <p className='desc'>Developed website and CMS portal for the Alliance for Entreprenuerial Universities in Africa</p>
              <a href="https://aeuafrica.org/"></a>
            </div>
        </div>
        <div className="projectCard col">
            <div className="illustration">
              <img src={Project_2} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className='projectTitle'>FAMALINK</span>
              <p className='desc'>An agritech solution aimed at helping farmers to make data driven farm budgeting and other farm decisions</p>
              <a href=""></a>
            </div>
        </div>
        <div className="projectCard col">
            <div className="illustration">
              <img src={project_3} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className='projectTitle'>Transport Requisition Portal</span>
              <p className='desc'>A web solution designed for K-UNITY sacco for manage transport requisitions in the institution and manage fleet</p>
              <a href=""></a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

