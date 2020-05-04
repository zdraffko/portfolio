import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./ProjectCard.module.scss";
import ProjectCardFront from "./ProjectCardFront/ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack/ProjectCardBack";
import { IProject } from "../../../../../../models/project";

interface IProps {
  project: IProject
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <Fade triggerOnce direction="left" duration={1500}>
    <div className={styles.ProjectCardWrapper}>
      <div className={styles.ProjectCard}>
        <ProjectCardFront project={project} />
        <ProjectCardBack project={project} />
      </div>
    </div>
  </Fade>
);

export default ProjectCard;
