import React from 'react';
import { RobotCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <style>
        {`
          @font-face {
            font-family: 'Carilliantine';
            src: url('./font/fonts/fonnts.com-Carilliantine_Solid.otf') format('opentype');
          }
          .custom-font { font-family: 'Carilliantine', sans-serif; }
          .fade-in { opacity: 0; animation: fadeIn 1.5s forwards; }
          @keyframes fadeIn { to { opacity: 1; } }
          .slide-in { transform: translateY(20px); opacity: 0; animation: slideIn 1.5s forwards; }
          @keyframes slideIn { to { transform: translateY(0); opacity: 1; } }
        `}
      </style>
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="text-white mx-20 text-xl">
          <div className="flex gap-3">
            <h1 className={`text-5xl mt-3 poppins-semibold fade-in`}>Welcome to</h1>
            <h1 className={`text-6xl custom-font font-bold text-purple-800 slide-in`}>Amac Stellar Studio</h1>
          </div>
          <p className={`mt-2 text-2xl text-white-100 poppins-semibold fade-in`}>
            Where Creativity Meets Precision
          </p>
        </div>
      </div>
      <RobotCanvas />
    </section>
  );
};

export default Hero;
