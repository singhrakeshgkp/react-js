import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetOperation from './components/GetOperation'
import GetPostById from './components/GetPostById'
import GetPostByIdButtonClick from './components/GetPostByIdButtonClick'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GetPostById></GetPostById>
      <h1>GetOperation on button click</h1>
      <GetPostByIdButtonClick></GetPostByIdButtonClick>
      <h1>GetAll Records</h1>
      <GetOperation></GetOperation>
    </div>
  )
}

export default App
