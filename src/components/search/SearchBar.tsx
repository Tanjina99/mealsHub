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
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchClick = () => {
    setSearch(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
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
              onKeyDown={handleKeyDown}
              className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-100 transition-all duration-200 placeholder-gray-400"
            />
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearchClick}
            className="p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Search meals"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Toggle filters"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {/* Expandable Filters */}
        {showFilters && (
          <div className="mt-2 p-4 bg-white rounded-xl shadow-md border border-gray-100 animate-fadeIn">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  >
                    <option disabled selected>
                      All Category
                    </option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
              </div>

              {/* Price Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full appearance-none p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                  >
                    <option value="any">Any Price</option>
                    <option value="lt10">Price Under $10</option>
                    <option value="gt10">Price Over $10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
