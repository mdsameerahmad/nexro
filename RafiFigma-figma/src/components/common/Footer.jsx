import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css'; // optional if you want to move custom CSS there

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleStartPartnership = () => alert('Starting a partnership with NEXRO!');

  const teamMembers = [
    { name: 'S.a kakvi', title: 'Visionary', handle: '@shafikakvi' },
    { name: 'T. Anwar', title: 'Pioneer', handle: '@nasiranwar' },
    { name: 'R. ahmad', title: 'Steward', handle: '@rafikakvi' }
  ];

  const socialLinks = [
    { label: 'Instagram', path: '/instagram' },
    { label: 'Facebook', path: '/facebook' },
    { label: 'Twitter', path: '/twitter' },
    { label: 'Linkedln', path: '/linkedin' }
  ];

  return (
    <>
      {/* Image Section */}
      <div className="relative z-10" data-aos="fade-up">
        <div 
          className="relative mx-7 md:mx-20 h-[400px] sm:h-[400px] md:h-[400px] flex flex-col items-center justify-center text-center imageUpdate"
          style={{
            backgroundImage: 'url(/images/img__4.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 px-4">
            <h2 className="font-sansita font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight capitalize text-global-5 mb-6 md:mb-8">
              <Typical steps={["Let's Dive in.", 2500]} loop={Infinity} wrapper="span" />
            </h2>
            <div className="flex flex-row items-center justify-center gap-4" data-aos="fade-up">
              <button 
                onClick={handleStartPartnership}
                className="font-scada font-normal text-lg sm:text-xl leading-6 capitalize text-global-5 hover:text-opacity-80 transition-colors duration-200"
              >
                START A PARTNERSHIP
              </button>
              <div className="w-10 sm:w-14 h-px bg-global-5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 footerContainer -mt-16 relative z-0">
        <div className="mt-16 flex flex-col w-full max-w-[1228px] mx-auto">

          {/* Top Footer */}
          <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-8 md:gap-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="font-satoshi font-bold text-2xl md:text-[28px] leading-[38px] text-global-4">
                NEXRO
              </h2>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-24 w-full md:w-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="font-inder text-lg sm:text-xl leading-[25px] uppercase text-global-4 mb-1 sm:mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inder text-xs leading-[15px] capitalize text-footer-1 mb-1">
                    {member.title}
                  </p>
                  <div className="font-inder text-[8px] leading-[10px] uppercase text-footer-1">
                    <span>@</span>
                    <span className="lowercase">{member.handle.substring(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-footer-1 mb-6 md:mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Legal Links */}
            <div className="flex flex-row items-center gap-x-4 order-2 md:order-1">
              <Link to="/privacy-policy" className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200">
                Privacy Policy
              </Link>
              <div className="w-px h-4 sm:h-6 bg-footer-2"></div>
              <Link to="/terms-of-use" className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200">
                Terms of Use
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-row items-center gap-x-4 sm:gap-x-6 order-1 md:order-2">
              <span className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2">
                Follow us:
              </span>
              <div className="flex flex-row items-center gap-x-3 sm:gap-x-4">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    to={social.path}
                    className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
