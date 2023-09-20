import React from 'react';
import './Portfolio.css'
import  IMG1  from '../../Assets/Screenshot-WorkHive.jpg'
import  IMG2  from '../../Assets/Fitness4U-screenshot.jpg'
import  IMG3  from '../../Assets/Screenshot-MovingParts.jpg'
import IMG4 from '../../Assets/screenshot-tech-roundup.jpg'
import IMG5 from '../../Assets/screenshot-WeatherApp.jpg'

const portfolioData = [

  {
    id: 1,
    image: IMG1,
    title: 'SocialHive',
    github: 'https://the-social-hive-2f9b38244e14.herokuapp.com/',
    livesite: 'https://workhive1.herokuapp.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fitness4U',
    github: 'https://github.com/Henrich77/Fitness4u',
    livesite: 'https://fitness-4u.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MovingParts',
    github: 'https://github.com/boy-son/Moving-Parts',
    livesite: 'https://boy-son.github.io/Moving-Parts/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tech Roundup',
    github: 'https://github.com/TheQuentinJones/python-newfeed',
    livesite: 'https://tech-roundup.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'WeatherApp',
    github: 'https://github.com/TheQuentinJones/WeatherApp',
    livesite: 'https://thequentinjones.github.io/WeatherApp/'
  }

]



export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({ id, image, title, github, livesite}) => {
            return (
              <article key={ id } className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={ image } alt={ title } />
              </div>
              <h3>{ title }</h3>
              <div className="portfolio__item-cta">
                <a href={ github } className='btn' target='_blank'>Github</a>
                <a href={ livesite } className='btn btn-primary' target='_blank'>Live Website</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
}
