'use client';

import React, { useState } from 'react';
import InputBox from './inputBox';
import SubmitButton from './generateButton';
import TaskTable from '../tasking/taskItems/TaskTable'; 
const GenerationWrapper = () => {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]); // State to hold the generated tasks

  // This function will be passed to SubmitButton and called when tasks are generated
  const handleTasksGenerated = (newTasks) => {
    console.log('Tasks generated in generationwrapper', newTasks); // Log the generated tasks
    setTasks(newTasks); // Update tasks state with the generated tasks
  };

  return (
    <div className="font-secondary flex flex-col w-full px-2 max-w-lg mx-auto justify-center space-y-4">
      <InputBox prompt={prompt} setPrompt={setPrompt} />
      {/* Pass the handleTasksGenerated function to SubmitButton */}
      <SubmitButton prompt={prompt} onTasksGenerated={handleTasksGenerated} /> {/* Ensure this line passes the function */}
      {tasks.length > 0 && <TaskTable tasks={tasks} />} {/* Render TaskTable when tasks are generated */}
    </div>
  );
};

export default GenerationWrapper;
