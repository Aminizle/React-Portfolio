import React from "react";
import backEnd2 from "../assets/backend.png";
import developmentTools from "../assets/developmentTools.png";
import frontEnd2 from "../assets/Frontend.webp";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const skills = [
    {
      title: "Front End Development",
      img: frontEnd2,
      items: [
        ["JavaScript", "TypeScript", "HTML5", "CSS3", "Sass"],
        ["React.js", "Next.js", "Angular", "Tailwind", "Bootstrap"],
      ],
    },
    {
      title: "Back End Development",
      img: backEnd2,
      items: [
        ["Node.js", "Stripe", "Express"],
        ["Firebase", "MongoDB", "PostgreSQL"],
      ],
    },
    {
      title: "Tools & Methodologies",
      img: developmentTools,
      items: [
        ["Git, Jenkins", "JIRA, Confluence"],
        ["Postman", "Agile Scrum", "Kanban"],        
      ],
    },
  ];

  return (
    <section id="Skills" className="py-16 px-4 pt-[6rem] -mt-[6rem]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-gray-800 p-3 rounded-xl shadow-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-500 mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
            Technical Skills & Continuous Learning
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
            My toolkit for building exceptional digital experiences. Each skill
            has been honed through real-world projects and continuous learning.
            I regularly challenge myself on CodeWars to sharpen my
            problem-solving skills.
          </p>

       {/* CodeWars Badge */}
<div className="flex justify-center mb-6">
  <motion.a
    href="https://www.codewars.com/users/DevAmeenM"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 p-2 rounded-xl shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-500"
    whileHover={{ scale: 1.08, y: -3 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <img
      src="https://www.codewars.com/users/DevAmeenM/badges/large"
      alt="codewars badge large"
      className="max-w-xs h-auto rounded-lg"
    />
  </motion.a>
</div>


          {/* Glow Icons */}
          {/* <div className="flex justify-center space-x-3">
            <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse text-2xl" />
            <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse text-2xl" />
            <VscDebugBreakpointLog className="text-glow-blue hover:text-glow-purple animate-pulse text-2xl" />
          </div> */}
        </motion.div>

        {/* Skills Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: 2,
                rotateY: 2,
                boxShadow:
                  "0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(59,130,246,0.6)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="flex-1 bg-gray-800 p-6 rounded-xl shadow-lg shadow-glow-blue cursor-pointer"
            >
              <motion.div
                className="relative h-48 mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h4 className="text-xl font-bold text-gray-100 mb-4 text-center drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] underline">
                {skill.title}
              </h4>

              <div className="grid grid-cols-2 gap-4 text-gray-300">
                {skill.items.map((col, cidx) => (
                  <ul key={cidx} className="space-y-2">
                    {col.map((item, iidx) => (
                      <li key={iidx}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
