import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, Intro, Contact } from './components';

const App = () => {
  const introRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-30'
          src='./bg1.mp4'
          autoPlay
          muted
          loop
        />
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar introRef={introRef} contactRef={contactRef} />
          <Hero />
          <div ref={introRef}>
            <Intro />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
