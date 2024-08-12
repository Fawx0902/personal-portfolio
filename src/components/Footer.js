import React from 'react'
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

  let currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div className='copyright'>
                Copyright ©{currentYear} by Timothy Rey Cheong | All Rights Reserved.
            </div>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/timothyrcheong/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Fawx0902/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://gitlab.com/Fawx0902/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGitlab} />
                </a>
                <a href="mailto:timothyrcheong@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+639171322743" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
            </div>
        </div>
    </footer>
  )
}
