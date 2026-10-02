import AddButton from "@/app/Components/workoutsDetails/AddButton";
import SaveForLatterButton from "@/app/Components/workoutsDetails/SaveForLatter";
import SaveForLatter from "@/app/Components/workoutsDetails/SaveForLatter";
import Image from "next/image";
import React from "react";
interface IworkoutDetailsPageProps {
  params: Promise<{
    id: number;
  }>;
}

const getWorkwouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutsDetailsPage = async ({ params }: IworkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkwouts();
  const workouts = workoutsData.find(
    (workout: Iworkout) => workout.id === Number(id),
  ) as Iworkout;
  //   console.log(workouts, "workout detail page data")

  if (!workouts) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0c0d10] text-white">
        <h1 className="text-2xl font-bold">Workout Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 pt-20 pb-20 text-white md:px-8 lg:px-10">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={workouts.image}
              alt={workouts.name}
              width={700}
              height={700}
              className="h-[500px] w-full rounded-2xl object-cover md:h-[500px] lg:h-[550px]"
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex flex-col mt-[-10px]">
            {/* Name */}
            <h1 className="text-[28px] font-extrabold uppercase leading-tight md:text-[34px]">
              {workouts.name}
            </h1>

            {/* Description */}
            <p className="mt-2 max-w-[600px] text-[13px] leading-5 text-gray-400">
              {workouts.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workouts.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#b7ff00] px-3 py-1 text-[9px] font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* STATS CARD */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Equipment
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Difficulty
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Sets
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Reps
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Duration
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Calories
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200">
                  Rating
                </span>

                <span className="text-[10px] text-gray-300">
                  {workouts.rating}
                </span>
              </div>
            </div>

            {/* INSTRUCTIONS  */}
            <div className="mt-5">
              <h2 className="text-[11px] font-extrabold uppercase">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {workouts.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[14px] leading-4 text-gray-400"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/*Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <AddButton workouts={workouts}></AddButton>
              <SaveForLatterButton workouts={workouts}></SaveForLatterButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutsDetailsPage;
