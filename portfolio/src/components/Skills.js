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
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import backEnd1 from "../assets/backEnd1.jpg" 
import backEnd2 from "../assets/backEnd2.jpg" 
import backEnd3 from "../assets/backEnd3.jpg" 
import developmentTools from "../assets/developmentTools.jpg" 
import frontEnd1 from "../assets/frontEnd1.jpg" 
import frontEnd2 from "../assets/frontEnd2.jpg" 
import professionalSkills from "../assets/professionalSkills.jpg" 

const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-10 text-white max-width ">
      <div className="flex justify-center justify-items-center">
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={frontEnd2}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        Front End
        </Typography>
        <Typography>
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
        </Typography>
      </CardBody>      
    </Card>
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={backEnd2}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        Back End
        </Typography>
        <Typography>
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
        </Typography>
      </CardBody>      
    </Card>
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={developmentTools}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        Development Tools
        </Typography>
        <Typography>
        <ul className="pl-5">
            <li>Git</li>
            <li>Trello, JIRA & Azure DevOps</li>
            <li>Slack, Microsoft Teams, Confluence</li>
            <li>Visual Studio Code & intellij</li>
            <li>Jenkins & Azure DevOps</li>
            <li>Postman</li>
          </ul>
        </Typography>
      </CardBody>      
    </Card>
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={professionalSkills}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        Professional Skills
        </Typography>
        <Typography>
        <ul className="pl-5">
            <li>Agile Scrum</li>
            <li>kanaban</li>
            <li>Team management</li>
            <li>Effective communication</li>
            <li>Adaptability</li>
            <li>Problem-solving</li>
            <li>Collaboration</li>
          </ul>
        </Typography>
      </CardBody>      
    </Card>
    <div className="grid md:grid-cols-2 gap-10 py-10 text-white max-width ">
      <div className="flex justify-center justify-items-center">
        <div className=" m-3 text-left ">
          <h3 className="text-xl font-bold">Front End</h3>
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
      <div className="flex justify-center justify-items-center">
        <div className=" m-3 text-left">
          <h3 className="text-xl font-bold">Back End</h3>
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
      <div className="flex justify-center justify-items-center">
        <div className=" m-3 text-left">
          <h3 className="text-xl font-bold">Development Tools</h3>
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
      <div className="flex justify-center justify-items-center">
        <div className=" m-3 text-left">
          <h3 className="text-xl font-bold">Professional Skills</h3>
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
    </div></div>
  );
};

export default Skills;
