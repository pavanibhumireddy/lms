// src/components/students/Footer.jsx

import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full border-t px-8 py-4 flex flex-col md:flex-row items-center justify-between bg-white mt-auto">
      <div className="flex items-center gap-4">
        <img className="w-20 hidden md:block" src={assets.logo} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60" />
        <p className="text-xs md:text-sm text-gray-500">
          Copyright 2025 © GreatStack. All Rights Reserved.
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook" className="w-6 h-6" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter" className="w-6 h-6" />
        </a>
        <a href="#">
          <img
            src={assets.instagram_icon}
            alt="instagram"
            className="w-6 h-6"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
