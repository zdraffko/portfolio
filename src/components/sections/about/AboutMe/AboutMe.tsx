import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe: React.FC = () => (
  <div
    className={styles.AboutMeWrapper}
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
  </div>
);

export default AboutMe;
