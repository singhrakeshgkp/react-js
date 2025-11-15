import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureComp from './components/PureComp'
import RegularComponent from './components/RegularComponent'
import ParentComp from './components/ParentComp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <ParentComp></ParentComp>
    </div>
  )
}

export default App
