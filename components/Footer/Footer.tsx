import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <h4 className={styles.title}>Location</h4>
          <p className={styles.text}>130 Fulton St, New York</p>
          <p className={styles.text}>NY 10038, USA</p>
        </div>
        <div className={styles["box-style"]}>
          <h4 className={styles.title}>Opening hours</h4>
          <p className={styles.text}>Mon - Sat: 11:00 - 23:00</p>
          <p className={styles.text}>Sun: 11:00 - 19:00</p>
          <p className={styles.text}>Food in the restaurant and takeaway!</p>
        </div>
        <div>
          <h4 className={styles.title} style={{ marginBottom: "7px" }}>
            Sociale
          </h4>
          <ul id="contacts">
            <li
              className={styles.text}
              style={{ marginBottom: "8px", marginTop: "0" }}
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li
              className={styles.text}
              style={{ marginBottom: "8px", marginTop: "0" }}
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li
              className={styles.text}
              style={{ marginBottom: "8px", marginTop: "0" }}
            >
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>Copyright ©2021 by Bonbons Chocolate</p>
    </footer>
  );
}
