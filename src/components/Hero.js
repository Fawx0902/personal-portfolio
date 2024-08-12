import React from 'react'
import Typewriter from "typewriter-effect";
import './styles/Hero.css';

export const Hero = () => {
  const titles = ['Fullstack Developer', 'Web Developer', 'Backend Developer', 'Laravel Developer', 'React Developer'];
  
  return (
    <div className='hero'>
        <img src="/assets/me.jpg" alt="" />
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Hello, I'm Timothy Rey Cheong. Passionate Developer based in Binondo, Philippines.</p>
        <div className='hero-action'>
            <a href="/assets/Cheong, Timothy Rey - Resume.pdf" download className="hero-resume">Download Resume</a>
        </div>
    </div>
  )
}
