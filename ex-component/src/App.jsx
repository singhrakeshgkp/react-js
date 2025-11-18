import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCounterComp1 from './components/ClassCounterComp1'
import HookCounter1 from './components/HookCounter1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <ClassCounterComp1></ClassCounterComp1>
     <HookCounter1></HookCounter1>
    </div>
  )
}

export default App
