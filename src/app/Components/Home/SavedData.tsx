"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useContext } from "react";

const SavedData = () => {
  const { addTodaysPlan, saveForLatter } = useContext(WorkoutsContext);
  console.log(addTodaysPlan, saveForLatter, "readbooks", "saveforletter");
  return (
    <Link href="/my-plan">
      <button
        className="
              flex items-center gap-1.5
              text-[14px] text-[#777A7D]
              sm:text-[15px]
              lg:text-[16px]
            "
      >
        <span>Saved</span>

        <span
          className="
                flex h-[22px] w-[22px] items-center justify-center
                rounded-full border border-[#535457]
                text-[13px] text-white
                sm:h-[24px] sm:w-[24px]
                lg:h-[25px] lg:w-[25px] lg:text-[16px]
              "
        >
          {saveForLatter.length}
        </span>
      </button>
    </Link>
  );
};

export default SavedData;
