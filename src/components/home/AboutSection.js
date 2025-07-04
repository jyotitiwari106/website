import React from 'react';
import { FaPlay } from 'react-icons/fa';
import aboutBg from '../../assets/TECW0009.jpg'; // background image
import aboutMain from '../../assets/image.png'; // overlay image

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Text Content */}
        <div className="space-y-6">
          <span className="text-blue-700 font-semibold tracking-widest text-sm md:text-base">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Highly Tailored IT Design,<br />Management & Support Services.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Accelerate innovation with world-class tech teams. We’ll match you to an entire
            remote team of incredible freelance talent for all your software development needs.
          </p>

          {/* Signature + Call */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t mt-6">
            <div className="flex flex-col">
              <span className="text-blue-700 font-signature text-2xl">Alen Sin</span>
              <span className="font-semibold text-gray-800">Alen Morno sin</span>
              <span className="text-gray-500 text-sm">CEO, Techmax</span>
            </div>
            <div className="border-l h-12 mx-4 hidden sm:block"></div>
            <div>
              <p className="text-gray-500 text-sm">Call to ask any question</p>
              <a href="tel:01234567890" className="text-blue-600 font-bold text-lg">0123-456-7890</a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full flex justify-center items-center">
          {/* Background Image */}
          <img
            src={aboutBg}
            alt="background"
            className="rounded-xl !mx-60 w-full object-cover"
          />
          {/* Play Button */}
          <div className="absolute md:top-8 md:left-2 bg-white p-4 rounded-full shadow-md">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-105 transition">
              <FaPlay />
            </div>
          </div>
          {/* Foreground Image */}
          <div className="absolute top-40 -left-12 hidden md:block  bg-white p-2 rounded-xl shadow-lg w-[300px] md:w-[360px]">
            <img
              src={aboutMain}
              alt="overlay"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;  