import React from "react";
import marvel from "../assets/marvel-720p.png";
import nasa from "../assets/nasa-720p.png";
import reactPortfolio from "../assets/reactPortfolio.png";
import travel from "../assets/travel-720p.png";
import Pdf from "../assets/Resume.pdf";
import { AiFillGithub } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { GoTelescope } from "react-icons/go";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Button } from "@material-tailwind/react";

const PastProjects = () => {
  return (
    <section id="Projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Projects Header */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4 text-center">
            Projects
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Welcome to my digital workshop where creativity meets technical
            execution. Each project represents my commitment to crafting
            exceptional user experiences through innovative solutions. I
            specialize in transforming complex API integrations into intuitive
            interfaces.
          </p>

          <div className="flex justify-center my-4">
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Travel Project */}
          <div className="bg-gray-800 p-6 rounded-xl srounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <a
              href="https://ameentravel.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={travel}
                alt="Travel Project"
                className="rounded-lg w-full h-48 object-cover"
              />
            </a>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-200 mb-2">
                Travel More, Worry Less{" "}
                <GiAirplaneDeparture className="inline ml-1" />
              </h4>
              <p className="text-gray-300 mb-4">
                A responsive travel experience with immersive visuals and
                effortless navigation to spark your next adventure.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>
                <ul className="flex justify-evenly text-gray-300 list-disc list-inside">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="flex justify-evenly flex-wrap gap-2">
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://ameentravel.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    Live Site <GiAirplaneDeparture className="ml-2" />
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://github.com/Aminizle/travel-site"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    GitHub <AiFillGithub className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Marvel Project */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg rounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <a
              href="https://marvel-cinematic-universe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={marvel}
                alt="Marvel Project"
                className="rounded-lg w-full h-48 object-cover"
              />
            </a>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-200 mb-2">
                Marvel Cinematic Universe Explorer{" "}
                <BiCameraMovie className="inline ml-1" />
              </h4>
              <p className="text-gray-300 mb-4">
                Your ultimate MCU companion - browse films with cinematic
                posters, trailers, director details, and release dates in one
                seamless experience.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>
                <ul className="flex justify-evenly text-gray-300 list-disc list-inside">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="flex justify-evenly flex-wrap gap-2">
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://marvel-cinematic-universe.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    Live Site <BiCameraMovie className="ml-2" />
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://github.com/Aminizle/Marvel"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    GitHub <AiFillGithub className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* NASA Project */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg rounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <a
              href="https://nasa-picture-archive.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={nasa}
                alt="NASA Project"
                className="rounded-lg w-full h-48 object-cover"
              />
            </a>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-200 mb-2">
                NASA Picture of the Day Explorer{" "}
                <GoTelescope className="inline ml-1" />
              </h4>
              <p className="text-gray-300 mb-4">
                Discover daily celestial wonders through NASA's iconic Astronomy
                Picture of the Day, enhanced with immersive video backgrounds.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>
                <ul className="flex justify-evenly text-gray-300 list-disc list-inside">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="flex justify-evenly flex-wrap gap-2">
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://nasa-picture-archive.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    Live Site <GoTelescope className="ml-2" />
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://github.com/Aminizle/NASA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    GitHub <AiFillGithub className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Portfolio Project */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg rounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <a
              href="https://ameen-mohiyuddin-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={reactPortfolio}
                alt="Portfolio Project"
                className="rounded-lg w-full h-48 object-cover border border-gray-600"
              />
            </a>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-200 mb-2">
                This React Portfolio <span className="text-cyan-400">👋</span>
              </h4>
              <p className="text-gray-300 mb-4">
                A showcase of modern React and Tailwind CSS development, built
                with clean design principles and responsive techniques.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>
                <ul className="flex justify-evenly text-gray-300 list-disc list-inside">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="flex justify-evenly flex-wrap gap-2">
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    View Resume
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300"
                  ripple={true}
                >
                  <a
                    href="https://github.com/Aminizle/React-Portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    GitHub <AiFillGithub className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
