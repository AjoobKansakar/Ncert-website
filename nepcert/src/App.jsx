import { useState ,useEffect} from 'react'
// Global Css
import './App.css'
// all Components imports
import axios from 'axios';
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 
  
  // calling api

  useEffect(() => {
    
    (async () => {
     
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('http://nyatapol.biz/test_dash/api/home/');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return (
    // these are called fragments and it loads the components
    <> 
    {/* Header */}
      <Header/>

    {/* Hero section */}
      <Hero Data={data?.banners}  />

    {/* Aboutus section */}
      <Aboutus Data={data?.about} />

    {/* Why choose us section */}
      <Wcu Data={''} />

    {/* Product section */}
      <Product Data={data?.products} />

    {/* Our Services section */}
     <Services Data={data?.services} />

    {/*  Mission Statement section */}
      <Mission Data={''} />

    {/* Client Section */}
     <Clients Data={''} />

    {/* Contact Us Section */}
      <ContactUs Data={''} />

    {/* Footer */}
      <Footer/>

    {/* ScrollUp button */}
      <ScrollUp/>
    </>
  )
}

export default App
