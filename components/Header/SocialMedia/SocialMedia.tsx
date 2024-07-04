import React from "react";
import styles from "./SocialMedia.module.css";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Instagram from "../../../public/icons/instagram.svg";

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

export default function SocialMedia() {
  return (
    <ul className={styles.socialmedia}>
      {socialMedia.map((item, index) => (
        <li key={index} className={styles["socialmedia-item"]}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
