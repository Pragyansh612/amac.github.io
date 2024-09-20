import React from 'react';
import { RobotCanvas } from './canvas';

const Hero = () => {
  <style>
    {`
          @font-face {
            font-family: 'Carilliantine';
            src: url('./font/fonts/fonnts.com-Carilliantine_Solid.otf') format('opentype');
          }

          .custom-font {
            font-family: 'Carilliantine', sans-serif; /* Fallback to sans-serif */
          }
        `}
  </style>
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="text-white mx-20 text-xl">
          <div className=' flex gap-3'>
            <h1 className="text-4xl mt-2 poppins-semibold">Welcome to </h1>
            <h1 className="text-5xl custom-font font-bold text-purple-800">Amac Stellar Studio</h1>
          </div>
          <p className="mt-2 text-white-100 poppins-semibold">
            Where Creativity Meets Precision
          </p>
        </div>
      </div>
      <RobotCanvas />
    </section>
  );
};

export default Hero;
