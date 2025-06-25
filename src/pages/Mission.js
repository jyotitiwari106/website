import React from 'react';
import teamImage from '../assets/mission/about-3.jpg';
import freelancerImage from '../assets/mission/about-4.jpg';
import bg from '../assets/mission/about-shape2.png';

const Mission = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* 
        1) container + mx-auto: This wraps your two‐column layout 
           and keeps it centered in the viewport. 
        2) px-4 md:px-16: horizontal padding so it doesn't touch the edges on small screens.
      */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 md:px-16">
        
        {/* ─── LEFT SIDE: Images ─────────────────────────────── */}
        {/* 
            - w-full lg:w-1/2: take full width on mobile, half on lg+ 
            - flex justify-center items-center: center the inner images themselves 
            - relative + backgroundImage: put your “shape” behind the images 
        */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* 
            Inner “flex” to hold two images side‐by‐side on md+ 
            and stacked on smaller screens 
          */}
          <div className="flex md:gap-6 justify-center items-center">
            <img
              src={teamImage}
              alt="Team working"
              className="rounded-xl :w-1/2 object-cover md:max-h-[80vh] md:pb-20"
            />
            <img
              src={freelancerImage}
              alt="Freelancer working"
              className="rounded-xl  w-1/2 object-cover md:max-h-[80vh] md:pt-20"
            />
          </div>
        </div>

        {/* ─── RIGHT SIDE: Text Content ──────────────────────── */}
        <div className="w-full lg:w-1/2">
          <p className="text-blue-600 font-semibold uppercase mb-3 tracking-wide">
            Who We Are
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Highly Tailored IT Design, <br />
            Management & Support Services.
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Accelerate innovation with world-class tech teams. We’ll match you to an
            entire remote team of incredible freelance talent for all your software
            development needs.
          </p>

          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600">
                Accelerate innovation with world-class tech teams. We help
                businesses elevate their value.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Custom Code</h4>
              <p className="text-gray-600">
                Accelerate innovation with world-class tech teams. We help
                businesses elevate their value.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
