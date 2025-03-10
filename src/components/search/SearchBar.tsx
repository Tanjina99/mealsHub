"use client";

import { useState } from "react";
import { Search, DollarSign, Filter } from "lucide-react";

const SearchBar = ({ setSearch }: { setSearch: (value: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("any");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearch(searchTerm);
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
            onClick={() => setShowFilters(!showFilters)}
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
        {showFilters && (
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
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:bg-primary"
                  >
                    <option
                      className="hover:bg-primary focus:bg-primary"
                      value="all"
                    >
                      All Meals
                    </option>
                    <option
                      className="hover:bg-primary focus:bg-primary"
                      value="breakfast"
                    >
                      Breakfast
                    </option>
                    <option
                      className="hover:bg-primary focus:bg-primary"
                      value="lunch"
                    >
                      Lunch
                    </option>
                    <option
                      className="hover:bg-primary focus:bg-primary"
                      value="dinner"
                    >
                      Dinner
                    </option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-color">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Price Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-text-color mb-1">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                  >
                    <option value="any">Any Price</option>
                    <option value="under10">Less than $10</option>
                    <option value="over10">More than $10</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-color">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="mt-3 flex flex-wrap gap-2">
              {category !== "all" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <button
                    onClick={() => setCategory("all")}
                    className="ml-1 text-yellow-500 hover:text-yellow-700"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceFilter !== "any" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-primary">
                  {priceFilter === "under10"
                    ? "Less than $10"
                    : "More than $10"}
                  <button
                    onClick={() => setPriceFilter("any")}
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
