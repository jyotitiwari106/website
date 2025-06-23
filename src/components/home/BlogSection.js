import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCommentAlt, FaUser } from 'react-icons/fa';
import bl1 from '../../assets/blog/blog-1.jpg';
import bl2 from '../../assets/blog/blog-2.jpg';
import bl3 from '../../assets/blog/blog-3.jpg';

const blogData = [
  {
    id: 1,
    date: "08",
    month: "Aug",
    image: bl1,
    author: "Andrew Paker",
    comments: 0,
    title: "How to become a successful businessman"
  },
  {
    id: 2,
    date: "10",
    month: "Aug",
    image: bl2,
    author: "Andrew Paker",
    comments: 0,
    title: "Who Needs Extract Value From Data?"
  },
  {
    id: 3,
    date: "12",
    month: "Aug",
    image: bl3,
    author: "Andrew Paker",
    comments: 0,
    title: "Easy and Most Powerful Server and Platform."
  }
];

const BlogSection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-white">
      <div className="container flex flex-col justify-center items-center px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-2">LATEST BLOG</p>
          <h2 className="text-4xl font-bold mb-4">From the news room</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4 rounded-xl">
          {blogData.map((blog) => (
            <div className="group" key={blog.id}>
              <div className="rounded-xl shadow-md overflow-hidden bg-white">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 text-center w-16 rounded-md z-10">
                    <div className="text-2xl font-bold">{blog.date}</div>
                    <div className="text-sm">{blog.month}</div>
                  </div>
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 gap-5 mb-3 text-sm">
                    <span className="flex items-center gap-2 text-base">
                      <FaUser className='text-blue-600' />
                      {blog.author}
                    </span>
                    <span className="flex items-center text-base gap-2">
                      <FaCommentAlt className='text-blue-600' />
                      {blog.comments} Comments
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {blog.title}
                  </h3>
                  <Link to="/blog" className="text-blue-500 font-medium inline-flex items-center">
                    READ FULL <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
