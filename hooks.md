- [Hooks](#hooks)
 - [Introduction](#hooks)
 - [Rules of hooks](#rules-of-hooks)
 - [State Hook](#state-hook)



# Hooks
## branch 10-hooks
## Introduction
- React Hooks are functions introduced in React 16.8 that allow functional components to "hook into" React features that were previously only available in class components. This includes managing state, handling side effects, and accessing context.

### Rules of hooks
- Only call hooks at top level(don't call hooks inside loop, conditions or nested functions)
- Only call hooks from react functions (Call them from react functional components not from any regular javascript function)

### State Hook
#### branch 10-hooks-state
- The useState hook does not automatically merge objects like this.setState in class components. You must manually merge the previous state using the spread syntax
- Examples
   - Counter.jsx ----> implemented counter, unsafe way
   - AnotherCounterEx.jsx  ----> we have used previous state to implement counter in safer way
   - StateHooksWithObj.jsx  ----> Here we have used spread operator to merge objects
   - StateHooksWithArray.jsx 

  
