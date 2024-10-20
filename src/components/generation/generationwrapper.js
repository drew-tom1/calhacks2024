'use client';

import React, { useState } from 'react';
import InputBox from './inputBox';
import SubmitButton from './generateButton';
import TaskList from '../tasking/taskItems/TaskList';
import TaskTable from '../tasking/taskItems/TaskTable'; // Assuming TaskTable is in the same directory

const GenerationWrapper = () => {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]); 

  const handleTasksGenerated = (newTasks) => {
    console.log('Tasks generated in generationwrapper:', newTasks); // Log the generated tasks
    setTasks(newTasks); // Update tasks state with the generated tasks
  };

  // Add this console.log inside the return block to see if the tasks are updating.
  console.log("Rendering GenerationWrapper with tasks:", tasks);

  return (
    <div className="font-secondary flex flex-col w-full px-2 max-w-lg mx-auto justify-center space-y-4">
      <div className="flex items-center space-x-2"> {/* Flex container to align input and button */}
        <InputBox prompt={prompt} setPrompt={setPrompt} />
        <SubmitButton prompt={prompt} onTasksGenerated={handleTasksGenerated}/>
      </div>
      {/* Render TaskTable if tasks are available */}
      {tasks.length > 0 && <TaskList tasks={tasks} />}  
    </div>
  );
};

export default GenerationWrapper;
