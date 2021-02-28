import React from "react";
import styles from "./AboutSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import AboutMe from "./AboutMe/AboutMe";
import SkillsShowcase from "./SkillsShowcase/SkillsShowcase";
import AboutSectionFooter from "./AboutSectionFooter/AboutSectionFooter";

const AboutSection = () => (
  <section id="about" className={styles.AboutSection}>
    <SectionTitle title="About" subtitle="Learn more about me" />
    <div className={styles.AboutSectionContent}>
      <AboutMe />
      <SkillsShowcase />
    </div>
    <AboutSectionFooter />
  </section>
);

export default AboutSection;
