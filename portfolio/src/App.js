import { Helmet } from "react-helmet";
import "./App.css";

import FooterMenu from "./components/FooterMenu";
import OpenPdfButton from "./components/ResumeButton";
import PastProjects from "./components/ProjectsSection";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Landing from "./components/Landing";

function App() {
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
      <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <NavBar />
        <Landing />
        <OpenPdfButton />
        <Skills />
        <PastProjects />
        <Contact />
      </main>
      <FooterMenu />
    </div>
  );
}

export default App;
