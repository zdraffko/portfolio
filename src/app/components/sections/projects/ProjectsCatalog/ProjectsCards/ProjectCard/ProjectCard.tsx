import React from "react";
import styles from "./ProjectCard.module.scss";
import ProjectCardFront from "./ProjectCardFront/ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack/ProjectCardBack";

const ProjectCard = () => (
  <div className={styles.ProjectCardWrapper}>
    <div className={styles.ProjectCard}>
      <ProjectCardFront />
      <ProjectCardBack />
    </div>
  </div>
);

export default ProjectCard;
