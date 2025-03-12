"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

const SearchBar = ({
  setSearch,
  setPriceFilter,
  setCategoryFilter,
}: {
  setSearch: (value: string) => void;
  setPriceFilter: (value: string) => void;
  setCategoryFilter: (value: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceFilterTerm, setPriceFilterTerm] = useState("any");
  const [showFiltersTerm, setShowFiltersTerm] = useState(false);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearch(searchTerm);
    setPriceFilter(priceFilterTerm);
    setCategoryFilter(category);
  };

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 p-3 rounded-xl shadow-lg border border-gray-100">
          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search meals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-100 transition-all duration-200 placeholder-yellow-300"
            />
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFiltersTerm(!showFiltersTerm)}
            className="p-3 bg-gray-100 text-text-color rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Toggle filters"
          >
            <Filter className="h-5 w-5" />
          </button>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="p-3 bg-button-primary text-white rounded-lg hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Expandable Filters */}
        {showFiltersTerm && (
          <div className="mt-2 p-4 bg-white rounded-xl shadow-md border border-gray-100 animate-fadeIn">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-text-color mb-1">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setCategoryFilter(e.target.value);
                    }}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:bg-primary"
                  >
                    <option value="all">All Meals</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
              </div>

              {/* Price Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-text-color mb-1">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    value={priceFilterTerm}
                    onChange={(e) => {
                      setPriceFilterTerm(e.target.value);
                      setPriceFilter(e.target.value);
                    }}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                  >
                    <option value="any">Any Price</option>
                    <option value="lt10">Price Under $10</option>
                    <option value="gt10">Price Over $10</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="mt-3 flex flex-wrap gap-2">
              {category !== "all" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <button
                    onClick={() => {
                      setCategory("all");
                      setCategoryFilter("all");
                    }}
                    className="ml-1 text-yellow-500 hover:text-yellow-700"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceFilterTerm !== "any" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {priceFilterTerm === "lt10"
                    ? "Less than $10"
                    : "More than $10"}
                  <button
                    onClick={() => {
                      setPriceFilterTerm("any");
                      setPriceFilter("any");
                    }}
                    className="ml-1 text-yellow-500 hover:text-yellow-700"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
