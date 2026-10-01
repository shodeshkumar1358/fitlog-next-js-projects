"use client";
import React, { createContext, useState, ReactNode } from "react";

interface WorkoutsContextType {
  addTodaysPlan: Iworkout[];
  setAddTodaysPlan: React.Dispatch<React.SetStateAction<Iworkout[]>>;
  saveForLatter: Iworkout[];
  setSaveForLatter: React.Dispatch<React.SetStateAction<Iworkout[]>>;
}

export const WorkoutsContext = createContext<WorkoutsContextType>(
  {} as WorkoutsContextType,
);
const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [addTodaysPlan, setAddTodaysPlan] = useState<Iworkout[]>([]);
  const [saveForLatter, setSaveForLatter] = useState<Iworkout[]>([]);

  const allValues = {
    addTodaysPlan,
    setAddTodaysPlan,
    saveForLatter,
    setSaveForLatter,
  };
  return (
    <WorkoutsContext.Provider value={allValues}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
