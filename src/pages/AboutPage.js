import React, { useEffect } from 'react';
import VisionMissionSection from '../components/About/VisionMissionSection.js';
import Client from '../components/About/Client.js';
import PrincipleValues from '../components/About/Principle.js';



const AboutPage = () => {
  
  return (
    <div className='relative'>
     
   <div className="pt-16 md:pt-20 lg:pt-16">
     <div className='z-50'>
      <VisionMissionSection/>

     <Client/>  
     <PrincipleValues/>  
     
    </div>
    </div>
    </div>
  );
};

export default AboutPage; 