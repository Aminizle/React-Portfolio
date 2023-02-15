import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiStrapi,
} from "react-icons/si";

import backEnd1 from "../assets/backEnd1.jpg";
import backEnd2 from "../assets/backEnd2.jpg";
import backEnd3 from "../assets/backEnd3.jpg";
import developmentTools from "../assets/developmentTools.jpg";
import frontEnd1 from "../assets/frontEnd1.jpg";
import frontEnd2 from "../assets/frontEnd2.jpg";

const Skills = () => {
  return (
    <section id="Skills" className="mb-28">
      <h3 className="text-3xl my-10 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
        Technical Skills
      </h3>

      <div className="grid gap-10 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 text-white">
        <div className="w-96 mx-auto bg-cyan-500 rounded-lg">
          <div className="relative h-56 ">
            <img
              src={frontEnd2}
              alt="img-blur-shadow"
              className="h-full w-full rounded-lg rounded-b-none"
            />
          </div>
          <div className="text-center">
            <div variant="h5" className="mb-2 font-bold text-lg underline">
              Front End
            </div>
            <div className="grid grid-cols-2 p-2">
              <ul className="">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="">
                <ul className="">
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 mx-auto bg-cyan-500 rounded-lg">
          <div className="relative h-56">
            <img
              src={backEnd2}
              alt="img-blur-shadow"
              className="h-full w-full rounded-lg rounded-b-none"
            />
          </div>
          <div className="text-center">
            <div variant="h5" className="mb-2 font-bold text-lg underline">
              Back End
            </div>
            <div>
              <ul className="p-2">
                <li>Node.js</li>
                <li>strapi</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-96 mx-auto bg-cyan-500 rounded-lg">
          <div className="relative h-56">
            <img
              src={developmentTools}
              alt="img-blur-shadow"
              className="h-full w-full rounded-lg rounded-b-none"
            />
          </div>
          <div className="text-center">
            <div variant="h5" className="mb-2 font-bold text-lg underline">
              Tools and Methodologies
            </div>
            <div>
              <ul className="p-2">
                {" "}
                <li>Slack, Microsoft Teams, Confluence</li>
                <li>Git, Jenkins, Azure DevOps</li>
                <li>Trello, JIRA</li>
                <li>Postman</li>
                <li>Kanban</li>
                <li>Agile Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-gray-800 dark:text-gray-500 ">
      <p>CodeWars Profile</p>
        <h2 className="flex justify-center ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.codewars.com/users/DevAmeenM"
          ></a>
        </h2>
        <a
          className="flex justify-center hover:scale-110"
          target="_blank"
          rel="noreferrer"
          href="https://www.codewars.com/users/DevAmeenM"
        >
          <img
            src="https://www.codewars.com/users/DevAmeenM/badges/large"
            alt="codewars badge large"
          />
        </a>
      </div>
    </section>
  );
};

export default Skills;
