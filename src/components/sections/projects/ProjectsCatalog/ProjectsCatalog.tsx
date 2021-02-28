import React, { useState } from "react";
import styles from "./ProjectsCatalog.module.scss";
import FilterWidget from "./FilterWidget/FilterWidget";
import ProjectsCards from "./ProjectsCards/ProjectsCards";
import { appProjects } from "../../../../models/project";

const ProjectsCatalog = () => {
  const [filteredProjects, setFilteredProjects] = useState(appProjects);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (projectsFilter: string): void => {
    setFilter(projectsFilter);

    if (projectsFilter === "") {
      setFilteredProjects(appProjects);
      return;
    }

    setFilteredProjects(appProjects.filter(
      project => project.categories.includes(projectsFilter),
    ));
  };

  return (
    <div className={styles.ProjectsCatalog}>
      <FilterWidget filter={filter} handleFilterChange={handleFilterChange} />
      <ProjectsCards projects={filteredProjects} />
    </div>
  );
};

export default ProjectsCatalog;
