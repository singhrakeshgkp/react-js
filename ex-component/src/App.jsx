import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './components/StudentForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <StudentForm></StudentForm>
   
    </div>
  )
}

export default App
