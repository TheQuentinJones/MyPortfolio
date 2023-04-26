import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'
import { SiFiles } from 'react-icons/si'


export default function About() {

  
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://avatars.githubusercontent.com/u/120281980?s=400&u=7a1d590cd096ed6bdb60fb2ab93c557ee72c9348&v=4" alt="fun pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <GiDiploma className='about__icon'/>
              <h5>Certifications</h5>
              <small>3</small>
            </article>

            <article className="about__card">
              <SiFiles className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

          </div>

          <p>
            This is an About me section.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
