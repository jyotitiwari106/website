// BlogSection.js
import React from 'react';
import BlogCard from './BlogCard';
import img1 from '../assets/blog/blog-1.jpg';
import img2 from '../assets/blog/blog-2.jpg';
import img3 from '../assets/blog/blog-3.jpg';

const BlogPage = () => {
  const blogData = [
    {
      image: img1,
      date: '08',
      month: 'Aug',
      title: 'How to become a successful businessman',
    },
    {
      image: img2,
      date: '10',
      month: 'Aug',
      title: 'Who Needs Extract Value From Data?',
    },
    {
      image: img3,
      date: '12',
      month: 'Aug',
      title: 'Easy and Most Powerful Server and Platform.',
    },
    
      {image: img1,
      date: '08',
      month: 'Aug',
      title: 'How to become a successful businessman',
    },
    {
      image: img2,
      date: '10',
      month: 'Aug',
      title: 'Who Needs Extract Value From Data?',
    },
    {
      image: img3,
      date: '12',
      month: 'Aug',
      title: 'Easy and Most Powerful Server and Platform.',
    },
  ];

  return (
    <div className="flex justify-center items-center pt-28 container px-4 py-10">
      <div className="grid md:grid-cols-3 gap-8  max-w-7xl">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
