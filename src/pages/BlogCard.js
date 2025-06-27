import React from 'react';
import { FaUser, FaComment } from 'react-icons/fa';

const BlogCard = ({ image, date, month, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt="Blog" className="w-full h-64 object-cover" />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 py-1 rounded-md text-center shadow-md">
          <div className="text-xl font-bold leading-none">{date}</div>
          <div className="text-xs">{month}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
          <span className="flex items-center gap-1">
            <FaUser className="text-blue-600" />
            Andrew Paker
          </span>
          <span className="flex items-center gap-1">
            <FaComment className="text-blue-600" />
            0 Comments
          </span>
        </div>
        <h2 className="text-lg font-semibold text-black mb-2">{title}</h2>
        <a href="/blogdetails" className="text-blue-600 text-sm font-medium hover:underline">
          Read Full →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
