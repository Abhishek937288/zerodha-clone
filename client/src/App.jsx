import React from 'react'
import Navbar from './components/landing_pages/Navbar';
import Footer from './components/landing_pages/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import Signup from './pages/Signup';
import About from './pages/About';
import Products from './pages/Products';
import Support from './pages/Support';


 const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/Support' element={<Support/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App ;
