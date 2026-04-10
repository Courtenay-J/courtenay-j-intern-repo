# Redux Fundamentals

## When should you use Redux instead of useState?

Relevant files:

- todo

While useState and Redux both track the state of your web application, which is most useful depends on the scale.

Redux is designed for large-scale state storage - tracking the state of everything in the applciation as a whole. It places everything into one singular store, enabling access to state values across the entire project. However, Redux requires considerably more setup (such as dictating actions and reducers).

`useState` is best used for tracking the state of a smaller program or a specific component - for example, a counter or a form's values - as it is considerably quicker and easier to set up.

## What are the benefits of using selectors instead of directly accessing state?

Relevant files:

- todo
