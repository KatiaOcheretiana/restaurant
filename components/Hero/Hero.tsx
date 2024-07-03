import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>Feel in Italy with our restaurant</h1>
        <p className={styles.text}>You can feel happy with us</p>
      </div>
    </section>
  );
}
