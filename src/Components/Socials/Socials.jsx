import React from 'react';
import './Socials.css'
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import { CgTwitter } from 'react-icons/cg'

const Socials = () => {

    return (

        <div className="header__socials">            
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
        
    )
}

export default Socials;