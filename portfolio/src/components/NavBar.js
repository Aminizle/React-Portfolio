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
    { icon: <BsLinkedin className="text-lg" />, url: "https://www.linkedin.com/in/ameen-mohiyuddin/" },
    { icon: <BsGithub className="text-lg" />, url: "https://github.com/Aminizle" },
    { icon: <BsTwitter className="text-lg" />, url: "https://twitter.com/DevAmeenM" },
    { icon: <BsYoutube className="text-lg" />, url: "https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw" },
    { icon: <SiCodewars className="text-lg" />, url: "https://www.codewars.com/users/DevAmeenM" }
  ];

  const navLinks = [
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`sticky top-0 left-0 right-0 rounded-b-xl bg-gray-800 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-cyan-600 shadow-none py-1" // Reduced padding when scrolled
        : "bg-cyan-500 shadow-lg shadow-cyan-400/30 py-2" // Slightly more padding when at top
    } hover:shadow-cyan-400/50`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-12"> {/* Fixed height */}
          {/* Logo - made more compact */}
          <a
            href="#Landing"
            className="text-white text-lg font-bold hover:text-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {"<DevAmeen />"}
          </a>

          {/* Desktop Navigation - more compact */}
          <div className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-100 font-medium transition-colors text-sm px-2 h-full flex items-center" // Compact styling
              >
                {link.name}
              </a>
            ))}
            
            {/* Compact Resume link */}
            <a
              href={Pdf}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-100 font-medium transition-colors text-sm px-2 h-full flex items-center"
            >
              Resume
            </a>
          </div>

          {/* Social Icons - more compact */}
          <div className="hidden md:flex items-center gap-3 ml-4 h-full">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-100 transition-colors text-lg"
                aria-label={social.url.split('.')[1]}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - centered in the navbar */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5" // Smaller icon
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

        {/* Mobile Menu - compact version */}
        {isOpen && (
          <div className="md:hidden bg-cyan-600 rounded-lg mt-1 p-3 shadow-lg">
            <div className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-100 font-medium transition-colors text-sm py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={Pdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-white hover:text-gray-100 font-medium transition-colors text-sm py-1"
                onClick={() => setIsOpen(false)}
              >
                <HiDocumentText className="mr-1" /> Resume
              </a>
              <div className="flex justify-center space-x-4 pt-1">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gray-100 transition-colors text-xl"
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