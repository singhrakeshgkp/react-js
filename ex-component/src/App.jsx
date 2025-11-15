import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleA from './components/LifeCycleA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <LifeCycleA></LifeCycleA>
   
    </div>
  )
}

export default App
