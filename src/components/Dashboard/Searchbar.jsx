
import React from "react";
import { FiSearch, FiFilter, FiBell, FiUser } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex h-[10vh] w-full bg-black px-4 sm:px-6 md:px-10 py-4 items-center gap-2 sm:gap-4 text-white border-b border-[#252525] relative z-20">
      {/* Search Bar */}
      <div className="relative flex-grow flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[32px] sm:h-[36px] md:h-[40px] px-8 sm:px-10 py-2 border-b-[1px] border-transparent focus:outline-none bg-[#202020] text-sm sm:text-base"
        />
        <FiSearch className="absolute left-2 sm:left-4 text-white opacity-50 text-lg sm:text-xl" />
      </div>

      {/* Add Campaign Button */}
      <button className="w-[100px] h-[28px] sm:w-[120px] sm:h-[30px] md:w-[153px] md:h-[38px] bg-[#F77128] rounded-lg text-white text-xs sm:text-sm truncate">
        Add Campaign
      </button>

      {/* Icons */}
      <div className="flex gap-2 sm:gap-4 items-center">
        <FiFilter className="text-white opacity-50 text-lg sm:text-xl" />
        <FiBell className="text-white opacity-50 text-lg sm:text-xl" />
        <FiUser className="text-white opacity-50 text-lg sm:text-xl" />
      </div>
    </div>
  );
};

export default SearchBar;