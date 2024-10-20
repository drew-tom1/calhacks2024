import React from 'react';
import TaskTable from './TaskTable';

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <TaskTable tasks={tasks} />
      ) : (
        <p>No tasks generated yet. Please generate tasks to display them here.</p>
      )}
    </div>
  );
}
