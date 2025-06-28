import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaCommentAlt,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import img from "../assets/blog/blog-1.jpg";
import bd from "../assets/blog/bd.png";
import bd2 from "../assets/blog/image.png";
import blog from '../assets/blog/sidebar-img.jpg'
const BlogDetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 pt-28 grid grid-cols-1 lg:grid-cols-3 gap-20">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Blog Banner */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={img}
            alt="Podcast Interview"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-center px-3 py-2 rounded-lg shadow-md">
            <p className="text-xl font-bold leading-tight">08</p>
            <p className="text-xs">Aug</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 text-sm flex items-center gap-4 text-gray-500">
          <span className="flex items-center gap-1 text-blue-600 font-semibold">
            <FaCalendarAlt /> Technology / Business
          </span>
          <span className="flex items-center gap-1">
            <FaUser /> Andrew Paker
          </span>
          <span className="flex items-center gap-1">
            <FaCommentAlt /> 0 Comments
          </span>
        </div>

        {/* Title + Content */}
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 leading-tight">
          How to become a successful businessman
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Accelerate innovation with world-class tech teams. We’ll match you to an
          entire remote team of incredible freelance talent for all your software
          development needs. It’s been said a million times before, if not more,
          but technology has revolutionised our lives in ways we never expected.
          From the home to the office.
        </p>

        {/* EXTRA CONTENT - now inside Main Content */}
        <div className="mt-10">
          {/* Paragraph Block */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
              remote team of incredible freelance talent for all your software
              development needs. there’s no corner of our day-to-day lives that
              hasn’t been.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs. specializes in technological and
              IT-related services such as product engineering, warranty
              management, building cloud, infrastructure, network, etc.
            </p>
          </div>

          {/* Tags & Social Icons */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-t pt-6 border-b pb-6">
            {/* Tags */}
            <div className="flex gap-2 items-center mb-4 md:mb-0">
              <span className="font-semibold">Tags :</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  LMS
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Business
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Courses
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-blue-600 text-xl">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
            </div>
          </div>
          {/* Related Posts Navigation */}
<div className="mt-10 bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
  {/* Previous Post */}
  <div className="flex items-center gap-4 max-w-xs">
    <img
      src={bd}
      alt="prev-post"
      className="w-20 h-20 rounded-md object-cover"
    />
    <div>
      <p className="text-md font-semibold leading-snug">
        How Wireless Technology is Changing Business
      </p>
      <div className="flex items-center text-gray-500 text-sm mt-1">
        <FaCalendarAlt className="mr-2" />
        May 15, 2020
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-20 bg-gray-300"></div>

  {/* Next Post */}
  <div className="flex items-center gap-4 max-w-xs text-right">
    <div>
      <p className="text-md font-semibold leading-snug">
        How Wireless Technology is Changing Business
      </p>
      <div className="flex items-center justify-end text-gray-500 text-sm mt-1">
        <FaCalendarAlt className="mr-2" />
        May 15, 2020
      </div>
    </div>
    <img
      src={bd2}
      alt="next-post"
      className="w-20 h-20 rounded-md object-cover"
    />
  </div>
</div>

{/* Comments Section */}
<div className="mt-14">
  <h3 className="text-2xl font-bold mb-2">Comments (0)</h3>
  <p className="text-sm text-gray-500 mb-6">
    Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
  </p>

  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-gray-100 p-4 rounded-md outline-none focus:ring-2 ring-blue-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-gray-100 p-4 rounded-md outline-none focus:ring-2 ring-blue-500"
      />
    </div>
    <textarea
      placeholder="Your Message"
      rows="6"
      className="w-full bg-gray-100 p-4 rounded-md outline-none focus:ring-2 ring-blue-500"
    ></textarea>
    <button
      type="submit"
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
    >
      Submit
    </button>
  </form>
</div>

        </div>
      </div>

      {/* Sidebar */}
    
   <div className="space-y-6">
  {/* Search Box with Icon */}
  <div className="relative  mx-auto">
    <input
      type="text"
      placeholder="Write your keyword..."
      className="w-full bg-gray-100 p-3 pr-12 rounded-md outline-none focus:ring-2 shadow-xl border-4 ring-gray-500"
    />
    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>

  <h2 className="text-xl font-bold mb-4">Popular Posts</h2>

  {[1, 2, 3].map((item, index) => (
    <div key={index} className="flex items-center gap-4 p-4">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Post"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold">
          How Wireless Technology is Changing Business
        </p>
        <p className="text-xs text-gray-500">May 15, 2020</p>
      </div>
      <hr/>
    </div>
  ))}

  <div className="relative pt-10 gap-10 flex flex-col justify-center items-center p-2">
    <img src={blog} alt="" />
    <div className="gap-5 absolute flex flex-col p-6">
      <p className="text-4xl max-w-2xl text-white font-bold">The<br />leading<br />platform</p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-16 py-3.5 text-center me-2 mb-2"
      >
        Get Started
      </button>
    </div>
  </div>

  <div className="flex flex-col px-8 gap-5">
    <div className="text-2xl font-bold">Categories</div>
    <div className="text-sm flex font-bold">Technology</div>
       <div className="text-sm flex font-bold"> Innovation </div>
          <div className="text-sm flex font-bold"> Learning </div>
          <div className="text-sm flex font-bold"> Information  </div>
  </div>
   <div className="flex flex-col px-8 gap-5">
     <div className="text-2xl font-bold">Tags</div>
      <div className="flex flex-wrap gap-4">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Learning 
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Courses
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                 Business
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                 Udemy
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Online
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                Technology
                </span>
              </div>
   </div>
</div>


    </div>
  );
};

export default BlogDetailsPage;
