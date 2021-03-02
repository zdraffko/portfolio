import React from "react";
import styles from "./AboutSection.module.scss";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import AboutMe from "./AboutMe/AboutMe";
import AboutSectionFooter from "./AboutSectionFooter/AboutSectionFooter";

const AboutSection: React.FC = () => (
  <section id="about" className={styles.AboutSection}>
    <SectionTitle title="About" subtitle="Learn more about me" />
    <div className={styles.AboutSectionContent}>
      <AboutMe />
    </div>
    <AboutSectionFooter />
  </section>
);

export default AboutSection;
