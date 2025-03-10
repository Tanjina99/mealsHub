"use client";

import { useEffect, useState } from "react";
import MealsCard from "./MealsCard";
import { TMeal } from "@/types";
import { Button } from "../ui/button";
import Image from "next/image";

const categories = [
  {
    name: "Breakfast",
    image:
      "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-brunch-clipart-cartoon-food-illustration-of-breakfast-with-pancakes-vector-png-image_6799566.png",
  },
  {
    name: "Lunch",
    image:
      "https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-meatball-sub-vector-png-image_6911424.png",
  },
  {
    name: "Dinner",
    image:
      "https://png.pngtree.com/png-clipart/20220102/original/pngtree-delicious-salmon-set-meal-png-image_6999776.png",
  },
  {
    name: "All",
    image:
      "https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-cute-cartoon-bento-box-clipart-illustration-perfect-for-your-food-project-png-image_13584670.png",
  },
];

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
    };
    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-5">Loading...</div>
    );
  }

  const filteredMeals = meals.filter((meal) => meal.mealType === category);

  return (
    <div className="bg-secondary-mode-bg py-12">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl font-bold text-text-color uppercase tracking-wide pb-2 inline-block relative -mt-2">
            Our{" "}
            <span className="text-primary border-b-4 border-yellow-400">
              Menu
            </span>
          </h2>
        </div>

        <div className="flex justify-center space-x-16 mb-16">
          {categories.map((tab) => (
            <Button
              key={tab.name}
              onClick={() => setCategory(tab.name)}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 ${
                category === tab.name
                  ? "bg-button-primary text-primary border-2 border-yellow-600"
                  : "bg-white text-text-color border border-gray-300"
              }`}
            >
              <div className="w-20 h-20 mb-3">
                <Image
                  src={tab.image}
                  alt={tab.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <span className="text-lg font-semibold">{tab.name}</span>
            </Button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {category === "All"
            ? meals
                .slice(0, 8)
                .map((meal) => <MealsCard key={meal._id} meal={meal} />)
            : filteredMeals
                .slice(0, 8)
                .map((meal) => <MealsCard key={meal._id} meal={meal} />)}
        </div>
      </div>
    </div>
  );
};

export default MealByCategory;
