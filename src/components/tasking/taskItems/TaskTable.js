import React from "react";
import Task from "./Task"; // Import the Task component

export default function TaskTable({ tasks }) {
  // If tasks is a string, parse it. Otherwise, ensure it's an array.
  let validTasks;

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

  console.log("Rendering Task:", validTasks);

  return (
    <div className="task-table max-w-full border-3 rounded p-2 max-h-80 overflow-y-scroll">
      {" "}
      {/* h-64 sets a fixed height, adjust as needed */}
      {validTasks.length > 0 ? (
        validTasks.map((currentTask, index) => (
          <Task
            key={index}
            stepNum={currentTask.stepNum}
            taskName={currentTask.taskName}
            taskDescription={currentTask.taskDescription}
          />
        ))
      ) : (
        <p>No tasks generated yet.</p>
      )}
    </div>
  );
}
