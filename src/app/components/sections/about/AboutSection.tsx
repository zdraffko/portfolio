import React from "react";
import styles from "./AboutSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

const AboutSection = () => (
  <section id="about" className={styles.AboutSection}>
    <SectionTitle title="About" />
  </section>
);

export default AboutSection;
