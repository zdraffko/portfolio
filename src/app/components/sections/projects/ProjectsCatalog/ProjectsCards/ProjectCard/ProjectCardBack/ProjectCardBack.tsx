import React from "react";
import styles from "./ProjectCardBack.module.scss";

const ProjectCardBack = () => (
  <div className={styles.ProjectCardBack}>
    <div className={styles.CardHeader}>
      <h6>Technologies used</h6>
    </div>
    <div className={styles.CardBody}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
);

export default ProjectCardBack;
