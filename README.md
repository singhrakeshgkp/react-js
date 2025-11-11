# Table of contents
- [Introduction](#introduction)
- [Proj Setup](#Proj-setup)
- [Components](#Components)
- [State](#state)
- [Branches](#branches)
- References
  - https://react.dev/learn
  - https://www.youtube.com/watch?v=-JolQDZCMX8&t=733s
  - https://www.youtube.com/watch?v=CgkZ7MvWUAA

# Introduction
- React is a java script library, used to create complex UI using small isolated pieces of code called component. It uses a syntax extension of java script known as **jsx** (java script xml). jsx allow to write html code within java script files.
- React uses virtual DOM. A virtual DOM is a lightweight version of real DOM,
- React focus on only UI, it does not focus on routing, http request ...etc.
- Follow component based architecture.

# Proj Setup
- [Click here](/project-setup.md)
# Components
- **branch**--> 1-components
- [Click here](/component.md)

# State
- **branch** --> 2-state
- A state is an object that stores the values of properties belonging to a component that could change over a period of time
### State VS Props
- State
   - State is managed within components. State are used to store the data of components that has to be rendered to the view
   - Variables declared within function body. Holds data and change over the time
   - mutable/can change state.
   - useState hooks ---> in functional components
   - this.state---> class components(Used only in class component.)
 - props
   - props gets passed to components(Props are used to pass data and event handler to its child component)
   - function parameter
   - immutable
   - in functional components we can use props
   - in class components we can use this.props
   - Props are set by the parent component for child components
   - Used in both functional and class component

# Branches
- **1-components** -->
- **2-states** -->
- 
- **item-card**--> add iphone image, and itemcard.jsx file and apply css on the item.
- **apply-css** --> we can apply external css, modules specific css and inline css. Refer ```Button1, Button2, Button2 .jsx files```
- **passing-props**--> Pass key value pair to react js component.
- **conditional-rendering**--> render html content based on condition true or false. refer ```Item.jsx and App.jsx```
- **dynamic-list** ----> rendering ordered list or unordered list html content, value coming from an array. refer ```List.jsx and App.jsx```.
- **sorting-filtering**----> Sort list of object and apply filter. refer ```List.jsx and App.jsx```
- **sorting-filtering2**----> passing list dynamically from ```app.jsx``` file to ```List.jsx``` component and apply css.
- **click-event-handler** --> how to handle click event in react js. refer ```Button.jsx``` component
- **event-parameter** --> with click event we are automatically provided an click event(e), its object that describe even that occurred. refer ```Button.jsx``` component.
- **React Hook** --> React hook is a special function that allows functional components to use react features without writing class component (introduced in react v16.8). Normally react hook function starts with ```use``` char such as ```useState, useEffect,useContext,useReducer,....etc. For more details refer official documentation.
   - **react-hook-usestate** -> A use state hook that allows the creation of stateful variable and a setter function to update its value in the virtual DOM
- **updater-function** --> An updater function is a function passed as an argument to ```setState()``` . Usefull with multiple state updates and asynchronous functions. refer ```CounterEx.jsx```
   - **updater-function-update-obj** Update the object properties. refer ```EmployeeEx.jsx```
   - **updater-function-update-array** Update array state. refer ```EmployeesEx.jsx```
- **multi-usestate**  Working with multiple use state variables. refer ```EmployeesEx.jsx```
- **todays-tasks** List down the tasks. refer ```index.css and TodaysTasks.jsx``` file.
- **use-effect** for use effect web hook refer ```UseEffectEx.jsx``` and Read from other sources.
- **timer** Create a timer
- **use-context-hook** To pass value from outer to inner component (using props we can also do, but props approach is littile bit tedious)
