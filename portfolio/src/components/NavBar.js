import React, { useState, useEffect } from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import Pdf from "../assets/Resume.pdf";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <BsLinkedin className="text-xl" />, url: "https://www.linkedin.com/in/ameen-mohiyuddin/" },
    { icon: <BsGithub className="text-xl" />, url: "https://github.com/Aminizle" },
    { icon: <BsTwitter className="text-xl" />, url: "https://twitter.com/DevAmeenM" },
    { icon: <BsYoutube className="text-xl" />, url: "https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw" },
    { icon: <SiCodewars className="text-xl" />, url: "https://www.codewars.com/users/DevAmeenM" }
  ];

  const navLinks = [
    { name: "About", href: "#Landing" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed rounded-b-xl z-50 transition-all duration-300 ${scrolled ? "py-0 bg-cyan-600 shadow-lg" : "py-2 bg-cyan-500"}`}>
      <div className="max-w-6xl mx-auto px-4"> {/* Changed container width */}
        <div className="flex justify-between items-center">
          {/* Logo/Brand - Reduced margin-right */}
          <a 
            href="#Landing" 
            className="text-white text-xl font-bold hover:text-gray-100 transition-colors mr-4" // Changed from mr-8 to mr-4
            onClick={() => setIsOpen(false)}
          >
            {"<DevAmeen />"}
          </a>

          {/* Centered Navigation - Now truly centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-6"> {/* Adjusted space between nav items */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-100 font-medium transition-colors px-3 py-1" // Increased padding
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right-aligned Resume and Social Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-auto"> {/* Reduced space between items */}
            <a
              href={Pdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-white hover:text-gray-100 font-medium transition-colors"
            >
              <HiDocumentText className="mr-1" /> Resume
            </a>
            
            <div className="flex space-x-3 ml-2"> {/* Reduced space between icons */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-100 transition-colors"
                  aria-label={social.url.split('.')[1]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-cyan-600 rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-100 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href={Pdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-white hover:text-gray-100 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <HiDocumentText className="mr-2" /> Resume
              </a>
              
              <div className="flex justify-center space-x-6 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gray-100 transition-colors text-2xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;