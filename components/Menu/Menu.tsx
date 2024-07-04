"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import { MealType } from "@/types";

type MenuProps = {
  meals: MealType[];
};

export default function Menu({ meals }: MenuProps) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const visibleMeals = meals.slice(0, visibleCount);

  return (
    <div>
      <ul className={styles.list}>
        {visibleMeals.map((item) => (
          <li key={item.idMeal} className={styles["list-item"]}>
            <h3 className={styles["title-mob"]}>{item.strMeal}</h3>
            <div className={styles["content-wrapper"]}>
              <h3 className={styles.title}>{item.strMeal}</h3>
              <p className={styles.description}>{item.strInstructions}</p>
            </div>
            <div className={styles["image-wrapper"]}>
              <Image
                src={item.strMealThumb}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                alt={item.strMeal}
              />
            </div>
          </li>
        ))}
      </ul>
      {visibleCount < meals.length && (
        <button className={styles.button} onClick={handleShowMore}>
          MORE
        </button>
      )}
    </div>
  );
}
