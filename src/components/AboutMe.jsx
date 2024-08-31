import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGraduationCap, FaBriefcase, FaChevronRight, FaDownload, FaCertificate } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutMe = () => {
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
    <motion.section 
      id="about"
      className="bg-gradient-to-br from-blue-100 to-purple-100 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-extrabold text-center text-gray-800 mb-16 relative"
          variants={itemVariants}
        >
          My Journey
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
        </motion.h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <FaGraduationCap className="text-5xl text-blue-600 mb-6 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold text-gray-700">Bachelor of Science in Business Administration</p>
                    <p className="text-gray-600">Nueva Ecija University of Science and Technology</p>
                    <p className="text-blue-500">2013 - 2017</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Information Technology</p>
                    <p className="text-gray-600">Gapan Computer & Technical Institute</p>
                    <p className="text-blue-500">2011 - 2013</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <FaLaptopCode className="text-5xl text-green-600 mb-6 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Experience</h3>
                <div>
                  <p className="font-semibold text-gray-700">Software Engineering Bootcamp Instructor & Team Lead</p>
                  <p className="text-gray-600">Onecodecamp, Sydney, Australia (Remote)</p>
                  <p className="text-green-500">April 2023 - August 2024</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaChevronRight className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Leading and mentoring aspiring software engineers</span>
                    </li>
                    <li className="flex items-start">
                      <FaChevronRight className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Developing and implementing curriculum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <FaBriefcase className="text-5xl text-purple-600 mb-6 group-hover:animate-spin" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Managerial Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold text-gray-700">System Administrator & Department Head</p>
                    <p className="text-gray-600">Supersteel Metal Systems, Nueva Ecija, Philippines</p>
                    <p className="text-purple-500">March 2020 - May 2021</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Officer-in-Charge</p>
                    <p className="text-gray-600">Max's Restaurant, The Yellowbeak Inc.</p>
                    <p className="text-purple-500">Aug 2019 - Feb 2020, Jun 2021 - Nov 2022</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Assistant Restaurant Manager</p>
                    <p className="text-gray-600">Jollibee Foods Corporation</p>
                    <p className="text-purple-500">July 2017 - May 2019</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <FaCertificate className="text-5xl text-yellow-600 mb-6 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications & Trainings</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold text-gray-700">OneCodeCamp Developer Training Bootcamp</p>
                    <p className="text-yellow-500">Completed 2023</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Certified Civil Service Passer - Professional</p>
                    <p className="text-yellow-500">Awarded 2017</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Computer & Hardware Servicing (NCII)</p>
                    <p className="text-yellow-500">Completed 2023</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Best in Thesis | SMS Votes Tally System</p>
                    <p className="text-yellow-500">Awarded 2013</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-700">Programmer of the year</p>
                    <p className="text-gray-600">Gapan Computer & Technical Institute</p>
                    <p className="text-yellow-500">Awarded 2013</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            As a fullstack developer with a diverse background spanning technology, business administration, and management, 
            I bring a unique perspective to every project. My multifaceted experience enables me to craft innovative solutions 
            that are not only technically robust but also strategically aligned with business objectives.
          </p>
          <motion.a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 text-lg font-semibold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2 group-hover:animate-bounce" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
