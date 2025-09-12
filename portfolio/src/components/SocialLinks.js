// src/components/SocialLinks.jsx
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function SocialLinks({ theme }) {
  const isDark = theme === "dark";

  return (
    <ul className="flex space-x-4 z-20">
      {/* Twitter */}
      <li>
        <a
          href="https://twitter.com/DevAmeenM"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition ${
            isDark
              ? "text-blue-200 hover:text-blue-500 drop-shadow-[0_0_6px_#1DA1F2]"
              : "text-sky-500 hover:text-sky-600 drop-shadow-[0_0_4px_#38bdf8]"
          }`}
        >
          <BsTwitter size={24} />
        </a>
      </li>

      {/* YouTube */}
      <li>
        <a
          href="https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition ${
            isDark
              ? "text-red-200 hover:text-red-600 drop-shadow-[0_0_6px_#FF0000]"
              : "text-red-500 hover:text-red-700 drop-shadow-[0_0_4px_#ef4444]"
          }`}
        >
          <BsYoutube size={30} />
        </a>
      </li>

      {/* LinkedIn */}
      <li>
        <a
          href="https://www.linkedin.com/in/ameen-mohiyuddin/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition ${
            isDark
              ? "text-blue-100 hover:text-blue-700 drop-shadow-[0_0_6px_#0A66C2]"
              : "text-blue-700 hover:text-blue-800 drop-shadow-[0_0_4px_#2563eb]"
          }`}
        >
          <BsLinkedin size={24} />
        </a>
      </li>

      {/* Portfolio */}
      <li>
        <a
          href="https://ameen-mohiyuddin-portfolio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition ${
            isDark
              ? "text-purple-100 hover:text-purple-500 drop-shadow-[0_0_6px_#a78bfa]"
              : "text-purple-600 hover:text-purple-700 drop-shadow-[0_0_4px_#8b5cf6]"
          }`}
        >
          <FaUserCircle size={24} />
        </a>
      </li>

      {/* GitHub */}
      <li>
        <a
          href="https://github.com/Aminizle/Nasa-React"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition ${
            isDark
              ? "text-gray-200 hover:text-white drop-shadow-[0_0_6px_#ffffff]"
              : "text-gray-500 hover:text-black drop-shadow-[0_0_4px_#6b7280]"
          }`}
        >
          <BsGithub size={24} />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
