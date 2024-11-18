# Table of contents
- [Introduction](#introduction)
- [Proj Setup](/project-setup.md)
- [Components](/component.md)
- [Branches](#branches)
- References
  - https://react.dev/learn
  - https://www.youtube.com/watch?v=-JolQDZCMX8&t=733s
  - https://www.youtube.com/watch?v=CgkZ7MvWUAA

# Introduction
- React is a java script library, used to create complex UI using small isolated pieces of code called component. It uses a syntax extension of java script known as **jsx** (java script xml). jsx allow to write html code within java script files.
- React uses virtual DOM. A virtual DOM is a lightweight version of real DOM, 

# Branches
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
