
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/service' },
    { label: 'WORK', path: '/work' },
   { label: 'OUR PROJECTS', path: '/projects' }

  ];

  return (
    <div className="fixed z-50 w-full bg-transparent pt-4 pb-4 md:pt-7 md:pb-4">
      <div className="flex flex-row items-center justify-between w-full max-w-[1122px] h-11 mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
          <img 
            src="/images/img_headerlogo.png" 
            
            alt="NEXRO Logo" 
            className="w-20 md:w-[98px] h-auto object-contain"
          />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex flex-row items-center gap-x-8 lg:gap-x-16 ">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start pl-[50px]">
              <Link 
                to={item.path}
                className={`font-satoshi font-small text-base lg:text-lg leading-[25px] transition-colors duration-200  ${
                  location.pathname === item.path 
                    ? 'text-global-5' : 'text-white hover:text-global-5'
                }`}
              >
                {item.label}
              </Link>
              {location.pathname === item.path && (
                <div className="w-full h-px bg-global-5 mt-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm md:hidden py-4 px-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className={`font-satoshi font-medium text-lg py-2 transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-global-5' : 'text-white hover:text-global-5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;