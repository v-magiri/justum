import React from 'react';

const SkillsComponent = () => {
  const tools=[
    {id:1,name:'Java',icon:"java.svg"},
    {id:2,name:'JavaScript',icon:"javascript.svg"},
    {id:3,name:'PHP',icon:"php.svg"},
    {id:4,name:'Python',icon:"python.svg"},
    {id:5,name:'Angular',icon:"angular.svg"},
    {id:6,name:'React',icon:"react.svg"},
    {id:7,name:'Typescript',icon:"typescript.svg"},
    {id:8,name:'Node Js',icon:"nodejs.png"},
    {id:9,name:'Postgres',icon:"postgresql.svg"},
    {id:10,name:'MySQL',icon:"mysql.svg"},
    {id:11,name:'MongoDB',icon:"mongodb.svg"},
    {id:12,name:'Firebase',icon:"firebase.svg"},
    {id:13,name:'Laravel',icon:"laravel.png"},
    {id:14,name:'SpringBoot',icon:"springboot.svg"},
    {id:15,name:'HTML',icon:"html.svg"},
    {id:16,name:'CSS',icon:"css.svg"},
    {id:17,name:'Sass',icon:"sass.svg"},
    {id:18,name:'BootStrap',icon:"bootstrap.svg"},
    {id:19,name:'Figma',icon:"figma.svg"},
    {id:20,name:'Docker',icon:"docker.png"},
    {id:21,name:'Linux',icon:"linux.svg"},
    {id:22,name:'Git',icon:"git.svg"},
  ]
  return (
    <section id='skills' className='skillsContainer'>
      <h4 className='text-center my-3 title'>Tools</h4>
      <div className="icons">
        {
          tools.map((tool)=>(
            <div className="icon-container">
              <img src={`/icons/${tool.icon}`} alt={tool.name} className='icon' />
              <p className='iconTitle'>{tool.name}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SkillsComponent
