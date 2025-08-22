import { useState } from 'react'
import { Routes } from "react-router"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1> Hello World !!!</h1>
      </div>
    </>
  )
}

export default App
