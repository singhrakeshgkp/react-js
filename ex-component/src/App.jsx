import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './components/ClassComp'
import HooksFunComp from './components/HooksFunComp'
import Container from './components/Container'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Container></Container>
    </div>
  )
}

export default App
