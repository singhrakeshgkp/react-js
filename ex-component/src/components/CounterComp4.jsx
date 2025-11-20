import React,{useReducer} from "react";

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'increment' :
            return state+1
        case 'decrement' :
            return state-1
        case 'reset' :
            return initialState
        default :
            return state
        
    }
}
function CounterComp4(){

    const [count1,dispatch1] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)
    return (
        <div>
            <h3>{count1}</h3>
            <h3>{count2}</h3>
            <button onClick={() => dispatch1('increment')}>Increment</button>{/* dispatch action such as increment, decrement or reset */}
            <button onClick={() => dispatch1('decrement')}>Decrement</button>
            <button onClick={() => dispatch1('reset')}>Reset</button>
            <br/>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default CounterComp4