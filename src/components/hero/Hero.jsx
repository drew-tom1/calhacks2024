
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TaskTable from '../tasking/taskItems/TaskTable';

export default function Hero() {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),  // Send the prompt to the API
      });

      if (!response.ok) {
        throw new Error('Failed to generate tasks');
      }
      const data = await response.json();
      console.log(data)
      setTasks(data)
    } catch {error} {
      setError('Error generating tasks');
    }
  };

  const sampleTasks = [
    {
        stepNum: 1,
        taskName: "Gather Ingredients",
        taskDescription: "Collect all necessary ingredients for the recipe."
    },
    {
        stepNum: 2,
        taskName: "Preheat Oven",
        taskDescription: "Preheat the oven to 350°F (175°C) to prepare for baking."
    },
    {
        stepNum: 3,
        taskName: "Chop Vegetables",
        taskDescription: "Wash and chop the vegetables into bite-sized pieces."
    },
    {
        stepNum: 4,
        taskName: "Mix Ingredients",
        taskDescription: "In a bowl, mix the chopped vegetables with the seasoning."
    },
    {
        stepNum: 5,
        taskName: "Bake the Dish",
        taskDescription: "Transfer the mixture into a baking dish and bake for 25 minutes."
    },
    {
        stepNum: 6,
        taskName: "Serve",
        taskDescription: "Once done, take it out of the oven and serve hot."
    }
];


  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-400 min-h-screen w-screen flex flex-col justify-start items-center overflow-y-auto">
      <div className="flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center py-8">
        <div className="space-y-8">
          <Image
            src="/images/logo.png"
            alt="Cooking Becoming Easy Logo"
            width={400}
            height={200}
            className="mx-auto"
          />
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            Cooking Becoming Easy
          </p>
          <form
            onSubmit={handleSubmit}
            className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center"
          >
            <input
              type="text"
              className="border border-r-0 border-palette-light rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus:ring-palette-primary text-black text-center"
              required
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type Your Prompt"
            />
            <button
              type="submit"
              className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary border border-white"
            >
              Go
            </button>
          </form>
        </div>
      </div>
      <TaskTable tasks={sampleTasks} />
    </div> 
  );
}
