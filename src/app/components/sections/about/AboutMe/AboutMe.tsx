import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./AboutMe.module.scss";

const AboutMe = () => (
  <Fade
    triggerOnce
    direction="left"
    className={styles.AboutMeWrapper}
    duration={1500}
  >
    <div className={styles.AboutMe}>
      <p>
        My name is Zdravko and I am currently
        pursuing a bachelor&apos;s degree in Computer and Software Engineering
        at the Technical University of Sofia.
      </p>
      <p>
        My favorite type of Software Development is Web Development.
        I am passionate about learning cutting edge technologies
        both on the front-end and on the back-end.
      </p>
    </div>
    <h2>About me</h2>
  </Fade>
);

export default AboutMe;
