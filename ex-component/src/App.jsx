import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentX from './components/ComponentX'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>

      <UserContext.Provider value={'rakesh singh'}>
        <ChannelContext.Provider value={'web'}>
          <ComponentX></ComponentX>
        </ChannelContext.Provider>
      </UserContext.Provider>




    </div>
  )
}

export default App
