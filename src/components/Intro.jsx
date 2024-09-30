import React, { useState, useRef, useEffect } from 'react';
import './Intro.css';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Consider screens <= 768px as mobile
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};

const Intro = ({ skillsRef }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it appears
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
  ]

  return (
    <div ref={scrollRef} className={`mt-5 intro-container ${isVisible ? 'pop-up' : ''}`}>
      <div className='mx-5 md:mx-20'>
        <h1 className={`text-center poppins-bold duration-200 ${isMobile ? 'text-3xl' : 'text-5xl'} text-slate-300 hover:text-6xl`}>
          INTRODUCTION
        </h1>
        <p className={`mt-5 text-center poppins-regular text-wrap ${isMobile ? 'text-base' : 'text-lg'}`}>
        Welcome to Amac Stellar Studio – Where Creativity Meets Precision <br />
          At Amac Stellar Studio, we don’t just create visuals – we craft immersive experiences that captivate, inspire, and engage. As leaders in Graphic Design, Animation, VFX, Gaming, Video Editing, and Motion Graphics, we specialize in transforming your boldest ideas into extraordinary realities. Whether it’s the elegance of 2D animation or the intricate detail of 3D environments, our skilled team of artists, animators, and designers blend creativity and cutting-edge technology to deliver world-class results.
          <br />
          <br />
          We pride ourselves on using industry-leading software like Adobe Creative Suite, Autodesk Maya, Blender, Unity, Unreal Engine, and more, ensuring that every project is executed with precision and technical excellence. Our commitment to timely delivery and staying on schedule is as strong as our dedication to quality, making us the perfect partner for businesses that need both creative brilliance and reliability.
          <br />
          <br />
          At Amac Stellar Studio, we handle everything from conceptualization to final post-production, offering *end-to-end solutions tailored to meet your specific needs. Whether it's immersive gaming environments, captivating commercials, or dynamic motion graphics, we fuse artistic vision with the power of technology to bring your story to life.
          <br />
          <br />
          We understand that deadlines are crucial in today’s fast-paced world, which is why our workflow is designed to meet them without compromising on quality. With every project, our team ensures smooth communication, detailed planning, and efficient execution – delivering *on time, every time.
          From immersive gaming environments and captivating commercials to dynamic motion graphics and flawless video editing, we provide end-to-end services that elevate your project. With a blend of traditional craftsmanship and cutting-edge technology, our work reflects precision, creativity, and dedication to excellence. Let us bring your ideas to life and help your vision resonate with your audience.
          <br />
          <br />
          Partner with Amac Stellar Studio today, and let’s create something extraordinary together!
        </p>
      </div>

      <div className="animated-line"></div>

      <div ref={skillsRef} className='skills-section mt-10'>
        <h1 className={`text-center poppins-bold duration-200 ${isMobile ? 'text-2xl' : 'text-3xl'} text-slate-300 mx-5 md:mx-20 mt-10 hover:text-4xl`}>
          Our Skills
        </h1>

        <div className="flex justify-center gap-5 flex-wrap mt-5 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`service-card ${hoveredSkill === index ? 'expanded' : ''}`}
              onMouseEnter={() => !isMobile && setHoveredSkill(index)}
              onMouseLeave={() => !isMobile && setHoveredSkill(null)}
              onClick={() => isMobile && setHoveredSkill(hoveredSkill === index ? null : index)}
            >
              <h1 className={`text-white font-bold p-2 poppins-semibold ${isMobile ? 'text-sm' : 'text-xl'}`}>{skill.title}</h1>
              <div className={`description poppins-regular ${hoveredSkill === index ? 'visible' : ''}`}>
                {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-5 md:mx-20'>
        <p className={`mt-10 text-center poppins-regular text-wrap mb-2 ${isMobile ? 'text-base' : 'text-lg'}`}>
        Our team is dedicated to providing exceptional service and support. Don’t hesitate to reach out—we’re here to help turn your ideas into reality!
        </p>
      </div>
    </div>
  );
};

export default Intro;
