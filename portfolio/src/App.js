import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import deved from "./assets/logo.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";
import FooterMenu from "./components/FooterMenu";
import OpenPdfButton from "./components/ResumeButton";
import PastProjects from "./components/ProjectsSection";
import { Button } from "@material-tailwind/react";

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
            <nav className="py-5 mb-2 flex justify-between bg-gradient-to-l from-cyan-500 to-teal-500 rounded-xl rounded-t-none">
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
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide px-4 py-2 rounded-md ml-8 hover:scale-125"
                    href="#"
                    onClick={() =>
                      (window.location.href =
                        "mailto:AmeenMohiyuddin2022@gmail.com")
                    }
                  >
                    Contact me
                  </a>
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
              <h3 className="text-2xl py-2 md:text-3xl text-teal-600">
                Full Stack Web Developer
              </h3>
              <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500 transition-opacity ease-in duration-700 opacity-100">
                I am a full stack web developer with a solid background in
                software quality assurance and automation. I have a passion for
                creating and implementing successful front-end and back-end web
                applications. My eagerness to learn and proven track record
                demonstrates my commitment to delivering high-quality results
                and exceeding expectations.
                <VscDebugBreakpointLog className="my-2 mx-auto text-teal-600" />
                Skilled in JavaScript/TypeScript, HTML, CSS/Tailwind
                CSS/Bootstrap, Next.js/React.js, Node.js, and
                MongoDB/PostgreSQL, offering a wide range of technical knowledge
                for robust and scalable solutions.
              </p>
              <OpenPdfButton />
            </div>
          </section>
                    <PastProjects />
          {/* Services */}
          
          <section id="services">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <img
                src={deved}
                fill
                style={{ objectFit: "cover" }}
                alt="image af a man waving"
              />
            </div>
            <div>
              <h3 className="text-3xl py-1 md:text-3xl max-w-lg mx-auto dark:text-gray-200">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                Since the beginning of my journey as a freelance developer, I've
                done remote work for
                <span className="text-teal-500"> agencies </span> consulted
                <span className="text-teal-500"> startups </span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                I offer from a wide range of services, including brand design,
                programming and teaching
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <img
                  src={design}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <img
                  src={code}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <img
                  src={consulting}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section>

          {/* Projects */}

          <section id="Projects">
            <div>
              <h3 className="text-3xl py-1 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
                Portfolio
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                Since the beginning of my journey as a freelance developer, I've
                done remote work for
                <span className="text-teal-500"> agencies </span> consulted
                <span className="text-teal-500"> startups </span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                I offer from a wide range of services, including brand design,
                programming and teaching
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  src={web1}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={web2}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={web3}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={web4}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={web5}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={web6}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        </main>
        <FooterMenu />
      </div>
    </div>
  );
}

export default App;
