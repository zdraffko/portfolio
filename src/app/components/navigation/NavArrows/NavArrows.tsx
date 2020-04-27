import React from "react";
import styles from "./NavArrows.module.scss";
import { INavItem } from "../../../models/navItems";

const NavArrows: React.FC<INavItem> = ({ link, label }) => (
  <a href={link}>
    <div className={styles.DownArrows}>
      {label}
    </div>
  </a>
);

export default NavArrows;
