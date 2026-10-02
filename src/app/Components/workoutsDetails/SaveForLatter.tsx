"use client";

import React, { useContext } from "react";
import { LuBookmark } from "react-icons/lu";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

const SaveForLatterButton = ({ workouts }: { workouts: Iworkout }) => {
  const { saveForLatter, setSaveForLatter } = useContext(WorkoutsContext);

  const handleSaveButton = () => {
    console.log("Save button is triggered", workouts);

    setSaveForLatter([...saveForLatter, workouts]);

    toast.success(`You have successfully saved ${workouts.name}`);
  };

  return (
    <div>
      <button
        onClick={handleSaveButton}
        type="button"
        className="flex items-center gap-2 rounded-lg border border-[#343840] bg-transparent px-4 py-2.5 text-[10px] text-gray-300 transition hover:bg-[#181a20]"
      >
        <LuBookmark size={13} />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLatterButton;
