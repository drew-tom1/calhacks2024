import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import TaskNumber from '../TaskNumber';
import TaskDescription from '../TaskDescription';

export default function Task({ stepNum, taskName, taskDescription }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="task-item flex items-center space-x-4">
      <TaskNumber stepNum={stepNum} />
      <TaskDescription taskName={taskName} taskDescription={taskDescription} />
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
}
