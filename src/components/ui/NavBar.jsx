import React, { useState } from 'react';
import Link from './Link'
import { HiMenu, HiX} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import { IoMdCall, IoMdMail } from 'react-icons/io';


const Socials = () => {
  return (
    <div className="contact-info flex justify-between items-center md:px-20 px-10 p-1 bg-gray-200 text-primary">
      <div className=" flex items-center">
        <IoMdCall size={15} />
        <span className=' text-xs ml-1 mr-3 text-gray-600'>+0114123456</span>
        <IoMdMail size={15} />
        <span className=' text-xs ml-1 text-gray-600'>example@gmail.com</span>
      </div>
      <div className="social-icons flex space-x-5 ">
      <a href="https://www.facebook.com">
        <FaFacebook size={15} />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter size={15}/>
      </a>
      <a href="https://www.linkedin.com">
        <FaLinkedinIn size={15} />
      </a>
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
    <nav className=" bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:px-20 px-5">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">Logo</span>
          </div>

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

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
            <Link to="/" text="Home"/>
            <Link to="/ourwork" text="Our Work"/>
            <Link to="/about" text="About"/>
            <Link to="/howtoHelp" text="How to Help"/>
            <Link to="/donate" text="Donate"/>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/ourwork" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Our Work
          </a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/howtoHelp" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            How to Help
          </a>
          <a href="/donate" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Donate
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;