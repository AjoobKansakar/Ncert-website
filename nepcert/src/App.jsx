import { useState } from 'react'
import { Routes } from "react-router"
// Global Css
import './App.css'
// all Components imports
import Header from './component/Header';
import Hero from './component/Hero/Hero';
import Aboutus from './component/AboutUs/aboutus';
import Wcu from './component/WCU/wcu';
import Product from './component/Product/product';
import Services from './component/OurServices/services';
import Mission from './component/MissionStatement/Mission';
import Clients from './component/Clients/clients';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/Footer';
import ScrollUp from './component/ScrollUpButton/scrollup';


function App() {
  const [count, setCount] = useState(0)

  return (
    // these are called fragments and it loads the components
    <> 

    {/* Header */}
      <Header/>

    {/* Hero section */}
      <Hero/>

    {/* Aboutus section */}
      <Aboutus/>

    {/* Why choose us section */}
      <Wcu/>

    {/* Product section */}
      <Product/>

    {/* Our Services section */}
     <Services/>

    {/*  Mission Statement section */}
      <Mission/>

    {/* Client Section */}
     <Clients/>

    {/* Contact Us Section */}
      <ContactUs/>

    {/* Footer */}
      <Footer/>

    {/* ScrollUp button */}
      <ScrollUp/>
    </>
  )
}

export default App
