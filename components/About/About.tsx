import Image from "next/image";
import React from "react";
import chefImage from "../../public/images/chef.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.title}>About Us</h3>
        <p className={styles.description}>
          I&apos;m a paragraph. Click here to add your own text and edit me.
          It&apos;s easy. Just click “Edit Text” or double click me to add your
          own content and make changes to the font. Feel free to drag and drop
          me anywhere you like on your page. I&apos;m a great place for you to
          tell a story and let your users know a little more about you. This is
          a great space to write long text about your company and your services.
        </p>
        <p className={styles.description}>
          I&apos;m a paragraph. Click here to add your own text and edit me.
          It&apos;s easy. Just click “Edit Text” or double click me to add your
          own content and make changes to the font. Feel free to drag and drop
          me anywhere you like on your page. I&apos;m a great place for you to
          tell a story and let your users know a little more about you. This is
          a great space to write long
        </p>
      </div>
      <Image
        src={chefImage}
        alt="Chef"
        // width={540}
        // height={301}
        className={styles.image}
        loading="lazy"
        quality={100}
      />
    </section>
  );
}
