# React Fundamentals

## Setting up the environment

### What challenges did you face during setup?

This is my first time using React, so there were some initial difficulties in working out how installation was even supposed to function. Fortunately, I've had plenty of practice with the command line. Unfortunately, some of the tutorials I initially turned to would have been very out of date and full of vulnerabilities. I decided not to use those, and instead used W3Schools's "Your First React App" guide, then used Tailwind's guide to customise the installation.

I've attempted to set up the ESLint tool provided, with stricter formatting rules enabled. I am unclear if it worked: `npx eslint .` runs, but does not print messages to console like it is meant to. I will continue to investigate this.

## Understanding Components & Props

### Why are components important in React?

- Components are the React equivalent of javascript functions: independent bits of code that can be used over and over again.
- "Props" are the function's properties, stored in object format.
- Components return HTML, and can be used to display information in a consistent and/or dynamic fashion. They're the building blocks of UI, saving you from writing the same thing over and over again.

## Handling State & User Input

*Note: the Vite setup provided prewritten counter code. I've written a few more notes here to prove I understand the concepts.*

### What happens if we modify state directly instead of using setState?

The 'state' tells React what the UI should look like at any given moment. If a variable is directly updated but the state is not, React loses track of what to render, leading to visual glitches. In the case of this button exercise, it both prevents the counter from visually updating, and causes React to lose track of what the count (and text) even is.

`setState()` both stores the new information and forces the interface to render it.
