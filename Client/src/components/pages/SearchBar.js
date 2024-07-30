import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pickupOptions, setPickupOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPickupOptions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/chapters/pickup-options");
        if (Array.isArray(response.data)) {
          setPickupOptions(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching pickup options:", error.message);
      }
    };

    fetchPickupOptions();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      console.warn("Search term is empty.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/chapters/search`,
        {
          params: {
            query: searchTerm,
            pickup: selectedOption || undefined,
          },
        }
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col border-4 border-r-4 border-solid mb-2">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 mt-3 mb-3"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select Pickup Option</option>
        {pickupOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        className="px-4 py-2 bg-yellow-300 text-black rounded-r-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-600 mb-2"
        onClick={handleSearch}
      >
        Search
      </button>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id} className="py-2 border-b border-gray-300">
              {result.name}
            </div>
          ))
        ) : (
          <p className="py-2">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
