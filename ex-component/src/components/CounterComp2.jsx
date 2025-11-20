import React,{useReducer} from "react";

const initialState = {
    firstCounter: 0
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment' :
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {firstCounter: state.firstCounter - action.value}
        case 'reset' :
            return initialState
        default :
            return state
        
    }
}
function CounterComp2(){

    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h3>  {count.firstCounter}</h3>
            <button onClick={() => dispatch({type: 'increment',value: 1})}>Increment</button>{/* dispatch action such as increment, decrement or reset */}
            <button onClick={() => dispatch({type: 'decrement',value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment',value: 10})}>Increment by 10</button>
            <button onClick={() => dispatch({type: 'decrement',value: 10})}>Decrement by 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    )
}

export default CounterComp2