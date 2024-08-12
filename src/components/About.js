import React from 'react'
import './styles/About.css';

export const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
          <h1>About <span>Me</span></h1>
        </div>
        <div className='about-section'>
          <div className='about-left'>
              <img src="/assets/me.jpg" alt="" />
          </div>
          <div className='about-right'>
              <div className='about-me'>
                  <p>I am a Web Developer with nearly a year of professional experience, specializing in using Laravel for backend development and React.js for frontend development. I am passionate about programming, continuously learning new skills, and collaborating with other teams to achieve goals and meet deadlines.</p>
              </div>
          </div>
        </div>
    </div>

    
  )
}
