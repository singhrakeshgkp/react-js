import React,{useReducer} from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 50
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment' :
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment_secondcounter' :
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'decrement_secondcounter' :
            return {...state, secondCounter: state.secondCounter - action.value}

        case 'reset' :
            return initialState
        default :
            return state
        
    }
}
function CounterComp3(){

    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h3> First Counter: - {count.firstCounter}</h3>
            <h3> First Counter: - {count.secondCounter}</h3>
            <button onClick={() => dispatch({type: 'increment',value: 1})}>Increment</button>{/* dispatch action such as increment, decrement or reset */}
            <button onClick={() => dispatch({type: 'decrement',value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment',value: 10})}>Increment by 10</button>
            <button onClick={() => dispatch({type: 'decrement',value: 10})}>Decrement by 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

            <div>
                <h4>second counter</h4>
                <button onClick={() => dispatch({type: 'increment_secondcounter',value: 2})}>Increment by 2</button>
                <button onClick={() => dispatch({type: 'decrement_secondcounter',value: 2})}>Increment by 2</button>
            </div>
        </div>
    )
}

export default CounterComp3