import React from 'react'
import './Footer.css'
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import { CgTwitter } from 'react-icons/cg'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Q Jones</a>

        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href='https://www.github.com/TheQuentinJones'> 
                <GoMarkGithub size={28} />
            </a>
            <a href='https://www.linkedin.com/in/therealtorque/'>
                <SiLinkedin size={28} />
            </a>
            <a href='https://www.instagram.com/realtor.que/'>
                <AiFillInstagram size={28} />
            </a>
            <a href='https://twitter.com/QueTheRealtor'>
                <CgTwitter size={28} />
            </a>   
            
        </div>

        <div className="footer__copyright">
            <small>&copy; Q. Jones. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer