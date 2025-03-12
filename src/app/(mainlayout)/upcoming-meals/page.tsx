import React from "react";
import { UpcomingMeal } from "@/types";
import UpcomingMealsCard from "@/components/upcoming-meals/UpcomingMealsCard";

const UpcomingMeals = async () => {
  // Fetching data server-side
  const res = await fetch(
    "https://dorm-dine-hub-server.vercel.app/upcoming-meals"
  );
  const meals: UpcomingMeal[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-secondary-mode-bg">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-color border-b pb-4 border-gray-200">
        Upcoming Meals
      </h1>

      {meals.length === 0 ? (
        <div className="text-center py-12 rounded-lg shadow-sm">
          <p className="text-lg text-primary">
            No upcoming meals available at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
          {meals.map((meal) => (
            <div
              key={meal._id}
              // className="transform transition duration-300 hover:scale-105"
            >
              <UpcomingMealsCard meal={meal} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingMeals;
