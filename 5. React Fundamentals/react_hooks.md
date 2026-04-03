# Understanding React Hooks

## useEffect

### When should you use useEffect instead of handling logic inside event handlers?

The `useEffect` hook allows you to add 'side effects' to functions/React components. These 'side effects' can interact with outside scripts, and do not affect the rendering of the component it is attached to. They're often used when doing something kinda unpredictable, like making an API call.

### What happens if you don’t provide a dependency array?

### How can improper use of useEffect cause performance issues?
