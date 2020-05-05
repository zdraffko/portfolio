import React from "react";
import { Zoom } from "react-awesome-reveal";
import styles from "./ProjectCard.module.scss";
import ProjectCardFront from "./ProjectCardFront/ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack/ProjectCardBack";
import { IProject } from "../../../../../../models/project";

interface IProps {
  project: IProject
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <Zoom triggerOnce duration={750}>
    <div className={styles.ProjectCardWrapper}>
      <div className={styles.ProjectCard}>
        <ProjectCardFront project={project} />
        <ProjectCardBack project={project} />
      </div>
    </div>
  </Zoom>
);

export default ProjectCard;
