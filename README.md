# CHOP CHOP

## Overview

**CHOP CHOP** is a hands-free, AI-powered cooking assistant designed to help home cooks, students, and those with ADHD manage multiple tasks in the kitchen more efficiently. By utilizing voice commands and gesture controls, CHOP CHOP ensures a smooth cooking experience, eliminating the risk of overcooking or undercooking meals.

The project integrates multiple hardware and software components, including Leap Motion for gesture control, Google Home for voice assistance, and a web-based interface for managing cooking tasks.

## Problem Statement

Many people, especially college students and individuals with ADHD, struggle with multitasking and maintaining focus while cooking. This can lead to improperly cooked food and a less enjoyable cooking experience. CHOP CHOP solves this issue by providing an engaging, hands-free challenge that helps users stay organized and focused in the kitchen.

## Features

- **Voice Commands**: Using Google Home and the Google Assistant SDK, CHOP CHOP allows you to control tasks and timers via voice commands.
- **Gesture Control**: Leap Motion Hand Tracking Sensor lets you move through the task list, pause timers, or add extra time with hand gestures.
- **AI Task Generation**: Using Google Gemini, CHOP CHOP can generate detailed cooking instructions based on user input and optimize task coordination for an efficient cooking experience.
- **Dynamic Timer System**: Each cooking task includes a "Start" button that triggers a countdown timer. Users can fast-forward, pause, or adjust the timer dynamically.

## Components

### Hardware:
- **Leap Motion Hand Tracking Sensor**: Enables hands-free control via gestures.
- **Google Home Mini**: Allows for voice-activated control using the Google Assistant SDK.
- **Raspberry Pi**: Connects the Leap Motion sensor to the web application and controls external signals (e.g., LEDs or sounds).

### Software:
- **Google Assistant SDK**: Provides voice interaction for controlling tasks.
- **Google Gemini**: AI model used to generate structured task lists based on user input.
- **Next.js**: Web framework for building the front-end interface and managing routing.
- **UI Library**: Utilizes NextUI or similar libraries for simplified, responsive styling.

## Prompt Engineering for Task Generation

CHOP CHOP uses prompt engineering to generate detailed, step-by-step cooking instructions. 

### Example Input:
"I want to cook a medium-rare sirloin steak and stir-fry unchopped onions with chopped and washed broccoli."

### Example Output:
1. Heat the pan on medium heat for 2 minutes and chop the onions.
2. Season the steak with salt and pepper, and place it on the pan.
3. Flip the steak after 4 minutes, then stir-fry onions in a separate pan for 3 minutes.
4. Add broccoli to the stir-fry after 2 minutes and continue stirring for 3 more minutes.

The instructions are structured to optimize timing and minimize idle time.

## Gesture Controls

- **Swipe Gesture**: Move on to the next task or fast-forward.
- **Tap Gesture**: Add more time to the current task.
- **Clap Gesture**: Pause or stop the timer.

The Leap Motion SDK communicates with the Raspberry Pi to process these gestures and control the app.

## Next Steps

1. **Leap Motion Gesture Control**: Map gestures to actions in the app using the Leap Motion SDK.
2. **AI Task Generation**: Fine-tune prompts to produce efficient and detailed cooking instructions.
3. **Timer & Task Flow**: Build the task list UI, integrate timers, and add functionality to fast-forward or extend time.
4. **Google Home Integration**: Set up voice commands for starting tasks and controlling the cooking process.
5. **Hardware Integration**: Use Raspberry Pi to manage communication between Leap Motion, external signals, and the app.

## How to Run

1. Clone the repository.
   ```bash
   git clone https://github.com/drew-tom1/calhacks2024.git
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Set development + environment variables.
4. Run development server.
  ```bash
  npm run dev
  ```
