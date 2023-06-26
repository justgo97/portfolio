import { useState } from "react";

import reactLogo from "/react.svg";

import "./styles/App.scss";

// Import all of Bootstrap's JS
import "bootstrap";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    document.body.classList.add("dark-mode");
    return true;
  });

  const addDarkMode = () => {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    setDarkMode(true);
  };

  const addLightMode = () => {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    setDarkMode(false);
  };

  function onClickThemeButton() {
    if (darkMode) {
      addLightMode();
    } else addDarkMode();
  }

  return (
    <main>
      <Navbar darkMode={darkMode} onClickThemeButton={onClickThemeButton} />
      <div className="sections">
        <About />
        <Skills darkMode={darkMode} />
        <Projects />
        <Contact darkMode={darkMode} />
        <footer className="fw-bold">
          <div>
            Made with{" "}
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
              style={{ height: "25px" }}
            />
          </div>
          <br />
          <div>
            <a
              className="text-decoration-none text-reset fs-1"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/justgo97/portfolio"
            >
              <i
                className={`devicon-github-original-wordmark ${
                  !darkMode ? "colored" : ""
                }`}
              ></i>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
