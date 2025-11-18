import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <IntervalClassCounter></IntervalClassCounter> 
   <IntervalHookCounter></IntervalHookCounter>
    </div>
  )
}

export default App
