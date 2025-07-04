import React from 'react';

import TeamSection from '../components/home/TeamSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutProgressSection from '../components/home/AboutProgressSection';
import ReasonPage from './ReasonPage';

import bg from '../assets/About/page-banner.jpg';
import VisionMissionSection from '../components/About/VisionMissionSection.js';
import Client from '../components/About/Client.js';
import PrincipleValues from '../components/About/Principle.js';



const AboutPage = () => {
  return (
    <div className='relative'>
      {/* <div className="relative h-[550px]">
      <img src={bg} alt=''className='inset-0 w-full h-full object-cover pt-20 transform hover:scale-105 transition-transform duration-3000 '/>
      
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
        </div> */}
   <div className="pt-16 md:pt-20 lg:pt-16">
     <div className='z-50'>
      <VisionMissionSection/>

     <Client/>  
     <PrincipleValues/>  
      {/* <ReasonPage/> */}
      {/* <AboutProgressSection/> */}
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
    </div>
    </div>
    </div>
  );
};

export default AboutPage; 