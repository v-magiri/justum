import React, { useEffect, useState } from 'react';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import Project_2 from '../assets/project_2.svg';
import project_3 from '../assets/project_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Projects = () => {  
  return (
    <section id='projects' className='projectSect'>
      <h4 className='text-center mt-3 sectTitle'>What I have worked on:</h4>
      <div className="projectContainer mt-4 ">
        <div className="projectCard mb-4">
            <div className="illustration">
              <img src={project_1} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className="projectTitle">
                AEUAFRICA Website 
                <Link to="https://aeuafrica.org/" className='link'>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  
                </Link>                  
              </span>
              <p className='desc'>Developed website and CMS portal for the Alliance for Entreprenuerial Universities in Africa</p>
              <div className="techContainer">
                <span className='techTitle'>Built with :</span>
                <div className='techBox'>
                  <img src="/icons/laravel.png" alt="Technologies Used" className='techIcon' />
                  <img src="/icons/bootstrap.png" alt="Technologies Used" className='techIcon' />
                </div>
              </div>
              <div className="ownerContainer">
                <p><span className='ownerTitle'>Associated with:</span> <span className='ownerName'>AEUAFRICA</span></p>
              </div>
            </div>
        </div>
        <div className="projectCard mb-4">
            <div className="illustration">
              <img src={Project_2} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className='projectTitle'>
                FAMALINK 
                <Link className="link" to='https://github.com/v-magiri'> 
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </Link>
              </span>
              <p className='desc'>An agritech solution aimed at helping farmers to make data driven farm budgeting and other farm decisions</p>
              <div className="techContainer">
                <span className='techTitle'>Built with :</span>
                  <div className='techBox'>
                      <img src="/icons/laravel.png" alt="Technologies Used" className='techIcon' /> 
                      <img src="/icons/docker.png" alt="Technologies Used" className='techIcon' />
                      <img src="/icons/android.svg" alt="Technologies Used" className='techIcon' />
                      <img src="/icons/react.svg" alt="Technologies Used" className='techIcon' />
                  </div>
              </div>
              <div className="ownerContainer">
                <p><span className='ownerTitle'>Associated with:</span> <span className='ownerName'>Famalink</span></p>
              </div>
            </div>
        </div>
        <div className="projectCard mb-4">
            <div className="illustration">
              <img src={project_3} alt="Project 1" className='projectIllustration' />
            </div>
            <div className="projectDesc">
              <span className='projectTitle'>
                Transport Requisition Portal
                <Link className="link" to='https://github.com/v-magiri'> 
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </Link>
              </span>
              <p className='desc'>A web solution designed for K-UNITY sacco for manage transport requisitions in the institution and manage fleet</p>
              <div className="techContainer">
                <span className='techTitle'>Built with :</span>
                  <div className='techBox'>
                        <img src="/icons/spring.svg" alt="Technologies Used" className='techIcon' /> 
                        <img src="/icons/docker.png" alt="Technologies Used" className='techIcon' />
                        <img src="/icons/angular.svg" alt="Technologies Used" className='techIcon' />
                        <img src="/icons/bootstrap.png" alt="Technologies Used" className='techIcon' />
                  </div>
              </div>
              <div className="ownerContainer">
                <p><span className='ownerTitle'>Associated with:</span> <span className='ownerName'>K-UNITY SACCO</span></p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects

