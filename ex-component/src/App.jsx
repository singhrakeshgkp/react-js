import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunClick from './components/ClickEventFunComponent'
import ClickEventClassEx from './components/ClickEventClassComponent'
import BindEventHandlerEx1 from './components/BindEventHandlerEx1'
import BindEventHandlerEx2 from './components/BindEventHandlerEx2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <FunClick></FunClick>
     <ClickEventClassEx></ClickEventClassEx>
     <BindEventHandlerEx1></BindEventHandlerEx1>
     <BindEventHandlerEx2></BindEventHandlerEx2>
    </div>
  )
}

export default App
