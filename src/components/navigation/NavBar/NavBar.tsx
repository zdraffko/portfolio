import React from "react";
import styles from "./NavBar.module.scss";
import NavItems from "../NavItems/NavItems";
import { appNavItems } from "../../../models/navItems";

const NavBar: React.FC = () => (
  <nav className={styles.NavBar}>
    <NavItems items={appNavItems} />
  </nav>
);

export default NavBar;
