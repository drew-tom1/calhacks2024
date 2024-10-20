import React from 'react';
import Task from './Task';

export default function TaskTable({ tasks }) {
  return (
    <div className="task-table border-2 rounded p-4">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          stepNum={task.stepNum} 
          taskName={task.taskName} 
          taskDescription={task.taskDescription} 
        />
      ))}
    </div>
  );
}
