import React from 'react'
import './styles/Skills.css';

export const Skills = () => {
  const skills = ['laravel', 'react', 'HTML', 'css', 'javascript', 'bootstrap', 'mysql', 'php', 'git', 'expressjs', 'java', 'mongodb', 'mongoose', 'nginx', 'nodejs', 'python'];

  return (
    <div className='skills'>
        <div className='skills-title'>
          <h1>My <span>Skillset</span></h1>
        </div>
        <div className='skills-section'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='skills-item'>
                <img 
                  src={`/assets/${skill}.svg`}
                  alt={skill}
                  className="skills-icon" />
              </div>
            );
          })}
        </div>
    </div>
  )
}
