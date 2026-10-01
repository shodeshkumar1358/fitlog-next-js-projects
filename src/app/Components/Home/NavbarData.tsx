"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavbarData = () => {
  const { addTodaysPlan, saveForLatter } = useContext(WorkoutsContext);
  console.log(addTodaysPlan, saveForLatter, "readbooks", "saveforletter");
  return (
    <Link href="/my-plan">
      <button
        className="
      flex items-center gap-1.5
              text-[14px] text-white
              sm:text-[15px]
              lg:text-[16px]
            "
      >
        <span>Plan</span>

        <span
          className="
                flex h-[20px] w-[20px] items-center justify-center
                rounded-full bg-[#B6F500]
                text-[12px] font-bold text-black
                sm:h-[21px] sm:w-[21px] sm:text-[13px]
                lg:h-[22px] lg:w-[22px] lg:text-[16px]
              "
        >
          {addTodaysPlan.length}
        </span>
      </button>
    </Link>
  );
};

export default NavbarData;
