import React from "react";
import styles from "./NavArrows.module.scss";
import { INavItem } from "../../../models/navItems";

interface IProps extends INavItem {
  direction: "down" | "up";
}

const NavArrows: React.FC<IProps> = ({ link, label, direction }) => (
  <a href={link}>
    <div className={direction === "down" ? styles.DownArrows : styles.UpArrows}>
      {label}
    </div>
  </a>
);

export default NavArrows;
