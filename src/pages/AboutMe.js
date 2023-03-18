import React from 'react';

export default function AboutMe() {
  return (
    <div id='/about'style={{ height: '80vh'}}>
      <h1 className='is-size-1 has-text-centered has-text-link' style={{ margin: '2rem'}}>About the Engineer</h1>
      <div className='columns'>
        <div className='column is-flex is-align-items-center has-text-centered' style={{ padding: '7rem'}}>
          <p style={{ marginLeft: '2rem'}}>
            Hello world! My name is Quentin and I am a budding software engineer. I have a diverse background that includes sales and customer service as 
            well as some federal work force experinece. Welcome to my website. A lot of work went into this website as coding has become a passion of mine.
          </p>
        </div>
        <div className='column'>
          <img src='https://i.postimg.cc/43x1qK8q/noback22.png' alt='the engineer' style={{ height: '40rem', marginLeft: '3rem'}}></img>
        </div>
      </div>
    </div>
  );
}
