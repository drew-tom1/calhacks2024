
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate-tasks', {
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
      setTasks(data)
    } catch {error} {
      setError('Error generating tasks');
    }
  };

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
      
      {/* Table or Task List */}
      <div className="w-full px-4 max-w-lg mt-8">
        {(
          <table className="border rounded table-auto w-full text-center text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Step</th>
                <th className="px-4 py-2">Task</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.stepNum}>
                  <td className="border px-4 py-2">{task.stepNum}</td>
                  <td className="border px-4 py-2">{task.taskName}</td>
                  <td className="border px-4 py-2">{task.taskDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

  );
}
