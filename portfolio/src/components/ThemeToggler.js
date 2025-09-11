import React from "react";

const ThemeToggler = ({ theme, setTheme, className = "" }) => {
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const baseClasses = `flex items-center justify-center rounded-full focus:outline-none transition-transform ${className}`;

  return (
    <button
      onClick={toggleTheme}
      className={baseClasses}
      style={{ width: 32, height: 32 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for dark -> light
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,255,100,0.8)]"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon for light -> dark
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;
