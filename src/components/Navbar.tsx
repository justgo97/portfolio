import { useRef } from "react";
import Emoji from "./Emoji";
import {
  targetAbout,
  targetContact,
  targetProjects,
  targetSkills,
} from "../util/consts";

interface NavbarProps {
  darkMode: boolean;
  onClickThemeButton: () => void;
}

const Navbar = ({ darkMode, onClickThemeButton }: NavbarProps) => {
  const refMenu = useRef<HTMLElement>(null);

  return (
    <>
      <nav ref={refMenu}>
        <div className="start">
          <span className="start-title">Hamdi's Portfolio:</span>
          <NavbarElements className="start-elements" />
        </div>

        <div
          className="start-mob"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <img src="./images/icon-menu.svg" alt="icon menu" />
          <span className="start-mob-title">Hamdi's Portfolio</span>
        </div>

        <div className="options">
          <button onClick={onClickThemeButton}>
            <img
              src={
                darkMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg"
              }
              alt="theme switch"
            />
          </button>
        </div>
      </nav>
      <div className="collapse" id="collapseExample">
        <NavbarElements className="start-mob-elements" />
      </div>
    </>
  );
};

interface NavbarElementsProps {
  className?: string;
  elementID?: string;
}

const NavbarElements = ({
  className = "",
  elementID = "",
}: NavbarElementsProps) => {
  function onClickNavItem(targetID: string) {
    const sectionElement = document.body.querySelector(
      `[data-id="${targetID}"]`
    );

    if (!sectionElement) return;

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={className} id={elementID}>
      <a className="nav-element" onClick={() => onClickNavItem(targetAbout)}>
        <Emoji symbol={"❔"} />
        About
      </a>
      <a className="nav-element" onClick={() => onClickNavItem(targetSkills)}>
        <Emoji symbol={"🎨"} />
        Skills
      </a>
      <a className="nav-element" onClick={() => onClickNavItem(targetProjects)}>
        <Emoji symbol={"📦"} />
        Projects
      </a>
      <a className="nav-element" onClick={() => onClickNavItem(targetContact)}>
        <Emoji symbol={"📞"} />
        Contact
      </a>
    </div>
  );
};

export default Navbar;
