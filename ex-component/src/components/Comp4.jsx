import React,{useContext, useReducer} from "react";
import { CountContext } from "../App";

function Comp4(){
    const countContext = useContext(CountContext)

    return (
        <div>
            Component 4:-   {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>{/* dispatch action such as increment, decrement or reset */}
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Comp4