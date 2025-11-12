import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateEx from './components/StateEx'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StateEx></StateEx>
      <Counter></Counter>
    </div>
  )
}

export default App
