import React from "react";
import { HeadShake } from "react-awesome-reveal";
import styles from "./AboutSectionFooter.module.scss";

const AboutSectionFooter = () => (
  <HeadShake className={styles.AboutSectionFooter}>
    <a href="./Zdravko-Mihov-CV.pdf" download>Download my CV</a>
  </HeadShake>
);

export default AboutSectionFooter;
