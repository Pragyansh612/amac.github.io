// BackgroundWrapper.js
import React from 'react';

const BackgroundWrapper = ({ children }) => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  const gradientBackground = {
    position: 'relative',
    zIndex: 0,
    background: 'linear-gradient(135deg, #0c1f3f, #4b2c91, #3f1b7e)',
    height: '100vh',
  };

  return (
    <div style={gradientBackground}>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-50'
        src='./bg1.mp4'
        autoPlay
        muted
        loop
      />
      <div style={overlayStyle} />
      {children}
    </div>
  );
};

export default BackgroundWrapper;
