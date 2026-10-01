"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";

const MyplanPage = () => {
  const { addTodaysPlan, saveForLatter } = useContext(WorkoutsContext);
  console.log(addTodaysPlan, saveForLatter, "readbooks", "saveforletter");
  return (
    <div>
      
      total add to plan {addTodaysPlan.length} <br /> total savedforletter{" "}
      {saveForLatter.length}
    </div>
  );
};

export default MyplanPage;
