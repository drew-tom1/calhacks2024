'use client';

import React from 'react';

const InputBox = ({ prompt, setPrompt }) => {
  return (
    <input
      type="text"
      className="border border-r-0 border-palette-light rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus:ring-palette-primary text-black text-center"
      required
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Type Your Prompt"
      value={prompt}  // Controlled input
    />
  );
};

export default InputBox;
