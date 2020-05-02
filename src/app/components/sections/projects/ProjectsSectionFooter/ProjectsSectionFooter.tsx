import React from "react";
import styles from "./ProjectsSectionFooter.module.scss";

const ProjectsSectionFooter = () => (
  <div className={styles.ProjectsSectionFooter}>
    <h6>Check out my GitHub</h6>
    <a href="https://github.com/zdraffko" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-2x fa-github" />
    </a>
  </div>
);

export default ProjectsSectionFooter;
