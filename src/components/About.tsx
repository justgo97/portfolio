import Emoji from "./Emoji";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import {
  targetAbout,
  targetContact,
  targetProjects,
  targetSkills,
} from "../util/consts";

const About = () => {
  function onClickNavItem(targetID: string) {
    const sectionElement = document.body.querySelector(
      `[data-id="${targetID}"]`
    );

    if (!sectionElement) return;

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="about" data-id={targetAbout}>
      <p className="about-quote">"The right way is the practical way." - Me.</p>
      <div className="about-main">
        <div>
          <h2>
            <Emoji symbol={"❔"} /> About me:
          </h2>
          <p>
            <RoughNotationGroup show={true}>
              Welcome to my portfolio! I'm Hamdi, a junior{" "}
              <span
                className="about-main-dev"
                onClick={() => onClickNavItem(targetSkills)}
              >
                <RoughNotation
                  type="box"
                  iterations={1}
                  padding={2}
                  color="green"
                  strokeWidth={2}
                  order="1"
                >
                  web developer
                </RoughNotation>
              </span>
              . Here, you'll find my latest{" "}
              <span
                className="about-main-dev"
                onClick={() => onClickNavItem(targetProjects)}
              >
                <RoughNotation
                  type="highlight"
                  order="2"
                  iterations={1}
                  color="orange"
                >
                  projects
                </RoughNotation>
              </span>{" "}
              and{" "}
              <span
                className="about-main-dev"
                onClick={() => onClickNavItem(targetContact)}
              >
                <RoughNotation type="underline" order="3" padding={1}>
                  contact information
                </RoughNotation>
              </span>
              . Please feel free to reach out to me for any inquiries or
              collaborations.
            </RoughNotationGroup>
          </p>
        </div>
        <img className="about-picture" src="/images/my_avatar.png" alt="" />
      </div>
    </div>
  );
};

export default About;
