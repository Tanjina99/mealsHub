"use client";

import MealsCard from "@/components/meal-by-category/MealsCard";
import SearchBar from "@/components/search/SearchBar";
import { TMeal } from "@/types";
import { useEffect, useState } from "react";

const AllMeals = ({ meal }: { meal: TMeal[] }) => {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilterTerm, setPriceFilterTerm] = useState("any");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // console.log(categoryFilter);
  console.log(priceFilterTerm);
  useEffect(() => {
    setLoading(true);
    console.log("Fetching meals...");

    const fetchMeals = async () => {
      console.log("Fetching meals with category:", categoryFilter);
      const response = await fetch(
        `https://dorm-dine-hub-server.vercel.app/meals?search=${searchTerm}&sort=${priceFilterTerm}&category=${categoryFilter}`
      );
      const data = await response.json();
      setMeals(data);
      setLoading(false);
    };

    fetchMeals();
  }, [searchTerm, priceFilterTerm, categoryFilter]);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-5">Loading...</div>
    );
  }

  return (
    <div className="py-12 bg-secondary-mode-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mt-16">All Meals</h1>
        <SearchBar
          setSearch={setSearchTerm}
          setPriceFilter={setPriceFilterTerm}
          setCategoryFilter={setCategoryFilter}
        />
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
