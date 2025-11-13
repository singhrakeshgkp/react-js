# Table of contents
- [Introduction](#introduction)
- [Proj Setup](#Proj-setup)
- [Components](#Components)
- [State](#state)
- [Event](#Event)
   - [Binding Event Handler](#binding-event-handler)
- [Conditional Statements](#conditional-statements)
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
- we should never modify state directly,instead we should use setState functiion. Below line of code will not render the incremented counter value in DOM, however expected value will be printed on console
  ```
  this.state.count=this.state.count+1 
  ```
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

# Event
- Dont try to call event handler ``` <button onClick={clickHandler()}>Click</button>``` with paranthesis, it will become normal function call, and automatically called and log message on console without click event. Instead we should use it ``` <button onClick={clickHandler}>Click</button>``` without paranthesis

### Binding Event Handler
- **Branch** --> 3-event
- If we don't bind event handler and call a function to changes state (value of h1 tag using this.setState) we will get undefined error or if we log ```console.log(this)``` we will get same undefined error. To get rid of this error we can bind event handler
- we can bind event handler in following ways
  - Binding in render method for more details refer 03-event branch, ```BindEventHandlerEx1.jsx and BindEventHandlerEx2.jsx``` files
    - singple binding
    - using arrow function
  - Binding in constructor
  - Binding using arrow function outside constructor
 
## Conditional Statements
- we can not write ```if else``` in jsx but we can write following code

   ```
  in your .jsx file (don't get confuse with jsx and .jsx file)
  render(
   if(true){
    return <div>hello</div>
  }else{
  return <div>Welcome</div>
  }
  )
  OR
  let message
  if(true){
  message = <div>hello</div>
  }else{
  message= <div>Welcome</div>
  }
  return <div>{message}</div> 
  ```

- but we can write ternary operator in jsx

  ```
  return flag?<div>Hello</div> : <div>Welcome></div>
  ```
- Short circuit approach--> if condition is true render something, if its false do nothing
  ```
  render(
   return true? && <div>Hello</div>
  )
  ```
# Branches
- **1-components** -->
- **2-states** -->


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
