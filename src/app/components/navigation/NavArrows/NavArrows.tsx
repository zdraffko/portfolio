import React from "react";
import styles from "./NavArrows.module.scss";

interface IProps {
    link: string;
}

const NavArrows: React.FC<IProps> = ({ link }) => (
  <a href={link}><div className={styles.DownArrows}>projects</div></a>
);

export default NavArrows;
