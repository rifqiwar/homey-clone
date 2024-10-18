// src/components/SearchBox.tsx
import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row items-center gap-2">
      <input
        type="text"
        placeholder="Where to go?"
        className="p-3 w-full md:w-60"
      />
      <input type="date" className="p-3 w-full md:w-40" />
      <input type="date" className="p-3 w-full md:w-40" />
      <button className="bg-orange-500 text-white px-6 py-3 w-full md:w-auto">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
