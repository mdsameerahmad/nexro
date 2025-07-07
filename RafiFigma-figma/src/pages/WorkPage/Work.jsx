import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import './WorkPage.css';
import React, { useState } from 'react';

const WorkPage = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const getSectionBg = (pairIndex) => {
    switch (hoveredBlock) {
      case '1': return pairIndex === 1 ? 'bg-[#F1F4F9]' : 'bg-gray-100';
      case '2': return pairIndex === 1 ? 'bg-[#E8EBF5]' : 'bg-gray-100';
      case '3': return pairIndex === 2 ? 'bg-[#E5F0ED]' : 'bg-gray-100';
      case '4': return pairIndex === 2 ? 'bg-[#F1EDED]' : 'bg-gray-100';
      default: return 'bg-gray-100';
    }
  };

  const getNumberClass = (blockNum) =>
    `text-9xl font-bold mb-4 pb-[30px] transition-all duration-300 ${
      hoveredBlock === blockNum ? 'text-black' : 'outline-text'
    }`;

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <Header />
        <main className="flex items-center justify-start px-4">
  <div className="ml-[105px] max-w-[1000px]">
    <h2 className="text-white text-[70px] font-bold leading-[105px] font-poppins mt-[200px]">
      <span className="font-extrabold">We drive experiences for brands with </span>
      <span className="font-normal font-poly">purpose.</span>
    </h2>
  </div>
</main>

      </div>

      {/* Section 1–2 */}
      <section className={`transition-all duration-300 py-16 px-8 ${getSectionBg(1)}`}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase text-gray-600 mb-4 tracking-wider">Our Approach</p>
          <h1 className="text-5xl font-bold text-black mb-12 relative pb-[30px]">
            How we’ll work together.
            <span className="absolute left-0 bottom-0 h-1 w-full"></span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Block 1 */}
            <div
              className="flex-1 transition-all duration-300 p-8 rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredBlock('1')}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <hr className="border-t border-gray-800 my-4 pb-[30px]" />
              <h2 className={getNumberClass('1')}>1</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                Design-focused, first and foremost.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                As a team, we’re design-focused across every touchpoint of interaction. Everything
                we do and create has a solid design impact. We get up in the morning, supercharged
                to make a difference with design as a top-of-mind solution.
              </p>
            </div>

            {/* Block 2 */}
            <div
              className="flex-1 transition-all duration-300 p-8 rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredBlock('2')}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <hr className="border-t border-gray-800 my-4 pb-[30px]" />
              <h2 className={getNumberClass('2')}>2</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                Vendor no more – we’re part of your team.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Some brands and businesses need a vendor. Well, that’s just not us. We’ve crossed it
                out from our virtual dictionaries. It’s dead to us. Instead, we’re a partner,
                enabler, and true collaboration. We’re a team extension and built around unification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3–4 */}
      <section className={`transition-all duration-300 py-16 px-8 ${getSectionBg(2)}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Block 3 */}
            <div
              className="flex-1 transition-all duration-300 p-8 rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredBlock('3')}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <hr className="border-t border-gray-800 my-4 pb-[60px]" />
              <h2 className={`${getNumberClass('3')} font-[Lucida_Bright]`}>3</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                Senior teams, aiming for stellar impact.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                All of our service, strategy, design and digital team members are senior-level,
                ready to take on the world to help you on your mission as a game-changing brand. This
                is intentional, and built around the logic that to win big, we have to think big.
              </p>
            </div>

            {/* Block 4 */}
            <div
              className="flex-1 transition-all duration-300 p-8 rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredBlock('4')}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <hr className="border-t border-gray-800 my-4 pb-[60px]" />
              <h2 className={getNumberClass('4')}>4</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                R is for real results.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed pb-[80px]">
                To us, results are constantly in the line of sight. If we’re not over-delivering on
                results, we’re not the right partner. From day-one we’re hyper-focused on getting
                the right results and continuing to bring those to life with our cross-functional
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkPage;
