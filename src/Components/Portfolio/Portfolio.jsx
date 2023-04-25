import React from 'react';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id='/projects'style={{ minHeight: '80vh'}}>

      <h1 className='has-text-centered is-size-2'>Projects</h1>
      <div className='is-flex is-flex-direction-row'>
        <div className='cardholder' style={{ height: '30rem', width: '20rem', marginTop: '6rem', marginLeft: '6rem'}}>
          <a href='https://workhive1.herokuapp.com'>
            <div className="card" style={{ height: '20rem', width: '20rem'}}>
              <div className="card-image">
                <figure className="image is-6by5">
                  <img style={{ height: '15rem', width: 'auto'}}src="https://i.postimg.cc/nLY8ZVDq/Screenshot-Work-Hive.jpg" alt="Placeholder" />
                </figure>
              </div>
              <div className="card-content" style={{}}>
                <div className="media">

                  <div className="media-content">
                    <p className="title is-6">WorkHive</p>
                    <p className="subtitle is-7">Professional Social Networking App</p>            
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className='cardholder' style={{ height: '30rem', width: '20rem', marginTop: '6rem', marginLeft: '6rem'}}>
          <a href='https://fitness-4u.herokuapp.com'>
            <div className="card" style={{ height: '20rem', width: '20rem'}}>
              <div className="card-image">
                <figure className="image is-6by5">
                  <img style={{ height: '15rem', width: 'auto'}}src="https://i.postimg.cc/sxqr0nkX/Fitness4-U-screenshot.jpg" alt="Placeholder" />
                </figure>
              </div>
              <div className="card-content" style={{}}>
                <div className="media">

                  <div className="media-content">
                    <p className="title is-6">Fitness4U</p>
                    <p className="subtitle is-7">Fitness Workout Tracker App</p>            
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className='cardholder' style={{ height: '30rem', width: '20rem', marginTop: '6rem', marginLeft: '6rem'}}>
          <a href='https://boy-son.github.io/Moving-Parts/'>
            <div className="card" style={{ height: '20rem', width: '20rem'}}>
              <div className="card-image">
                <figure className="image is-6by5">
                  <img style={{ height: '15rem', width: 'auto'}}src="https://i.postimg.cc/SxrymG8Z/Screenshot-Moving-Parts.jpg" alt="Placeholder" />
                </figure>
              </div>
              <div className="card-content" style={{}}>
                <div className="media">

                  <div className="media-content">
                    <p className="title is-6">MovingParts</p>
                    <p className="subtitle is-7">HomeSale and Job Search App</p>            
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
