import React from "react";
import styles from "./SectionTitle.module.scss";

interface IProps {
  title: string;
  subtitle?: string;
  darkMode?: boolean;
}

const SectionTitle: React.FC<IProps> = ({ title, subtitle, darkMode }) => (
  <div className={styles.SectionTitle}>
    <h3 className={`${darkMode ? styles.DarkModeTitle : styles.LightModeTitle}`}>
      {title}
    </h3>
    <h6 className={`${darkMode ? styles.DarModeSubtitle : styles.LightModeSubTitle}`}>
      {subtitle}
    </h6>
  </div>
);

export default SectionTitle;
