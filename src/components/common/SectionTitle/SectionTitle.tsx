import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./SectionTitle.module.scss";

interface IProps {
  title: string;
  subtitle?: string;
  darkMode?: boolean;
}

const SectionTitle: React.FC<IProps> = ({ title, subtitle, darkMode }) => (
  <Fade
    triggerOnce
    className={styles.SectionTitle}
    duration={1500}
  >
    <h3 className={`${darkMode ? styles.DarkModeTitle : styles.LightModeTitle}`}>
      {title}
    </h3>
    <h6 className={`${darkMode ? styles.DarModeSubtitle : styles.LightModeSubTitle}`}>
      {subtitle}
    </h6>
  </Fade>
);

export default SectionTitle;
