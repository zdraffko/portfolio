import React from "react";
import styles from "./ProjectCardFront.module.scss";

const ProjectCardFront = () => (
  <div className={styles.ProjectCardFront}>
    <div className={styles.CardHeader}>
      <h6>Header</h6>
    </div>
    <div className={styles.CardBody}>
      <p>
        Description
      </p>
    </div>
  </div>
);

export default ProjectCardFront;
