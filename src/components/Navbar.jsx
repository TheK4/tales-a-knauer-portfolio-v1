import React from "react";
import logo from "../assets/TalesKnauerLogo.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-12" src={logo} alt="Logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/talesknauerdev" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-200">
        <FaLinkedin />
      </a>
      <a href="https://github.com/TheK4" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-200">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/otalesknauer_/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-200">
        <FaInstagram />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-200">
        <FaSquareXTwitter />
      </a>
    </div>
  </nav>
  ) 
};

export default Navbar