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

const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-10 lg:flex-row lg:flex-wrap text-white max-width">
      <div className=" m-3 text-left">
        <h3 className="text-xl font-bold">Front End</h3>
        <ul className="list-disc pl-5  ">
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
      <div className=" m-3 text-left">
        <h3 className="text-xl font-bold">Back End</h3>
        <ul className="list-disc pl-5">
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
      <div className=" m-3 text-left">
        <h3 className="text-xl font-bold">Miscellaneous Tools</h3>
        <ul className="list-disc pl-5">
          <li className="flex">
            <SiMongodb />
            Version control systems such as Git and SVN
          </li>
          <li className="flex">
            <SiMongodb />
            Project management tools like Trello, Asana, JIRA
          </li>
          <li className="flex">
            <SiMongodb />
            Collaboration tools: Slack, Microsoft Teams, Zoom
          </li>
          <li className="flex">
            <SiMongodb />
            IDEs such as Visual Studio Code & intellij{" "}
          </li>
          <li className="flex">
            <SiMongodb />
            Azure Devops
          </li>
          <li className="flex">
            <SiMongodb />
            Continuous integration and deployment (CI/CD) tools like Jenkins
          </li>
          <li className="flex">
            <SiMongodb />
            postman
          </li>
        </ul>
      </div>
      <div className=" m-3 text-left">
        <h3 className="text-xl font-bold">Softkills</h3>
        <ul className="list-disc pl-5">
          <li>
            Offering a wide range of technical knowledge for robust and scalable
            solutions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
