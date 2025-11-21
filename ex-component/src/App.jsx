import React, { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
 
export const CountContext = React.createContext()
const initialState = 0
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

function App() {
  const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
      Count - {count}
    <Comp1></Comp1>
    <Comp2></Comp2>
    <Comp3></Comp3>
    </div>
  </CountContext.Provider>
  )
}

export default App
