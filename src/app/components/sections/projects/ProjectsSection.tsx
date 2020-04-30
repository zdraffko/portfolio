import React from "react";
import styles from "./ProjectsSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ProjectsCatalog from "./ProjectsCatalog/ProjectsCatalog";

const ProjectsSection = () => (
  <section id="projects" className={styles.ProjectsSection}>
    <SectionTitle title="Projects" />
    <ProjectsCatalog />
  </section>
);

export default ProjectsSection;
