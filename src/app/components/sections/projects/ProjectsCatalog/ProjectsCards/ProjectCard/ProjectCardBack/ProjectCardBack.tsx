import React from "react";
import styles from "./ProjectCardBack.module.scss";
import { IProject } from "../../../../../../../models/project";

interface IProps {
  project: IProject
}

const ProjectCardBack: React.FC<IProps> = ({ project }) => (
  <div className={styles.ProjectCardBack}>
    <div className={styles.CardHeader}>
      <h6>Technologies used</h6>
    </div>
    <div className={styles.CardBody}>
      <ul>
        {
          project.technologies.map(
            technology => <li key={`${project.name}${technology}`}>{technology}</li>
          )
        }
      </ul>
    </div>
  </div>
);

export default ProjectCardBack;
