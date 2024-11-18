import React, {useState} from "react";
function CounterEx(){
    // we pass variable and its setter function name to useState hook, here default value is "Guest", if we don't pass any thing then default value will be blank string
    const [count, setCount] = useState(0);
    const updateCount = ()=>{
        /* Expectation from below two lines is to increment count by two, however
        in react it will not happens as react batches together state update for performance
        reasons. Next state becomes the current state after an update. To get rid of it 
        we will use updater function.
        setCount(count+1);
        setCount(count+1);
        */
        setCount(prevState => prevState+1);
        setCount(prevState => prevState+1);
    }
    return (
        <div><p>Count : {count}</p>
        <button onClick={updateCount}>Increment count</button>
        </div>
    );
}

export default CounterEx