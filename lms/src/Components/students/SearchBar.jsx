import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      navigate(`/course-list/${input}`);
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="w-full max-w-md md:h-14 h-12 flex items-center bg-white border border-gray-300 rounded-md shadow-sm mx-auto"
    >
      <img
        src={assets.search_icon}
        alt="search-icon"
        className="w-5 h-5 mx-3"
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="flex-grow h-full outline-none text-gray-600 placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md md:px-6 px-4 md:py-2 py-1 mx-2 hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
