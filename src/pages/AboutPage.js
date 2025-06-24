import React from 'react';

import TeamSection from '../components/home/TeamSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutProgressSection from '../components/home/AboutProgressSection';
import ReasonPage from './ReasonPage';
import StatePage from './StatePage';
import Mission from './Mission';
import bg from '../assets/About/page-banner.jpg';

const AboutPage = () => {
  return (
    <div className='relative'>
      <img src={bg} alt=''className='inset-0 w-full h-full object-cover pt-20 transform hover:scale-105 !h-[500px] transition-transform duration-3000 '/>
      <div className='absolute inset-0 text-black flex justify-center items-center'>
        <p className='flex justify-center items-center absolute inset-0'>About Us</p> </div>
     
   <div className="pt-16 md:pt-20 lg:pt-24">
     <div className='z-50'>
      <Mission/>
      <StatePage/>
      <ReasonPage/>
      <AboutProgressSection/>
      <TeamSection />
      <TestimonialsSection />
    </div>
    </div>
    </div>
  );
};

export default AboutPage; 