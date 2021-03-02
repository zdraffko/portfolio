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
        both on the frontend and on the backend.
      </p>
      <p>
        During 2020 I managed to turn my hobbie into a job by being hired at UltraPlay as a Junior Web Developer.
      </p>
    </div>
  </div>
);

export default AboutMe;
