import React, { useEffect, useState } from 'react';
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';

const Projects = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchProjects=async()=>{
      try {
        const response=await fetch('../../assets/projects.json');
        const projects=await response.json();
        setData(projects);
        console.log(projects);
      } catch (error) {
        console.error("Error fetching Project:",error);
      }
    }

    fetchProjects();
  },[]);
  
  return (
    <section id='projects' className='projectSect'>
      <h4 className='text-center my-3'>What I have worked on:</h4>
      <div className="projectContainer">
        <div className="projectCard">

        </div>
      </div>
    </section>
  )
}

export default Projects

