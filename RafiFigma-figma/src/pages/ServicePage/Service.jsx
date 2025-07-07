// 'use client'

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import Footer from '../../components/common/Footer';
// import Header from '../../components/common/Header';

// // Animation hook
// const useResponsiveAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
//     setPrefersReducedMotion(mediaQuery.matches);

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const fadeInUp = {
//     hidden: {
//       opacity: 1,
//       y: prefersReducedMotion ? 0 : isMobile ? 30 : 60,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: prefersReducedMotion ? 0.3 : isMobile ? 0.6 : 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const fadeInLeft = {
//     hidden: {
//       opacity: 1,
//       x: prefersReducedMotion ? 0 : isMobile ? -30 : -60,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: prefersReducedMotion ? 0.3 : isMobile ? 0.6 : 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const fadeInRight = {
//     hidden: {
//       opacity: 1,
//       x: prefersReducedMotion ? 0 : isMobile ? 30 : 60,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: prefersReducedMotion ? 0.3 : isMobile ? 0.6 : 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: prefersReducedMotion ? 0.1 : isMobile ? 0.15 : 0.2,
//         delayChildren: prefersReducedMotion ? 0.1 : isMobile ? 0.2 : 0.3,
//       },
//     },
//   };

//   const staggerItem = {
//     hidden: {
//       opacity: 0,
//       y: prefersReducedMotion ? 0 : isMobile ? 15 : 30,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: prefersReducedMotion ? 0.2 : isMobile ? 0.4 : 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const scaleOnHover = prefersReducedMotion
//     ? {}
//     : {
//         scale: isMobile ? 1.01 : 1.02,
//         transition: { duration: 0.3, ease: "easeInOut" },
//       };

//   const lineExpand = prefersReducedMotion
//     ? {}
//     : {
//         scaleX: isMobile ? 1.3 : 1.5,
//         transition: { duration: 0.3, ease: "easeInOut" },
//       };

//   const hoverSlide = prefersReducedMotion
//     ? {}
//     : {
//         x: isMobile ? 5 : 10,
//         transition: { duration: 0.3 },
//       };

//   return {
//     fadeInUp,
//     fadeInLeft,
//     fadeInRight,
//     staggerContainer,
//     staggerItem,
//     scaleOnHover,
//     lineExpand,
//     hoverSlide,
//     isMobile,
//     prefersReducedMotion,
//   };
// };

// const ServicePage = () => {
//   const handleLetsTalkClick = () => {
//     alert('Let us discuss your project requirements!');
//   };

//   const {
//     fadeInUp,
//     fadeInLeft,
//     fadeInRight,
//     staggerContainer,
//     staggerItem,
//     scaleOnHover,
//     lineExpand,
//     hoverSlide,
//     isMobile,
//     prefersReducedMotion,
//   } = useResponsiveAnimations();

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <motion.div
//         className="relative h-[650px] w-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <motion.div
//           className="absolute inset-0 bg-[#B1BAC4]"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//         </motion.div>

//         {/* Navigation */}
//         <Header />

//         {/* Hero Content */}
//         <motion.div
//           className="relative z-10 px-[140px] mt-[250px]"
//           initial={{ opacity: 0, y: isMobile ? 40 : 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: prefersReducedMotion ? 0.5 : isMobile ? 0.8 : 1,
//             delay: prefersReducedMotion ? 0.2 : 0.5,
//             ease: "easeOut",
//           }}
//         >
//           <h2 className="text-[55px] font-bold leading-[82px] text-white max-w-[1025px]">
//             <motion.span
//               className="font-poppins"
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               We break boundaries to craft extraordinary{" "}
//             </motion.span>
//             <motion.span
//               className="font-normal font-poly"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 1 }}
//             >
//               experiences.
//             </motion.span>
//           </h2>
//         </motion.div>
//       </motion.div>

//       {/* Branding & Identity Section */}
//   <motion.div
//   className="flex items-start px-[54px] py-[155px] gap-[69px] bg-[#F3F3F0]"
//   initial="hidden"
//   whileInView="visible"
//   viewport={{
//     once: true,
//     amount: isMobile ? 0.1 : 0.3,
//     margin: isMobile ? "-50px" : "-100px",
//   }}
//   variants={staggerContainer}
// >
//   <motion.div className="flex-1 max-w-[702px]" variants={fadeInLeft}>
//     <motion.h3
//       className="text-[34px] font-semibold leading-[47px] text-dark mb-[40px] font-manrope"
//       variants={fadeInUp}
//     >
//       Branding & Identity
//     </motion.h3>

//     <motion.p
//       className="text-[20px] font-light leading-[28px] text-dark mb-[60px] font-manrope"
//       variants={fadeInUp}
//     >
//       We fuel the growth of purpose driven brands through strategy activation, design
//       empowerment, and market adoption. From cultivating new ideas to connecting the dots for
//       customers or users, these are our core principles.
//     </motion.p>

//     <motion.div className="space-y-[56px] text-black-900 font-manrope" variants={staggerContainer}>
//       {[
//         ['Brand Strategy & Experience', 'Guidelines & Systems'],
//         ['Trends & Insights', 'Content Strategy'],
//         ['Go-To-Market Strategy', 'Identity Design'],
//       ].map((row, rowIndex) => (
//         <motion.div
//           key={rowIndex}
//           className="flex items-start justify-between"
//           variants={staggerItem}
//         >
//           {row.map((text, i) => (
//             <motion.div
//               key={i}
//               className="group flex items-center cursor-pointer w-[45%]"
//               whileHover={hoverSlide}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
//                 whileHover={lineExpand}
//               />
//               <span className="text-[18px] font-normal leading-[25px] text-gray-500 transition-colors duration-300 group-hover:text-black ml-[16px]">
//                 {text}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       ))}
//     </motion.div>

//     <motion.div
//       className="flex items-center gap-[11px] mt-[69px] cursor-pointer"
//       onClick={handleLetsTalkClick}
//       whileHover={hoverSlide}
//       whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       variants={fadeInUp}
//     >
//       <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
//         Let us talk.
//       </span>
//       <motion.div className="w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
//     </motion.div>
//   </motion.div>

//   <motion.div
//     className="w-[553px] h-[803px]"
//     variants={fadeInRight}
//     whileHover={scaleOnHover}
//   >
//     <motion.img
//       src="/images/img_frame_13.png"
//       alt="Branding and identity work"
//       className="w-full h-full object-cover"
//       initial={{
//         scale: prefersReducedMotion ? 1 : isMobile ? 1.05 : 1.1,
//         opacity: 0,
//       }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
//       transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
//     />
//   </motion.div>
// </motion.div>

//       {/* Websites & Digital Platforms Section */}
//       <motion.div
//   className="flex items-center px-[54px] py-[155px] gap-[69px] bg-white"
//   initial="hidden"
//   whileInView="visible"
//   viewport={{
//     once: true,
//     amount: isMobile ? 0.1 : 0.3,
//     margin: isMobile ? "-50px" : "-100px",
//   }}
//   variants={staggerContainer}
// >
//   <motion.div
//     className="w-[553px] h-[803px]"
//     variants={fadeInLeft}
//     whileHover={scaleOnHover}
//   >
//     <motion.img
//       src="/images/img_frame_14.png"
//       alt="Digital platforms showcase"
//       className="w-full h-full object-cover"
//       initial={{
//         scale: prefersReducedMotion ? 1 : isMobile ? 1.05 : 1.1,
//         opacity: 0,
//       }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
//       transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
//     />
//   </motion.div>

//   <motion.div className="flex-1 max-w-[702px]" variants={fadeInRight}>
//     <motion.h3
//       className="text-[34px] font-semibold leading-[47px] text-dark mb-[77px] font-manrope"
//       variants={fadeInUp}
//     >
//       Websites & Digital Platforms
//     </motion.h3>

//     <motion.p
//       className="text-[20px] font-light leading-[28px] text-dark mb-[114px] font-manrope"
//       variants={fadeInUp}
//     >
//       We design digital platforms to empower users and your brand's tribe. This deep
//       understanding of what motivates them allows us to forge and fine-tune the most powerful
//       strategies that generate rapid ROI for your business.
//     </motion.p>

//     <motion.div className="space-y-[56px] text-black-400" variants={staggerContainer}>
//       {[
//         ['Digital Strategy', 'Digital Activation'],
//         ['UX & UI Design', 'Web & App Development'],
//         ['Functional Prototyping', 'SEO Strategy & Systems'],
//       ].map((row, rowIndex) => (
//         <motion.div
//           key={rowIndex}
//           className="flex items-start justify-between"
//           variants={staggerItem}
//         >
//           {row.map((text, i) => (
//             <motion.div
//               key={i}
//               className="group flex items-center cursor-pointer w-[45%]"
//               whileHover={hoverSlide}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className={`w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0`}
//                 whileHover={lineExpand}
//               />
//               <span className="text-[18px] font-light leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-[16px]">
//                 {text}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       ))}
//     </motion.div>

//     <motion.div
//       className="flex items-center gap-[11px] mt-[69px] cursor-pointer"
//       onClick={handleLetsTalkClick}
//       whileHover={hoverSlide}
//       whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       variants={fadeInUp}
//     >
//       <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
//         Let us talk.
//       </span>
//       <motion.div className="w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
//     </motion.div>
//   </motion.div>
// </motion.div>

//       {/* Digital Marketing Section */}
//      <motion.div
//   className="flex items-center px-[77px] py-[155px] gap-[40px] bg-white"
//   initial="hidden"
//   whileInView="visible"
//   viewport={{
//     once: true,
//     amount: isMobile ? 0.1 : 0.3,
//     margin: isMobile ? "-50px" : "-100px",
//   }}
//   variants={staggerContainer}
// >
//   <motion.div className="flex-1 max-w-[719px]" variants={fadeInLeft}>
//     <motion.h3
//       className="text-[34px] font-semibold leading-[47px] text-dark mb-[65px] font-manrope"
//       variants={fadeInUp}
//     >
//       Digital Marketing
//     </motion.h3>

//     <motion.p
//       className="text-[20px] font-light leading-[28px] text-dark mb-[180px] font-manrope"
//       variants={fadeInUp}
//     >
//       In the new digital era, users are in control of content and community, and experience
//       design is essential. Together, we define, develop, and deliver different design
//       solutions that create an unparalleled competitive advantage for companies in a sea of
//       competition. Focused on radical differentiation at every turn, with growth moves
//       pre-loaded into everything we touch.
//     </motion.p>

//     <motion.div
//       className="flex justify-between mb-[179px]"
//       variants={staggerContainer}
//     >
//       <motion.div className="space-y-[56px] w-[45%]" variants={staggerItem}>
//         {['Digital Strategy', 'UX & UI Design', 'Functional Prototyping'].map((text, index) => (
//           <motion.div
//             key={index}
//             className="group flex items-center cursor-pointer"
//             whileHover={hoverSlide}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div 
//               className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
//               whileHover={lineExpand}
//             />
//             <span className="text-[18px] font-light leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-[16px]">
//               {text}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div className="space-y-[56px] w-[45%]" variants={staggerItem}>
//         {['Digital Activation', 'Web & App Development', 'SEO Strategy & Systems'].map((text, index) => (
//           <motion.div
//             key={index}
//             className="group flex items-center cursor-pointer"
//             whileHover={hoverSlide}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div 
//               className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
//               whileHover={lineExpand}
//             />
//             <span className="text-[18px] font-light leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-[16px]">
//               {text}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>

//     <motion.div
//       className="flex items-center gap-[11px] cursor-pointer"
//       onClick={handleLetsTalkClick}
//       whileHover={hoverSlide}
//       whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       variants={fadeInUp}
//     >
//       <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
//         Let us talk.
//       </span>
//       <motion.div className="w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
//     </motion.div>
//   </motion.div>

//   <motion.div
//     className="w-[553px] h-[803px]"
//     variants={fadeInRight}
//     whileHover={scaleOnHover}
//   >
//     <motion.img
//       src="/images/img_frame_15.png"
//       alt="Digital marketing showcase"
//       className="w-full h-full object-cover"
//       initial={{
//         scale: prefersReducedMotion ? 1 : isMobile ? 1.05 : 1.1,
//         opacity: 0,
//       }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
//       transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
//     />
//   </motion.div>
// </motion.div>

//       {/* Performance Marketing Section */}
//       <motion.div
//   className="flex items-center px-[66px] py-[155px] gap-[67px] bg-white"
//   initial="hidden"
//   whileInView="visible"
//   viewport={{
//     once: true,
//     amount: isMobile ? 0.1 : 0.3,
//     margin: isMobile ? "-50px" : "-100px",
//   }}
//   variants={staggerContainer}
// >
//   <motion.div
//     className="w-[553px] h-[803px]"
//     variants={fadeInLeft}
//     whileHover={scaleOnHover}
//   >
//     <motion.img
//       src="/images/img_frame_16.png"
//       alt="Performance marketing showcase"
//       className="w-full h-full object-cover"
//       initial={{
//         scale: prefersReducedMotion ? 1 : isMobile ? 1.05 : 1.1,
//         opacity: 0,
//       }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
//       transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
//     />
//   </motion.div>

//   <motion.div className="flex-1 max-w-[725px]" variants={fadeInRight}>
//     <motion.h3
//       className="text-[34px] font-semibold leading-[47px] text-dark mb-[77px] font-manrope"
//       variants={fadeInUp}
//     >
//       Performance Marketing
//     </motion.h3>

//     <motion.p
//       className="text-[20px] font-light leading-[28px] text-dark mb-[123px] font-manrope"
//       variants={fadeInUp}
//     >
//       With a keen understanding of what is happening in the digital landscape, we leverage the
//       power of marketing platforms to connect audiences with contagious content worth sharing
//       & spreading, cross-channel and touchpoint.
//     </motion.p>

//     <motion.div
//       className="flex justify-between mb-[197px]"
//       variants={staggerContainer}
//     >
//       <motion.div className="space-y-[56px] w-[45%]" variants={staggerItem}>
//         {['Digital Strategy', 'UX & UI Design', 'Functional Prototyping'].map((text, index) => (
//           <motion.div
//             key={index}
//             className="group flex items-center cursor-pointer"
//             whileHover={hoverSlide}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
//               whileHover={lineExpand}
//             />
//             <span className="text-[18px] font-light leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-[16px]">
//               {text}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div className="space-y-[56px] w-[45%]" variants={staggerItem}>
//         {['Digital Activation', 'Web & App Development', 'SEO Strategy & Systems'].map((text, index) => (
//           <motion.div
//             key={index}
//             className="group flex items-center cursor-pointer"
//             whileHover={hoverSlide}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
//               whileHover={lineExpand}
//             />
//             <span className="text-[18px] font-light leading-[25px] transition-colors duration-300 group-hover:text-black font-manrope ml-[16px]">
//               {text}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>

//     <motion.div
//       className="flex items-center gap-[11px] cursor-pointer"
//       onClick={handleLetsTalkClick}
//       whileHover={hoverSlide}
//       whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       variants={fadeInUp}
//     >
//       <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
//         Let us talk.
//       </span>
//       <motion.div className="w-[61px] h-[1px] bg-black" whileHover={lineExpand} />
//     </motion.div>
//   </motion.div>
// </motion.div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default ServicePage;
'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

// Animation hook
const useResponsiveAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const fadeInUp = {
    hidden: {
      opacity: 1,
      y: prefersReducedMotion ? 0 : isMobile ? 20 : isTablet ? 40 : 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : isTablet ? 0.7 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: {
      opacity: 1,
      x: prefersReducedMotion ? 0 : isMobile ? -20 : isTablet ? -40 : -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : isTablet ? 0.7 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 1,
      x: prefersReducedMotion ? 0 : isMobile ? 20 : isTablet ? 40 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : isMobile ? 0.5 : isTablet ? 0.7 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.1 : isMobile ? 0.1 : isTablet ? 0.15 : 0.2,
        delayChildren: prefersReducedMotion ? 0.1 : isMobile ? 0.1 : isTablet ? 0.2 : 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : isMobile ? 10 : isTablet ? 20 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : isMobile ? 0.3 : isTablet ? 0.5 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleOnHover = prefersReducedMotion
    ? {}
    : {
        scale: isMobile ? 1.01 : isTablet ? 1.015 : 1.02,
        transition: { duration: 0.3, ease: "easeInOut" },
      };

  const lineExpand = prefersReducedMotion
    ? {}
    : {
        scaleX: isMobile ? 1.2 : isTablet ? 1.4 : 1.5,
        transition: { duration: 0.3, ease: "easeInOut" },
      };

  const hoverSlide = prefersReducedMotion
    ? {}
    : {
        x: isMobile ? 3 : isTablet ? 7 : 10,
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
    isTablet,
    prefersReducedMotion,
  };
};

const ServicePage = () => {
  const handleLetsTalkClick = () => {
    alert('Let us discuss your project requirements!');
  };

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
    isTablet,
    prefersReducedMotion,
  } = useResponsiveAnimations();

  // Responsive padding values
  const sectionPaddingX = isMobile ? 'px-6' : isTablet ? 'px-8' : 'px-12 lg:px-16 xl:px-24';
  const sectionPaddingY = isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24 lg:py-32';
  const imageHeight = isMobile ? 'h-[400px]' : isTablet ? 'h-[500px]' : 'h-[600px] lg:h-[700px] xl:h-[803px]';
  const imageWidth = isMobile ? 'w-full' : isTablet ? 'w-full md:w-1/2' : 'w-full lg:w-[553px]';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        className={`relative ${isMobile ? 'h-[500px]' : 'h-[600px] lg:h-[650px]'} w-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#B1BAC4]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </motion.div>

        {/* Navigation */}
        <Header />

        {/* Hero Content */}
        <motion.div
          className={`relative z-10 ${isMobile ? 'px-6 mt-32' : 'px-8 md:px-12 lg:px-24 mt-40 md:mt-48 lg:mt-[250px]'}`}
          initial={{ opacity: 0, y: isMobile ? 40 : 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.5 : isMobile ? 0.8 : 1,
            delay: prefersReducedMotion ? 0.2 : 0.5,
            ease: "easeOut",
          }}
        >
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-[55px]'} font-bold ${isMobile ? 'leading-[42px]' : 'leading-[60px] lg:leading-[82px]'} text-white max-w-4xl lg:max-w-[1025px]`}>
            <motion.span
              className="font-poppins"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We break boundaries to craft extraordinary{" "}
            </motion.span>
            <motion.span
              className="font-normal font-poly"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              experiences.
            </motion.span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Branding & Identity Section */}
      <motion.div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-start ${sectionPaddingX} ${sectionPaddingY} gap-8 md:gap-12 lg:gap-16 bg-[#F3F3F0]`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.3,
          margin: isMobile ? "-50px" : "-100px",
        }}
        variants={staggerContainer}
      >
        <motion.div 
          className={`${isMobile ? 'w-full' : 'flex-1'} max-w-3xl lg:max-w-[702px]`} 
          variants={fadeInLeft}
        >
          <motion.h3
            className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-[34px]'} font-semibold ${isMobile ? 'leading-8' : 'leading-[40px] lg:leading-[47px]'} text-dark mb-6 md:mb-8 lg:mb-10 font-manrope`}
            variants={fadeInUp}
          >
            Branding & Identity
          </motion.h3>

          <motion.p
            className={`${isMobile ? 'text-base' : 'text-lg lg:text-[20px]'} font-light ${isMobile ? 'leading-6' : 'leading-7 lg:leading-[28px]'} text-dark mb-8 md:mb-10 lg:mb-12 font-manrope`}
            variants={fadeInUp}
          >
            We fuel the growth of purpose driven brands through strategy activation, design
            empowerment, and market adoption. From cultivating new ideas to connecting the dots for
            customers or users, these are our core principles.
          </motion.p>

          <motion.div className="space-y-8 md:space-y-10 lg:space-y-14 text-black-900 font-manrope" variants={staggerContainer}>
            {[
              ['Brand Strategy & Experience', 'Guidelines & Systems'],
              ['Trends & Insights', 'Content Strategy'],
              ['Go-To-Market Strategy', 'Identity Design'],
            ].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'space-y-8' : 'space-x-8'} items-start justify-between`}
                variants={staggerItem}
              >
                {row.map((text, i) => (
                  <motion.div
                    key={i}
                    className={`group flex items-center cursor-pointer ${isMobile ? 'w-full' : 'w-[45%]'}`}
                    whileHover={hoverSlide}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                      whileHover={lineExpand}
                    />
                    <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-normal ${isMobile ? 'leading-6' : 'leading-[25px]'} text-gray-500 transition-colors duration-300 group-hover:text-black ml-4`}>
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mt-8 md:mt-10 lg:mt-12 cursor-pointer"
            onClick={handleLetsTalkClick}
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
            <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} text-black font-manrope`}>
              Let us talk.
            </span>
            <motion.div className="w-12 md:w-16 h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div
            className={`${imageWidth} ${imageHeight}`}
            variants={fadeInRight}
            whileHover={scaleOnHover}
          >
            <motion.img
              src="/images/img_frame_13.png"
              alt="Branding and identity work"
              className="w-full h-full object-cover"
              initial={{
                scale: prefersReducedMotion ? 1 : isTablet ? 1.05 : 1.1,
                opacity: 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Websites & Digital Platforms Section */}
      <motion.div
        className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row'} items-center ${sectionPaddingX} ${sectionPaddingY} gap-8 md:gap-12 lg:gap-16 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.3,
          margin: isMobile ? "-50px" : "-100px",
        }}
        variants={staggerContainer}
      >
        {!isMobile && (
          <motion.div
            className={`${imageWidth} ${imageHeight}`}
            variants={fadeInLeft}
            whileHover={scaleOnHover}
          >
            <motion.img
              src="/images/img_frame_14.png"
              alt="Digital platforms showcase"
              className="w-full h-full object-cover"
              initial={{
                scale: prefersReducedMotion ? 1 : isTablet ? 1.05 : 1.1,
                opacity: 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
            />
          </motion.div>
        )}

        <motion.div 
          className={`${isMobile ? 'w-full' : 'flex-1'} max-w-3xl lg:max-w-[702px]`} 
          variants={isMobile ? fadeInUp : fadeInRight}
        >
          <motion.h3
            className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-[34px]'} font-semibold ${isMobile ? 'leading-8' : 'leading-[40px] lg:leading-[47px]'} text-dark mb-6 md:mb-8 lg:mb-10 font-manrope`}
            variants={fadeInUp}
          >
            Websites & Digital Platforms
          </motion.h3>

          <motion.p
            className={`${isMobile ? 'text-base' : 'text-lg lg:text-[20px]'} font-light ${isMobile ? 'leading-6' : 'leading-7 lg:leading-[28px]'} text-dark mb-8 md:mb-10 lg:mb-12 font-manrope`}
            variants={fadeInUp}
          >
            We design digital platforms to empower users and your brand's tribe. This deep
            understanding of what motivates them allows us to forge and fine-tune the most powerful
            strategies that generate rapid ROI for your business.
          </motion.p>

          <motion.div className="space-y-8 md:space-y-10 lg:space-y-14 text-black-400" variants={staggerContainer}>
            {[
              ['Digital Strategy', 'Digital Activation'],
              ['UX & UI Design', 'Web & App Development'],
              ['Functional Prototyping', 'SEO Strategy & Systems'],
            ].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'space-y-8' : 'space-x-8'} items-start justify-between`}
                variants={staggerItem}
              >
                {row.map((text, i) => (
                  <motion.div
                    key={i}
                    className={`group flex items-center cursor-pointer ${isMobile ? 'w-full' : 'w-[45%]'}`}
                    whileHover={hoverSlide}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0`}
                      whileHover={lineExpand}
                    />
                    <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} transition-colors duration-300 group-hover:text-black font-manrope ml-4`}>
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mt-8 md:mt-10 lg:mt-12 cursor-pointer"
            onClick={handleLetsTalkClick}
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
            <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} text-black font-manrope`}>
              Let us talk.
            </span>
            <motion.div className="w-12 md:w-16 h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Digital Marketing Section */}
      <motion.div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${sectionPaddingX} ${sectionPaddingY} gap-8 md:gap-12 lg:gap-16 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.3,
          margin: isMobile ? "-50px" : "-100px",
        }}
        variants={staggerContainer}
      >
        <motion.div 
          className={`${isMobile ? 'w-full' : 'flex-1'} max-w-3xl lg:max-w-[719px]`} 
          variants={fadeInLeft}
        >
          <motion.h3
            className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-[34px]'} font-semibold ${isMobile ? 'leading-8' : 'leading-[40px] lg:leading-[47px]'} text-dark mb-6 md:mb-8 lg:mb-10 font-manrope`}
            variants={fadeInUp}
          >
            Digital Marketing
          </motion.h3>

          <motion.p
            className={`${isMobile ? 'text-base' : 'text-lg lg:text-[20px]'} font-light ${isMobile ? 'leading-6' : 'leading-7 lg:leading-[28px]'} text-dark mb-8 md:mb-10 lg:mb-12 font-manrope`}
            variants={fadeInUp}
          >
            In the new digital era, users are in control of content and community, and experience
            design is essential. Together, we define, develop, and deliver different design
            solutions that create an unparalleled competitive advantage for companies in a sea of
            competition. Focused on radical differentiation at every turn, with growth moves
            pre-loaded into everything we touch.
          </motion.p>

          <motion.div
            className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between mb-8 md:mb-10 lg:mb-12`}
            variants={staggerContainer}
          >
            <motion.div className={`space-y-8 md:space-y-10 lg:space-y-14 ${isMobile ? 'w-full' : 'w-[45%]'}`} variants={staggerItem}>
              {['Digital Strategy', 'UX & UI Design', 'Functional Prototyping'].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} transition-colors duration-300 group-hover:text-black font-manrope ml-4`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={`space-y-8 md:space-y-10 lg:space-y-14 ${isMobile ? 'w-full mt-8' : 'w-[45%]'}`} variants={staggerItem}>
              {['Digital Activation', 'Web & App Development', 'SEO Strategy & Systems'].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} transition-colors duration-300 group-hover:text-black font-manrope ml-4`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLetsTalkClick}
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
            <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} text-black font-manrope`}>
              Let us talk.
            </span>
            <motion.div className="w-12 md:w-16 h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div
            className={`${imageWidth} ${imageHeight}`}
            variants={fadeInRight}
            whileHover={scaleOnHover}
          >
            <motion.img
              src="/images/img_frame_15.png"
              alt="Digital marketing showcase"
              className="w-full h-full object-cover"
              initial={{
                scale: prefersReducedMotion ? 1 : isTablet ? 1.05 : 1.1,
                opacity: 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Performance Marketing Section */}
      <motion.div
        className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row'} items-center ${sectionPaddingX} ${sectionPaddingY} gap-8 md:gap-12 lg:gap-16 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.3,
          margin: isMobile ? "-50px" : "-100px",
        }}
        variants={staggerContainer}
      >
        {!isMobile && (
          <motion.div
            className={`${imageWidth} ${imageHeight}`}
            variants={fadeInLeft}
            whileHover={scaleOnHover}
          >
            <motion.img
              src="/images/img_frame_16.png"
              alt="Performance marketing showcase"
              className="w-full h-full object-cover"
              initial={{
                scale: prefersReducedMotion ? 1 : isTablet ? 1.05 : 1.1,
                opacity: 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
            />
          </motion.div>
        )}

        <motion.div 
          className={`${isMobile ? 'w-full' : 'flex-1'} max-w-3xl lg:max-w-[725px]`} 
          variants={isMobile ? fadeInUp : fadeInRight}
        >
          <motion.h3
            className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-[34px]'} font-semibold ${isMobile ? 'leading-8' : 'leading-[40px] lg:leading-[47px]'} text-dark mb-6 md:mb-8 lg:mb-10 font-manrope`}
            variants={fadeInUp}
          >
            Performance Marketing
          </motion.h3>

          <motion.p
            className={`${isMobile ? 'text-base' : 'text-lg lg:text-[20px]'} font-light ${isMobile ? 'leading-6' : 'leading-7 lg:leading-[28px]'} text-dark mb-8 md:mb-10 lg:mb-12 font-manrope`}
            variants={fadeInUp}
          >
            With a keen understanding of what is happening in the digital landscape, we leverage the
            power of marketing platforms to connect audiences with contagious content worth sharing
            & spreading, cross-channel and touchpoint.
          </motion.p>

          <motion.div
            className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between mb-8 md:mb-10 lg:mb-12`}
            variants={staggerContainer}
          >
            <motion.div className={`space-y-8 md:space-y-10 lg:space-y-14 ${isMobile ? 'w-full' : 'w-[45%]'}`} variants={staggerItem}>
              {['Digital Strategy', 'UX & UI Design', 'Functional Prototyping'].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} transition-colors duration-300 group-hover:text-black font-manrope ml-4`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={`space-y-8 md:space-y-10 lg:space-y-14 ${isMobile ? 'w-full mt-8' : 'w-[45%]'}`} variants={staggerItem}>
              {['Digital Activation', 'Web & App Development', 'SEO Strategy & Systems'].map((text, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center cursor-pointer"
                  whileHover={hoverSlide}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-colors duration-300 shrink-0"
                    whileHover={lineExpand}
                  />
                  <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} transition-colors duration-300 group-hover:text-black font-manrope ml-4`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLetsTalkClick}
            whileHover={hoverSlide}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={fadeInUp}
          >
            <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-[18px]'} font-light ${isMobile ? 'leading-6' : 'leading-[25px]'} text-black font-manrope`}>
              Let us talk.
            </span>
            <motion.div className="w-12 md:w-16 h-[1px] bg-black" whileHover={lineExpand} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;