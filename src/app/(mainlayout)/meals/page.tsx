"use client";
import MealsCard from "@/components/meal-by-category/MealsCard";
import SearchBar from "@/components/search/SearchBar";
import { TMeal } from "@/types";
import { useEffect, useState } from "react";

const AllMeals = ({ meal }: { meal: TMeal[] }) => {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching meals...");

    const allMeals = async () => {
      const response = await fetch(
        `https://dorm-dine-hub-server.vercel.app/meals?search=${searchTerm}`
      );
      console.log(response);

      const data = await response.json();

      setMeals(data);
      setLoading(false);
    };

    allMeals();
  }, [searchTerm]);
  console.log(meals);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-5">Loading...</div>
    );
  }
  return (
    <div className="py-12 bg-secondary-mode-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mt-16">All Meals</h1>
        <SearchBar setSearch={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {meals.map((meal) => (
            <MealsCard key={meal._id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
