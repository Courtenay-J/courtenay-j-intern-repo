# Understanding React Hooks

## useEffect

### When should you use useEffect instead of handling logic inside event handlers?

The `useEffect` hook allows you to add 'side effects' to functions/React components. These 'side effects' can interact with outside scripts, and do not affect the rendering of the component it is attached to. They're often used when doing something kinda unpredictable, like making an API call.

Like all hooks, they should only be called at the top level of a script - never in loops, conditions, or nested functions. They are a replacement for class based scripting.

### What happens if you don’t provide a dependency array?

If no dependency array is provided, `useEffect`'s contents will only run once. This is useful for mounting/unmounting scripts.

### How can improper use of useEffect cause performance issues?

Not specifying any sort of conditional trigger for `useEffect` will cause it to run every single render loop. The more the function contains, the more redundant code being operated every frame, and the more likely it is to slow down the browser. Failing to specify a cleanup function can similarly result in memory leaks.

## useMemo

### How does useMemo improve performance?

`useMemo` improves performance by caching a value after its calculation. This saves JavaScript from needing to re-calculate the value every render cycle, as it would otherwise need to. It's most useful for long, complicated, "expensive" calculations.

### When should you avoid using useMemo?

Like all hooks, `useMemo` should only be used in top level functions of a component, and never in loops or conditions.

`useMemo` is intended for performance optimisation, and is best used for complex calculations with dependencies that rarely change. Using it on smaller calculations is generally unnecessary and can clutter up code. In general, unless you're iterating through thousands of objects, you probably don't need useMemo.

### What happens if you remove useMemo from your implementation?

*Any* button clicked on Test.jsx would take significantly longer to process. This is because the page would have to re-calculate the extremely long number list and calclulations every time *anything* on the page is updated.
