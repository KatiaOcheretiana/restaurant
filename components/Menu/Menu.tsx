import Image from "next/image";
import React from "react";
import styles from "./Menu.module.css";

type MealType = {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
};

type MenuProps = {
  meals: MealType[];
};

export default function Menu({ meals }: MenuProps) {
  return (
    <div>
      <ul className={styles.list}>
        {meals.map((item) => (
          <li key={item.idMeal} className={styles["list-item"]}>
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
    </div>
  );
}
