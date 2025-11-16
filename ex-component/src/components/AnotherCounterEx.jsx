/* Implement count with increment, decrement and reset functionality */

import React,{useState} from "react";

function AnotherCounterEx(){
    const initialValue = 0;
    const [count,setCount] = useState(initialValue)

    const incrementBy10 = () => {
        for(let i = 0; i <10; i++){
          /*   setCount(count+1)  this is unsafe way*/
          setCount(preCount => preCount+1)

        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount( initialValue )}>Reset</button>
            <button onClick={()=>setCount( count + 1 )}>increment</button>
            <button onClick={()=>setCount( count -1 )}>decrement</button>
            <button onClick={incrementBy10}>Incrementby 10</button>
        </div>
    )
}

export default AnotherCounterEx