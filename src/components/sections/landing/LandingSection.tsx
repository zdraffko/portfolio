import React from "react";
import { Fade, Pulse } from "react-awesome-reveal";
import styles from "./LandingSection.module.scss";
import ParticlesBackground from "../../common/ParticlesBackground/ParticlesBackground";
import NavArrows from "../../navigation/NavArrows/NavArrows";

const LandingSection = () => (
  <section id="home" className={styles.LandingSection}>
    <Fade triggerOnce duration={2000}>
      <span>Hello, I am &nbsp;
        <Pulse className={styles.Highlight} duration={2000}>Zdravko Mihov</Pulse>.
      </span><br />
      <span>I am a software engineer wannabe.</span>
    </Fade>
    <div className={styles.ArrowsContainer}>
      <NavArrows link="#about" label="projects" direction="down" />
    </div>
    <ParticlesBackground />
  </section>
);

export default LandingSection;
