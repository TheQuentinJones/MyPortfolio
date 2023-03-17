import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si'

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className='container'>
        <form>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input is-small" type="name" placeholder="Your Name" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input is-small" type="email" placeholder="Your Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Submit
              </button>
            </p>
          </div>
        </form>




        <div className='contact-links '>
          <a href='https://www.github.com/TheQuentinJones'> 
            <GoMarkGithub />
          </a>
          <a href='https://www.linkedin.com/in/therealtorque/'>
            <SiLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}
