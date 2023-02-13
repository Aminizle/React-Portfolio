import React, { useState } from "react";

const ThemeToggler = () => {
  
  
 
const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="relative px-4 py-2 bg-white rounded-lg shadow-md">
      <button
        className="flex items-center justify-center p-2 bg-gray-800 rounded-full focus:outline-none"
        onClick={setIsDarkMode(!isDarkMode)}
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        {isDarkMode ? (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
