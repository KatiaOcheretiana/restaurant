import React from "react";
import styles from "./Header.module.css";

import Navigation from "./Navigation/Navigation";
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.box}`}>
        <Navigation />
        <h2 className={styles["logo-title"]}>Selve Restaurant</h2>
        <a href="#contacts" className={styles.text}>
          Contacts
        </a>

        <SocialMedia />
      </div>
    </header>
  );
}
