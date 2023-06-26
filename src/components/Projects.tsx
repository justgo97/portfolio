import { targetProjects } from "../util/consts";
import { projects } from "../util/data";

import Emoji from "./Emoji";

const Projects = () => {
  return (
    <div className="projects" data-id={targetProjects}>
      <h2>
        <Emoji symbol={"📦"} /> Projects:
      </h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            src={project.image}
            title={project.title}
            url={project.link}
          />
        ))}
      </div>
      <div className="projects-notice">🚀 More coming soon...</div>
    </div>
  );
};

interface ProjectItemProps {
  src?: string;
  title?: string;
  description?: string;
  url?: string;
}

const ProjectItem = ({ src, title, url }: ProjectItemProps) => {
  return (
    <div className="projects-list-item">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={src} className="" alt="..." />
        <div className="projects-list-item-text">{title}</div>
      </a>
    </div>
  );
};

export default Projects;
