import React from "react";
import NavLink from "../NavLink";
import styles from "./Header.module.css";
import Twitter from "../../public/icons/twitter.svg";
import Facebook from "../../public/icons/facebook.svg";
import Instagram from "../../public/icons/instagram.svg";

const socialMedia = [
  { icon: <Twitter width={28} height={28} />, link: "https://x.com/" },
  {
    icon: <Facebook width={28} height={28} />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <Instagram width={28} height={28} />,
    link: "https://www.instagram.com/",
  },
];

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.text}>
            <NavLink href="/" title="Home" />
          </li>
          <li className={styles.text}>
            <NavLink href="/menu" title="Menu" />
          </li>
        </ul>
      </nav>

      <h2 className={styles["logo-title"]}>Selve Restaurant</h2>
      <a href="#contacts" className={styles.text}>
        Contacts
      </a>

      <ul className={styles.socialmedia}>
        {socialMedia.map((item, index) => (
          <li key={index} className={styles["socialmedia-item"]}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
