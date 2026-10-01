"use client";
import React from "react";
import { LuBookmark } from "react-icons/lu";

const SaveForLatter = () => {
  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border border-[#343840] bg-transparent px-4 py-2.5 text-[10px] text-gray-300 transition hover:bg-[#181a20]"
      >
        <LuBookmark size={13} />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLatter;
