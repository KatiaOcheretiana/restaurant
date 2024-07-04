import { Meals } from "@/components/Meals";
import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import { searchMeals } from "@/lib/meals";
import { Suspense } from "react";
import styles from "./page.module.css";
import LoadingPage from "../loading-out";
import { MealType } from "@/types";

type MealsByQueryPropsType = {
  query: string;
};

async function MealsByQuery({ query }: MealsByQueryPropsType) {
  const meals: MealType[] = await searchMeals(query);

  let menuContent = (
    <p className={styles.text}>No dishes found. Try to search something else</p>
  );
  if (meals.length > 0) {
    menuContent = <Menu meals={meals} />;
  }

  return menuContent;
}

export default function MenuPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  console.log(query);

  return (
    <div className="container">
      <h3 className={styles.title}>Menu</h3>
      <Search />
      <div className={styles["menu-wrapper"]}>
        <Suspense key={query} fallback={<LoadingPage />}>
          {!query ? <Meals times={5} /> : <MealsByQuery query={query} />}
        </Suspense>
      </div>
    </div>
  );
}
