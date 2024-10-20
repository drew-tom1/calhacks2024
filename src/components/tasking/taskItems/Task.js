  import Checkbox from '../Checkbox';
  import { useState } from 'react';
  import React from "react";

  export default function Task({ stepNum, taskName, taskDescription }) {

    const [checked, setChecked] = useState(false);
    
    console.log("Task:", stepNum, taskName, taskDescription);
    return (
      <div className="task-item flex items-center justify-between w-full p-2 border-b last:border-b-0">
        <div className="flex-1 mx-4 text-left">
          <span className="block font-semibold">{stepNum}. {taskName}</span>
          <span className="block text-white">{taskDescription}</span>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        </div>
      </div>
    );
  }
