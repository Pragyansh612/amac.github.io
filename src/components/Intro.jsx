import React, { useState, useRef, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setLineVisible(true);
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

  const skills = [
    {
      title: '2D Animation & Motion Graphics',
      description: 'Our 2D animations make projects engaging and visually appealing. We use tools like Adobe Animate and After Effects for eye-catching content.'
    },
    {
      title: '3D Animation & Modeling',
      description: 'Our 3D animation services bring characters and environments to life, using tools like Blender and Autodesk Maya to create stunning visuals and lifelike animations.'
    },
    {
      title: 'VFX (Visual Effects)',
      description: 'We create breathtaking visual effects that enhance storytelling and immerse viewers, leveraging industry-standard software and techniques.'
    },
    {
      title: 'Gaming Development & Animation',
      description: 'Our game development team designs and animates captivating gaming experiences across multiple platforms and stunning visuals.'
    },
    {
      title: 'Video Editing & Post-Production',
      description: 'Our video editing services provide polished and professional final products, enhancing your footage with effects, transitions, and sound design.'
    }
  ];

  return (
    <div ref={scrollRef} className={`mt-10 ${isVisible ? 'intro-animated' : ''}`}>
      <div className='mx-5 md:mx-20'>
        <h1 className='text-5xl text-slate-300 poppins-bold hover:text-5xl duration-250 text-center'>INTRODUCTION</h1>
        <p className='mt-5 text-wrap poppins-regular text-center'>
          At Amac Stellar Studio, we bring your ideas to life with precision, creativity, and cutting-edge technology. As a full-service studio specializing in Graphic Design, 2D/3D Animation, VFX, Gaming, Video Editing, and Motion Graphics, we push the boundaries of visual storytelling across industries. Whether it’s 2D or 3D work, we blend creativity with technology to create immersive experiences that captivate your audience.
        </p>
      </div>
      <div className={`animated-line mt-5 ${lineVisible ? 'line-visible' : ''}`}></div>
      <h1 className='text-5xl text-slate-300 mx-5 md:mx-20 mt-10 poppins-bold hover:text-5xl duration-250 text-center'>Our Skills</h1>
      <div className="flex justify-center gap-5 flex-wrap mt-5 text-center">
        {skills.map((skill, index) => (
          <div key={index} className={`service-card ${hoveredSkill === index ? 'expanded' : ''}`}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}>
            <h1 className='text-white text-xl font-bold text-wrap p-2 poppins-semibold'>{skill.title}</h1>
            <div className={`description poppins-regular ${hoveredSkill === index ? 'visible' : ''}`}>
              {skill.description}
            </div>
          </div>
        ))}
      </div>
      <div className='mx-5 md:mx-20'>
        <p className='mt-10 text-wrap poppins-regular text-center mb-2'>
          Our team is dedicated to providing exceptional service and support. Don’t hesitate to reach out—we’re here to help turn your ideas into reality!
        </p>
      </div>
    </div>
  );
};

export default Intro;
