import React from 'react';

export default function TaskDescription({ taskName, taskDescription }) {
  return (
    <div>
      <strong>{taskName}</strong>
      <p>{taskDescription}</p>
    </div>
  );
}
