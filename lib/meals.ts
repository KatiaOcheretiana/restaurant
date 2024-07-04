import { MealType } from "@/types";

export const getMeals = async (times: number) => {
  try {
    const search = ["a", "b", "c", "d", "e", "f", "g"];
    const result = [];

    for (let i = 0; i < times; i++) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search[i]}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        result.push(data.meals[1]);
      }
    }

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const searchMeals = async (query: string): Promise<MealType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        resolve(data.meals || []);
      } catch (error) {
        reject(error);
      }
    }, 1200);
  });
};
