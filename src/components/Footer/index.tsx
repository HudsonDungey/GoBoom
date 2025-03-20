import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
      <footer className="bg-black text-white text-center py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-10">
          <p className="text-sm">&copy; 2025 GoGate. All rights reserved.</p>
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-gogateamber transition-all"><FaFacebook /></a>
            <a href="#" className="hover:text-gogateamber transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-gogateamber transition-all"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    );
  }