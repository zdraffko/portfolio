import React from "react";
import styles from "./ProjectsSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ProjectsCatalog from "./ProjectsCatalog/ProjectsCatalog";
import ProjectsSectionFooter from "./ProjectsSectionFooter/ProjectsSectionFooter";

const ProjectsSection = () => (
  <section id="projects" className={styles.ProjectsSection}>
    <SectionTitle title="Projects" subtitle="See what I've build" />
    <ProjectsCatalog />
    <ProjectsSectionFooter />
  </section>
);

export default ProjectsSection;
