import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import CollabReen from "../assets/collab-reen.png";

function Footer() {
  return (
    <footer className=" text-white mb-4">
      <div className="flex justify-center mt-10 mb-10">
        <img src={CollabReen} alt="Collaboration" />
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-5 h-5 hover:text-[#EFAC16]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 hover:text-[#EFAC16]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5 hover:text-[#EFAC16]" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 hover:text-[#EFAC16]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
