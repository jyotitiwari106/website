import React from 'react';
import clientImage from '../../assets/About/client.jpg';
import teamImage from '../../assets/About/team.png';
import Culture from '../../assets/About/team1.png';

const Client = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 space-y-24">
      
      {/* CLIENT SECTION */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img
          src={clientImage}
          alt="Client"
          className="w-full md:w-1/3 rounded-lg h-64 md:h-80 object-cover"
        />
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Win Together</h2>
          <h3 className="text-xl md:text-2xl text-blue-900 font-semibold mb-4">
            Our clients' success is our favourite story to tell.
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Their experiences show how much they rely on our quick solutions, and the growth we've achieved together
            stands as proof of our solid partnerships. Their stories are not just about what we've done — they're
            about how fast we've done it.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
          <h3 className="text-xl md:text-2xl text-blue-900 font-semibold mb-4">
            Our Team: The Architects of Your Success
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our team at SkillForge Technologies is made up of tech savvies, quick thinkers and hard workers who are here
            to help your business scale up. We have a mix of different skills, but we all share one goal: to make your
            business grow fast. We’re ready to tackle any challenge quickly and help you achieve success. Ready for
            your business to move faster? Reach out to us now, and let's work together to speed up your path to success.
          </p>
        </div>
        <img
          src={teamImage}
          alt="Team"
          className="w-full md:w-1/3 rounded-lg h-64 md:h-80 object-cover"
        />
      </div>

      {/* WHAT WE BRING SECTION */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img
          src={Culture}
          alt="Culture"
          className="w-full md:w-1/3 rounded-lg h-64 md:h-80 object-cover"
        />
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Bring To The Table</h2>
          <h3 className="text-xl md:text-2xl text-blue-900 font-semibold mb-4">Your success is our business</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We specialise in turning slow, manual work into fast, automated processes. We're all about using the latest
            tech to create fast-working solutions that use your existing resources to the fullest. This means you can
            expect all parts of your business to work better and faster — without needing a big team.
          </p>
        </div>
      </div>

      {/* PEOPLE AND CULTURE SECTION */}
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">People And Culture</h2>
          <h3 className="text-xl md:text-2xl text-blue-900 font-semibold mb-4">
            Our team is a pool of creative, technical, and strategic talents.
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            From the echoed mountains in the Himalayas to the beaches in South India, our team has the knee-deep
            experience in helping the business to overcome their day to day challenges. Our team consists of experts
            from various domains like Finance, HR, Legal, Administration, Operations, System Integration, Document
            Management, Process Management, Certificates Managements. Our team is also having extensive experience in
            contrasting industries like Automobile, Engineering, Travel, R and D, Information Technology, HVAC,
            Telecom, etc.
          </p>
        </div>
        <img
          src={teamImage}
          alt="Team Culture"
          className="w-full md:w-1/3 rounded-lg h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Client;
