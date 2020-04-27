import React from "react";
import styles from "./LandingSection.module.scss";
import ParticlesBackground from "../../layout/ParticlesBackground/ParticlesBackground";
import NavArrows from "../../navigation/NavArrows/NavArrows";

const LandingSection = () => (
  <div className={styles.LandingSection}>
    <span>Hello, I am &nbsp; <span className={styles.Highlight}>Zdravko Mihov</span>.</span>
    <span>I am a software engineer wannabe.</span>
    <NavArrows link="#projects" />
    <ParticlesBackground />
  </div>
);

export default LandingSection;
