import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BsFillMoonStarsFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import FooterMenu from "./components/FooterMenu";
import OpenPdfButton from "./components/ResumeButton";
import PastProjects from "./components/ProjectsSection";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Helmet>
        <title>Ameen's Portfolio</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <div className={darkMode ? "dark" : ""}>
        <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          {/* landing */}

          <section className="min-h-screen" id="landing">
            <nav className="py-5 mb-2 flex justify-between bg-cyan-500 rounded-xl rounded-t-none">
              <div className="flex dark:text-gray-200 ">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:scale-125 mx-4"
                />
                <h1 className="text-xl font-burtons dark:text-gray-200 font-semibold tracking-tight">
                  {"<Dev Ameen />"}
                </h1>
              </div>

              <ul className="flex items-center dark:text-gray-200 md:collapse lg:visible">
                <li>Projects</li>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>CodeWars</li>
                <li>
                  <span
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide px-4 py-2 rounded-md ml-8 hover:scale-125"
                    href="#"
                    onClick={() =>
                      (window.location.href =
                        "mailto:AmeenMohiyuddin2022@gmail.com")
                    }
                  >
                    Contact me
                  </span>
                </li>
              </ul>

              <div className="lg:hidden">
                <button className="mx-6 px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 dark:text-gray-200 font-medium md:text-6xl underline">
                Ameen Mohiyuddin
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl text-cyan-600">
                Full Stack Web Developer
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
            </div>
            <a href="#Projects">
              <BsFillArrowDownCircleFill className="mx-auto text-4xl text-cyan-500 hover:text-teal-500 animate-bounce" />
            </a>
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
