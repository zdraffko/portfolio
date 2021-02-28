import React from "react";
import styles from "./NavItem.module.scss";
import { INavItem } from "../../../../models/navItems";
import useCurrentVisibleSection from "../../../../hooks/useCurrentVisibleSection";

const NavItem:React.FC<INavItem> = ({ link, label }) => {
  const { visibleSectionId } = useCurrentVisibleSection();

  return (
    <li className={styles.NavItem}>
      <a href={link} className={visibleSectionId === label ? styles.Active : ""}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
