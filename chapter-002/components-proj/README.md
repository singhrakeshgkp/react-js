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
