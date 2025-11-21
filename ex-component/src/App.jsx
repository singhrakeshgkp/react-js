import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateDataFetchComp from './components/UseStateDataFetchComp'
import UseReducerDataFetchComp from './components/UseReducerDataFetchComp'
function App() {
  return (

    <div>
      <UseStateDataFetchComp></UseStateDataFetchComp>
      <UseReducerDataFetchComp></UseReducerDataFetchComp>
    </div>
  )
}

export default App
