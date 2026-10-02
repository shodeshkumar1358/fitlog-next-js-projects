"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { FiCheck, FiChevronDown, FiClock, FiStar, FiX } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";

type TabType = "today" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyplanPage = () => {
  const { addTodaysPlan, setAddTodaysPlan, saveForLatter, setSaveForLatter } =
    useContext(WorkoutsContext);

  const [activeTab, setActiveTab] = useState<TabType>("today");

  const [sortBy, setSortBy] = useState<SortType>("duration");

  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  /* ================= ACTIVE WORKOUTS ================= */

  const activeWorkouts = useMemo(() => {
    const workouts = activeTab === "today" ? addTodaysPlan : saveForLatter;

    return [...workouts].sort((a, b) => {
      switch (sortBy) {
        case "calories":
          return b.caloriesBurned - a.caloriesBurned;

        case "rating":
          return b.rating - a.rating;

        case "duration":
        default:
          return b.duration - a.duration;
      }
    });
  }, [activeTab, addTodaysPlan, saveForLatter, sortBy]);

  /* ================= STATS ================= */

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  /* ================= REMOVE ================= */

  const handleRemoveFromPlan = (id: number) => {
    setAddTodaysPlan((prev) => prev.filter((workout) => workout.id !== id));

    setCompletedWorkouts((prev) =>
      prev.filter((workoutId) => workoutId !== id),
    );
  };

  const handleRemoveFromSaved = (id: number) => {
    setSaveForLatter((prev) => prev.filter((workout) => workout.id !== id));

    setCompletedWorkouts((prev) =>
      prev.filter((workoutId) => workoutId !== id),
    );
  };

  /* ================= DONE ================= */

  const handleMarkAsDone = (id: number) => {
    setCompletedWorkouts((prev) => {
      if (prev.includes(id)) {
        return prev.filter((workoutId) => workoutId !== id);
      }

      return [...prev, id];
    });
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#0c0d10]
        px-4
        py-7
        text-white
        sm:px-6
        sm:py-9
        md:px-9
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-6">
          <h1
            className="
              text-[25px]
              font-extrabold
              uppercase
              tracking-[-0.5px]
              sm:text-[28px]
            "
          >
            MY PLAN
          </h1>

          <p
            className="
              mt-1.5
              max-w-[520px]
              text-[12px]
              leading-5
              text-[#858992]
              sm:text-[13px]
            "
          >
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* =================================================
            STATS CARD
        ================================================= */}

        <div
          className="
            overflow-hidden
            rounded-[16px]
            border
            border-[#252a33]
            bg-[#14171d]
            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
          "
        >
          <div
            className="
              grid
              min-h-[120px]
              grid-cols-3
            "
          >
            {/* ================= EXERCISES ================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                border-r
                border-[#242831]
                px-2
                text-center
              "
            >
              <p
                className="
                  text-[11px]
                  font-medium
                  text-[#858992]
                  sm:text-[12px]
                "
              >
                Exercises
              </p>

              <h2
                className="
                  mt-2
                  text-[30px]
                  font-extrabold
                  leading-none
                  text-[#c8ff00]
                  sm:text-[36px]
                "
              >
                {activeWorkouts.length}
              </h2>
            </div>

            {/* ================= MINUTES ================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                border-r
                border-[#242831]
                px-2
                text-center
              "
            >
              <p
                className="
                  text-[11px]
                  font-medium
                  text-[#858992]
                  sm:text-[12px]
                "
              >
                Minutes
              </p>

              <h2
                className="
                  mt-2
                  text-[30px]
                  font-extrabold
                  leading-none
                  sm:text-[36px]
                "
              >
                {totalMinutes}
              </h2>
            </div>

            {/* ================= CALORIES ================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                px-2
                text-center
              "
            >
              <p
                className="
                  text-[11px]
                  font-medium
                  text-[#858992]
                  sm:text-[12px]
                "
              >
                Calories
              </p>

              <h2
                className="
                  mt-2
                  text-[30px]
                  font-extrabold
                  leading-none
                  sm:text-[36px]
                "
              >
                {totalCalories}
              </h2>
            </div>
          </div>
        </div>

        {/* =================================================
            TABS + SORT
        ================================================= */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* TABS */}

          <div
            className="
              flex
              h-[38px]
              w-fit
              rounded-[10px]
              border
              border-[#252a33]
              bg-[#15181e]
              p-[3px]
            "
          >
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`
                rounded-[7px]
                px-5
                text-[11px]
                font-semibold
                transition-all
                duration-200
                sm:px-6

                ${
                  activeTab === "today"
                    ? "bg-[#252a32] text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    : "text-[#858992] hover:text-white"
                }
              `}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`
                rounded-[7px]
                px-6
                text-[11px]
                font-semibold
                transition-all
                duration-200

                ${
                  activeTab === "saved"
                    ? "bg-[#252a32] text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    : "text-[#858992] hover:text-white"
                }
              `}
            >
              Saved
            </button>
          </div>

          {/* SORT */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              sm:justify-end
            "
          >
            <span className="text-[11px] text-[#858992]">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="
                  h-[34px]
                  cursor-pointer
                  appearance-none
                  rounded-[9px]
                  border
                  border-[#292e37]
                  bg-[#15181e]
                  py-0
                  pl-3
                  pr-9
                  text-[11px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  hover:border-[#3a414c]
                  focus:border-[#c8ff00]
                "
              >
                <option value="duration">Duration</option>

                <option value="calories">Calories</option>

                <option value="rating">Rating</option>
              </select>

              <FiChevronDown
                size={13}
                className="
                  pointer-events-none
                  absolute
                  right-2.5
                  top-1/2
                  -translate-y-1/2
                  text-[#858992]
                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        {activeWorkouts.length === 0 ? (
          /* ================= EMPTY STATE ================= */

          <div
            className="
              mt-5
              flex
              min-h-[240px]
              flex-col
              items-center
              justify-center
              rounded-[14px]
              border
              border-dashed
              border-[#282d35]
              bg-[#0d0f13]
              px-5
              text-center
            "
          >
            <h2
              className="
                text-[17px]
                font-extrabold
                uppercase
                tracking-tight
              "
            >
              {activeTab === "today" ? "NOTHING HERE YET" : "NO SAVED WORKOUTS"}
            </h2>

            <p
              className="
                mt-2
                max-w-[380px]
                text-[11px]
                leading-5
                text-[#858992]
                sm:text-[12px]
              "
            >
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save some workouts from the library to see them here."}
            </p>

            <Link
              href="/"
              className="
                mt-5
                rounded-full
                bg-[#c8ff00]
                px-6
                py-2.5
                text-[11px]
                font-bold
                text-black
                shadow-[0_8px_20px_rgba(200,255,0,0.12)]
                transition
                hover:bg-[#b8ee00]
                hover:shadow-[0_8px_25px_rgba(200,255,0,0.2)]
              "
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* ================= WORKOUT LIST ================= */

          <div className="mt-5 space-y-3">
            {activeWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
                isDone={completedWorkouts.includes(workout.id)}
                onRemove={() =>
                  activeTab === "today"
                    ? handleRemoveFromPlan(workout.id)
                    : handleRemoveFromSaved(workout.id)
                }
                onDone={() => handleMarkAsDone(workout.id)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyplanPage;

/* =========================================================
   WORKOUT CARD
========================================================= */

type WorkoutCardProps = {
  workout: Iworkout;
  activeTab: TabType;
  isDone: boolean;
  onRemove: () => void;
  onDone: () => void;
};

const WorkoutCard = ({
  workout,
  activeTab,
  isDone,
  onRemove,
  onDone,
}: WorkoutCardProps) => {
  return (
    <article
      className="
        group
        flex
        w-full
        flex-col
        gap-4
        rounded-[15px]
        border
        border-[#252a33]
        bg-[#14171d]
        p-3
        shadow-[0_4px_18px_rgba(0,0,0,0.08)]
        transition-all
        duration-200
        hover:border-[#363c47]
        hover:bg-[#171a20]
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.14)]

        sm:flex-row
        sm:items-center
        sm:gap-4
        sm:p-3.5
      "
    >
      {/* =================================================
          LEFT SIDE
      ================================================= */}

      <div
        className="
          flex
          min-w-0
          flex-1
          items-center
        "
      >
        {/* IMAGE */}

        <div className="relative shrink-0 overflow-hidden rounded-[9px]">
          <img
            src={workout.image}
            alt={workout.name}
            className="
              h-[68px]
              w-[95px]
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105

              sm:h-[64px]
              sm:w-[112px]
            "
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* INFO */}

        <div className="ml-3 min-w-0 sm:ml-4">
          {/* NAME */}

          <h3
            className="
              truncate
              text-[13px]
              font-extrabold
              uppercase
              leading-5
              tracking-[-0.1px]
              text-white
              sm:text-[14px]
            "
          >
            {workout.name}
          </h3>

          {/* MUSCLE GROUP */}

          <p
            className="
              mt-0.5
              truncate
              text-[10px]
              leading-4
              text-[#858992]
              sm:text-[11px]
            "
          >
            {workout.muscleGroups.join(", ")}
          </p>

          {/* META */}

          <div
            className="
              mt-2
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-1.5
              text-[10px]
              text-[#c5c8ce]
              sm:text-[11px]
            "
          >
            {/* Duration */}

            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <FiClock size={13} strokeWidth={1.8} className="text-[#c8ff00]" />

              <span>{workout.duration} min</span>
            </span>

            {/* Calories */}

            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <LuFlame size={13} className="text-[#c8ff00]" />

              <span>{workout.caloriesBurned} kcal</span>
            </span>

            {/* Rating */}

            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <FiStar size={13} strokeWidth={1.8} className="text-[#c8ff00]" />

              <span>{workout.rating}</span>
            </span>
          </div>
        </div>
      </div>

      {/* =================================================
          ACTIONS
      ================================================= */}

      <div
        className="
          flex
          w-full
          items-center
          gap-2
          border-t
          border-[#252a33]
          pt-3

          sm:w-auto
          sm:border-0
          sm:pt-0
        "
      >
        {/* VIEW DETAILS */}

        <Link
          href={`/workouts/${workout.id}`}
          className="
            flex
            h-[32px]
            flex-1
            items-center
            justify-center
            rounded-full
            border
            border-[#363c47]
            px-4
            text-[10px]
            font-semibold
            text-[#d4d7dc]
            transition-all
            hover:border-[#555c68]
            hover:bg-[#20242b]

            sm:h-[30px]
            sm:flex-none
          "
        >
          View Details
        </Link>

        {/* MARK AS DONE */}

        {activeTab === "today" && (
          <button
            type="button"
            onClick={onDone}
            className={`
              flex
              h-[32px]
              flex-1
              items-center
              justify-center
              gap-1.5
              rounded-full
              border
              px-4
              text-[10px]
              font-bold
              transition-all
              duration-200

              sm:h-[30px]
              sm:flex-none

              ${
                isDone
                  ? "border-[#c8ff00] bg-[#c8ff00] text-black shadow-[0_4px_12px_rgba(200,255,0,0.12)]"
                  : "border-[#baff00] bg-transparent text-[#c8ff00] hover:bg-[#baff00] hover:text-black"
              }
            `}
          >
            {isDone && <FiCheck size={12} strokeWidth={3} />}

            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        {/* REMOVE */}

        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove workout"
          className="
            flex
            h-[32px]
            w-[32px]
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[#686d77]
            transition-all
            hover:bg-[#242831]
            hover:text-white

            sm:h-[30px]
            sm:w-[30px]
          "
        >
          <FiX size={16} />
        </button>
      </div>
    </article>
  );
};
