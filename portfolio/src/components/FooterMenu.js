import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

function FooterMenu() {
  const socialLinks = [
    {
      icon: <AiFillTwitterCircle className="text-3xl" />,
      url: "https://twitter.com/DevAmeenM",
      label: "Twitter",
    },
    {
      icon: <AiFillLinkedin className="text-3xl" />,
      url: "https://www.linkedin.com/in/ameen-mohiyuddin/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillGithub className="text-3xl" />,
      url: "https://github.com/Aminizle",
      label: "GitHub",
    },
    {
      icon: <AiFillYoutube className="text-3xl" />,
      url: "https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw",
      label: "YouTube",
    },
    {
      icon: <SiCodewars className="text-3xl" />,
      url: "https://www.codewars.com/users/DevAmeenM",
      label: "Codewars",
    },
    {
      icon: <MdEmail className="text-3xl" />,
      url: "#contact",
      label: "Email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-3 mx-5 rounded-t-xl">
      <div className="container mx-auto">
        {/* Social Links */}
        <nav aria-label="Social media links">
          <ul className="flex justify-center space-x-6 mb-3">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block p-2 text-cyan-500 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-125"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm md:text-base">
          <p className="mb-2">
            Made by Ameen Mohiyuddin with{" "}
            <span className="text-red-500 animate-pulse" aria-label="love">
              ❤
            </span><span className="mt-2 text-xs text-gray-500">
            &copy; {currentYear} All rights reserved
          </span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}

export default FooterMenu;
