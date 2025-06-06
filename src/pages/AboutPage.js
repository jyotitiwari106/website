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
      <img src={bg} alt=''className='pt/-20'/>
      <p className='absolute'>About Us </p>
     
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