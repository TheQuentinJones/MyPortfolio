import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
// import { MdSchool } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'
import './nav.css'

const Nav = () => {

  const [ activeNav, setActiveNave ] = useState( '#home' )

  return (
    <nav>
      <a href="#home" onClick={ () => setActiveNave('#home') } className={activeNav === '#home' ? 'active' : '' }><FaHome /></a>
      <a href="#about" onClick={ () => setActiveNave('#about') } className={activeNav === '#about' ? 'active' : '' }><FaUserAlt /></a>
      <a href="#portfolio" onClick={ () => setActiveNave('#portfolio') } className={activeNav === '#portfolio' ? 'active' : '' }><FaPen /></a>
      <a href="#experience" onClick={ () => setActiveNave('#experience') }className={activeNav === '#experience' ? 'active' : '' }><FaBook /></a>
      {/* <a href="#education" onClick={ () => setActiveNave('#education') }className={activeNav === '#education' ? 'active' : '' }><MdSchool /></a> */}
      <a href="#contact" onClick={ () => setActiveNave('#contact') }className={activeNav === '#contact' ? 'active' : '' }><AiFillMessage /></a>
    </nav>
  )
}

export default Nav