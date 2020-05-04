import React from "react";
import { HeadShake } from "react-awesome-reveal";
import styles from "./ProjectsSectionFooter.module.scss";

const ProjectsSectionFooter = () => (
  <div className={styles.ProjectsSectionFooter}>
    <h6>Check out my GitHub</h6>
    <HeadShake>
      <a href="https://github.com/zdraffko" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-2x fa-github" />
      </a>
    </HeadShake>
  </div>
);

export default ProjectsSectionFooter;
