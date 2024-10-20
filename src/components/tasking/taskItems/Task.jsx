import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import TaskNumber from '../TaskNumber';

export default function Task({ stepNum, taskName, taskDescription }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="task-item flex items-center justify-between w-full p-2 border-b last:border-b-0">
      <TaskNumber stepNum={stepNum} />
      <div className="flex-1 mx-4 text-left">
        <span className="block font-semibold">{taskName}</span>
        <span className="block text-white">{taskDescription}</span>
      </div>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
}
