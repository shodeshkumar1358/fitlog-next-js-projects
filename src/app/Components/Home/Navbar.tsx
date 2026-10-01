import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavbarData from "./NavbarData";
import SavedData from "./SavedData";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#313030] bg-[#0B0D0F] text-white">
      <div
        className="
          mx-auto flex max-w-[1280px] flex-wrap items-center
          justify-between gap-y-3 px-4 py-3
          sm:px-6
          lg:h-[70px] lg:flex-nowrap lg:px-5 lg:py-0
        "
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG"
            className="
              h-[22px] w-auto object-contain
              sm:h-[24px]
              lg:h-[25px]
            "
          />

          <h2 className="text-[17px] font-bold tracking-[0.5px] sm:text-[18px]">
            FITLOG
          </h2>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div
          className="
            order-3 flex w-full items-center justify-center gap-1
            sm:order-3
            lg:order-none lg:w-auto lg:gap-[7px]
          "
        >
          <Link
            href="/"
            className="
              rounded-full bg-[#1C2B05]
              px-3 py-[5px]
              text-[14px] font-normal text-[#B6F500]
              sm:text-[15px]
              lg:px-[13px] lg:text-[16px]
            "
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="
              px-3 py-[5px]
              text-[14px] font-normal text-[#85878A]
              transition-colors hover:text-white
              sm:text-[15px]
              lg:px-[10px] lg:text-[16px]
            "
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div
          className="
            flex shrink-0 items-center gap-3
            sm:gap-4
            lg:gap-[18px]
          "
        >
          {/* Plan */}
          <NavbarData></NavbarData>

          {/* Saved */}
          <SavedData></SavedData>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
