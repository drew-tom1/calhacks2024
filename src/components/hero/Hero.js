"use client";

import React from "react";
import GenerationWrapper from "@/components/generation/generationwrapper";
// import TaskTable from "../tasking/taskItems/TaskTable";

export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-900 relative h-screen w-screen">
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full max-w-none mx-auto text-center">
        <div className="space-y-8">
          <p className="mt-10 mb-6 text-8xl font-serif font-bold text-white">
            ChopChop
          </p>
          <p className="font-sans font-bold text-palette-light text-base md:text-lg lg:text-5xl">
            Cooking Becoming Easy
          </p>
          {/* Include the GenerationWrapper component */}
          <GenerationWrapper />
        </div>
      </div>
    </div>
  );
}
