

/* implement counter using state hook */

import React,{useState}  from "react";
function Counter(){
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default Counter