# Understanding React Hooks

## useEffect

### When should you use useEffect instead of handling logic inside event handlers?

The `useEffect` hook allows you to add 'side effects' to functions/React components. These 'side effects' can interact with outside scripts, and do not affect the rendering of the component it is attached to. They're often used when doing something kinda unpredictable, like making an API call.

Like all hooks, they should only be called at the top level of a script - never in loops, conditions, or nested functions. They are a replacement for class based scripting.

### What happens if you don’t provide a dependency array?

If no dependency array is provided, `useEffect`'s contents will only run once. This is useful for mounting/unmounting scripts.

### How can improper use of useEffect cause performance issues?

Not specifying any sort of conditional trigger for `useEffect` will cause it to run every single render loop. The more the function contains, the more redundant code being operated every frame, and the more likely it is to slow down the browser. Failing to specify a cleanup function can similarly result in memory leaks.
