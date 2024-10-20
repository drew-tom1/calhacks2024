export default function TaskTable({ tasks, completedTaskIds }) {
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
      {validTasks.length > 0 ? (
        validTasks.map((currentTask, index) => {
          const isCompleted = completedTaskIds.includes(index); // Check if the task is completed

          return (
            <div
              key={index}
              className={`task-item ${isCompleted ? "opacity-50" : ""}`} // Apply gray-out class if task is completed
            >
              <Task
                stepNum={currentTask.stepNum}
                taskName={currentTask.taskName}
                taskDescription={currentTask.taskDescription}
              />
            </div>
          );
        })
      ) : (
        <p>No tasks generated yet.</p>
      )}
    </div>
  );
}
