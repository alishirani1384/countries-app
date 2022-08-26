import React, { useState } from "react";
import { SearchIcon } from "./Icons";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full md:w-72 shadow-xl rounded-lg ">
      <div className="container relative">
        <span className="absolute top-2 left-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="w-full p-2 font-Nunito-sans font-[600] text-center rounded-lg border outline-none border-gray-300 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search for Country..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
