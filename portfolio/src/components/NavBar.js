import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <nav className="fixed w-5/6 top-0 z-10 shadow-xl hover:shadow-cyan-500/50 hover:bg-teal-500 py-1 mb-2 flex justify-between bg-cyan-500 rounded-xl rounded-t-none">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex dark:text-gray-200">
        <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:scale-125 mx-4 animate-pulse"
                />
          <a className="text-base xl:text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
            {"<Dev Ameen />"}
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z"
                  fill="currentColor"
                />
              ) : (
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          } lg:block mt-2 lg:mt-0 teal-500 lg:bg-transparent text-black p-4 lg:p-0 z-20`}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Contact Me
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Resume
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Github
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                LinkedIn
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Twitter
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                CodeWars
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 py-2 px-4 hover:text-gray-900 font-medium"
                href="#"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
