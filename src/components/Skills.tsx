import { targetSkills } from "../util/consts";
import Emoji from "./Emoji";

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  return (
    <div className="skills" data-id={targetSkills}>
      <h2 className="skills-title">
        <Emoji symbol={"🎨"} /> Skills & Technologies:
      </h2>
      <div className="skills-list">
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-react-original colored"></i>
          </div>
          <div className="skills-item-level level-inter">Intermediate</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div className="skills-item-level level-inter">Intermediate</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-css3-plain colored"></i>
          </div>
          <div className="skills-item-level level-inter">Intermediate</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-html5-plain-wordmark colored"></i>
          </div>
          <div className="skills-item-level level-inter">Intermediate</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-typescript-plain colored"></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-sass-original colored"></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>

        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>

        <div className="skills-item">
          <div className="skills-item-title">
            <i className="devicon-mongodb-plain-wordmark colored"></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>

        <div className="skills-item">
          <div className="skills-item-title">
            <i
              className={`devicon-express-original-wordmark ${
                !darkMode ? "colored" : ""
              }`}
            ></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/*
<div className="skills-item">
          <div className="skills-item-title">
            <i
              className={`devicon-nextjs-original-wordmark ${
                !darkMode ? "colored" : ""
              }`}
            ></i>
          </div>
          <div className="skills-item-level level-beg">Beginner</div>
        </div>
        */
