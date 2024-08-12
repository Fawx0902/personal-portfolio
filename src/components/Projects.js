import React from 'react'
import './styles/Projects.css';

import projects from './data/projects.json';

export const Projects = () => {

  return (
    <div className='project'>
        <div className='project-title'>
          <h1>My <span>Projects</span></h1>
        </div>
        <div className='project-section'>
          {projects.map((project, index) => {
            return (
              <div key={index} className='project-format'>
                <img src={project.image} alt={`Project ${project.title}`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='links'>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className='link'>Demo</a>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer" className='link'>Source</a>}
                  {(!project.demo && !project.source) && <p className='link'>NDA</p>}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}
