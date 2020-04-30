import React from "react";
import styles from "./ProjectsCatalog.module.scss";
import FilterWidget from "./FilterWidget/FilterWidget";
import ProjectsCards from "./ProjectsCards/ProjectsCards";
import { appProjects } from "../../../../models/project";

const ProjectsCatalog = () => (
  <div className={styles.ProjectsCatalog}>
    <FilterWidget />
    <ProjectsCards projects={appProjects} />
  </div>
);

export default ProjectsCatalog;
