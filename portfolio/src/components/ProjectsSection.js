import React from "react";
import nasa from "../assets/nasa-720p.png";
import reactNasa from "../assets/react-nasa.png";
import reactPortfolio from "../assets/reactPortfolio.jpg";
import travel from "../assets/travel-720p.png";
import Pdf from "../assets/Resume.pdf";
import { AiFillGithub } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GoTelescope } from "react-icons/go";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const PastProjects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const projects = [
    {
      title: "Travel More, Worry Less",
      img: travel,
      description:
        "A responsive travel experience with immersive visuals and effortless navigation to spark your next adventure.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://ameentravel.netlify.app/",
      github: "https://github.com/Aminizle/travel-site",
      icon: <GiAirplaneDeparture className="inline ml-1" />,
    },
    {
      title: "This React Portfolio",
      img: reactPortfolio,
      description:
        "A showcase of modern React and Tailwind development, built with clean design principles and responsive techniques.",
      tech: ["React", "Tailwind"],
      live: Pdf,
      github: "https://github.com/Aminizle/React-Portfolio",
      icon: "✨",
    },
    {
      title: "NASA Picture of the Day Explorer",
      img: nasa,
      description:
        "Discover daily celestial wonders through NASA's iconic Astronomy Picture of the Day, enhanced with immersive video backgrounds.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://nasa-picture-archive.netlify.app/",
      github: "https://github.com/Aminizle/NASA",
      icon: <GoTelescope className="inline ml-1" />,
    },
    {
      title: "NASA React Explorer",
      img: reactNasa,
      description:
        "Discover daily celestial wonders through NASA's Astronomy Picture of the Day, enhanced with React for an out-of-this-world experience.",
      tech: ["React", "Tailwind"],
      live: "https://react-nasa-ameen.netlify.app/",
      github: "https://github.com/Aminizle/Nasa-React",
      icon: <GoTelescope className="inline ml-1" />,
    },
  ];

  return (
    <section id="Projects" className="py-16 px-4 scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Projects Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12 shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-500 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
            Projects
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Welcome to my digital workshop where creativity meets technical execution. Each project represents my commitment to crafting exceptional user experiences through innovative solutions. I specialize in transforming complex API integrations into intuitive interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{
                scale: 1.025,
                y: -5,
                rotateX: 1,
                rotateY: 1,
                boxShadow:
                  "0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(59,130,246,0.6)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-glow-blue cursor-pointer"
            >
              <motion.div
                className="relative h-48 mb-4 overflow-hidden rounded-lg"
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </a>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-100 mb-2 text-center drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] underline">
                {project.title} {project.icon}
              </h4>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="flex justify-evenly text-gray-300 mb-4 flex-wrap gap-2">
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className="px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-evenly flex-wrap gap-2">
                <Button
                  className="bg-gray-700 rounded-lg shadow-lg hover:shadow-glow-purple transition-shadow duration-500 hover:text-purple-300 px-4 py-2"
                  ripple={true}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    Live Site {project.icon}
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 rounded-lg shadow-lg hover:shadow-glow-purple transition-shadow duration-500 hover:text-purple-300 px-4 py-2"
                  ripple={true}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    GitHub <AiFillGithub className="ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
