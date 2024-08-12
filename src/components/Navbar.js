import React, { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

export const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  
  return (
    <div className='navbar'>
        <p className='logo'><AnchorLink offset='50' className='nav-link' href="#hero">Timothy Rey</AnchorLink></p>
        <FontAwesomeIcon icon={faBars} className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
            <FontAwesomeIcon icon={faXmark} className='nav-mob-close' onClick={closeMenu} />
            <li>
              <AnchorLink offset='50' className='nav-link' href="#hero">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink offset='50' className='nav-link' href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink offset='50' className='nav-link' href="#skills">Skillset</AnchorLink>
            </li>
            <li>
              <AnchorLink offset='50' className='nav-link' href="#project">Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink offset='50' className='nav-link' href="#contact">Contact</AnchorLink>
            </li>
        </ul>
    </div>
  )
}
