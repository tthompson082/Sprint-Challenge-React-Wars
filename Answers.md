# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a component library built by the team at Facebook. It tries to solve the problem of DOM manipulation. Manipulating the DOM can be taxing on the performance of pages as they load, and this problem becomes worse with constantly changing data. React JS solves this by using the virtual DOM. This allows for much better performance versus traditional DOM manipulation.

1.  What does it mean to _think_ in react?

Thinking in React is thinking in components. React is a component library, and as such building an app with React starts by breaking down every part of the app into its components. These components are then built and assembled to build out the app.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components can hold state, that is data. They can store this data that can then be passed to other components as props. They are built like class components and can use the 'this' keyword. Functional components do not have state stored on them. All of the data that they take in are passed to them as props. They do not use the 'this' keyword.

1.  Describe state.

State is essentially data. It is data that is stored by the app. This data can be passed around inside the app by using props. State is technically mutable, but it is treated as though it is immutable and never directly changed.

1.  Describe props.

Props are data that is being passed between components in the app. Props are read only so the data they contain cannot be directly changed by them.
