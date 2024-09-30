import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ introRef, skillsRef, contactRef }) => {
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
    ref.current.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex items-center py-4 px-5 md:px-10 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-zinc-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <style>
        {`
          @font-face {
            font-family: 'Carilliantine';
            src: url('./font/fonts/fonnts.com-Carilliantine_Solid.otf') format('opentype');
          }
          .custom-font {
            font-family: 'Carilliantine', sans-serif;
          }
        `}
      </style>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="text-3xl md:text-4xl font-bold cursor-pointer custom-font text-purple-800 no-underline">
            Amac Stellar Studio
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:gap-10 mx-5">
          <button
            onClick={() => scrollToSection(introRef)}
            className="text-white hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="text-white hover:text-yellow-400 transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-white hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white focus:outline-none pr-5" 
          >
            {toggle ? (
              <span>&#10005; {/* Close Icon */}</span>
            ) : (
              <span>&#9776; {/* Hamburger Icon */}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="absolute top-16 right-5 bg-zinc-900 p-5 rounded-md shadow-lg transition-transform transform-gpu">
          <button
            onClick={() => scrollToSection(introRef)}
            className="block text-white my-2 text-lg"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="block text-white my-2 text-lg"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="block text-white my-2 text-lg"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
