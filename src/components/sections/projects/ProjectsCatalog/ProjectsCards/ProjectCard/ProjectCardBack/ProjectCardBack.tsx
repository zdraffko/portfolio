import React from "react";
import styles from "./ProjectCardBack.module.scss";
import { IProject } from "../../../../../../../models/project";

interface IProps {
  project: IProject
}

const ProjectCardBack: React.FC<IProps> = ({ project }) => (
  <div className={styles.ProjectCardBack}>
    <div className={styles.CardHeader}>
      <h6>Technologies Used</h6>
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
    <div className={styles.CardFooter}>
      <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-code" />
        Code
      </a>
      {
        project.livePreviewLink
        && (
          <a
            href={project.livePreviewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5px" }}
          >
            <i className="fa fa-eye" />
            Demo
          </a>
        )
      }
    </div>
  </div>
);

export default ProjectCardBack;
