// src/components/TopServicesSection.jsx

import React from 'react';
import bg from '../../assets/Services/sbg.jpg'

const TopServicesSection = () => {
  return (
    <div className='flex flex-col w-full'>
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center !w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          OUR TOP SERVICES
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          At SkillForge Technologies, our groundbreaking services are backed by a stellar team that turns
          business growth aspirations into reality. Guided by innovation and a positive mindset,
          our team's unique viewpoints lead the way. Meet our dedicated members and witness the
          embodiment of our core values in action.
        </p>
      </div>
      
    </div>
    <div className='text-center flex flex-col '>
        <p className='text-4xl font-bold p-8 text-blue-600'>Empowering Your Business with Our Premier Services</p>
        <p className='text-xl'>Elevate your business operations with us! From strategic planning to efficient software solutions, we<br/>ensure quality and timely delivery. Let our experts handle the complexities, so you can focus on growth.</p>
        
        </div>
    </div>
  );
};

export default TopServicesSection;
