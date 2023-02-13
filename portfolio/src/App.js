import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import FooterMenu from "./components/FooterMenu";
import OpenPdfButton from "./components/ResumeButton";
import PastProjects from "./components/ProjectsSection";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Helmet>
        <title>Ameen's Portfolio</title>
        <meta
          name="description"
          content="Check out my portfolio built with React and Tailwind CSS. Explore my past projects and skills, showcasing my expertise in front-end development. I am eager to use my skills to bring your ideas to life and take on new challenges."
        />
        <meta name="theme-color" content="#06b6d4" />
      </Helmet>

      <div className={darkMode ? "dark" : ""}>
        <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen" id="landing">
            <NavBar />
            <div className="text-center py-40 ">
              <h2 className="text-5xl py-2 dark:text-gray-200 font-medium md:text-6xl underline">
                Ameen Mohiyuddin
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl text-cyan-600 ">
                Full Stack software engineer
              </h3>
              <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500 transition-opacity ease-in duration-700 opacity-100">
                I am a full stack web developer with a solid background in
                software quality assurance and automation. I have a passion for
                creating and implementing successful front-end and back-end web
                applications. My eagerness to learn and proven track record
                demonstrates my commitment to delivering high-quality results
                and exceeding expectations.
                <VscDebugBreakpointLog className="my-2 mx-auto text-cyan-600" />
                Skilled in JavaScript/TypeScript, HTML, CSS/Tailwind
                CSS/Bootstrap, Next.js/React.js, Node.js, Express/Axios and
                MongoDB/PostgreSQL, offering a wide range of technical knowledge
                for robust and scalable solutions.
              </p>
              <OpenPdfButton />

              <a href="#Projects">
                <BsFillArrowDownCircleFill className="mx-auto text-4xl text-cyan-500 hover:text-teal-500 animate-bounce mt-10" />
              </a>
            </div>
          </section>
          <PastProjects />
          <Contact />
        </main>
        <FooterMenu />
      </div>
    </div>
  );
}

export default App;
