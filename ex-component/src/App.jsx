import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './components/ClassComp'
import HooksFunComp from './components/HooksFunComp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <ClassComp></ClassComp>
     {/* <HooksFunComp></HooksFunComp> */}
    </div>
  )
}

export default App
