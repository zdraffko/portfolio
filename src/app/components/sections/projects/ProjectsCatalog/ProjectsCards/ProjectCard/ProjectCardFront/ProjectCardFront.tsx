import React from "react";
import styles from "./ProjectCardFront.module.scss";
import { IProject } from "../../../../../../../models/project";

interface IProps {
  project: IProject
}

const ProjectCardFront: React.FC<IProps> = ({ project }) => (
  <div className={styles.ProjectCardFront}>
    <div className={styles.CardHeader}>
      <h6>{project.name}</h6>
    </div>
    <div className={styles.CardBody}>
      <p>
        {project.description}
      </p>
    </div>
  </div>
);

export default ProjectCardFront;
