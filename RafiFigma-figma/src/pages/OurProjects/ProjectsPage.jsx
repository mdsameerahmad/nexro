'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Tilt from 'react-parallax-tilt';
import { AnimatePresence } from 'framer-motion';

// Custom theme hook for Vite
const useTheme = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // Initialize theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return { theme, setTheme: toggleTheme };
};

// Animation hook
const useResponsiveAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : isMobile ? 20 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : 0.7,
        ease: 'easeOut',
      },
    },
  };

  const fadeInLeft = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : isMobile ? -20 : -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : 0.7,
        ease: 'easeOut',
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : isMobile ? 20 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : 0.7,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : isMobile ? 0.1 : 0.15,
        delayChildren: prefersReducedMotion ? 0.1 : isMobile ? 0.15 : 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : isMobile ? 10 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : isMobile ? 0.3 : 0.4,
        ease: 'easeOut',
      },
    },
  };

  const scaleOnHover = prefersReducedMotion
    ? {}
    : {
        scale: isMobile ? 1.03 : 1.05,
        transition: { duration: 0.3, ease: 'easeInOut' },
      };

  const hoverSlide = prefersReducedMotion
    ? {}
    : {
        x: isMobile ? 5 : 8,
        transition: { duration: 0.3 },
      };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    hoverSlide,
    isMobile,
    prefersReducedMotion,
  };
};

const ProjectsPage = () => {
  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    hoverSlide,
    isMobile,
    prefersReducedMotion,
  } = useResponsiveAnimations();

  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      title: "MLM Project",
      url: "https://growthaffinitymarketing.com/auth/login",
      githubUrl: "https://github.com/mdsadiqueshakeel/MLM-System",
      description: "The Multi-Level Marketing (MLM) web application is a comprehensive platform designed to support referral-based user onboarding, secure wallet operations, user-to-user fund transfers, and product purchase tracking. It features a robust admin dashboard that enables real-time management of pending product and wallet requests, including dynamic accept and decline actions. The system also includes a full suite of user management tools for administrators, ensuring streamlined oversight of the network. The interface is fully responsive, offering a seamless experience across all devices, and integrates secure JWT-based authentication for all API interactions, maintaining a high standard of security and user experience throughout the application.",
      images: [
        "/images/u1.png",
        "/images/u2.png",
        "/images/u3.png",
        "/images/u4.png",
        "/images/u5.png",
        "/images/u6.png",
        "/images/a1.png",
        "/images/a2.png",
        "/images/a3.png",
        "/images/a4.png",
        "/images/a5.png",
        "/images/a6.png",
        "/images/a7.png",
      
      ],
      techStack: ["React.js", "Next.js", "MongoDB", "JavaScript", "Docker", "Redis", "Tailwind CSS"]
    },
    {
      title: "Royal Gujrat Restaurant & Sweets",
      url: "https://royalgujrat.com/",
     description: "We’re thrilled to share our latest international collaboration with a passionate team based in Dubai! 🎉 Together, we’ve crafted a modern, visually rich website for Royal Gujrat Restaurant – a culinary gem bringing authentic Indian flavors to the heart of the UAE. From elegant dish showcases to seamless user experience, every detail reflects the brand’s essence. The team at Royal Gujrat was incredibly supportive and excited throughout the journey, and their satisfaction with the final result means the world to us. This project wasn’t just about building a website — it was about capturing the soul of their cuisine in a digital space. We're proud to have delivered a platform that elevates their presence and connects food lovers with an unforgettable dining experience.",

      images: [
        "/images/d1.png",
        "/images/d2.png",
        "/images/d3.png",
        "/images/d4.png",
        
      
      ],
      techStack: ["React.js", "Next.js", "MongoDB", "JavaScript", "Docker", "Tailwind CSS"]
    },
    {
      title: "India Play",
      url: "https://www.indianply.in/",
      githubUrl: "https://github.com/mdsadiqueshakeel/India-Ply",
      description: "We recently collaborated with one of the most trusted and popular plywood stores in the region to build their official website — IndianPly.in. Our goal was to create a clean, modern, and informative online presence that reflects the quality and professionalism of their physical store. The site showcases their wide range of plywood and laminate products, along with trusted brands and services they offer. From a seamless layout to a user-friendly experience, we focused on making the website informative and accessible to all types of customers. This project was delivered at a very affordable cost, ensuring top-tier quality without compromising the client's budget. It's a proud example of how digital transformation can elevate local businesses.",
      images: [
         "/images/p1.png",
        "/images/p2.png",
        "/images/p3.png",
        "/images/p4.png",
      ],
      techStack: ["React.js", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} overflow-x-hidden relative`}>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className={`absolute top-0 -left-4 w-[500px] h-[500px] rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob ${
          theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-300/30'
        }`}></div>
        <div className={`absolute top-0 -right-4 w-[500px] h-[500px] rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000 ${
          theme === 'dark' ? 'bg-emerald-600/20' : 'bg-emerald-300/30'
        }`}></div>
        <div className={`absolute -bottom-8 left-20 w-[500px] h-[500px] rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000 ${
          theme === 'dark' ? 'bg-pink-600/20' : 'bg-pink-300/30'
        }`}></div>
      </div>

      <Header />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-sans relative inline-block"
            variants={fadeInUp}
          >
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Project Portfolio</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.h1>
          <motion.p 
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            variants={fadeInUp}
          >
            Explore my professional projects showcasing innovative solutions and clean design.
          </motion.p>
        </motion.div>
        
        {projects.map((project, index) => (
          <ProjectSection 
            key={index}
            project={project}
            index={index}
            theme={theme}
            animations={{
              fadeInUp,
              fadeInLeft,
              fadeInRight,
              staggerContainer,
              staggerItem,
              scaleOnHover,
              hoverSlide,
              isMobile,
              prefersReducedMotion
            }}
          />
        ))}
      </motion.div>
      
      <Footer />

      {/* Theme Toggle */}
      {isMounted && (
        <button
          onClick={() => setTheme()}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-lg hover:shadow-xl transition-all ${
            theme === 'dark' 
              ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
              : 'bg-white/50 backdrop-blur-md border border-gray-200'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={theme === 'dark' ? 'text-white' : 'text-gray-800'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      )}
    </div>
  );
};

const ProjectSection = ({ project, index, theme, animations }) => {
  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    hoverSlide,
    isMobile,
    prefersReducedMotion
  } = animations;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailRefs = useRef([]);
  const mainImageRef = useRef(null);

  const handleThumbnailClick = (idx) => {
    setCurrentImageIndex(idx);
    if (thumbnailRefs.current[idx]) {
      thumbnailRefs.current[idx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  // Calculate aspect ratio of the current image
  const [aspectRatio, setAspectRatio] = useState(16/9);
  
  useEffect(() => {
    if (mainImageRef.current) {
      const img = new Image();
      img.src = project.images[currentImageIndex];
      img.onload = () => {
        setAspectRatio(img.width / img.height);
      };
    }
  }, [currentImageIndex, project.images]);

  return (
    <motion.div 
      className={`relative flex flex-col lg:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-16 py-16 sm:py-20 md:py-24 lg:py-32 ${
        index > 0 ? `border-t ${theme === 'dark' ? 'border-gray-800/30' : 'border-gray-200'}` : ''
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: isMobile ? 0.1 : 0.3,
        margin: isMobile ? '0px' : '-50px',
      }}
      variants={staggerContainer}
    >
      {/* Image Gallery */}
      <motion.div 
        className="w-full lg:w-1/2"
        variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
      >
        <Tilt
          tiltEnable={!isMobile}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareColor={theme === 'dark' ? "#ffffff" : "#000000"}
          glarePosition="all"
          glareBorderRadius="12px"
          className="h-auto"
        >
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <motion.div 
              className={`relative w-full overflow-hidden rounded-lg shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800/50' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-200/50'
              }`}
              whileHover={scaleOnHover}
              variants={staggerItem}
              style={{
                aspectRatio: aspectRatio,
                maxHeight: isMobile ? 'auto' : '70vh'
              }}
            >
              <img 
                ref={mainImageRef}
                src={project.images[currentImageIndex]} 
                alt={`${project.title} showcase`} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-black/80 text-white' 
                  : 'bg-white/80 text-gray-900'
              }`}>
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </motion.div>
            
            {/* Thumbnail List */}
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  ref={el => thumbnailRefs.current[idx] = el}
                  className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === idx 
                      ? theme === 'dark'
                        ? 'border-white shadow-md shadow-gray-600/50' 
                        : 'border-gray-900 shadow-md shadow-gray-400/50'
                      : theme === 'dark'
                        ? 'border-gray-800/50 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-600/30'
                        : 'border-gray-200/50 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-400/30'
                  }`}
                  onClick={() => handleThumbnailClick(idx)}
                  whileHover={scaleOnHover}
                  variants={staggerItem}
                  style={{
                    width: '80px',
                    height: '60px',
                    flex: '0 0 auto'
                  }}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${idx+1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
      
      {/* Project Details */}
      <motion.div 
        className={`w-full lg:w-1/2 p-6 rounded-lg shadow-lg ${
          theme === 'dark' 
            ? 'bg-black/50 backdrop-blur-sm border border-gray-800/30' 
            : 'bg-white/50 backdrop-blur-sm border border-gray-200/30'
        }`}
        variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
      >
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sans ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
          variants={fadeInUp}
        >
          {project.title}
        </motion.h2>
        
        <motion.div className="flex flex-wrap gap-4 mb-6" variants={fadeInUp}>
          <motion.a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center transition-all px-4 py-2 rounded-lg backdrop-blur-sm ${
              theme === 'dark'
                ? 'text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700'
                : 'text-gray-900 bg-gray-100/50 hover:bg-gray-200/50 border border-gray-300'
            }`}
            whileHover={hoverSlide}
          >
            <span className="mr-2">🌐</span> Live Demo
          </motion.a>
         
        </motion.div>
        
        <motion.p 
          className={`text-base sm:text-lg md:text-xl leading-relaxed font-sans ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } mb-8`}
          variants={fadeInUp}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className={`p-6 rounded-lg shadow-sm ${
            theme === 'dark'
              ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800/30'
              : 'bg-gray-100/50 backdrop-blur-sm border border-gray-200/30'
          }`}
          variants={fadeInUp}
        >
          <h3 className={`text-xl font-semibold mb-4 font-sans flex items-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className={`w-5 h-5 mr-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Tech Stack
          </h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            variants={staggerContainer}
          >
            {project.techStack.map((tech, i) => (
              <motion.div 
                key={i}
                className={`px-4 py-2 rounded-lg text-center text-sm font-medium transition-all backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700'
                    : 'bg-gray-100/50 text-gray-900 hover:bg-gray-200/50 border border-gray-300'
                }`}
                variants={staggerItem}
                whileHover={hoverSlide}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;