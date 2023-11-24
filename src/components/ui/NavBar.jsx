
import React, { useState } from 'react';
import { HiMenu, HiX} from 'react-icons/hi';
import {FaEnvelope, FaFacebook, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="contact-info flex justify-between items-center px-20 p-1">
      <div className=" flex items-center">
        
      </div>
      <div className="social-icons flex space-x-5 ">
      <a href="https://www.facebook.com">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com">
        <FaLinkedinIn />
      </a>
      <a href='#'><FaEnvelope /></a>
    </div>
    </div>
  );
};



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Socials />
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and menu items for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </a>
            </div>
          </div>

          {/* Toggle button for smaller screens */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About Us
          </a>
          <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;