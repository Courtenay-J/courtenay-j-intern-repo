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

*Note: the Vite setup provided prewritten counter code. I added a few extra bits to practice and understand the concepts.*

### What happens if we modify state directly instead of using setState?

The 'state' tells React what the UI should look like at any given moment. If a variable is directly updated but the state is not, React loses track of what to render, leading to visual glitches. In the case of this button exercise, it both prevents the counter from visually updating, and causes React to lose track of what the count (and text) even is.

`setState()` both stores the new information and forces the interface to render it.

## Working with Tailwind CSS

### What are the advantages of using Tailwind CSS?

Tailwind CSS allows finer control over the look of your user interface. Rather than needing to create or edit page-specific css files, Tailwind lets you write style rules for individual elements. For example:

> `<button type="submit" class="font-bold border-2 rounded px-2 hover:opacity-50"> Add</button>`

This would create a form button with a border, rounded edges, that becomes partially transparent when hovered over. Useful, if you only want one button to look like this rather than every single button.

Keeping everything in one file can *sometimes* save time: rather than needing to locate a stylesheet linked to a webpage, you can simply look at the element in the HTML.

### What are some potential pitfalls?

- Not linking files up correctly: Tailwind won't work unless all the configuration files are correct. (I wasted an hour and a half on this today...)
- Incorrect keywords: Tailwind uses abbreviations of common css terms. e.g. `text-color:red` becomes `text-red-100`
- May encourage repetition in code: Since every component can be styled individually, it is both easy and very poor form to copy-paste the rules of one object onto another. Use a css file, or create a component.
- CSS Conflicts: .css files can overwrite Tailwind rules, depending on their priority.
- Very long, very complicated class rules can become unreadable. The more elements you have with long rules, the more difficult it is for a human to make sense of.
- Not using the config file: Apparently it can be used to create your own presets and rules, so you can apply them consistently across elements. Neat! (And not using them would result in a lot of wasted time copy-pasting... I'll have to experiment with that more.)

## Working with Lists & User Input

### What are some common issues when working with lists in React?

Since React is so reliant on states, any array that's *in* a state should be treated as read-only. Attempting to modify parts of an existing array can lead to mutations and general weirdness. For example: setting an individual value via `arr[0] = 1` would result in the change *not* being reflected in the state, and cause mutations in the code. Instead, you'll want to create a new array, (generally) copy the contents of the old one into that, modify it, and then pass the new array into the state.

(Also, mixing up `slice` (copy a part of an array) and `splice` (mutate an existing array by inserting or deleting items) can cause a lot of accidental mutations. Always look for the 'p'!)
