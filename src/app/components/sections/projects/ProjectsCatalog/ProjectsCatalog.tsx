import React from "react";
import styles from "./ProjectsCatalog.module.scss";
import FilterWidget from "./FilterWidget/FilterWidget";
import ProjectsCards from "./ProjectsCards/ProjectsCards";

const ProjectsCatalog = () => (
  <div className={styles.ProjectsCatalog}>
    <FilterWidget />
    <ProjectsCards />
  </div>
);

export default ProjectsCatalog;
