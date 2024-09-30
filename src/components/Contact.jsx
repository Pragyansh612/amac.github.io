import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className={`p-5 bg-slate-900 ${isVisible ? 'contact-animated' : ''}`}>
      <div className='mx-4 md:mx-20'>
        <h1 className='text-3xl sm:text-3xl text-slate-300 text-center font-bold poppins-bold hover:text-4xl duration-200'>
          CONTACT US
        </h1>
        <p className='mt-2 text-wrap text-center text-gray-200 poppins-regular sm:text-sm'>
          We would love to hear from you! Reach out for projects or inquiries.
        </p>
      </div>
      <div className='mx-4 md:mx-20 mt-4 text-center'>
        <h2 className='text-xl sm:text-lg text-slate-300 font-bold poppins-semibold'>Get in Touch</h2>
        <p className='mt-1 text-wrap poppins-regular sm:text-sm'>
          <strong>Email:</strong> <a href="mailto:amacstellarstudio@gmail.com" className='text-blue-500'>amacstellarstudio@gmail.com</a>
        </p>
        <p className='mt-1 text-wrap poppins-regular sm:text-sm'>
          <strong>Phone:</strong> <a href="tel:+919748224621" className='text-blue-500'>+91 9748224621</a>
        </p>
      </div>
      <div className='mx-4 md:mx-20 mt-4 text-center'>
        <p className='text-wrap poppins-regular sm:text-sm'>
          Our team is dedicated to exceptional service. We’re here to help!
        </p>
      </div>
    </div>
  );
};

export default Contact;
