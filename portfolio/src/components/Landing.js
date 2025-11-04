// src/components/Landing.jsx
import React, { useState } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@material-tailwind/react";
import Pdf from "../assets/Resume.pdf";
import { HiDocumentText, HiMail } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [hoverName, setHoverName] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.6 } },
  };

  return (
    <section
      id="Landing"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Glow Card */}
        <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-500">
          {/* Name */}
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            onMouseEnter={() => setHoverName(true)}
            onMouseLeave={() => setHoverName(false)}
            className="text-5xl md:text-6xl font-bold text-gray-100 mb-4 transition-all duration-400 cursor-pointer drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.9)]"
          >
            {hoverName ? "<DevAmeen />" : "Ameen Mohiyuddin"}
          </motion.h2>

          {/* Animated Title */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
            <TypeAnimation
              sequence={[
                "💻 Software Engineer",
                5000,
                "🌐 Web Developer",
                5000,
                "🔧 Full Stack Engineer",
                5000,
                "🔍 Quality Assurance Specialist",
                3000,
              ]}
              wrapper="h3"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-medium text-blue-400 hover:text-purple-500"
            />
          </motion.div>

          {/* Intro */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }} className="text-gray-300">
            <p className="mb-6 text-lg md:text-xl leading-relaxed">
              As a full-stack developer with extensive experience in both software engineering and quality assurance, I specialize in building high-performance web applications with meticulous attention to detail. My unique background in QA informs my development approach, ensuring I deliver robust, accessible, and user-centric solutions from the first line of code.
            </p>

            <div className="flex justify-center my-4">
              <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse" />
              <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse" />
              <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse" />
            </div>

            <p className="mb-6 text-lg md:text-xl leading-relaxed">
              With proven experience across government, healthcare, and financial sectors, I excel at solving complex technical challenges in both independent and collaborative Agile environments. My technical expertise is matched by my commitment to writing clean, maintainable code and fostering positive team dynamics that drive project success.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }} className="mt-12 text-center">
            <div className="flex items-center justify-evenly my-8 mx-auto space-x-6">
              {/* Contact Button */}
              <Button className="flex items-center justify-center w-44 bg-gray-700 rounded-lg px-6 py-3 text-gray-100 font-semibold shadow-md shadow-glow-blue hover:shadow-glow-purple hover:text-purple-300 transition-all duration-500" ripple={true}>
                <a href="#Contact" className="flex items-center">
                  <HiMail className="text-lg mr-2" /> Contact Me
                </a>
              </Button>

              {/* Resume Button */}
              {/* <Button className="flex items-center justify-center w-44 bg-gray-700 rounded-lg px-6 py-3 text-gray-100 font-semibold shadow-md shadow-glow-blue hover:shadow-glow-purple hover:text-purple-300 transition-all duration-500" ripple={true}>
                <a href={Pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <HiDocumentText className="text-lg mr-2" /> View Resume
                </a>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
