import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentCompEx1 from './components/ParentCompEx1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ParentCompEx1></ParentCompEx1>
    </div>
  )
}

export default App
