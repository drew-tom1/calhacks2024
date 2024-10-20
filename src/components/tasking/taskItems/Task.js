import Checkbox from "../Checkbox";
import React from "react";

export default function Task({
  stepNum,
  taskName,
  taskDescription,
  checked,
  onToggle,
}) {
  return (
    <div className="task-item flex items-center justify-between w-full p-2 border-b last:border-b-0">
      <div className="flex-1 mx-4 text-left">
        <span className="block font-bold text-lg">
          {stepNum}. {taskName}
        </span>
        <span className="block text-white">{taskDescription}</span>
        <Checkbox checked={checked} onChange={onToggle} />
      </div>
    </div>
  );
}
