import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, Intro, Contact } from './components';

const App = () => {
  const introRef = useRef(null);
  const contactRef = useRef(null);

  const gradientBackground = {
    position: 'relative',
    zIndex: 0,
    background: 'linear-gradient(135deg, rgba(12, 31, 63, 0.8), rgba(75, 44, 145, 0.8))',
    height: '100vh',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
    opacity: 0.5,
  };

  return (
    <BrowserRouter>
      <div style={gradientBackground}>
        <video
          style={videoStyle}
          src='./bg1.mp4'
          autoPlay
          muted
          loop
        />
        
        <div className='relative z-10'>
          <Navbar introRef={introRef} contactRef={contactRef} />
          <Hero />
          <Intro />
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
