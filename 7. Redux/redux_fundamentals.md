# Redux Fundamentals

Relevant files:

- [UserContainer](https://github.com/Courtenay-J/courtenay-j-intern-repo/blob/redux-test/7.%20Redux/react-redux-demo/src/components/UserContainer.js)
- [RootReducer.js](https://github.com/Courtenay-J/courtenay-j-intern-repo/blob/redux-test/7.%20Redux/react-redux-demo/src/redux/rootReducer.js)
- [/Counter](https://github.com/Courtenay-J/courtenay-j-intern-repo/tree/redux-test/7.%20Redux/react-redux-demo/src/redux/counter)
- [index.js](https://github.com/Courtenay-J/courtenay-j-intern-repo/blob/redux-test/7.%20Redux/react-redux-demo/src/redux/index.js)

## When should you use Redux instead of useState?

While `useState` and Redux both track the state of your web application, which is most useful depends on the scale of tracking necessary.

Redux is designed for large-scale state storage. It stores the state of everything in the *application as a whole*. It places everything into one singular store, enabling global access to state values across the entire project. However, Redux requires considerably more setup (such as specifying actions and reducers), which may be unnecessary and slow down development.

The `useState` hook is best used for tracking the state of a smaller program or a specific component - for example, a counter or a form's values - as it is considerably quicker and easier to set up. The state storage typically does not leave the component. This has its advantages, but if you have lots of components that need to talk to each other, Redux should be used.
