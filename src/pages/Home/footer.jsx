import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import JoinUsForm from './joinUsForm';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">

    <JoinUsForm />

      <div className="max-w-6xl mx-auto mt-4 flex flex-col md:flex-row justify-between items-center px-4">

        {/* Company Logo */}
        <div className="mb-4 md:mb-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmZUT4_wDUcpk2RTJaDbH-BUe2fKs5gJ6rA&usqp=CAU" alt="Company Logo" className="w-12 h-auto" />


          {/* Address Information */}

          <address className="text-center md:text-left mt-4">
            <p>123 Main Street</p>
            <p>123 Main Street</p>
            <p>Cityville, USA</p>
            <p>ZIP: 12345</p>
          </address>
        </div>


        {/* Quick Links */}
        <div className='flex'>
          <div className="mt-2 flex flex-col justify-center">
            <a href="#" className="hover:text-gray-400 mx-4">
              Home
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              Services
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              Contact
            </a>
          </div>

          <div className="mt-2 flex flex-col justify-center">
            <a href="#" className="hover:text-gray-400 mx-4">
              How to Help?
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              Services
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              COntact
            </a>
            <a href="#" className="hover:text-gray-400 mx-4">
              Home
            </a>
          </div>
        </div>

        <div>
        <button className="bg-secondary mt-5 ml-4 text-white px-8 py-2 rounded-md  focus:outline-none focus:ring focus:border-primary">
        DONATE
      </button>
        <div className=" mt-20 social-icons flex space-x-5 ">
        <a href="https://www.facebook.com">
          <FaFacebook size={15} />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter size={15}/>
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedinIn size={15} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram size={15} />
        </a>
      </div>
      </div>

      </div>


    </footer>
  );
};

export default Footer;
