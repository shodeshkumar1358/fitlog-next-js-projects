import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="
        flex
        min-h-[100px]
        w-full
        flex-col
        items-center
        justify-center
        gap-4
        border-t-2
        border-t-gray-800
        bg-black
        px-5
        py-6
        text-white

        sm:flex-row
        sm:justify-between
        sm:gap-5
        sm:px-8
        sm:py-7

        lg:px-16
        xl:px-30
      "
    >
      {/* Logo */}
      <div className="flex shrink-0 items-center gap-2">
        <Image
          src={logo}
          alt="Footer logo"
          width={28}
          height={28}
          className="rotate-[135deg]"
        />

        <h4 className="text-[16px] font-bold">Fitlog</h4>
      </div>

      {/* Copyright */}
      <div className="text-center sm:text-right">
        <p className="text-[10px] leading-4 text-gray-500 sm:text-[11px] md:text-[12px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
