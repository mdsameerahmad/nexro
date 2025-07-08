'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

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
        scale: isMobile ? 1.01 : 1.02,
        transition: { duration: 0.3, ease: 'easeInOut' },
      };

  const lineExpand = prefersReducedMotion
    ? {}
    : {
        scaleX: isMobile ? 1.2 : 1.3,
        transition: { duration: 0.3, ease: 'easeInOut' },
      };

  const hoverSlide = prefersReducedMotion
    ? {}
    : {
        x: isMobile ? 3 : 5,
        transition: { duration: 0.3 },
      };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    lineExpand,
    hoverSlide,
    isMobile,
    prefersReducedMotion,
  };
};

const ServicePage = () => {

  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    lineExpand,
    hoverSlide,
    isMobile,
    prefersReducedMotion,
  } = useResponsiveAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative h-[500px] sm:h-[600px] md:h-[650px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#B1BAC4]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </motion.div>

        {/* Navigation */}
        <Header />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-[120px] sm:mt-[150px] md:mt-[200px] lg:mt-[250px]"
          initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.5 : isMobile ? 0.6 : 0.8,
            delay: prefersReducedMotion ? 0.1 : 0.3,
            ease: 'easeOut',
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-[55px] font-bold leading-[1.2] sm:leading-[1.3] md:leading-[82px] text-white max-w-full lg:max-w-[1025px]">
            <motion.span
              className="font-poppins block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We break boundaries to craft extraordinary{' '}
            </motion.span>
            <motion.span
              className="font-normal font-poly block mt-2 sm:mt-0 sm:inline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              experiences.
            </motion.span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Branding & Identity Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-start px-4 sm:px-6 md:px-8 lg:px-[54px] py-16 sm:py-20 md:py-[100px] lg:py-[155px] gap-8 sm:gap-12 md:gap-16 lg:gap-[69px] bg-[#F3F3F0]"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.2,
          margin: isMobile ? '0px' : '-50px',
        }}
        variants={staggerContainer}
      >
        <motion.div className="flex-1 max-w-full lg:max-w-[702px]" variants={fadeInLeft}>
          <motion.h3
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] md:leading-[47px] text-dark mb-6 sm:mb-8 md:mb-[40px] font-manrope"
            variants={fadeInUp}
          >
            Branding & Identity
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] font-light leading-[1.5] md:leading-[28px] text-dark mb-8 sm:mb-12 md:mb-[60px] font-manrope"
            variants={fadeInUp}
          >
            We fuel the growth of purpose driven brands through strategy activation, design
            empowerment, and market adoption. From cultivating new ideas to connecting the dots for
            customers or users, these are our core principles.
          </motion.p>

          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] text-black-900 font-manrope"
            variants={staggerContainer}
          >
            {[
              ['Brand Strategy & Experience', 'Guidelines & Systems'],
              ['Trends & Insights', 'Content Strategy'],
              ['Go-To-Market Strategy', 'Identity Design'],
            ].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0"
                variants={staggerItem}
              >
                {row.map((text, i) => (
                  <motion.div
                    key={i}
                    className="group flex items-center cursor-pointer w-full sm:w-[45%]"
                    whileHover={hoverSlide}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                      whileHover={lineExpand}
                    />
                    <span className="text-sm sm:text-base md:text-[18px] font-normal leading-[1.4] md:leading-[25px] text-gray-500 transition-colors duration-300 group-hover:text-black ml-3 sm:ml-[16px]">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-[11px] mt-8 sm:mt-12 md:mt-16 lg:mt-[69px] cursor-pointer"
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
       <a
  href="https://wa.me/919971775481?text=Hi%20NEXRO%20team!%20I'm%20interested%20in%20starting%20a%20partnership."
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] text-black font-manrope cursor-pointer hover:underline">
    Let us talk.
  </span>
</a>

            <motion.div className="w-10 sm:w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[553px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[803px] mt-8 lg:mt-0"
          variants={fadeInRight}
          whileHover={scaleOnHover}
        >
          <motion.img
            src="/images/img_frame_13.png"
            alt="Branding and identity work"
            className="w-full h-full object-cover"
            initial={{
              scale: prefersReducedMotion ? 1 : isMobile ? 1.02 : 1.05,
              opacity: 0,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.6 }}
          />
        </motion.div>
      </motion.div>

      {/* Websites & Digital Platforms Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-[54px] py-16 sm:py-20 md:py-[100px] lg:py-[155px] gap-8 sm:gap-12 md:gap-16 lg:gap-[69px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.2,
          margin: isMobile ? '0px' : '-50px',
        }}
        variants={staggerContainer}
      >
        <motion.div
          className="w-full lg:w-[553px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[803px] order-2 lg:order-1"
          variants={fadeInLeft}
          whileHover={scaleOnHover}
        >
          <motion.img
            src="/images/img_frame_14.png"
            alt="Digital platforms showcase"
            className="w-full h-full object-cover"
            initial={{
              scale: prefersReducedMotion ? 1 : isMobile ? 1.02 : 1.05,
              opacity: 0,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.6 }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-full lg:max-w-[702px] order-1 lg:order-2"
          variants={fadeInRight}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] md:leading-[47px] text-dark mb-6 sm:mb-8 md:mb-12 lg:mb-[77px] font-manrope"
            variants={fadeInUp}
          >
            Websites & Digital Platforms
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] font-light leading-[1.5] md:leading-[28px] text-dark mb-8 sm:mb-12 md:mb-16 lg:mb-[114px] font-manrope"
            variants={fadeInUp}
          >
            We design digital platforms to empower users and your brand's tribe. This deep
            understanding of what motivates them allows us to forge and fine-tune the most powerful
            strategies that generate rapid ROI for your business.
          </motion.p>

          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] text-black-400"
            variants={staggerContainer}
          >
            {[
              ['Digital Strategy', 'Digital Activation'],
              ['UX & UI Design', 'Web & App Development'],
              ['Functional Prototyping', 'SEO Strategy & Systems'],
            ].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0"
                variants={staggerItem}
              >
                {row.map((text, i) => (
                  <motion.div
                    key={i}
                    className="group flex items-center cursor-pointer w-full sm:w-[45%]"
                    whileHover={hoverSlide}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0`}
                      whileHover={lineExpand}
                    />
                    <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-[11px] mt-8 sm:mt-12 md:mt-16 lg:mt-[69px] cursor-pointer"
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
           <a
  href="https://wa.me/919971775481?text=Hi%20NEXRO%20team!%20I'm%20interested%20in%20starting%20a%20partnership."
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] text-black font-manrope cursor-pointer hover:underline">
    Let us talk.
  </span>
</a>

            <motion.div className="w-10 sm:w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Digital Marketing Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-[77px] py-16 sm:py-20 md:py-[100px] lg:py-[155px] gap-8 sm:gap-12 md:gap-16 lg:gap-[40px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.2,
          margin: isMobile ? '0px' : '-50px',
        }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex-1 max-w-full lg:max-w-[719px] order-2 lg:order-1"
          variants={fadeInLeft}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] md:leading-[47px] text-dark mb-6 sm:mb-8 md:mb-12 lg:mb-[65px] font-manrope"
            variants={fadeInUp}
          >
            Digital Marketing
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] font-light leading-[1.5] md:leading-[28px] text-dark mb-8 sm:mb-12 md:mb-16 lg:mb-[180px] font-manrope"
            variants={fadeInUp}
          >
            In the new digital era, users are in control of content and community, and experience
            design is essential. Together, we define, develop, and deliver different design
            solutions that create an unparalleled competitive advantage for companies in a sea of
            competition. Focused on radical differentiation at every turn, with growth moves
            pre-loaded into everything we touch.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 mb-8 sm:mb-12 md:mb-16 lg:mb-[179px]"
            variants={staggerContainer}
          >
            <motion.div
              className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {[
                'Digital Strategy & Planning',
                'Content Marketing',
                'Pay-Per-Click (PPC) & Paid Media',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {[
                'Social Media Marketing',
                'Email Marketing Automation',
                'Analytics & Performance Tracking',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-[11px] cursor-pointer"
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
          <a
  href="https://wa.me/919971775481?text=Hi%20NEXRO%20team!%20I'm%20interested%20in%20starting%20a%20partnership."
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] text-black font-manrope cursor-pointer hover:underline">
    Let us talk.
  </span>
</a>

            <motion.div className="w-10 sm:w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[553px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[803px] order-1 lg:order-2"
          variants={fadeInRight}
          whileHover={scaleOnHover}
        >
          <motion.img
            src="/images/img_frame_15.png"
            alt="Digital marketing showcase"
            className="w-full h-full object-cover"
            initial={{
              scale: prefersReducedMotion ? 1 : isMobile ? 1.02 : 1.05,
              opacity: 0,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.6 }}
          />
        </motion.div>
      </motion.div>

      {/* Performance Marketing Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-[66px] py-16 sm:py-20 md:py-[100px] lg:py-[155px] gap-8 sm:gap-12 md:gap-16 lg:gap-[67px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.2,
          margin: isMobile ? '0px' : '-50px',
        }}
        variants={staggerContainer}
      >
        <motion.div
          className="w-full lg:w-[553px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[803px] order-2 lg:order-1"
          variants={fadeInLeft}
          whileHover={scaleOnHover}
        >
          <motion.img
            src="/images/img_frame_16.png"
            alt="Performance marketing showcase"
            className="w-full h-full object-cover"
            initial={{
              scale: prefersReducedMotion ? 1 : isMobile ? 1.02 : 1.05,
              opacity: 0,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.6 }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-full lg:max-w-[725px] order-1 lg:order-2"
          variants={fadeInRight}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] md:leading-[47px] text-dark mb-6 sm:mb-8 md:mb-12 lg:mb-[77px] font-manrope"
            variants={fadeInUp}
          >
            Performance Marketing
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] font-light leading-[1.5] md:leading-[28px] text-dark mb-8 sm:mb-12 md:mb-16 lg:mb-[123px] font-manrope"
            variants={fadeInUp}
          >
            With a keen understanding of what is happening in the digital landscape, we leverage the
            power of marketing platforms to connect audiences with contagious content worth sharing
            & spreading, cross-channel and touchpoint.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 mb-8 sm:mb-12 md:mb-16 lg:mb-[197px]"
            variants={staggerContainer}
          >
            <motion.div
              className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {[
                'Paid Media Campaigns',
                'Conversion Rate Optimization (CRO)',
                'Affiliate & Influencer Marketing',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {['Email & SMS Campaigns', 'Remarketing & Retargeting', 'Marketing Automation'].map(
                (text, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center cursor-pointer"
                    whileHover={hoverSlide}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                      whileHover={lineExpand}
                    />
                    <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                      {text}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-[11px] cursor-pointer"
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
            <a
              href="https://wa.me/919971775481?text=Hi%20NEXRO%20team!%20I'm%20interested%20in%20starting%20a%20partnership."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] text-black font-manrope cursor-pointer hover:underline">
                Let us talk.
              </span>
            </a>

            <motion.div className="w-10 sm:w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-[77px] py-16 sm:py-20 md:py-[100px] lg:py-[155px] gap-8 sm:gap-12 md:gap-16 lg:gap-[40px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.05 : 0.2,
          margin: isMobile ? '0px' : '-50px',
        }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex-1 max-w-full lg:max-w-[719px] order-2 lg:order-1"
          variants={fadeInLeft}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] md:leading-[47px] text-dark mb-6 sm:mb-8 md:mb-12 lg:mb-[65px] font-manrope"
            variants={fadeInUp}
          >
            Boost Your Online Sales — Dominate Swiggy & Zomato
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[20px] font-light leading-[1.5] md:leading-[28px] text-dark mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] font-manrope"
            variants={fadeInUp}
          >
            Are low visibility, poor ratings, or stagnant sales holding your restaurant back? NEXRO
            empowers food businesses to break through the noise and skyrocket their online orders —
            without relying on deep discounts or third-party gimmicks. We partner with ambitious
            cloud kitchens, cafes, and restaurant brands to transform underperforming listings into
            high-performing revenue machines on Swiggy and Zomato.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 mb-8 sm:mb-12 md:mb-16 lg:mb-[120px]"
            variants={staggerContainer}
          >
            <motion.div
              className="space-y-2 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {[
                'Free Optimization Audit',
                'Improve visibility & app ranking',
                'Smarter promotions & campaign setup',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[56px] w-full sm:w-[45%]"
              variants={staggerItem}
            >
              {[
                'Boost conversions with visuals & reviews',
                'Fix cart abandonment & tracking gaps',
                'Weekly reports & growth action plans',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[20px] sm:w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-3 sm:ml-[16px]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-[11px] cursor-pointer"
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
        <a
  href="https://wa.me/919971775481?text=Hi%20NEXRO%20team!%20I'm%20interested%20in%20starting%20a%20partnership."
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="text-sm sm:text-base md:text-[18px] font-light leading-[1.4] md:leading-[25px] text-black font-manrope cursor-pointer hover:underline">
    Let us talk.
  </span>
</a>

            <motion.div className="w-10 sm:w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[553px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[803px] order-1 lg:order-2"
          variants={fadeInRight}
          whileHover={scaleOnHover}
        >
          <motion.img
            src="/images/img78.jpg"
            alt="Digital marketing showcase"
            className="w-full h-full object-cover"
            initial={{
              scale: prefersReducedMotion ? 1 : isMobile ? 1.02 : 1.05,
              opacity: 0,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.6 }}
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;
