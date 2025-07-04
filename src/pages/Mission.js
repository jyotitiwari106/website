import React from 'react';
import teamImage from '../assets/mission/about-3.jpg';
import freelancerImage from '../assets/mission/about-4.jpg';
import bg from '../assets/mission/about-shape2.png';

const Mission = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 md:px-10">
        
        {/* ─── LEFT SIDE: Images ───────────────────── */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <img
              src={teamImage}
              alt="Team working"
              className="rounded-xl w-full sm:w-1/2 object-cover max-h-[350px]"
            />
            <img
              src={freelancerImage}
              alt="Freelancer working"
              className="rounded-xl w-full sm:w-1/2 object-cover max-h-[350px]"
            />
          </div>
        </div>

        {/* ─── RIGHT SIDE: Text ────────────────────── */}
        <div className="w-full lg:w-1/2">
          <p className="text-blue-600 font-semibold uppercase mb-3 tracking-wide text-sm sm:text-base">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Highly Tailored IT Design, <br />
            Management & Support Services.
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
            Accelerate innovation with world-class tech teams. We’ll match you to an
            entire remote team of incredible freelance talent for all your software
            development needs.
          </p>

          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Accelerate innovation with world-class tech teams. We help
                businesses elevate their value.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Custom Code</h4>
              <p className="text-gray-600 text-sm sm:text-base">
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
