import { useState } from 'react'
import { Routes } from "react-router"
import './App.css'
import Header from './component/Header';
import Hero from './component/Hero/Hero';
import Aboutus from './component/AboutUs/aboutus';
import Wcu from './component/WCU/wcu';


function App() {
  const [count, setCount] = useState(0)

  return (
    // these are called fragments and it loads the components
    <> 
    {/* Header */}
      <Header></Header>

    {/* Hero section */}
      <Hero></Hero>

    {/* Aboutus section */}
      <Aboutus></Aboutus>

    {/* Why choose us section */}
      <Wcu></Wcu>
    </>
  )
}

export default App
