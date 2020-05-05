import React from "react";
import { Zoom } from "react-awesome-reveal";
import styles from "./AboutMe.module.scss";

const AboutMe = () => (
  <Zoom
    triggerOnce
    className={styles.AboutMeWrapper}
    duration={750}
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
  </Zoom>
);

export default AboutMe;
