import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import FooterMenu from "./components/FooterMenu";
import PastProjects from "./components/ProjectsSection";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Landing from "./components/Landing";
import Particle from "./components/Particle";

function App() {
  const [theme, setTheme] = useState("dark"); // default to dark

  // Apply theme to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="App">
      <Helmet>
        <title>Ameen's Portfolio</title>
        <meta
          name="description"
          content="Check out my portfolio built with React and Tailwind CSS."
        />
        <meta name="theme-color" content="#06b6d4" />
      </Helmet>

      {/* Pass current theme to Particle */}
      <Particle theme={theme} className="-z-10 absolute" />

      <main className="z-1 relative px-10 md:px-20 lg:px-40">
        {/* NavBar receives theme & setter */}
        <NavBar theme={theme} setTheme={setTheme} />
        <Landing />
        <Skills />
        <PastProjects />
        <Contact />
        <FooterMenu />
      </main>
    </div>
  );
}

export default App;
