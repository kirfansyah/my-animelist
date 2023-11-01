"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  return (
    <div className="relative">
      <input placeholder="Cari Anime..." className="p-2 rounded w-full"></input>
      <button className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
