- [Hooks](#hooks)
 - [Introduction](#hooks)
 - [Rules of hooks](#rules-of-hooks)
 - [useState Hook](#usestate-hook)
 - [useEffect Hook](#effect-hook)
 - [useContext Hook](#usecontext-hook)
 - [useReducer Hook](#useReducer-hook)



# Hooks
## branch 10-hooks
## Introduction
- React Hooks are functions introduced in React 16.8 that allow functional components to "hook into" React features that were previously only available in class components. This includes managing state, handling side effects, and accessing context.

### Rules of hooks
- Only call hooks at top level(don't call hooks inside loop, conditions or nested functions)
- Only call hooks from react functions (Call them from react functional components not from any regular javascript function)

## useState Hook
#### branch 10-hooks-1
- The useState hook does not automatically merge objects like this.setState in class components. You must manually merge the previous state using the spread syntax
- Examples
   - Counter.jsx ----> implemented counter, unsafe way
   - AnotherCounterEx.jsx  ----> we have used previous state to implement counter in safer way
   - StateHooksWithObj.jsx  ----> Here we have used spread operator to merge objects
   - StateHooksWithArray.jsx 


## useEffect Hook
- Lets you perform side effect in functional components. Its close replacement for ComponentDidMount(), ComponentDidUpdate() and ComponentWillUnmount()
- Run after every render of components
- useState is placed inside components.
- Exercise--> Create a counter and change title every time count gets increased. Solution--> we did it with class and functional component, please refer 
- **Condition useEffectHooks**  -- branch 10-hooks-2-effect-conditional
  - create a class component, add one input type and counter. Go to browser and check if u type in text box ```title updated``` log printed make sure ```if(prevState.count != this.state.count)``` code is not present, you will observe as we type no matter if counter is chaning or not log is printing multiple times. To get rid of this we can add ``` if(prevState.count != this.state.count)``` code in componentUpdate method. Same we will do using useEffect hook refer ```HookCounter1.jsx``` functional component.
- **10-hooks-2-effect-runonlyonce**---->  mimic componentDidMount() functionality.
- **10-hooks-2-effect-unmount**---> mimic componentWillUnmount() functionality---> specially we use to perform cleanup operation, ex. removing eventlistener.
- **10-hooks-2-effect-fetchdata**
   - For data fetching we will use axios, run ```npm install axios``` command from terminal, check package.json axios dependency should be added.
   - Use json place holder api ```https://jsonplaceholder.typicode.com/posts```
   - Create one functional component ```GetOperation.jsx``` write the required logic. and the program if u observe console u will see infinite loop fetching the data, to avoid this we will use ```[]``` empty array as second parameter which tells to execute only once
   - **Fetch all Posts** -----> refer ```GetOperations.jsx```
   - **Fetch data by id, accept id from input box** ---->```GetPostById.jsx```
   - **Fetch data by id, accept id from input box and click on button(useEffect shold be called when any one click on button)**--->```GetPostByIdButtonClick.jsx```
 

## useContext Hook
#### Branch 10-hooks-3-context
- Provides a way to pass data through the component tree without having to pass props down manually at every level.
### Passing value to child property using context.
 #### branch 10-hooks-3-context-1
- Create Nested component ```ComponentA, ComponentB, and ComponentC
- add ```export const UserContext = React.createContext() ``` code in ```app.jsx``` file and include the component where we want to pass value in ```UserContext.Provider value={'some value'}>``` as child element.
- Import the UserContext in Component.jsx file and print the user value 
- If we have multiple context such as ```UserContext, ChannelContext ...etc ``` it becomes very verbose/ugly see ```ComponentX.jsx```. To avoid this nesting we can use ContextHook.

### Passing value to child property using context hook
#### Branch 10-hooks-3-context-2
- refer ```ComponentX.jsx```


## useReducer Hook
#### branch 10-hooks-4-reducer-1
- like useState hook useReducer also used for state management. It's an alternative to useState, useSate is built using useReducer.
#### when to use useSate and when to use useReducer?
1. **Implement simple counter** --> CounterComp1.jsx
2. **Implement Counter with object and add two additional functionality which is increment by 10 and decrement by 10** ---> CounterComp2.jsx
3. **Implement Counter with object and add two additional functionality which is increment by 10 and decrement by 10 and one more counter that has same sate transition(increment, decrement and reset)** ---> CounterComp3.jsx (little bit complex, for simpler version refer point 4. CounterComp4.jsx)
4.  **Multiple Reducer ====> Implement Counter with object and add two additional functionality which is increment by 10 and decrement by 10 and one more counter that has same sate transition(increment, decrement and reset)** ---> CounterComp4.jsx

## use reducer with useContext
### branch 10-hooks-4-reducer-2
- This we do to achieve global state management, lets assume we have six component (Comp1....Comp6) we want to implement counter in all component, instead of writing counter logic in all three component we will write logic in app.jsx and pass them as property to each component.
- component is defined as per below
- app.js has
   - comp1 
   - comp2 has
      - comp4
   - comp3 has
      - comp5 has
         - comp6
