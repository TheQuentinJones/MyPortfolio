import React from 'react'
import Download from '../Download/Download'
import './Header.css'
import Socials from '../Socials/Socials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Quentin Jones</h1>
        <h5 className="text-light">Fullstack Software Engineer</h5>
        <Download />

        <Socials />

        <div className="me">
          <img src='https://i.postimg.cc/43x1qK8q/noback22.png' alt='the engineer'></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;