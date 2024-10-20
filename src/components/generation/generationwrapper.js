'use client';

import React, { useState } from 'react';
import InputBox from './inputBox';
import SubmitButton from './generateButton';
import TaskTable from './TaskTable'; // Assuming TaskTable is in the same directory

const GenerationWrapper = () => {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]); // State to hold the generated tasks

  const handleTasksGenerated = (newTasks) => {
    console.log('Tasks generated in generationwrapper', newTasks); // Log the generated tasks
    setTasks(newTasks); // Update tasks state with the generated tasks
  };

  return (
    <div className="font-secondary flex flex-col w-full px-2 max-w-lg mx-auto justify-center space-y-4">
      <InputBox prompt={prompt} setPrompt={setPrompt} />
      <SubmitButton prompt={prompt} onTasksGenerated={handleTasksGenerated} />
      {tasks.length > 0 && <TaskTable tasks={tasks} />} {/* Render TaskTable when tasks are generated */}
    </div>
  );
};

export default GenerationWrapper;
