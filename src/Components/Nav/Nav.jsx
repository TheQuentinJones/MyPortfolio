import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><FaHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#portfolio"><FaPen /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#education"><MdSchool /></a>
      <a href="#contact"><AiFillMessage /></a>
    </nav>
  )
}

export default Nav