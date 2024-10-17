import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ setSearchTerm, setSelectedCategory }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update the selected category
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 px-4">
      <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={handleSearchChange} // Call handleSearchChange on input change
          />
        </div>
        <select onChange={handleCategoryChange} className="border rounded-md p-2">
          <option value="All">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Mobile Development">Mobile Development</option>
          {/* Add more categories as needed */}
        </select>
        <button type="submit" className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md w-32">
          Search
        </button>
      </form>
    </div>
  );
}
