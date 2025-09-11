import React, { useState, useEffect } from "react";
import { HiDocumentText } from "react-icons/hi";
import Pdf from "../assets/Resume.pdf";
import ThemeToggler from "./ThemeToggler";
import SocialLinks from "./SocialLinks";

const NavBar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  const glowClasses = "transition-colors duration-300 hover:text-glow-cyan hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]";

  return (
    <nav
      className={`sticky top-0 left-0 right-0 rounded-b-xl z-50 transition-all duration-300
        ${scrolled
          ? "bg-dark-bg-accent dark:bg-dark-bg shadow-glow-cyan py-1"
          : "bg-dark-bg dark:bg-dark-bg-secondary shadow-glow-blue py-2"
        } hover:shadow-glow-purple`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a
            href="#Landing"
            className={`text-text-primary font-bold text-lg ${glowClasses}`}
            onClick={() => setIsOpen(false)}
          >
            {"<DevAmeen />"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-text-primary font-medium text-sm px-2 h-full flex items-center ${glowClasses}`}
              >
                {link.name}
              </a>
            ))}

            {/* Resume link */}
            <a
              href={Pdf}
              target="_blank"
              rel="noreferrer"
              className={`text-text-primary font-medium text-sm px-2 h-full flex items-center transition-colors duration-300 ${glowClasses}`}
            >
              <HiDocumentText className="mr-1" /> Resume
            </a>

            {/* Desktop Social Links + Theme toggler */}
            <div className="flex items-center gap-4">
              <ThemeToggler theme={theme} setTheme={setTheme} className="w-6 h-6 glow-only" />
              <SocialLinks />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-text-primary ${glowClasses} focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-bg-secondary dark:bg-dark-bg rounded-lg mt-1 p-3 shadow-lg">
            <div className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-text-primary font-medium text-sm py-1 ${glowClasses}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href={Pdf}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center text-text-primary font-medium text-sm py-1 transition-colors duration-300 hover:text-glow-blue hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)]`}
                onClick={() => setIsOpen(false)}
              >
                <HiDocumentText className="mr-1" /> Resume
              </a>

              {/* Mobile Social Links + Theme toggler */}
              <div className="flex justify-center space-x-4 pt-2">
                <ThemeToggler theme={theme} setTheme={setTheme} className="w-5 h-5 glow-only" />
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
