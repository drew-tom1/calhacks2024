import React, { useState, useEffect } from "react";
import Task from "./Task"; // Import the Task component

export default function TaskTable({ tasks }) {
  // If tasks is a string, parse it. Otherwise, ensure it's an array.
  let validTasks;
  const [currentStep, setCurrentStep] = useState(1); // Track the current step number

  if (typeof tasks === "string") {
    try {
      validTasks = JSON.parse(tasks); // Parse the string if it's a valid JSON string
    } catch (error) {
      console.error("Error parsing tasks:", error);
      validTasks = []; // Fallback to an empty array in case of error
    }
  } else {
    validTasks = Array.isArray(tasks) ? tasks : [tasks]; // Ensure tasks is an array
  }

  // useEffect to detect gesture and automatically check the next task
  useEffect(() => {
    const handleGesture = async () => {
      try {
        const response = await fetch("/api/gesture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gesture: "open_hand", // Simulating open hand gesture
          }),
        });

        const data = await response.json();

        if (data.message === "Open hand detected!") {
          // Automatically check the next task based on the current step number
          if (currentStep <= validTasks.length) {
            setCurrentStep(currentStep + 1); // Move to the next step
          }
        }
      } catch (error) {
        console.error("Error detecting gesture:", error);
      }
    };

    handleGesture(); // Call the function inside useEffect
  }, [currentStep, validTasks.length]);

  console.log("Rendering Task:", validTasks);

  return (
    <div className="task-table max-w-full border-3 rounded p-2 max-h-80 overflow-y-scroll">
      {validTasks.length > 0 ? (
        validTasks.map((currentTask, index) => (
          <Task
            key={index}
            stepNum={currentTask.stepNum}
            taskName={currentTask.taskName}
            taskDescription={currentTask.taskDescription}
            checked={currentTask.stepNum <= currentStep} // Automatically check tasks up to the current step
            onToggle={() => {
              if (currentTask.stepNum <= currentStep) {
                setCurrentStep(currentTask.stepNum); // Allow manual toggling based on the step number
              }
            }}
          />
        ))
      ) : (
        <p>No tasks generated yet.</p>
      )}
    </div>
  );
}
