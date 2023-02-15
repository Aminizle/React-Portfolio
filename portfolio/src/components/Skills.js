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
import professionalSkills from "../assets/professionalSkills.jpg";

const Skills = () => {
  return (
    <section id="Skills">
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 rounded-lg text-white">
      <div className="w-96 mx-auto">
        <div className="relative h-56">
          <img
            src={frontEnd2}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </div>
        <div className="text-center">
          <div variant="h5" className="mb-2">
            Front End
          </div>
          <div>
            <ul className="pl-5  ">
              <li className="flex">
                <SiJavascript />
                JavaScript
              </li>
              <li className="flex">
                <SiTypescript />
                TypeScript
              </li>
              <li className="flex">
                <SiHtml5 />
                HTML
              </li>
              <li className="flex">
                <SiCss3 />
                CSS
              </li>
              <li className="flex">
                <SiTailwindcss />
                Tailwind CSS
              </li>
              <li className="flex">
                <SiBootstrap />
                Bootstrap
              </li>
              <li className="flex">
                <SiReact />
                React.js
              </li>
              <li className="flex">
                <SiNextdotjs />
                Next.js
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <div className="relative h-56">
          <img src={backEnd2} alt="img-blur-shadow" className="h-full w-full" />
        </div>
        <div className="text-center">
          <div variant="h5" className="mb-2">
            Back End
          </div>
          <div>
            <ul className="pl-5">
              <li className="flex">
                <SiNodedotjs />
                Node.js
              </li>
              <li className="flex">
                <SiStrapi />
                strapi
              </li>
              <li className="flex">
                <SiExpress />
                Express
              </li>
              <li className="flex">
                <SiMongodb />
                MongoDB
              </li>
              <li className="flex">
                <SiPostgresql />
                PostgreSQL
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <div className="relative h-56">
          <img
            src={developmentTools}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </div>
        <div className="text-center">
          <div variant="h5" className="mb-2">
            Development Tools
          </div>
          <div>
            <ul className="pl-5">
              <li>Git</li>
              <li>Trello, JIRA & Azure DevOps</li>
              <li>Slack, Microsoft Teams, Confluence</li>
              <li>Visual Studio Code & intellij</li>
              <li>Jenkins & Azure DevOps</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <div className="relative h-56">
          <img
            src={professionalSkills}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </div>
        <div className="text-center">
          <div variant="h5" className="mb-2">
            Professional Skills
          </div>
          <div>
            <ul className="pl-5">
              <li>Agile Scrum</li>
              <li>kanaban</li>
              <li>Team management</li>
              <li>Effective communication</li>
              <li>Adaptability</li>
              <li>Problem-solving</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
