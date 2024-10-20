"use client";

import React from "react";

const SubmitButton = ({ prompt, onTasksGenerated }) => {
  // Log all props received by the component
  console.log("Props received in SubmitButton:", { prompt, onTasksGenerated });

  const handleClick = async () => {
    if (!prompt) {
      console.error("Prompt is required");
      return;
    }

    try {
      console.log("Prompt:", prompt);

      // Make a POST request to the API route
      const response = await fetch("../api/generateTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate tasks");
      }

      console.log("Right before data");
      const data = await response.json(); // Get the response from the server
      console.log("Right before onTasksGenerated callback");

      console.log("onTasksGenerated:", onTasksGenerated);

      if (onTasksGenerated) {
        console.log("Invoking onTasksGenerated callback");
        onTasksGenerated(data.content); // Pass the tasks up to the parent component
      }

      console.log("Generated tasks:", data.content);
    } catch (error) {
      console.error("Error generating tasks:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="py-3 px-6 bg-black hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-lg border border-transparent 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palette-primary transition-all duration-200 ease-in-out"
    >
      Go
    </button>
  );
};

export default SubmitButton;
