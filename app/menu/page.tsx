import { Meals } from "@/components/Meals";
import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import { searchMeals } from "@/lib/meals";
import { Suspense } from "react";
import styles from "./page.module.css";

type MealsByQueryPropsType = {
  query: string;
};

export async function MealsByQuery({ query }: MealsByQueryPropsType) {
  const meals = await searchMeals(query);

  return <Menu meals={meals} />;
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
        <Suspense key={query} fallback={<p>Loading...</p>}>
          {!query ? <Meals times={7} /> : <MealsByQuery query={query} />}
        </Suspense>
      </div>
    </div>
  );
}
