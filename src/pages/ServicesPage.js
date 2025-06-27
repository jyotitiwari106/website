import React, { useState } from 'react';
import bg from '../assets/About/page-banner.jpg';
import Project from './project';
import PricingCard from './PricingCard';

const ServicesPage = () => {
     const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <div className="flex flex-col items-center">
      {/* Banner Section */}
      <div className="relative w-full h-[550px]">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover pt-20 transform hover:scale-105 transition-transform duration-[3000ms]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
        </div>
      </div>

      {/* Project Component Centered */}
      <div className="w-full max-w-7xl px-4">
        <Project />
       
      </div>
    </div>
  );
};

export default ServicesPage;
