'use client';

import React, { useState } from 'react';
import InputBox from './inputBox';
import SubmitButton from './generateButton';
import TaskTable from '../tasking/taskItems/TaskTable'; // Assuming TaskTable is in the same directory

const GenerationWrapper = () => {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState([]); // State to hold the generated tasks

  return (
    <div className="font-secondary flex flex-col w-full px-2 max-w-lg mx-auto justify-center space-y-4">
      <div className="flex items-center space-x-2"> {/* Flex container to align input and button */}
        <InputBox prompt={prompt} setPrompt={setPrompt} />
        <SubmitButton prompt={prompt} />
      </div>
      {/* Optional: Add TaskTable here if you want it displayed */}
      {/* {tasks.length > 0 && <TaskTable tasks={tasks} />} */}
    </div>
  );
};

export default GenerationWrapper;
