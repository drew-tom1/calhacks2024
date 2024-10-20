import React from 'react';
import Task from './Task';

export default function TaskTable({ tasks }) {
  return (
    console.log('Tasks generated:', tasks),
    <div className="task-table border-2 rounded p-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task 
            key={index} 
            stepNum={task.stepNum} 
            taskName={task.taskName} 
            taskDescription={task.taskDescription} 
          />
        ))
      ) : (
        <p>No tasks generated yet.</p>
      )}
    </div>
  );
}
