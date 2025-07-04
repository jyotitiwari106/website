import React, { useState } from 'react';
import bg from '../assets/About/page-banner.jpg';
import Project from './project';
import PricingCard from './PricingCard';

import FeaturesTabs from '../components/Services/Featurestabs.js';

import TopServicesSection from '../components/Services/Topservices.js';

const ServicesPage = () => {
     const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <div className="flex flex-col items-center">
      {/* Banner Section */}
    <TopServicesSection/>
 <FeaturesTabs/>
      {/* Project Component Centered */}
      <div className="w-full max-w-7xl px-4">
        
       
      </div>
    </div>
  );
};

export default ServicesPage;
