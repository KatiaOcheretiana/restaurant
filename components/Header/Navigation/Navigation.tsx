import NavLink from "@/components/NavLink";
import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation({
  closeModal,
}: {
  closeModal?: () => void;
}) {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.text} onClick={closeModal}>
          <NavLink href="/" title="Home" />
        </li>
        <li className={styles.text} onClick={closeModal}>
          <NavLink href="/menu" title="Menu" />
        </li>
      </ul>
    </nav>
  );
}
