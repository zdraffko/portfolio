import React from "react";
import styles from "./ProjectsCards.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IProject } from "../../../../../models/project";

interface IProps {
  projects: IProject[];
}

const ProjectsCards: React.FC<IProps> = ({ projects }) => (
  <div className={styles.ProjectsCards}>
    {
      projects.map(
        project => <ProjectCard key={project.name} project={project} />
      )
    }
  </div>
);

export default ProjectsCards;
