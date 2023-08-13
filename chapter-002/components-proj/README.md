# Table Of Contents

- Componenets
  - [Stateless functional component](#stateless-functional-component)
  - [Statefull class component](#statefull-class-component)
  - [Defining Components](#defining-components)
     - [All HTML tag should be included in div tag](#All-HTML-tag-should-be-included-in-div-tag)
     - [Define first functional and class component](#define-first-functional-and-class-component)
 - [Export and Import](#export-and-import)
    - [Default Export and Import](#default-export-and-import)
    - [Named Export and Import](#named-export-and-import)
 - [Higher order component](#higher-order-component)
 - [Pure Component](#pure-component)
 - [Component life cycle](#component-life-cycle)
-  [Props](#Props)
-  
## Stateless functional component
- are java script functions, return html can contains .js or jsx file
## Statefull class component
- are regular classess that extends component class, they must contains a render method that returns html. Can contains in .js and jsx file

## Defining Components

### All HTML tag shoudl be included in div tag
- Lets first replace the return section of app.js with following code and run the program, it will return the message,
 ```
 return  <h1>welcome to the world of react js</h1>;
```
- if we add multiple ```<h1>``` it will return error as its conventional rule that all html tag should be inside div tag
```
    return  <h1>welcome to the world of react js</h1> <h1> this is going to be fun</h1>;
```
- Now enclose the code in div tag, and observe the response it should work
### Define first functional and class component
- Create a new folder ```compoenent``` under source directory
- Create new file ```FunComponent.js``` and add following code in that
  ```
      import React from "react";
    function FunComponent(){
        return <label>my first fun component</label>
    }
  ```
- Create a class component named ```ClsComponent.js``` and add following lines in that.
  ```
    import React, { Component } from "react";
    class ClsComponent extends React.Component{
    
        render(){
            return<p>this is my first class component</p>
        }
    }

  ```
## Export and Import
### Default Export and Import
- Adefault exported object can be renamed while importing. However, while defining the component in the render method same name must be used what we have given while importing.
- Following code snippet is example of default import and export
```
  export default FunComponent -> example of default functional component export. 
  export default ClsComponent-> example of default class component export

  Below Code is part of app.js
  import FComp from './components/FunComponent'; -> here we have renamed the functional default import component same can be done with class one as well. same <FComp> tag should be used while rendering it.
  import ClsComponent from './components/ClsComponent';
```

### Named Export and Import
- A named export or just export can be used to export multiple objects from a file but while importing it can not be renamed.
- Create new class Component named ```ClsComponentTwo2``` in ```ClsComponent``` file.
- Remove the export default from ```ClsComponent.js``` file and prefix export keyword before class as shown below.
  ```
    import React, { Component } from "react";
    export class ClsComponent extends React.Component{
    
      render(){
          return<p>this is my first class component</p>
      }
    }
    
    export class ClsComponentTwo extends React.Component{
    
      render(){
          return<p>this is my Second class component</p>
      }
    }
  ```
- Now go to your app.js and import the named export Components.
   ```
     import {ClsComponent,ClsComponentTwo} from './components/ClsComponent';  ----> part of import clause
     <ClsComponent></ClsComponent> ----> part of div
     <ClsComponentTwo></ClsComponentTwo>----->part of dive
   ```
### Higher order component
- It is a function that takes a component and return new component. It facilitates reusing the component logic.
  ```
  const newComp = higherOrderComponent(orginalComp)
  ```
  #### How it works
  - Create new component named ```ClickCompoenet.js```
  - type rce (it will create new class component, its kind of shortcut, for this to work make sure u have installed ES7 React Snippet)
  - define a button and attribute named count, each time user will click the cout gets inclreases
  - Now import the ClickComponent in app.js and observe the output, every time button gets clicked, count should be increases.
  - Create new file ```MouseOverComponent.js``` and here write the code to increate the counter if we over the mouse on button.
  - Now to understand how Higher order component works we have to pass ```ClickComponent.js``` and ```MouseHoverComponent.js```  as parameters to give birth of new component.
  - So now Lets create new component called ```HigherOrderComponent.js```
  - Import ```HigherOrderComponent.js``` in ClickCOmponent.js and ```MouseHoverComponent.js``` and pass these component as parameter.

### Pure Component
- React.Component is the base class for react components. React.PureCompoent is the variation of React.Component class and does a shallow comparison of props and state.
- A react component can be considered as pure component, if it renders the same output for the same state and props
- It optimize the code and also improves the performance.
- How it works
  - Create three js file ```PureComp.js, RegularComp.js and ParentComp.js```
  - To change the state of the component lets make use of constructor in ParentComp class.
  - Import the PureComp and RegComp into parent Component.
  - Include properties name in both regular and pure component class
  - Import parent component in app.js file.
  - To Check if pure component is re-rendring the result or not lets simple add logs.

  ## Component life cycle
  ```
  1. Mounting
  componentWillMount-------> Render -----> componentDidMount
  2. Updation

    componentWillReceiveProps()---- >                               
                                         ->ShouldComponentUpdate()-->ComponentWillUpdate()-->render()
     setState()  ------------------->
                 
  3. Unmounting-> Perform cleanup operation
  componentWillUnmount()
  ```

  ## Props
  - Shorts for properties allow users to pass arguments or data to component
  - It help make component more dynamic.
  - Props are passed to component in the way similar to that of html tag attributes.
  - In component its read only and can not be changed.
### First Props example
- Create new folder inside source folder, i'll call it ```props```
- Create New js file, lets say ```ClassProp.js```
- finally import the ```ClassProp``` in app.js file, on browser it should display the message what we have defined in props file.
### Passing Prop to child component
- Put below line of code in child component```ClassProp.js``` and ```app.js``` respectively.
 ```  <div>Hello {this.props.name}  welcome to prop section of this tutorial</div>`` and in app.js  ```<div><ClassProp name="rakesh"></ClassProp></div>```
### Passing multiple props to child component
- Add below line of code in child component ```ClassProp.js``` and ```app.js```
  ```<div>Hello {this.props.name} from {this.props.city} welcome to prop section of this tutorial</div>``` and in app.js ```<div><ClassProp name="rakesh" city="Gorakhpur India"></ClassProp></div>```
