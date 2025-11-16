# Table of contents
- [Introduction](#introduction)
- [Proj Setup](#Proj-setup)
- [Components](#Components)
- [State](#state)
- [Event](#Event)
   - [Binding Event Handler](#binding-event-handler)
- [Conditional Statements](#conditional-statements)
- [List](#List)
- [Styling React Components](#Styling-React-Components)
- [Form Handling](./form-handling.md)
- [Portals]
- References
  - https://react.dev/learn
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
- **Branch ** 4-conditional-list
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

# List
- **Branch** 4-conditional-list

### Iterating students(refer students and student.jsx)
- Iterate list of students
- Iterate list of students by separating Student and Sutdents(Iterating jsx) logic separately  by passing students as props
### Iterating customers and use key (refer customers and customer.jsx file)
- key propertty we can not use to render, its reserved for react to use list of elements efficiently.

### List Key and Index
- lets say we have list of names, name could be duplicate and while redering element react need unique key to get rid of this we could use index. refer ```Names.jsx``` file
- Use index as key if it satisfy following properties else use some other mechanism like hash  ...etc to generate key.
   - Item in your list do not have unique key
   - List is static and will not change.
   - The list will never be re-ordered or filtered.

# Styling React Components
- **branch**--> 5-styling
- Following ways we can apply css
  - css stylesheets
    - create a ```style.css``` and two ```.jsx``` file
  - inline styling
  - css modules
    - There is file naming convention, file name must prefix with ```.module.css``` ex.  ```appStyle.module.css```
    - CSS module can not be applied to child components,ex if we compy <h1> tag with success class in other .jsx file it will not work, however if we do same for <h1> error tag it will work.
    - Create two css file ```appStyle.css and appStyle.module.css```
    - import these two files in ```app.jsx``` if  u observe the way we have imported these file are different.
    - Use ```error``` and ```success``` css class in h1 tag of ```app.jsx``` file and verify output
  - css in js libraries (recomended)


# Portals
### branch 1-basic
- by default we are rendering all components in root div, if we want to render it in different div we can do that using portals.
  - add ```<div id="portals-root"></div>``` tag in index.html file
  - 
