# Table Of Contents

- Componenets
  - [Stateless functional component](#stateless-functional-component)
  - [Statefull class component](#statefull-class-component)
  - [Defining Components](#defining-components)
     - [All HTML tag should be included in div tag](#All-HTML-tag-should-be-included-in-div-tag)
     - [Define first functional and class component](#define-first-functional-and-class-component)

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
