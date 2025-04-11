import React from "react";
import backEnd2 from "../assets/backEnd2.jpg";
import developmentTools from "../assets/developmentTools.jpg";
import frontEnd2 from "../assets/frontEnd2.jpg";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="Skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Skills Header */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4 text-center">
            Technical Skills
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My toolkit for building exceptional digital experiences. Each skill 
            has been honed through real-world projects and continuous learning.
          </p>
          <div className="flex justify-center my-4">
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
            <VscDebugBreakpointLog className="text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Front End Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={frontEnd2}
                alt="Front End Development"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-200 mb-4 text-center underline">
              Front End Development
            </h4>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
              </ul>
              <ul className="space-y-2">
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>

          {/* Back End Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={backEnd2}
                alt="Back End Development"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-200 mb-4 text-center underline">
              Back End Development
            </h4>
            <div className="text-gray-300 space-y-2">
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Stripe</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>FireBase</li>
              </ul>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={developmentTools}
                alt="Development Tools"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-200 mb-4 text-center underline">
              Tools & Methodologies
            </h4>
            <div className="text-gray-300 space-y-2">
              <ul className="space-y-2">
                <li>Git, Jenkins, Azure DevOps</li>
                <li>JIRA, Confluence</li>
                <li>Postman</li>
                <li>Agile Scrum</li>
                <li>Kanban</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CodeWars Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-200 mb-4 text-center">
            Continuous Learning
          </h4>
          <p className="text-gray-300 mb-6 text-center">
            I regularly challenge myself on CodeWars to sharpen my problem-solving skills
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.codewars.com/users/DevAmeenM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://www.codewars.com/users/DevAmeenM/badges/large"
                alt="codewars badge large"
                className="max-w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;