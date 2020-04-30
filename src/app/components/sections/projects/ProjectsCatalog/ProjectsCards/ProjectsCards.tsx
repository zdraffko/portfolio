import React from "react";
import styles from "./ProjectsCards.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsCards = () => (
  <div className={styles.ProjectsCards}>
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </div>
);

export default ProjectsCards;
