import React from 'react';

export default function AboutMe() {
  return (
    <div style={{ height: '95vh'}}>
      <h1 className='is-size-1 has-text-centered has-text-link' style={{ margin: '2rem'}}>About the Engineer</h1>
      <div className='columns'>
        <div className='column is-flex is-align-content-center' style={{ padding: '7rem'}}>
          <p>
            Hello world! My name is Quentin and I am a budding software engineer. I have a diverse background that includes sales and customer service as 
            well as some federal work force experinece.
          </p>
        </div>
        <div className='column'>
          <img src='https://i.postimg.cc/43x1qK8q/noback22.png' alt='the engineer'></img>
        </div>
      </div>
    </div>
  );
}
