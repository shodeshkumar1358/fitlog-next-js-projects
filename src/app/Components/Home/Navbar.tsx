"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import NavbarData from "./NavbarData";
import SavedData from "./SavedData";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workouts");

  const isMyPlanActive = pathname.startsWith("/my-plan");

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative w-full border-b border-[#313030] bg-[#0B0D0F] text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 lg:h-[70px] lg:px-5 lg:py-0">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src={logo}
            alt="FITLOG"
            className="h-[22px] w-auto object-contain sm:h-[24px] lg:h-[25px]"
          />

          <h2 className="text-[17px] font-bold tracking-[0.5px] sm:text-[18px]">
            FITLOG
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[7px] lg:flex">
          <Link
            href="/"
            className={`rounded-full px-[13px] py-[5px] text-[16px] transition-all duration-200 ${
              isWorkoutsActive
                ? "bg-[#1C2B05] text-[#B6F500]"
                : "text-[#85878A] hover:bg-[#151c0a] hover:text-[#B6F500]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-[10px] py-[5px] text-[16px] transition-all duration-200 ${
              isMyPlanActive
                ? "bg-[#1C2B05] text-[#B6F500]"
                : "text-[#85878A] hover:bg-[#151c0a] hover:text-[#B6F500]"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden shrink-0 items-center gap-[18px] lg:flex">
          <NavbarData />
          <SavedData />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#292e37] text-white transition hover:bg-[#1c2027] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <LuX size={23} /> : <LuMenu size={23} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-[#313030] bg-[#0B0D0F] px-5 py-5 shadow-xl lg:hidden">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-[15px] transition ${
                isWorkoutsActive
                  ? "bg-[#1C2B05] text-[#B6F500]"
                  : "text-[#85878A] hover:bg-[#151c0a]"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-[15px] transition ${
                isMyPlanActive
                  ? "bg-[#1C2B05] text-[#B6F500]"
                  : "text-[#85878A] hover:bg-[#151c0a]"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-[#292e37]" />

          {/* Plan and Saved */}
          <div className="flex items-center justify-start gap-5">
            <NavbarData />
            <SavedData />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
