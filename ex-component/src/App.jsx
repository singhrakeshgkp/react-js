import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './components/Students'
import Customers from './components/Customers'
import Names from './components/Names'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Students></Students>
      <h2>Customers Details are</h2>
      <Customers></Customers>
      <Names></Names>
    </div>
  )
}

export default App
