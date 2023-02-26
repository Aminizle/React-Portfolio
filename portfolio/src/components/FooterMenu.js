import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

import { MdEmail } from "react-icons/md";

function FooterMenu() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2">
      <nav className="container mx-auto">
        
        <ul className="flex justify-center my-3 text-cyan-500 cursor-pointer text-3xl ">
          <li>
            <a
              href="https://twitter.com/DevAmeenM"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="mx-5 hover:scale-125 hover:text-cyan-400" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ameen-mohiyuddin/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="mx-5 hover:scale-125 hover:text-cyan-400" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Aminizle"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="mx-5 hover:scale-125 hover:text-cyan-400" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube className="mx-5 hover:scale-125 hover:text-cyan-400" />
            </a>
          </li>
          <li>
            <a className="font-medium text-xl " href="#contact">
              <MdEmail className="mx-5 hover:scale-125 text-3xl hover:text-cyan-400" />
            </a>
          </li>
        </ul>
        <p>Made by Ameen Mohiyuddin with <span className="text-red-600 animate-pulse">❤</span> | All rights reserved</p>
  
      </nav>
    </footer>
  );
}

export default FooterMenu;
