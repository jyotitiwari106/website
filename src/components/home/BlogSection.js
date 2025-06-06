import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCommentAlt, FaUser } from 'react-icons/fa';
import bl1 from '../../assets/blog/blog-1.jpg'
import bl2 from '../../assets/blog/blog-2.jpg'
import bl3 from '../../assets/blog/blog-3.jpg'
const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-2">LATEST BLOG</p>
          <h2 className="text-4xl font-bold mb-4">From the news room</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 rounded-xl">
          {/* Blog Post 1 */}
          <div className="group">
            <div className="relative rounded-xl shadow-md">
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white  p-2 text-center w-16">
                <div className="text-2xl font-bold">08</div>
                <div className="text-sm">Aug</div>
              </div>
              <img 
                src={bl1}
                alt="Blog" 
                className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
              />
              <div className="bg-white p-8  shadow-lg absolute bottom-0  right-0  pt-5 transform translate-y-3/4 w-[90%] mx-auto left-[4%]">
                <div className="flex items-center text-gray-500 gap-5 mb-2 text-sm">
                  <span className="flex items-center mr-4 gap-2 text-base">
                    <FaUser className='text-blue-600 '/>
                    Andrew Paker
                  </span>
                  <span className="flex items-center text-base gap-2">
                   <FaCommentAlt className='text-blue-600'/>
                    0 Comments
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  How to become a successful businessman
                </h3>
                <Link to="/blog" className="text-blue-500 font-medium inline-flex items-center p-4">
                  READ FULL <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="pt-16"></div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="group">
            <div className="relative   shadow-md">
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white  p-2 text-center w-16">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">Aug</div>
              </div>
              <img 
                src={bl2} 
                alt="Blog" 
                className="w-full h-70 object-cover transition-transform duration-300 rounded-2xl group-hover:scale-105"
              />
              <div className="bg-white p-8  shadow-lg absolute bottom-0 right-0 transform translate-y-3/4 w-[90%] mx-auto left-[4%]">
                <div className="flex items-center text-gray-500 mb-2 gap-5 text-sm">
                   <span className="flex items-center mr-4 gap-2 text-base">
                    <FaUser className='text-blue-600'/>
                    Andrew Paker
                  </span>
                  <span className="flex items-center text-base gap-2">
                   <FaCommentAlt className='text-blue-600'/>
                    0 Comments
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Who Needs Extract Value From Data?
                </h3>
                <Link to="/blog" className="text-blue-500 font-medium inline-flex items-center p-4">
                  READ FULL <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="pt-16"></div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="group">
            <div className="relative   shadow-md">
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white  p-2 text-center w-16">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm">Aug</div>
              </div>
              <img 
                src={bl3} 
                alt="Blog" 
                className="w-full h-70 object-cover transition-transform  rounded-2xl duration-300 group-hover:scale-105"
              />
              <div className="bg-white p-8  shadow-lg absolute bottom-0  right-0 transform translate-y-3/4 w-[90%] mx-auto left-[4%]">
                <div className="flex items-center text-gray-500 mb-2 gap-5 text-sm">
                  <span className="flex items-center mr-4 gap-2 text-base">
                    <FaUser className='text-blue-600'/>
                    Andrew Paker
                  </span>
                  <span className="flex items-center text-base gap-2">
                   <FaCommentAlt className='text-blue-600'/>
                    0 Comments
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Easy and Most Powerful Server and Platform.
                </h3>
                <Link to="/blog" className="text-blue-500 font-medium inline-flex items-center p-4">
                  READ FULL <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="pt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 