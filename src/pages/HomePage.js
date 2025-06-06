import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

import TeamSection from '../components/home/TeamSection';
import BlogSection from '../components/home/BlogSection';
import AboutProgressSection from '../components/home/AboutProgressSection';
import ReasonSection from '../components/home/ReasonSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ReasonSection />
      <AboutProgressSection />
      <TestimonialsSection />
      <BlogSection />
 
    </div>
  );
};

export default HomePage; 