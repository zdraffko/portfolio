import React from "react";
import styles from "./SectionTitle.module.scss";

interface IProps {
  title: string;
  darkMode?: boolean;
}

const SectionTitle: React.FC<IProps> = ({ title, darkMode }) => (
  <h3 className={`${styles.SectionTitle} ${darkMode ? styles.Dark : styles.Light}`}>
    {title}
  </h3>
);

export default SectionTitle;
