import React, {useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
import { Home, Download, Check, AlertCircle,X, Moon, Sun, Github, Linkedin, Mail, User, Code, ChevronLeft, ChevronRight, MessageSquare, Send, AtSign} from 'lucide-react';
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
      languages: [ "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  {/* Send Message */}
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

    const serviceId = 'service_uniyr3l';
    const templateId = 'template_fzd137h';
    const publicKey = '7PIo0J_kGpdWlPEiR';
    
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSending(true);
      setError('');

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
          setIsSent(true);
          form.current?.reset();
        })
        .catch((error) => {
          console.error(error.text);
          setError('Failed to send message. Please try again later.');
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Full Page Fixed Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hidden dark:block bg-gray-900">
          {/* City Skyline Base */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-gray-900/95 to-black">
            {/* Stars Effect */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * (window.innerHeight / 2),
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                />
              ))}
            </div>

            {/* Neon Buildings */}
            <div className="absolute inset-0 flex justify-around items-end overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-1/2 w-24 mx-1"
                  style={{
                    height: `${Math.random() * 30 + 40}%`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-purple-900/30 to-transparent">
                    {/* Building Windows */}
                    {[...Array(12)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                        className="absolute w-2 h-2 bg-yellow-400/70"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Drones */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: -20,
                  y: Math.random() * window.innerHeight / 2,
                  opacity: 0.6
                }}
                animate={{
                  x: window.innerWidth + 20,
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 5
                }}
                className="absolute flex flex-col items-center"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                <div className="w-1 h-1 bg-white rounded-full mt-0.5" />
              </motion.div>
            ))}

            {/* Rain Effect */}
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: -20,
                    opacity: 0.3
                  }}
                  animate={{
                    y: window.innerHeight + 20,
                    opacity: [0.3, 0.5, 0]
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2
                  }}
                  className="absolute w-px h-10 bg-gradient-to-b from-blue-500/30 to-transparent"
                />
              ))}
            </div>

            {/* Neon Billboards */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="absolute"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${20 + i * 25}%`,
                  width: '100px',
                  height: '60px',
                  background: `linear-gradient(${Math.random() * 360}deg, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.3), rgba(255, ${Math.random() * 255}, ${Math.random() * 255}, 0.3))`
                }}
              />
            ))}

            {/* Fog Layer */}
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-blue-500/5 to-transparent"
            />
          </div>
        </div>
        
        {/* Light Mode - Modern Daylight City */}
        <div className="absolute inset-0 block dark:hidden bg-gray-50">
          {/* Sky Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-white">
            {/* Sun Effect */}
            <motion.div
              initial={{ scale: 1, y: 0 }}
              animate={{ 
                scale: [1, 1.1, 1],
                y: [-5, 5, -5]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 blur-xl opacity-80"
            />

            {/* Clouds */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0.8 }}
                animate={{ 
                  x: window.innerWidth + 100,
                  opacity: [0.8, 0.9, 0.8]
                }}
                transition={{
                  duration: 30 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3
                }}
                className="absolute"
                style={{
                  top: `${10 + i * 8}%`,
                  width: `${80 + Math.random() * 40}px`,
                  height: `${40 + Math.random() * 20}px`
                }}
              >
                <div className="w-full h-full bg-white rounded-full opacity-80 blur-sm" />
              </motion.div>
            ))}

            {/* Modern Buildings */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-20 mx-1"
                  style={{
                    height: `${Math.random() * 30 + 30}%`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-blue-100">
                    {/* Building Windows */}
                    {[...Array(15)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute w-2 h-2 bg-blue-50"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Birds */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: -50,
                  y: Math.random() * window.innerHeight / 3
                }}
                animate={{
                  x: window.innerWidth + 50,
                  y: [
                    Math.random() * window.innerHeight / 3,
                    Math.random() * window.innerHeight / 3 - 20,
                    Math.random() * window.innerHeight / 3
                  ]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2
                }}
                className="absolute"
              >
                <motion.div
                  animate={{ rotate: [-20, 20, -20] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-4 h-px bg-gray-600"
                />
              </motion.div>
            ))}

            {/* Ambient Light Effect */}
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.15, 0.1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-b from-yellow-200/20 via-transparent to-transparent"
            />
          </div>
        </div>

        {/* Camera Movement Effect */}
        <motion.div
          initial={{ z: 0 }}
          animate={{ z: [0, 50, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 transform-gpu"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <motion.img
                src="/IMG_2551.PNG"
                alt="Logo"
                className="w-16 sm:w-20 md:w-24 h-auto transition-all duration-300 
                          dark:invert dark:brightness-100 dark:contrast-200 hover:filter hover:brightness-110"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}

              {/* Social Links */}
              <div className="flex items-center gap-2 ml-2 lg:ml-4">
                {/* Dark Mode Toggle */}
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? 
                    <Sun className="w-5 h-5 text-yellow-500" /> : 
                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  }
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle (Mobile) */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? 
                  <Sun className="w-5 h-5 text-yellow-500" /> : 
                  <Moon className="w-5 h-5 text-gray-600" />
                }
              </button>
              
              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <motion.div
                  initial={false}
                  animate={menuOpen ? "open" : "closed"}
                  className="relative w-5 h-5 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: -6, width: "18px" },
                      open: { rotate: 45, y: 0, width: "18px" },
                    }}
                    className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1, width: "18px" },
                      open: { opacity: 0 },
                    }}
                    className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 6, width: "18px" },
                      open: { rotate: -45, y: 0, width: "18px" },
                    }}
                    className="absolute block h-0.5 bg-gray-800 dark:bg-white rounded-full"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Menu with AnimatePresence */} 
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
              >
                {/* Menu Items */}
                <nav className="flex flex-col items-center gap-6 py-8 px-6">
                {[
                  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
                  { id: "about", label: "About Me", icon: <User className="w-5 h-5" /> },
                  { id: "projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
                  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-all w-full justify-center sm:justify-start px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/70"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      const element = document.getElementById(item.id);
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 50);
                      } else {
                        window.location.hash = item.id; // Fallback for Android Chrome
                      }
                      setMenuOpen(false);
                    }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Resume Download (Mobile) */}
                <motion.a
                  href="/JamesFanuelDamasoCV.pdf"
                  download
                  className="flex items-center gap-3 mt-2 w-full max-w-xs text-center justify-center px-4 py-3 bg-blue-500 dark:bg-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </nav>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-2 mb-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-gray-500 dark:text-gray-400 text-center px-6 mb-2"
                >
                  Connect with me
                </motion.p>
                
                <div className="flex justify-center gap-6">
                  {[
                    { 
                      href: "https://github.com/Penuelluke", 
                      icon: <Github className="w-5 h-5" />, 
                      label: "GitHub" 
                    }, 
                    { 
                      href: "https://www.linkedin.com/in/james-fanuel-n-damaso-0b71a1359", 
                      icon: <Linkedin className="w-5 h-5" />, 
                      label: "LinkedIn" 
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full
                              bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                              hover:bg-blue-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white
                              shadow-md transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + 0.05 * index, duration: 0.3 }}
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto relative z-10 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 sm:gap-10 md:gap-14 lg:gap-16"
          >
            {/* Enhanced Profile Picture */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ 
                y: [-10, 10, -10],
                rotateZ: [-2, 2, -2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="relative order-1 md:order-2 group"
            >
              <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden
                            border-4 border-purple-500 dark:border-purple-400 shadow-lg dark:shadow-purple-700/30
                            transition-all duration-300 transform group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 dark:from-purple-400/20 dark:to-blue-400/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/profile_pic.jpg" 
                  alt="James Fanuel N. Damaso" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  loading="eager"
                />
              </div>
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-400/30 dark:border-purple-500/30
                            animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Text Content with enhanced styling */}
            <div className="order-2 md:order-1 w-full max-w-2xl backdrop-blur-sm p-6 rounded-2xl
                          bg-white/10 dark:bg-gray-900/30 shadow-xl dark:shadow-purple-900/10
                          border border-white/20 dark:border-purple-900/20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
                Hi, I'm <br className="hidden xs:inline" /> James Fanuel N. Damaso
              </h1>

              {/* Animated Text */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-600 dark:text-gray-300">
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
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="w-full sm:w-auto px-5 py-3 border-2 rounded-full text-sm sm:text-base font-semibold 
                            border-gray-700 dark:border-purple-500 text-gray-700 dark:text-purple-400 
                            hover:bg-gray-200 dark:hover:bg-purple-900/20 transition-all text-center"
                >
                  View Work
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 165, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/JamesFanuelDamasoCV.pdf"
                  download
                  className="w-full sm:w-auto px-5 py-3 border-2 rounded-full text-sm sm:text-base font-semibold 
                            border-orange-500 text-orange-500 
                            hover:bg-orange-500 hover:text-white transition-all text-center"
                >
                  Download Resume
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start mt-6 sm:mt-8 gap-3 sm:gap-5">
                {[
                  { href: "https://github.com/Penuelluke", icon: <Github size="1.25rem" />, color: "hover:bg-gray-900 dark:hover:bg-gray-700" },
                  { href: "https://www.linkedin.com/in/james-fanuel-n-damaso-0b71a1359", icon: <Linkedin size="1.25rem" />, color: "hover:bg-blue-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all 
                                duration-300 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${social.color} 
                                hover:text-white shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
     
      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-12">
        <div className="w-full max-w-7xl mx-auto backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center px-4 sm:px-8"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 dark:from-purple-400 dark:to-blue-500">
              About Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose max-w-3xl mx-auto">
              Discover the <span className="font-semibold text-purple-600 dark:text-purple-400">passions</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">skills</span> that shape who I am and bring joy to my life.
            </p>
          </motion.div>

          {/* Slider Section */}
          <div className="max-w-6xl mx-auto mt-10 sm:mt-12 md:mt-14 lg:mt-16 relative px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Slider {...settings}>
                {hobbiesAndSkills.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="px-2 py-4 sm:px-3 sm:py-5"
                  >
                    <div className="p-4 sm:p-5 md:p-6 text-center bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mx-auto mb-4 sm:mb-5"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mx-auto rounded-full border-2 sm:border-[3px] border-gray-300 dark:border-gray-500 
                                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover shadow-md"
                          loading="lazy"
                        />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-white mb-2 sm:mb-3 text-gray-800 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </motion.div>
            
            {/* Gradient overlays for slider edges */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 dark:from-gray-700 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 dark:from-gray-700 to-transparent z-10 pointer-events-none"></div>
          </div>
          
          {/* Subtle decorative elements */}
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 opacity-20 blur-xl -z-0"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 opacity-20 blur-xl -z-0"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-12">
        <div className="w-full max-w-7xl mx-auto backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <Code className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sm:font-extrabold mb-3 text-gray-900 dark:text-white">
              My Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Projects I worked on during coursework, collaborating with my group to showcase our skills.
            </p>
          </div>

          {/* Single Expanded Project */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col lg:flex-row bg-white/10 dark:bg-gray-800/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-200/10 dark:border-gray-700/10 w-full max-w-6xl h-auto lg:min-h-[500px]"
            >
              {/* Project Image */}
              <div
                className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96 lg:h-auto relative group cursor-pointer"
                onClick={() => openModal(0)}
              >
                <img
                  src={projects[0].images[0]}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-purple-600 dark:bg-purple-500 px-4 py-2 rounded-lg font-medium">
                    View Gallery
                  </span>
                </div>
              </div>

              {/* Project Description and Languages */}
              <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    {projects[0].title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
                    {projects[0].description}
                  </p>
                </div>

                {/* Languages Used */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {projects[0].languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-sm sm:text-base text-white bg-purple-600 dark:bg-purple-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full"
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300 ease-in-out p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div className="relative w-full max-w-6xl">
                {/* Modal Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={projects[0].images[selectedImageIndex]}
                    alt="Expanded Project"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPreviousImage();
                    }}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/70 text-white p-2 sm:p-2.5 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage();
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/70 text-white p-2 sm:p-2.5 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                    className="absolute top-3 right-3 bg-gray-900/50 hover:bg-gray-900/70 text-white p-2 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImageIndex + 1} / {projects[0].images.length}
                  </div>
                </div>
              </div>
            </Dialog>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center justify-center p-4 bg-purple-100/50 dark:bg-purple-900/20 rounded-full mb-6">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Contact Information
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Whether you have a question about my work, want to collaborate, or just say hello, 
                  I'll do my best to get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white/5 dark:bg-gray-800/20 rounded-xl border border-gray-100/20 dark:border-gray-700/30 hover:border-purple-500/30 transition-all">
                  <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <a 
                      href="mailto:damasopanpan@gmail.com" 
                      className="text-lg text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      damasopanpan@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4 p-4 bg-white/5 dark:bg-gray-800/20 rounded-xl border border-gray-100/20 dark:border-gray-700/30 hover:border-purple-500/30 transition-all">
                  <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Penuelluke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      github.com/Penuelluke
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100/20 dark:border-gray-700/30 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 text-lg rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 text-lg rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-4 left-4">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full pl-12 pr-4 py-3 text-lg rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg ${
                    isSending || isSent ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : isSent ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>

        {/* Success Notification */}
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-green-600/95 backdrop-blur-sm text-white rounded-lg shadow-lg ring-1 ring-green-500/30">
              <Check className="w-5 h-5 text-green-100" />
              <div>
                <p className="font-medium">Message received!</p>
                <p className="text-sm text-green-100/90">I'll get back to you within 24 hours</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Notification */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-red-600/95 backdrop-blur-sm text-white rounded-lg shadow-lg ring-1 ring-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-100" />
              <div>
                <p className="font-medium">Delivery failed</p>
                <p className="text-sm text-red-100/90">{error}</p>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  </div>
  );
}

export default App;