"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { LuCalendarCheck } from "react-icons/lu";
import { toast } from "react-toastify";

const AddButton = ({ workouts }: { workouts: Iworkout }) => {
  const { addTodaysPlan, setAddTodaysPlan } = useContext(WorkoutsContext);
  const handelAddButton = () => {
    console.log("add button is triggered", workouts);
    setAddTodaysPlan([...addTodaysPlan, workouts]);
    toast.success(`you have successfully added ${workouts.name}`);
  };
  return (
    <div>
      <button
        onClick={() => handelAddButton()}
        type="button"
        className="flex items-center gap-2 rounded-lg bg-[#b7ff00] px-4 py-2.5 text-[10px] font-bold text-black transition hover:bg-[#c5ff33]"
      >
        <LuCalendarCheck size={13} />
        Add to today's plan
      </button>
    </div>
  );
};

export default AddButton;
