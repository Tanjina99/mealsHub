"use client";

import MealsCard from "@/components/meal-by-category/MealsCard";
import SearchBar from "@/components/search/SearchBar";
import { TMeal } from "@/types";
import { useEffect, useState } from "react";

const AllMeals = () => {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilterTerm, setPriceFilterTerm] = useState("any");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    setLoading(true);

    // Create a URLSearchParams object to handle query parameters
    const params = new URLSearchParams();

    // Only add parameters if they have meaningful values
    if (searchTerm) params.set("search", searchTerm);
    if (priceFilterTerm !== "any") params.set("sort", priceFilterTerm);
    if (categoryFilter !== "all") params.set("category", categoryFilter);

    // Build the final URL (toString() automatically handles encoding)
    const url = `https://dorm-dine-hub-server.vercel.app/meals?${params.toString()}`;

    // Use async/await for cleaner fetch handling
    const fetchMeals = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [searchTerm, priceFilterTerm, categoryFilter]);
  return (
    <div className="py-12 bg-secondary-mode-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mt-16">
          {categoryFilter === "all"
            ? "All Meals"
            : categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
        </h1>
        <SearchBar
          setSearch={setSearchTerm}
          setPriceFilter={setPriceFilterTerm}
          setCategoryFilter={setCategoryFilter}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <>
            {/* <p className="text-center mb-4">
              {meals.length > 0
                ? `Found ${meals.length} meals`
                : "No meals found matching your criteria"}
            </p> */}
            {meals.length === 0 && (
              <p className="text-center mb-4">
                No meals found matching your criteria
              </p>
            )}

            {meals.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {meals.map((meal) => (
                  <MealsCard key={meal._id} meal={meal} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllMeals;
