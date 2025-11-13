import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssStyleSheetsEx from './components/CssStyleSheetsEx'
import ConditionalCssStyleSheetsEx from './components/ConditionalCssStyleSheetsEx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <CssStyleSheetsEx></CssStyleSheetsEx>
     <ConditionalCssStyleSheetsEx isPrimary={true}></ConditionalCssStyleSheetsEx>
    </div>
  )
}

export default App
