import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X ,Moon, Sun, Github, Linkedin, Mail, User, Code, ChevronLeft, ChevronRight, MessageSquare, Send, AtSign} from 'lucide-react';
import Slider from "react-slick";
import { Dialog } from "@headlessui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const hobbiesAndSkills = [
    {
      title: "Piano",
      image: "/Rock And Roll GIF by Rock & Roll Hall of Fame.gif",
      description: "Playing Piano is always a passion of mine."
    },
    {
      title: "Coding",
      image: "/Work Coding GIF by Scaler.gif",
      description: "Developing web and mobile applications."
    },
    {
      title: "Gaming",
      image: "/First Person Shooter Gun GIF by Apogee Entertainment.gif",
      description: "Enjoying FPS and strategy games."
    }
  ];  

  const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-gray-900/80 dark:bg-gray-100/80 text-white dark:text-black p-3 sm:p-4 rounded-full shadow-xl z-10 transition-all duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <ChevronLeft size={24} />
    </button>
  );
  
  const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-gray-900/80 dark:bg-gray-100/80 text-white dark:text-black p-3 sm:p-4 rounded-full shadow-xl z-10 transition-all duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <ChevronRight size={24} />
    </button>
  );  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0); 
  
  const openModal = (index: number) => {
    setSelectedImageIndex(index);  
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects[0].images.length - 1));
  };
  
  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < projects[0].images.length - 1 ? prevIndex + 1 : 0));
  };
  
  const projects = [
    {
      title: "Student Management System",
      description: "A full-stack application for managing student records. I was assinged to the billing system of this project.",
      images: [
        "/project-1.png",
        "/project-1.1.png",
        "/project-1.2.png",
        "/project-1.3.png",
        "/project-1.4.png",
      ],
      languages: ["JavaScript", "PHP", "MySQL"],
    },
  ];

  const handleCloseMenu = () => {
    setTimeout(() => setMenuOpen(false), 10);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors">
      <div className="w-full max-w-[95%] sm:max-w-[90%] mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-20 py-3">
        
        {/* Logo */}
        <a href="#home" className="flex items-center cursor-pointer">
          <motion.img
            src="/IMG_2551.PNG"
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -3 }}
            className="max-w-[85px] sm:max-w-[100px] md:max-w-[115px] h-auto flex-shrink-0 transition-all duration-300 
                      dark:invert dark:brightness-100 dark:contrast-200 hover:filter hover:brightness-110"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About Me" },
            { href: "#contact", label: "Contact Me" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-purple-400 transition-all"
            >
              {item.label}
            </motion.a>
          ))}

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { href: "https://github.com/Penuelluke", icon: <Github />, color: "hover:bg-gray-900 dark:hover:bg-gray-700" },
              { href: "https://www.linkedin.com/in/james-fanuel-n-damaso-0b71a1359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <Linkedin />, color: "hover:bg-blue-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all 
                            duration-300 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${social.color} 
                            hover:text-white shadow-md hover:shadow-lg`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm"
        aria-label="Toggle menu"
      >
        <motion.div
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          className="relative w-5 h-5 flex flex-col justify-center items-center"
        >
          {/* Top Line */}
          <motion.span
            variants={{
              closed: { rotate: 0, y: -6, width: "18px" },
              open: { rotate: 45, y: 0, width: "18px" },
            }}
            className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
          {/* Middle Line (Hidden when menu opens) */}
          <motion.span
            variants={{
              closed: { opacity: 1, width: "18px" },
              open: { opacity: 0 },
            }}
            className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
            transition={{ duration: 0.1, ease: "easeInOut" }}
          ></motion.span>
          {/* Bottom Line */}
          <motion.span
            variants={{
              closed: { rotate: 0, y: 6, width: "18px" },
              open: { rotate: -45, y: 0, width: "18px" },
            }}
            className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
        </motion.div>
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */} 
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-[71px] right-0 w-full h-[calc(100vh-70px)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm flex flex-col justify-center z-40 shadow-xl"
          >
            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-8 px-6">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Me" },
                { href: "#projects", label: "View Work" },
                { href: "#contact", label: "Contact Me" },
                { 
                  href: "/public/DAMASO - RESUME.pdf",
                  label: "Download Resume", 
                  download: true, 
                  extraClasses: "text-blue-600 dark:text-purple-400 font-bold" 
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  download={item.download}
                  className={`text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-all ${
                    item.extraClasses || ""
                  }`}
                  onClick={handleCloseMenu}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              {[
                { href: "https://github.com/Penuelluke", icon: <Github />, label: "GitHub" }, 
                { href: "https://www.linkedin.com/in/james-fanuel-n-damaso-0b71a1359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <Linkedin />, label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full
                          bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                          hover:bg-blue-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white
                          shadow-md transition-all duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + 0.1 * index, duration: 0.3 }}
                  whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="mx-auto mt-10 p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              whileHover={{ rotate: 15 }}
            >
              {darkMode ? 
                <Sun className="w-6 h-6 text-yellow-500" /> : 
                <Moon className="w-6 h-6 text-gray-700" />
              }
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 py-24 transition-all duration-300 dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-white">
        <div className="w-full max-w-[92%] sm:max-w-[85%] mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-16 lg:gap-24"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[38rem] md:h-[32rem] rounded-full md:rounded-[45%] overflow-hidden border-4 
                        border-purple-500 shadow-xl shadow-purple-300 dark:shadow-purple-700"
            >
              <img src="/profile_pic.jpg" alt="James Fanuel N. Damaso" className="w-full h-full object-cover" />
            </motion.div>

            {/* Text Content */}
            <div className="w-full max-w-2xl md:max-w-3xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-10 drop-shadow-lg 
                            dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
                Hi, I'm <br className="md:hidden" /> James Fanuel N. Damaso
              </h1>

              {/* Animated Text */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-600 dark:text-gray-300">
                <TypeAnimation
                  sequence={[
                    "I am a Developer",
                    2000,
                    "I am a Designer",
                    2000,
                    "I am a Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-blue-500 dark:text-blue-300"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8">
                <motion.a
                  whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-4 border-2 rounded-full text-lg sm:text-xl font-semibold 
                            border-gray-700 dark:border-purple-500 text-gray-700 dark:text-purple-400 
                            hover:bg-gray-200 dark:hover:bg-purple-900/20 transition-all"
                >
                  View Work
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="public/DAMASO - RESUME.pdf"
                  download
                  className="px-8 py-4 border-2 rounded-full text-lg sm:text-xl font-semibold 
                            border-orange-500 text-orange-500 
                            hover:bg-orange-500 hover:text-white transition-all"
                >
                  Download Resume
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start mt-10 gap-8 sm:gap-10">
                {[
                  { href: "https://github.com/Penuelluke", icon: <Github />, color: "hover:bg-gray-900 dark:hover:bg-gray-700" },
                  { href: "https://www.linkedin.com/in/james-fanuel-n-damaso-0b71a1359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <Linkedin />, color: "hover:bg-blue-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition-all 
                                duration-300 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${social.color} 
                                hover:text-white shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Subtle Glowing Effects (Only in Dark Mode) */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-48 sm:w-60 h-48 sm:h-60 
                          bg-purple-500 opacity-25 blur-3xl rounded-full animate-pulse hidden dark:block"></div>
          <div className="absolute bottom-10 left-1/4 w-36 sm:w-44 h-36 sm:h-44 bg-blue-500 opacity-20 
                          blur-3xl rounded-full animate-pulse hidden dark:block"></div>
        </div>
      </section>
     
      {/* About Section */}
      <section id="about" className="py-32 px-6 sm:px-12 bg-white dark:bg-gray-800">
        <div className="w-full mx-auto shadow-xl rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-6 sm:px-12"
        >
          <User className="w-24 h-24 mx-auto mb-6 text-purple-600" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 dark:text-white">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Discover the hobbies that shape who I am and bring joy to my life.
          </p>
        </motion.div>

          {/* Slider Section */}
          <div className="max-w-7xl mx-auto mt-16 relative">
            <Slider {...settings}>
              {hobbiesAndSkills.map((item, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 text-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-auto rounded-full border-4 border-gray-400 dark:border-gray-600 w-36 h-36 sm:w-48 sm:h-48 object-cover mb-6 shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold dark:text-white mb-3">{item.title}</h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <Code className="w-12 h-12 mx-auto mb-6 text-purple-600" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              My Project
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Explore the project we’ve built. This project showcases the latest technologies and a keen eye for detail.
            </p>
          </div>

          {/* Single Expanded Project */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 dark:border-gray-700 w-full max-w-[1200px] h-auto lg:h-[550px]"
            >
              {/* Project Image */}
              <div
                className="lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-[550px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={() => openModal(0)}  // Open the first image in the modal
              >
                <img
                  src={projects[0].images[0]} // Display the first image directly
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Project Description and Languages */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                  {projects[0].title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {projects[0].description}
                </p>

                {/* Languages Used */}
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {projects[0].languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-md sm:text-lg text-white bg-purple-600 px-5 sm:px-6 py-2 sm:py-3 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Modal */}
          {isOpen && (
            <Dialog
              open={isOpen}
              onClose={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300 ease-in-out"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();  // Close modal if clicked outside
              }}
            >
              <div className="relative max-w-7xl w-full transform transition-all duration-300 ease-in-out">
                {/* Modal Image */}
                <div className="relative">
                  <img
                    src={projects[0].images[selectedImageIndex]}
                    alt="Expanded Project"
                    className="w-full h-auto rounded-lg"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={goToPreviousImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </Dialog>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 mx-auto mb-6 text-purple-600" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 dark:text-white">Get in Touch</h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Message */}
            <div className="flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
                I would love to hear from you! Whether you have a question, need assistance with a project, or just want to chat, feel free to reach out. Send me a message and I'll get back to you as soon as possible.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
                If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <AtSign className="w-6 h-6 mr-3 text-purple-600" />
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    <a href="mailto:damasopanpan@gmail.com" className="text-purple-600 hover:text-purple-700">damasopanpan@gmail.com</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <Github className="w-6 h-6 mr-3 text-purple-600" />
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    <a href="https://github.com/panuelluke" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">panuelluke</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg dark:shadow-xl w-full"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-300 shadow-sm dark:shadow-md"
                />
              </div>
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-300 shadow-sm dark:shadow-md"
                />
              </div>
              <div className="mb-6 relative">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  rows={6} // Increased the height for larger message box
                  placeholder="Your Message"
                  className="w-full pl-10 pr-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-300 shadow-sm dark:shadow-md"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300 shadow-md flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-300">
        <p>© 2025 James Fanuel N. Damaso. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;