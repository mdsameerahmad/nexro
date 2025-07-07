import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import './WorkPage.css'; // Assuming you have a CSS file for styles
import React from 'react';

const WorkPage = () => {
  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative mb-[20]"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        {/* Header Navigation */}
        <Header />

        {/* Hero Section */}
        <main className="flex items-center justify-start px-4">
          <div className="ml-[105px] max-w-[1000px] ">
            <h2 className="text-global-1 text-[70px] font-bold leading-[105px] font-poppins mt-[200px]">
              <span className="font-extrabold">We drive experiences for brands with </span>
              <span className="font-normal font-poly">purpose.</span>
            </h2>
          </div>
        </main>
      </div>

      {/* HowWeWork */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Subtitle */}
          <p className="text-sm uppercase text-gray-600 mb-4 tracking-wider">Our Approach</p>

          {/* Main Heading with Underline */}
          <h1 className="text-5xl font-bold text-black mb-12 relative pb-[30px]">
            How we’ll work together.
            <span className="absolute left-0 bottom-0 h-1 w-full"></span>
          </h1>

          {/* Two-Column Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Column 1 */}
            <div className="flex-1">
              <hr className="border-t border-gray-800 px-[10px] my-4 pb-[30px]" />
              <h2 className="text-9xl font-bold text-black mb-4 outline-text pb-[30px]">1</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                Design-focused, first and foremost.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                As a team, we’re design-focused across every touchpoint of interaction. Everything
                we do and create has a solid design impact. We get up in the morning, supercharged
                to make a difference with design as a top-of-mind solution.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <hr className="border-t border-gray-800 px-[10px] my-4 pb-[30px]" />
              <h2 className="text-9xl font-bold text-black mb-4 outline-text pb-[30px]">2</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
                Vendor no more – we’re part of your team.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Some brands and businesses need a vendor. Well, that’s just not us. We’re crossed it
                out from our virtual dictionaries. It’s dead to us. Instead, we’re a partner,
                enable, and true collaboration. We’re a team extension and built around unification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HowWeWork2 */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Subtitle */}

          {/* Main Heading with Underline */}

          {/* Two-Column Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Column 1 */}
            <div className="flex-1">
              <hr className="border-t border-gray-800 px-[10px] my-4 pb-[60px]" />
              <h2 className="text-9xl font-[Lucida_Bright] text-black mb-4 outline-text pb-[30px]">3</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
               Senior teams, aiming for stellar impact.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
               All of our service, strategy, design and digital team members are senior-level, ready to take on the world to help you on your mission as a game-changing brand. This is intentional, and built around the logic that to win big, we have to think big.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <hr className="border-t border-gray-800 px-[10px] my-4 pb-[60px]" />
              <h2 className="text-9xl font-base text-black mb-4 outline-text pb-[30px]">4</h2>
              <h3 className="text-2xl font-bold text-black mb-2 pb-[30px]">
               R is for real results.
              </h3>
              <p className="text-base text-gray-700 leading-relaxed pb-[80px]">
               To us, results are constantly in the line of sight. If we’re not over-delivering on results, we’re not the right partner. From day-one we’re hyper-focused on getting the right results and continuing to bring those to life with our cross-functional teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default WorkPage;
