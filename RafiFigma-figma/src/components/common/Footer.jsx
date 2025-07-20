import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css'; // optional if you want to move custom CSS there

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleStartPartnership = () => {
    const phoneNumber = '919971775481';
    const message = "Hi NEXRO team! I'm interested in starting a partnership.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Always open in a new tab
    const win = window.open(url, '_blank');
    if (win) win.focus(); // Prevent popup blocker
  };

  const teamMembers = [
    {
      name: 'S.a kakvi',
      title: 'Visionary',
      handle: '@shafikakvi',
      path: 'https://www.instagram.com/shafikakvi?igsh=YmU1ODFodWdmdTF5',
    },
    {
      name: 'T. Anwar',
      title: 'Pioneer',
      handle: '@tausif_anwar',
      path: 'https://www.instagram.com/tausif__anwar?igsh=NzByODd0bGVyNHBh&utm_source=qr',
    },
    {
      name: 'R. ahmad',
      title: 'Steward',
      handle: '@rafikakvi',
      path: 'https://www.instagram.com/rafikakvi/',
    },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      path: 'https://www.instagram.com/nexromedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    },
    { label: 'Facebook', path: 'https://www.facebook.com/share/15mRbARh8n/?mibextid=wwXIfr' },
    { label: 'Twitter', path: 'https://x.com/nexromedia?s=21' },
    { label: 'Linkedln', path: 'https://www.linkedin.com/in/nexro-media-24562436b' },
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
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 px-4">
            <h2 className="font-sansita font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight capitalize text-global-5 mb-6 md:mb-8">
              Let's Dive in.
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
      <div className="bg-black w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 footerContainer -mt-20 relative z-0">
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
                  <a
                    href={member.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inder text-[8px] leading-[10px] uppercase text-footer-1 hover:text-global-5 transition-colors duration-200"
                  >
                    <span>@</span>
                    <span className="lowercase">{member.handle.substring(1)}</span>
                  </a>
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
              <Link
                to="/#"
                className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 sm:h-6 bg-footer-2"></div>
              <Link
                to="/#"
                className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200"
              >
                Terms of Use |   Contact  : +91 9971775481
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-row items-center gap-x-4 sm:gap-x-6 order-1 md:order-2">
              <span className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2">
                Follow us:
              </span>
              <div className="flex flex-row items-center gap-x-3 sm:gap-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-satoshi text-sm sm:text-base md:text-lg leading-[25px] text-footer-2 hover:text-global-5 transition-colors duration-200"
                  >
                    {social.label}
                  </a>
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
