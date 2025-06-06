import React from 'react';
import bg from '../assets/State/counter-bg2.jpg'

const StatePage = () => {
  return (
    <div className="w-[90%] mx-auto my-16 ">
      <div
        className="grid grid-cols-1 md:grid-cols-4 text-white h-48 items-center text-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="p-10">
          <h2 className="text-4xl font-extrabold">354+</h2>
          <p className="mt-2 text-white text-lg">Completed Projects</p>
        </div>
        <div className="p-10">
          <h2 className="text-4xl font-extrabold">119+</h2>
          <p className="mt-2 text-white text-lg">Robotic Automation</p>
        </div>
        <div className="p-10">
          <h2 className="text-4xl font-extrabold">99%</h2>
          <p className="mt-2 text-white text-lg">Web Site Analyse</p>
        </div>
        <div className="p-10">
          <h2 className="text-4xl font-extrabold">321+</h2>
          <p className="mt-2 text-white text-lg">Clients Support Done</p>
        </div>
      </div>
    </div>
  );
};

export default StatePage;