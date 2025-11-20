- [Hooks](#hooks)
 - [Introduction](#hooks)
 - [Rules of hooks](#rules-of-hooks)
 - [State Hook](#state-hook)
 - [Effect Hook](#effect-hook)
 - [Context Hook](#context-hook)



# Hooks
## branch 10-hooks
## Introduction
- React Hooks are functions introduced in React 16.8 that allow functional components to "hook into" React features that were previously only available in class components. This includes managing state, handling side effects, and accessing context.

### Rules of hooks
- Only call hooks at top level(don't call hooks inside loop, conditions or nested functions)
- Only call hooks from react functions (Call them from react functional components not from any regular javascript function)

### State Hook
#### branch 10-hooks-1
- The useState hook does not automatically merge objects like this.setState in class components. You must manually merge the previous state using the spread syntax
- Examples
   - Counter.jsx ----> implemented counter, unsafe way
   - AnotherCounterEx.jsx  ----> we have used previous state to implement counter in safer way
   - StateHooksWithObj.jsx  ----> Here we have used spread operator to merge objects
   - StateHooksWithArray.jsx 


### Effect Hook
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
 

### Context Hook
#### Branch 10-hooks-3-context
- Provides a way to pass data through the component tree without having to pass props down manually at every level.
### Passing value to child property using context.
- **branch** 10-hooks-3-context
- Create Nested component ```ComponentA, ComponentB, and ComponentC
- add ```export const UserContext = React.createContext() ``` code in ```app.jsx``` file and include the component where we want to pass value in ```UserContext.Provider value={'some value'}>``` as child element.
- Import the UserContext in Component.jsx file and print the user value 
- This approach becomes complicated if we have multiple context such as userContext, channelContext.....etc refer ```ComponentX.jsx```
