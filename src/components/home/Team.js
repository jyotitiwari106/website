import React from "react";
import { Link } from "react-router-dom";
import team from "../../assets/tm3.jpg";
import team2 from "../../assets/tm2.jpg";
import team3 from "../../assets/tm.jpg";
import footbg from '../../assets/foot.png'
import { FaHeadset } from "react-icons/fa";

const Team = () => {
  const blogs = [
    {
      image: team3,
      date: "26",
      month: "Jun",
      title: "Machine Learning Basics Everyone Should Know",
      author: "Mark Alen",
      comments: 3,
    },
    {
      image: team,
      date: "29",
      month: "May",
      title: "The evidence on how to find the right career",
      author: "Mark Alen",
      comments: 3,
    },
    {
      image: team2,
      date: "22",
      month: "May",
      title: "Who was the first person in artificial intelligence?",
      author: "Mark Alen",
      comments: 3,
    },
  ];

  return (
    <div>
      <div className="flex flex-col pt-10 justify-center items-center">
        <p className="text-blue-700 font-bold tracking-widest uppercase text-xl">Our expert team</p>
      <p className="text-4xl font-bold ">We have world expert team</p></div>
    <div className="p-4 bg-gray-50 pt-10 px-4">
      <div className="w-[80%] mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden relative group"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={`Blog thumbnail for ${blog.title}`}
                className="w-[100vh] h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Date box stays at top-left */}
              <div className="absolute top-2 left-4 bg-blue-600 text-white px-4 py-2 rounded-md text-center z-10">
                <div className="text-2xl font-bold leading-none">{blog.date}</div>
                <div className="text-sm">{blog.month}</div>
              </div>

              {/* Overlay Content - initially hidden, shows on hover */}
             {/* Overlay Content - shown at bottom on hover */}
           <div key={index} className="bg-white rounded-xl shadow-md p-4 relative group">

             <div className="flex flex-col p-6 justify-center  bg-white  bg-opacity-70 rounded-lg  text-black overflow-auto h-52">
            <div className="flex items-center space-x-4 text-sm mb-2">
      <div className="flex items-center gap-1">
        <span className="material-icons text-base">person</span>
        <span>{blog.author}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="material-icons text-base">comment</span>
        <span>{blog.comments} Comments</span>
      </div>
    </div>

    <h3 className="text-md font-semibold mb-2 text-xl ">{blog.title}</h3>

    <Link
      to="#"
      className="text-blue-400 text-sm font-semibold hover:underline flex items-center gap-1"
    >
      READ MORE
      <span className="material-icons text-base">arrow_forward</span>
    </Link>
  </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
 

    </div>
  );
};

export default Team;
