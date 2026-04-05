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

## useCallback

### What problem does useCallback solve?

`useCallback` is primarily used to pass a function to a component wrapped in `React.memo`. It memoizes (caches) the reference for the function, keeping its behaviour consistent and preventing unnecessary rerenders. It will only rerender the component if something in the code changes.

It's useful for when you have child components of a larger component, and want to share functionality from parent to child.

### How does useCallback work differently from useMemo?

`useMemo` caches the final result of a function, skipping over calculations and simply displaying the latest result. It only updates the 'memo' when its dependencies change.

`useCallback` caches a function itself to ensure consistent behaviour across renders. It's useful when you're treating a function as a prop across child components.

In other words, useMemo is for the result of a function, and useCallback is for the component/function itself.

### When would useCallback not be useful?

`useCallback` has the same base limitations as `useMemo`: it's subject to React Hook rules, it's best saved for performance optimisation, and isn't terribly useful for small functions that are only run once or twice.

If only the end result of the function is important, then `useMemo` should be used instead.

If the page is simple and the function isn't slowing down renders, then there's not much point cluttering up your code with `useCallback`.

React Compiler also automatically "memoizes" (caches) functions, so if a development pipeline utilises it, manual `useCallback` calls are redundant.
