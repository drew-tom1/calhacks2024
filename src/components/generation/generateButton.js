'use client';

import React from 'react';

const SubmitButton = ({ prompt }) => {
  const handleClick = async () => {
    if (!prompt) {
      console.error('Prompt is required');
      return;
    }

    try {
        console.log('Prompt:', prompt);  // Log the prompt
      // Make a POST request to the API route
      const response = await fetch('../api/generateTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: prompt }),  // Send the prompt to the API
      });

      if (!response.ok) {
        throw new Error('Failed to generate tasks');
      }

      const data = await response.json();  // Get the response from the server
      console.log('Generated tasks:', data.content);  // Log the generated tasks
    } catch (error) {
      console.error('Error generating tasks:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary"
    >
      Go
    </button>
  );
};

export default SubmitButton;
