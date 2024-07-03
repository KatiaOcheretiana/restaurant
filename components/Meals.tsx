import { getMeals } from "@/lib/meals";
import Menu from "./Menu/Menu";

type MealsPropsType = {
  times: number;
};

export async function Meals({ times }: MealsPropsType) {
  const meals = await getMeals(times);

  return <Menu meals={meals} />;
}
