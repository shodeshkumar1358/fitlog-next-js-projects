import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuClock3, LuFlame, LuStar } from "react-icons/lu";

const getWorkwouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Workouts = async () => {
  const workwoutsData = await getWorkwouts();
  // console.log(workwoutsData, "workout data");
  return (
    <section
      id="Workouts"
      className="mx-auto w-full max-w-[1280px] bg-[#0c0d10] py-12 text-white"
    >
      {/* Top left side */}
      <div className="mb-8">
        <h2 className="text-[30px] font-bold uppercase tracking-tight">
          The Library
        </h2>

        <p className="mt-1 text-[14px] font-normal text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        {workwoutsData.map((workout: Iworkout) => (
          <Link key={workout.id} href={`/workouts/${workout.id}`}>
            <article
              key={workout.id}
              className="group overflow-hidden rounded-[14px] border border-[#292c32] bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3e46] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[160px] w-full bg-cover bg-gray-900">
                <Image
                  width={400}
                  height={250}
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-[17px] pb-[18px] pt-[16px]">
                {/* Muscle Tags */}
                <div className="mb-[10px] flex flex-wrap gap-[7px]">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#b7ff00] px-[10px] py-[3px] text-[9px] font-black uppercase leading-none tracking-wide text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Name */}
                <h3 className="truncate text-[15px] font-extrabold uppercase tracking-wide text-white">
                  {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-[3px] text-[11px] text-gray-500">
                  {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-[13px] h-px bg-[#24272d]" />

                {/* Stats */}
                <div className="flex items-center gap-4 text-[10px] text-gray-400">
                  {/* Duration */}
                  <div className="flex items-center gap-1.5">
                    <LuClock3 size={12} strokeWidth={1.8} />
                    <span>{workout.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-1.5">
                    <LuFlame size={12} strokeWidth={1.8} />
                    <span>{workout.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <LuStar
                      size={12}
                      strokeWidth={1.8}
                      className="fill-transparent"
                    />
                    <span>{workout.rating}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Workouts;
