import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

import { Suspense } from "react";
import { Meals } from "@/components/Meals";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <About />
        <div className={styles["menu-wrapper"]}>
          <h3 className={styles.title}>Menu</h3>
          <Suspense fallback={<p>Loading..</p>}>
            <Meals times={7} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
