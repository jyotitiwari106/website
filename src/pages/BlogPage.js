import React from 'react';
import Layout from '../components/layout/Layout';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Improve Your Cybersecurity Posture',
      author: 'Sarah Johnson',
      date: 'June 15, 2023',
      category: 'Cyber Security',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'In today\'s digital landscape, cybersecurity threats are evolving faster than ever. Learn how to protect your business with these essential strategies.'
    },
    {
      id: 2,
      title: 'The Benefits of Cloud Migration for Small Businesses',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      category: 'Cloud Services',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'Moving your operations to the cloud offers numerous advantages for small businesses, from cost savings to improved scalability.'
    },
    {
      id: 3,
      title: 'Web Development Trends to Watch in 2023',
      author: 'Alex Rodriguez',
      date: 'May 12, 2023',
      category: 'Web Development',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'From AI-powered interfaces to WebAssembly, discover the latest trends that are shaping the future of web development.'
    },
    {
      id: 4,
      title: 'How Data Analytics Can Transform Your Business',
      author: 'Emily Zhang',
      date: 'April 30, 2023',
      category: 'Data Analytics',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'Leverage the power of data analytics to gain valuable insights, make informed decisions, and drive business growth.'
    },
    {
      id: 5,
      title: 'Mobile App Development: Native vs. Cross-Platform',
      author: 'David Wilson',
      date: 'April 18, 2023',
      category: 'App Development',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'Trying to decide between native and cross-platform development for your mobile app? This comparison will help you make the right choice.'
    },
    {
      id: 6,
      title: 'IT Consulting: When and Why Your Business Needs It',
      author: 'Jennifer Moore',
      date: 'April 5, 2023',
      category: 'IT Consulting',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'Professional IT consulting services can help your business overcome technical challenges and achieve strategic goals.'
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Latest News & Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest articles, insights, and news about technology and business innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-secondary font-medium text-sm mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-bold mb-3 hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-primary font-medium hover:text-secondary transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage; 