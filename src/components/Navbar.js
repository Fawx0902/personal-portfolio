import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    menuRef.current.style.backgroundColor = "rgba(22, 21, 19, 0.2)";
    menuRef.current.style.backdropFilter = "blur(10px)";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  console.log(activeSection);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='navbar'>
        <p className='logo'><AnchorLink offset='50' className='nav-link' href="#hero">Timothy Rey</AnchorLink></p>
        <FontAwesomeIcon icon={faBars} className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
            <FontAwesomeIcon icon={faXmark} className='nav-mob-close' onClick={closeMenu} />
            <li className={activeSection === 'hero' ? 'active' : ''}>
              <AnchorLink offset='50' className='nav-link' href="#hero">Home</AnchorLink>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <AnchorLink offset='50' className='nav-link' href="#about">About</AnchorLink>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <AnchorLink offset='50' className='nav-link' href="#skills">Skillset</AnchorLink>
            </li>
            <li className={activeSection === 'project' ? 'active' : ''}>
              <AnchorLink offset='50' className='nav-link' href="#project">Projects</AnchorLink>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <AnchorLink offset='50' className='nav-link' href="#contact">Contact</AnchorLink>
            </li>
        </ul>
    </div>
  )
}
