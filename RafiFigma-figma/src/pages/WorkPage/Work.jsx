
// // export default WorkPage;
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
// import './WorkPage.css';
// import React, { useState } from 'react';

// const WorkPage = () => {
//   const [hoveredBlock, setHoveredBlock] = useState(null);

//   const getSectionBg = (pairIndex) => {
//     switch (hoveredBlock) {
//       case '1': return pairIndex === 1 ? 'bg-[#F1F4F9]' : 'bg-gray-100';
//       case '2': return pairIndex === 1 ? 'bg-[#E8EBF5]' : 'bg-gray-100';
//       case '3': return pairIndex === 2 ? 'bg-[#E5F0ED]' : 'bg-gray-100';
//       case '4': return pairIndex === 2 ? 'bg-[#F1EDED]' : 'bg-gray-100';
//       default: return 'bg-gray-100';
//     }
//   };

//   const getNumberClass = (blockNum) =>
//     `text-6xl md:text-7xl lg:text-9xl font-bold mb-2 md:mb-4 pb-[15px] md:pb-[30px] transition-all duration-300 ${
//       hoveredBlock === blockNum ? 'text-black' : 'outline-text'
//     }`;

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex flex-col"
//         style={{ backgroundImage: "url('/images/img_.png')" }}
//       >
//         <Header />
//         <main className="flex-1 flex items-center justify-start px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="ml-0 lg:ml-[105px] max-w-full lg:max-w-[1000px]">
//               <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight md:leading-[1.2] lg:leading-[105px] font-poppins mt-0">
//                 <span className="font-extrabold">We drive </span>
//                 <span className="block sm:inline">experiences for brands with </span>
//                 <span className="font-normal font-poly">purpose.</span>
//               </h1>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Section 1–2 */}
//       <section className={`transition-all duration-300 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${getSectionBg(1)}`}>
//         <div className="container mx-auto max-w-6xl">
//           <p className="text-xs sm:text-sm uppercase text-gray-600 mb-2 sm:mb-4 tracking-wider">Our Approach</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-12 relative pb-4 sm:pb-[30px]">
//             How we'll work together.
//             <span className="absolute left-0 bottom-0 h-1 w-full"></span>
//           </h1>

//           <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
//             {/* Block 1 */}
//             <div
//               className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
//               onMouseEnter={() => setHoveredBlock('1')}
//               onMouseLeave={() => setHoveredBlock(null)}
//             >
//               <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px]" />
//               <h2 className={getNumberClass('1')}>1</h2>
//               <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
//               Discovery Call – Understanding Your Brand      
//               </h3>
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//                We kick things off with a free discovery call to learn about your business, target audience, and project goals. Whether you're looking for website design, digital marketing services, or a full brand refresh, this step ensures we're aligned from day one.
//               </p>
//             </div>

//             {/* Block 2 */}
//             <div
//               className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
//               onMouseEnter={() => setHoveredBlock('2')}
//               onMouseLeave={() => setHoveredBlock(null)}
//             >
//               <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px]" />
//               <h2 className={getNumberClass('2')}>2</h2>
//               <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
//                 Strategy & Planning – Crafting a Winning Roadmap
//               </h3>
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//                 After understanding your vision, we dive into brand strategy, content planning, and technical needs. We define the scope, ideal audience, and conversion goals to shape a tailored plan—perfect for your website development, SEO optimization, and marketing funnel.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3–4 */}
//       <section className={`transition-all duration-300 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${getSectionBg(2)}`}>
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
//             {/* Block 3 */}
//             <div
//               className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
//               onMouseEnter={() => setHoveredBlock('3')}
//               onMouseLeave={() => setHoveredBlock(null)}
//             >
//               <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px] md:pb-[60px]" />
//               <h2 className={`${getNumberClass('3')} font-[Lucida_Bright]`}>3</h2>
//               <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
//                Proposal & Onboarding – Let’s Make it Official

//               </h3>
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//                 You’ll receive a detailed project proposal with deliverables, timeline, and pricing. Once approved, we’ll begin the client onboarding process, align on tools and channels, and prepare everything for a smooth and efficient project kickoff
//               </p>
//             </div>

//             {/* Block 4 */}
//             <div
//               className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
//               onMouseEnter={() => setHoveredBlock('4')}
//               onMouseLeave={() => setHoveredBlock(null)}
//             >
//               <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px] md:pb-[60px]" />
//               <h2 className={getNumberClass('4')}>4</h2>
//               <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
//                 Go Live & Grow – Start Seeing Results
//               </h3>
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed pb-8 sm:pb-[80px]">
//                With everything aligned, our team begins executing the plan. From custom web design to SEO-driven development and marketing campaigns, we bring your brand to life with precision. You’ll receive regular updates, access to progress reports, and a clear path to online growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default WorkPage;
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import './WorkPage.css';
import React, { useState, useEffect } from 'react';

const WorkPage = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const getSectionBg = () => {
    switch (hoveredBlock) {
      case '1': return '#F1F4F9';
      case '2': return '#E8EBF5';
      case '3': return '#E5F0ED';
      case '4': return '#F1EDED';
      default: return '#F9FAFB'; // light gray fallback
    }
  };

  useEffect(() => {
    // Set body background dynamically
    document.body.style.backgroundColor = getSectionBg();
    // Clean up on unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [hoveredBlock]);

  const getNumberClass = (blockNum) =>
    `text-6xl md:text-7xl lg:text-9xl font-bold mb-2 md:mb-4 pb-[15px] md:pb-[30px] transition-all duration-300 ${
      hoveredBlock === blockNum ? 'text-black' : 'outline-text'
    }`;

  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex flex-col"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <Header />
        <main className="flex-1 flex items-center justify-start px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="ml-0 lg:ml-[105px] max-w-full lg:max-w-[1000px]">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight md:leading-[1.2] lg:leading-[105px] font-poppins mt-0">
                <span className="font-extrabold">We drive </span>
                <span className="block sm:inline">experiences for brands with </span>
                <span className="font-normal font-poly">purpose.</span>
              </h1>
            </div>
          </div>
        </main>
      </div>

      {/* Blocks Section */}
      <div className="w-full relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section 1–2 */}
          <section className="py-8 sm:py-12 md:py-16">
            <p className="text-xs sm:text-sm uppercase text-gray-600 mb-2 sm:mb-4 tracking-wider">Our Approach</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-12 relative pb-4 sm:pb-[30px]">
              How we'll work together.
              <span className="absolute left-0 bottom-0 h-1 w-full"></span>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* Block 1 */}
              <div
                className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredBlock('1')}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px]" />
                <h2 className={getNumberClass('1')}>1</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
                  Discovery Call – Understanding Your Brand      
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We kick things off with a free discovery call to learn about your business, target audience, and project goals. Whether you're looking for website design, digital marketing services, or a full brand refresh, this step ensures we're aligned from day one.
                </p>
              </div>

              {/* Block 2 */}
              <div
                className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredBlock('2')}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px]" />
                <h2 className={getNumberClass('2')}>2</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
                  Strategy & Planning – Crafting a Winning Roadmap
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  After understanding your vision, we dive into brand strategy, content planning, and technical needs. We define the scope, ideal audience, and conversion goals to shape a tailored plan—perfect for your website development, SEO optimization, and marketing funnel.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3–4 */}
          <section className="py-8 sm:py-12 md:py-16 pb-16 sm:pb-24">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* Block 3 */}
              <div
                className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredBlock('3')}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px] md:pb-[60px]" />
                <h2 className={`${getNumberClass('3')} font-[Lucida_Bright]`}>3</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
                  Proposal & Onboarding – Let's Make it Official
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You'll receive a detailed project proposal with deliverables, timeline, and pricing. Once approved, we'll begin the client onboarding process, align on tools and channels, and prepare everything for a smooth and efficient project kickoff
                </p>
              </div>

              {/* Block 4 */}
              <div
                className="flex-1 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredBlock('4')}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <hr className="border-t border-gray-800 my-2 sm:my-4 pb-4 sm:pb-[30px] md:pb-[60px]" />
                <h2 className={getNumberClass('4')}>4</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2 pb-4 sm:pb-[30px]">
                  Go Live & Grow – Start Seeing Results
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pb-8 sm:pb-[80px]">
                  With everything aligned, our team begins executing the plan. From custom web design to SEO-driven development and marketing campaigns, we bring your brand to life with precision. You'll receive regular updates, access to progress reports, and a clear path to online growth.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
