import React from "react";
import styles from "./NavItems.module.scss";
import NavItem from "./NavItem/NavItem";
import { INavItem } from "../../../models/navItems";

interface IProps {
    items: INavItem[];
}

const NavItems: React.FC<IProps> = ({ items }) => (
  <ul className={styles.NavItems}>
    {
      items.map(item => <NavItem key={item.link} link={item.link} label={item.label} />)
    }
  </ul>
);

export default NavItems;
