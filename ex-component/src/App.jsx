import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/GreetFunctionalComponent'
import GreetClassComp from './components/GreetClassComponent'
import GreetParameterized from './components/GreetFunctionalParameterizedComponent'
import GreetFunParentChild from './components/GreetFunctionalParentChildPropComponent'
import GreetClassWithPropComponent from './components/GreetClassWithPropComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Greet></Greet>
   <GreetClassComp></GreetClassComp>
   <GreetParameterized name="react" duration = "3 months"></GreetParameterized>
   
   <GreetFunParentChild>
    <p>Child element</p>
   </GreetFunParentChild>

   <GreetFunParentChild>
    <button>Test</button>
   </GreetFunParentChild>

  <GreetClassWithPropComponent name="rakesh singh"></GreetClassWithPropComponent> 
    </div>
  )
}

export default App
