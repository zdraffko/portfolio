import React from "react";
import { Flip } from "react-awesome-reveal";
import styles from "./TopDrawer.module.scss";
import NavItems from "../../NavItems/NavItems";
import { appNavItems } from "../../../../models/navItems";

interface IProps {
    isOpen: boolean;
    handleNavLinkSelect: () => void;
}

const TopDrawer: React.FC<IProps> = ({ isOpen, handleNavLinkSelect }) => (
  <Flip triggerOnce reverse={!isOpen} duration={750}>
    <div
      className={styles.TopDrawer}
      onClick={handleNavLinkSelect}
      role="presentation"
    >
      <NavItems items={appNavItems} />
    </div>
  </Flip>
);

export default TopDrawer;
