/*
  HelloWorld: Prints a greeting. Ahh, coding traditions.

  Uses name prop to print a joke version of Focus Bear: e.g. Fozzie Bear, Fuzzy Bean.
*/

export function HelloWorld(name) {
  return (
  <>
    <h1>Hello, Focus Bear!</h1>
    <h2>Or maybe that's "{name.fname} {name.species}"...?</h2>
  </>
  );
 }

