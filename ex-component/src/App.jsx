import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import AnotherCounterEx from './components/AnotherCounterEx'
import StateHooksWithObj from './components/StateHooksWithObj'
import StateHooksWithArrayObj from './components/StateHooksWithArrayObj'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter></Counter>
      <h3>counter with inc,dec,and reset</h3>
      <AnotherCounterEx></AnotherCounterEx>
      <StateHooksWithObj></StateHooksWithObj>
      <h1> State hook with Array object </h1>
      <StateHooksWithArrayObj></StateHooksWithArrayObj>
    </div>
  )
}

export default App
