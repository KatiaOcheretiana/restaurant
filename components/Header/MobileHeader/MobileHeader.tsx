"use client";

import React, { useState } from "react";
import Burger from "../../../public/icons/burger.svg";
import CloseModal from "../../../public/icons/close.svg";
import styles from "./MobileHeader.module.css";
import Navigation from "../Navigation/Navigation";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function MobileHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleModal = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.logoTitle}>Selve Restaurant</h2>
        <Burger
          height={22}
          width={29}
          onClick={toggleModal}
          className={styles.burgerIcon}
        />
      </div>
      {menuIsOpen && (
        <>
          <div className={styles.backdrop} onClick={toggleModal} />
          <dialog open className={styles.modal}>
            <CloseModal
              className={styles["icon-close"]}
              height={18}
              width={18}
              onClick={() => {
                setMenuIsOpen(false);
              }}
            />
            <div className={styles["wrapper-side-menu"]}>
              <Navigation closeModal={toggleModal} />
              <div className={styles.contacts}>
                <p className={styles.text}>Contacts</p>
                <a href="tel:+380777777777" className={styles.number}>
                  +380 (77) 77 77 777
                </a>{" "}
                <SocialMedia />{" "}
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
}
