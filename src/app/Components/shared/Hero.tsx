import Image from "next/image";
import React from "react";
import heroImg from "@/assets/banner.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0b0c0f] px-4 py-5 sm:px-6 lg:px-5 lg:py-6">
      <div
        className="
          mx-auto flex max-w-[1280px] flex-col
          overflow-hidden rounded-[14px] border border-[#252831]
          bg-[#15171c]
          px-6 py-10
          sm:px-10
          lg:min-h-[370px] lg:flex-row lg:items-center lg:justify-between
          lg:px-12 lg:py-10"
      >
        {/* Left */}
        <div className="relative z-10 max-w-[600px]">
          <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#b6ff00]">
            Workout Library
          </h4>

          <h2
            className="
              max-w-[570px]
              text-[40px] font-black uppercase leading-[0.98]
              tracking-[-0.025em] text-white
              sm:text-[46px]
              lg:text-[48px]
          "
          >
            Train with intent. Log every set.
          </h2>

          <p className="mt-5 max-w-[530px] text-[14px] leading-[1.65] text-[#9298a5]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button
            className="
              mt-6 rounded-[5px] bg-[#b6ff00]
              px-5 py-3 text-[10px] font-extrabold uppercase
              tracking-[0.04em] text-black
              transition hover:bg-[#c7ff3d] 
          "
          >
            Browse Workouts
          </button>
        </div>

        {/* Right */}
        <div
          className="
            relative mt-8 flex h-[250px] w-full
            items-center justify-center
            sm:h-[280px]
            lg:mt-0 lg:h-[300px] lg:w-[390px]
          "
        >
          <Image
            src={heroImg}
            alt="Person exercising on a gym machine"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
