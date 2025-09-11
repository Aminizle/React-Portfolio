// src/components/SocialLinks.jsx
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function SocialLinks({ theme }) {
  return (
    <ul className="flex space-x-4 z-20">
      <li>
        <a
          href="https://twitter.com/DevAmeenM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition drop-shadow-[0_0_6px_#1DA1F2]"
        >
          <BsTwitter size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600 transition drop-shadow-[0_0_6px_#FF0000]"
        >
          <BsYoutube size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ameen-mohiyuddin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition drop-shadow-[0_0_6px_#0A66C2]"
        >
          <BsLinkedin size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://ameen-mohiyuddin-portfolio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition drop-shadow-[0_0_6px_#a78bfa]"
        >
          <FaUserCircle size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Aminizle/Nasa-React"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-white transition drop-shadow-[0_0_6px_#ffffff]"
        >
          <BsGithub size={24} />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
