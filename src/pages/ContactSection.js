import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import bgimage from '../assets/Home.jpg'

const ContactSection = () => {
  return (
    <section className="pt-44 bg-primary bg-opacity-5">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className=" text-2xl font-bold text-blue-900">Contact Us</h1>
          <h2 className="text-4xl font-bold mt-2 mb-4">Get In Touch With Us</h2>
          <p className="text-gray">
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhoneAlt className="text-2xl text-primary  text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-gray mb-4">Call us for immediate assistance</p>
            <a href="tel:+18001234567" className="text-primary font-medium hover:text-secondary transition-colors">
              +1 (800) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope  className="text-2xl text-primary  text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-gray mb-4">Send us your inquiries anytime</p>
            <a href="mailto:info@techwix.com" className="text-primary font-medium hover:text-secondary transition-colors">
              info@techwix.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="text-2xl text-primary text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-gray mb-4">Visit our office</p>
            <address className="not-italic text-primary font-medium">
              123 Tech Street, Silicon Valley, CA 94043
            </address>
          </div>
        </div>

       <div className="relative mt-16 bg-white rounded-lg shadow-md overflow-hidden">
  {/* Background Image */}
  <img
    src={bgimage}
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  {/* Overlay Form Container */}
  <div className="relative z-10 flex justify-center items-center min-h-[600px] bg-black bg-opacity-60 p-8">
    <div className="w-full max-w-3xl bg-blue-500  bg-opacity-70 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-black text-center">
        Request a Quote
      </h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help you?"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-br from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactSection; 