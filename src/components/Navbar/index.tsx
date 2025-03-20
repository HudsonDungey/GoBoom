import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLocationArrow } from "react-icons/fa";


export const Navbar = () => {
    return (
      <nav className="bg-white flex flex-col text-black pt-1 pb-4 px-20 flexitems-center">
        <div className="text-sm pt-4 pb-6 flex items-center justify-between text-gray-700">
          <div className="flex flex-row space-x-5 ">
          <span className="flex items-center space-x-2">
          <FaPhoneAlt color="#ffbf00" />
          <span>+123 456 7890</span>
        </span>
        <span className="flex items-center space-x-2">
          <FaEnvelope color="#ffbf00" />
          <span>admin@gogate.info</span>
        </span>
        <span className="flex items-center space-x-2">
          <FaLocationArrow color="#ffbf00" />
          <span>Darwin, NT</span>
        </span>
          </div>

          <div className="flex flex-row text-lg space-x-5 ">
          <span className="flex items-center space-x-2">
          <FaTwitter color="black" />
        </span>
        <span className="flex items-center space-x-2">
          <FaInstagram color="black" />
        </span>
        <span className="flex items-center space-x-2">
          <FaFacebook color="black" />
        </span>
          </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-black">GoGate</h1>
        <a href="#contact" className="bg-gogateamber text-white px-6 py-4 rounded-sm hover:bg-amber-600  tracking-wide">
          Get Quote
        </a>
        </div>
      </nav>
    );
  }