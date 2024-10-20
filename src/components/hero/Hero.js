'use client';

import React from 'react';
import GenerationWrapper from '../generation/GenerationWrapper';  
import TaskTable from '../tasking/taskItems/TaskTable';

export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-400 relative h-screen w-screen">
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <div className="space-y-8">
          <p className="font-sans font-bold text-palette-light text-base md:text-lg lg:text-3xl">
            Cooking Becoming Easy
          </p>
          {/* Include the GenerationWrapper component */}
          <GenerationWrapper />
        </div>
      </div>
    </div>
  );
}
