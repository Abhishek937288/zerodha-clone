import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/landing_pages/Navbar';
import Footer from './components/landing_pages/Footer';

import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import Signup from './pages/Signup';
import About from './pages/About';
import Products from './pages/Products';
import Support from './pages/Support';
import { Dashboard } from './pages/Dashboard';

const Layout = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === '/dashboard';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
