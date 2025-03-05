"use client";

import { useEffect, useState } from "react";
import MealsCard from "./MealsCard";
import { TMeal } from "@/types";
import { Button } from "../ui/button";

const MealByCategory = () => {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Breakfast");
  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://dorm-dine-hub-server.vercel.app/meals"
      );
      const data = await response.json();
      setMeals(data);
      setLoading(false);
      //   console.log(data);
    };
    fetchMeals();
  }, []);
  console.log(meals);
  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredMeals = meals.filter((meal) => meal.mealType === category);
  console.log(filteredMeals);
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex justify-center space-x-4 my-5">
        <Button onClick={() => setCategory("Breakfast")}>Breakfast</Button>
        <Button onClick={() => setCategory("Lunch")}>Lunch</Button>
        <Button onClick={() => setCategory("Dinner")}>Dinner</Button>
        <Button onClick={() => setCategory("All")}>All</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {category === "All"
          ? meals
              .slice(0, 8)
              .map((meal) => <MealsCard key={meal._id} meal={meal} />)
          : filteredMeals
              .slice(0, 8)
              .map((meal) => <MealsCard key={meal._id} meal={meal} />)}
      </div>
    </div>
  );
};

export default MealByCategory;
