import React from "react";
import styles from "./TopDrawer.module.scss";
import NavItems from "../../NavItems/NavItems";
import { appNavItems } from "../../../../models/navItems";

interface IProps {
    isOpen: boolean;
    handleNavLinkSelect: () => void;
}

const TopDrawer: React.FC<IProps> = ({ isOpen, handleNavLinkSelect }) => (
  <div
    className={isOpen ? `${styles.TopDrawer} ${styles.Open}` : styles.TopDrawer}
    onClick={handleNavLinkSelect}
    role="presentation"
  >
    <NavItems items={appNavItems} />
  </div>
);

export default TopDrawer;
