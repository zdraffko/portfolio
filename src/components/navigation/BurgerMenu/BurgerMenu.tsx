import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import TopDrawer from "./TopDrawer/TopDrawer";

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <nav className={styles.BurgerMenu}>
      <div
        role="presentation"
        className={styles.Burger}
        onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
      >
        <div className={
            isBurgerMenuOpen
              ? `${styles.BurgerLineTop} ${styles.OpenedBurgerMenu}`
              : styles.BurgerLineTop
            }
        />
        <div className={
            isBurgerMenuOpen
              ? `${styles.BurgerLineMiddle} ${styles.OpenedBurgerMenu}`
              : styles.BurgerLineMiddle
            }
        />
        <div className={
            isBurgerMenuOpen
              ? `${styles.BurgerLineBottom} ${styles.OpenedBurgerMenu}`
              : styles.BurgerLineBottom
            }
        />
      </div>
      <TopDrawer isOpen={isBurgerMenuOpen} handleNavLinkSelect={() => setIsBurgerMenuOpen(false)} />
    </nav>
  );
};

export default BurgerMenu;
