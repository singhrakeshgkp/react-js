/*useEffect()--> React hooks that tells react to do some code when (pick one):
a) This component re-renders
b) Component mounts(when we add elements in DOM)
c)The state of a value
useEffect(function,[dependencies])

a) useEffect(()=>{}) Runs after every re-render
b) useEffect(()=>{},[]) Runs only on mount
c) useEffect(()=>{},[value]) Runs on mount + when value changes

use cases
-------------------
a) event Listeners
b) DOM manipulation
c) Subscriptions (real time updates)
d) Fetching data from an api
e) Clean up when a component unmounts (when we remove element from DOM)
*/

import React, {useState, useEffect} from "react";
function UseEffectEx(){
    const [count,setCount] = useState(0);
    function addCount(){
        setCount(c => c+1);
    }
    useEffect(()=>{document.title = `My Counter Program ${count}`}
,[count]);
    return (
     <>
     <p>Count: {count}</p>
     <button onClick={addCount}>Add</button>
    </>);
}
export default UseEffectEx