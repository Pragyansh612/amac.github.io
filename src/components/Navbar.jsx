import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ introRef, contactRef }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false); // Close menu after clicking
  };

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${scrolled ? "bg-zinc-900 shadow-lg" : "bg-transparent"}`}>
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

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2 no-underline' onClick={() => window.scrollTo(0, 0)}>
          <p className=' text-4xl font-bold cursor-pointer mx-10 custom-font text-purple-800 no-underline'>Amac Stellar Studio</p>
        </Link>

        <div className='hidden md:flex gap-10 mx-10'>
          <button onClick={() => scrollToSection(introRef)} className='text-white hover:text-yellow-400 transition-colors duration-200'>About</button>
          <button onClick={() => scrollToSection(contactRef)} className='text-white hover:text-yellow-400 transition-colors duration-200'>Contact</button>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setToggle(!toggle)} className='text-white mx-5'>Menu</button>
        </div>
      </div>

      {toggle && (
        <div className='absolute top-20 right-0 bg-zinc-900 p-5 rounded-md shadow-lg'>
          <button onClick={() => scrollToSection(introRef)} className='block text-white my-2'>About</button>
          <button onClick={() => scrollToSection(contactRef)} className='block text-white my-2'>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
