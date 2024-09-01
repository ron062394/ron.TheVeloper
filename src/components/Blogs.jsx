import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaYoutube, FaTwitter } from 'react-icons/fa';

const BlogPost = ({ title, platform, link, date, excerpt }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 mb-6"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="flex items-center mb-2">
      {platform === 'Medium' && <FaMedium className="text-black mr-2" />}
      {platform === 'YouTube' && <FaYoutube className="text-red-600 mr-2" />}
      {platform === 'Twitter' && <FaTwitter className="text-blue-400 mr-2" />}
      <span className="text-sm text-gray-600">{platform} • {date}</span>
    </div>
    <p className="text-gray-700 mb-4">{excerpt}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Read more
    </a>
  </motion.div>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // You might want to add some feedback for the user here
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
      <p className="mb-4">Get the latest tutorials, tips, and tricks directly in your inbox!</p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

const FeaturedVideo = () => (
  <div className="mb-12 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-video rounded-lg shadow-lg"
      ></iframe>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-4">Featured Video: Building Modern Web Applications</h3>
      <p className="text-gray-600 mb-4">
        In this comprehensive tutorial, I dive deep into the process of building cutting-edge web applications using the latest technologies and best practices. We'll explore everything from setting up your development environment to deploying your finished product. You'll learn about modern JavaScript frameworks, responsive design techniques, state management, and how to integrate with backend APIs. Whether you're a beginner looking to get started or an experienced developer wanting to refine your skills, this video has something for everyone. Join me as we embark on this exciting journey through the world of modern web development!
      </p>
      <a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Watch the full video
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const blogPosts = [
    {
      title: "10 React Hooks You Should Know",
      platform: "Medium",
      link: "https://medium.com/your-post-link",
      date: "June 15, 2023",
      excerpt: "Dive into the world of React Hooks and learn how to supercharge your components..."
    },
    {
      title: "Building a REST API with Node.js and Express",
      platform: "YouTube",
      link: "https://youtube.com/your-video-link",
      date: "May 28, 2023",
      excerpt: "Follow along as we build a fully functional REST API using Node.js and Express..."
    },
    {
      title: "5 CSS Tricks to Improve Your Layouts",
      platform: "Twitter",
      link: "https://twitter.com/your-tweet-link",
      date: "June 5, 2023",
      excerpt: "Check out these 5 CSS tricks that will take your layouts to the next level..."
    },
  ];

  return (
    <section id="blogs" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest from the Blog
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my latest articles, tutorials, and insights on web development and technology.
        </motion.p>
        
        <FeaturedVideo />
        
        <h3 className="text-3xl font-bold mb-6">Recent Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Blogs;
