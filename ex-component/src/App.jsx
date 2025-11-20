import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComp1 from './components/CounterComp1'
import CounterComp2 from './components/CounterComp2'
import CounterComp3 from './components/CounterComp3'
import CounterComp4 from './components/CounterComp4'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <h2>Counter 1</h2>
      <CounterComp1></CounterComp1>
      <h2>Counter 2</h2>
      <CounterComp2></CounterComp2> */}
      <CounterComp4></CounterComp4>

    </div>
  )
}

export default App
