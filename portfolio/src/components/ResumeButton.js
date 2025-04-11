import { Button } from "@material-tailwind/react";
import React from "react";
import Pdf from "../assets/Resume.pdf";
import { HiDocumentText } from "react-icons/hi";

const OpenPdfButton = () => {
  return (
    <div className="flex items-center justify-center gap-2 my-8">
      <Button
        className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
        ripple={true}
      >
        <a
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <HiDocumentText className="text-lg mr-2" />
          View Resume
        </a>
      </Button>

      <Button
        className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg px-4 py-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
        title="Download Resume"
        ripple={true}
      >
        <a
          href={Pdf}
          download="Ameen-Mohiyuddin-Resume.pdf"
          rel="noopener noreferrer"
        >
          <HiDocumentText className="text-lg" />
        </a>
      </Button>
    </div>
  );
};

{/* <div className="flex flex-col justify-between">
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg h-full shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
    <div className="mb-8">
      <h4 className="text-xl font-semibold text-gray-200 mb-4">
        Email me directly
      </h4>
      <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300">
        <div className="flex-grow p-4">
          <div className="flex items-center">
            <IoMdMail className="text-cyan-400 mr-2 text-xl" />
            <a
              href="mailto:Ameen.Mohiyuddin@gmail.com"
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              Ameen.Mohiyuddin@gmail.com
            </a>
          </div>
        </div>
        <button
          onClick={handleCopyEmail}
          className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-1 text-white p-4 flex items-center justify-center mr-1"
          title="Copy to clipboard"
          aria-label="Copy email address"
        >
          {isCopied ? <IoMdCheckmark /> : <IoMdCopy />}
        </button>
      </div>
    </div>
  </div>
</div>; */}

export default OpenPdfButton;
