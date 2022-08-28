import React, { useState } from "react";
import { SearchIcon } from "./Icons";
interface props {
  onSubmit: (name: string) => void;
}
const Search = ({ onSubmit }: props) => {
  const [value, setValue] = useState("");
  function handleSumbit(e: any) {
    e.preventDefault()
    onSubmit(value)
  }
  return (
    <div className="w-full md:w-72 shadow-xl rounded-lg dark:text-white">
      <div className="container relative">
        <span className="absolute top-2 left-2">
          <SearchIcon />
        </span>
        <form onSubmit={handleSumbit}>
          <input
          type="text"
          className="w-full dark:bg-[#2b3945] p-2 font-Nunito-sans font-[600] text-center rounded-lg border outline-none border-gray-300 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search for Country..."
            value={value}
            onChange={(e)=>setValue(e.target.value)}
        />
        </form>
        
      </div>
    </div>
  );
};

export default Search;
