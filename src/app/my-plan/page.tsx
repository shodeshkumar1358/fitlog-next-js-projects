"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";

const MyplanPage = () => {
  const { addTodaysPlan } = useContext(WorkoutsContext);
  console.log(addTodaysPlan, "readbooks");
  return <div>this is my plan Page</div>;
};

export default MyplanPage;
