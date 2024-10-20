import React, { useState } from 'react';
import TaskTable from './TaskTable';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Simulate fetching tasks from a response
  const fetchTasks = async () => {
    const response = await generateTasks('Your input prompt here');
    setTasks(response);
  };

  return (
    <div>
      <button onClick={fetchTasks}>Generate Tasks</button>
      {tasks.length > 0 && <TaskTable tasks={tasks} />}
    </div>
  );
}
