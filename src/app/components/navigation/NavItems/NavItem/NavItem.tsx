import React from "react";
import styles from "./NavItem.module.scss";
import { INavItem } from "../../../../models/navItems";

const NavItem:React.FC<INavItem> = ({ link, label }) => (
  <li className={styles.NavItem}>
    <a href={link}>
      {label}
    </a>
  </li>
);

export default NavItem;
