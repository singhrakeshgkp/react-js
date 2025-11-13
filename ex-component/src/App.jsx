import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InlineCssEx from './components/InlineCssEx'
import './appStyle.css'
import styles from './appStyle.module.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='error'>error msg</h1>
      <h1 className={styles.success}> Success message </h1>
     <InlineCssEx></InlineCssEx>
    </div>
  )
}

export default App
