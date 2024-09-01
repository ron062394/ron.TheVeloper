import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaYoutube, FaTwitter, FaTiktok, FaLinkedin, FaInstagram } from 'react-icons/fa';

const BlogPost = ({ title, platform, link, date, excerpt, views }) => (
  <motion.div
    className="bg-gray-800 rounded-lg shadow-md p-6 mb-6"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <div className="flex items-center mb-2">
      {platform === 'Medium' && <FaMedium className="text-white mr-2" />}
      {platform === 'YouTube' && <FaYoutube className="text-red-600 mr-2" />}
      {platform === 'Twitter' && <FaTwitter className="text-blue-400 mr-2" />}
      {platform === 'TikTok' && <FaTiktok className="text-white mr-2" />}
      {platform === 'LinkedIn' && <FaLinkedin className="text-blue-600 mr-2" />}
      {platform === 'Instagram' && <FaInstagram className="text-pink-600 mr-2" />}
      <span className="text-sm text-gray-400">{platform} • {date}</span>
      {views && <span className="text-sm text-gray-400 ml-2">• {views} views</span>}
    </div>
    <p className="text-gray-300 mb-4">{excerpt}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      {platform === 'TikTok' || platform === 'Instagram' ? 'View post' : 'Read more'}
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
    <div className="bg-gray-700 rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-bold mb-4 text-white">Subscribe to My Newsletter</h3>
      <p className="mb-4 text-gray-300">Get the latest tutorials, tips, and tricks directly in your inbox!</p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-600 text-white"
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
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MUFx_kyl_Pg?si=4UZvXiaG4l6qekKx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full aspect-video rounded-lg shadow-lg"
      ></iframe>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-4 text-white">Featured Video: CSS Text Masking Tutorial</h3>
      <p className="text-gray-300 mb-4">
        Welcome to the world of CSS text masking! In this tutorial, discover the captivating power of CSS as we delve into creating stunning visuals through text masking. Watch as we explore the 'masked-text' class and see how it effortlessly transforms ordinary text into mesmerizing images using CSS magic. Learn step-by-step how to implement this effect, empowering you to unleash your creativity and add an artistic touch to your web designs. Dive into the realm of CSS wonders and create your own unique text image masks! Join us on this creative journey and master the art of CSS text masking today!
      </p>
      <a href="https://www.youtube.com/watch?v=MUFx_kyl_Pg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        Watch the full video
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const blogPosts = [
    {
      title: "How to Easily Center a Div Using Flex and Grid",
      platform: "TikTok",
      link: "https://www.tiktok.com/@ron.webdev/video/7309884845751045382",
      date: "December 8, 2023",
      excerpt: "Learn quick and easy techniques to center your divs using Flexbox and CSS Grid. Perfect for beginners and experienced developers alike!",
      views: "32k"
    },
    {
      title: "Unraveling the Web's Traffic Signals: HTTP Status Codes",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7132542981097041920/",
      date: "December 6, 2023",
      excerpt: "🚦 From 404 to 200 OK, these HTTP status codes are keys to troubleshooting online woes! 💻 Explore the essentials and level up your tech game."
    },
    {
      title: "UX vs UI: Crafting the Digital Experience!",
      platform: "Instagram",
      link: "https://www.instagram.com/p/C0y9Sy1L6Nc/",
      date: "December 13, 2023",
      excerpt: "🎨 Dive into the world of design contrasts. Explore the differences between UX and UI design and how they work together to create amazing digital experiences. #UXDesign #UIDesign #DesignThinking",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="blogs" className="bg-gray-900 bg-[radial-gradient(rgba(223,223,223,0.1)_1px,transparent_1px)] bg-[length:1.1rem_1.1rem] overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest from the Blog
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my latest articles, tutorials, and insights on web development and technology.
        </motion.p>
        
        <FeaturedVideo />
        
        <h3 className="text-3xl font-bold mb-6 text-white">Recent Articles</h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPost {...post} />
            </motion.div>
          ))}
        </motion.div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Blogs;
