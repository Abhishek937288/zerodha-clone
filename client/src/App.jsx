import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Products from "./pages/Products";
import Support from "./pages/Support";
import { Dashboard } from "./pages/Dashboard";
import  LandingPageLayout from "./components/Layouts/LandingPageLayout";
import  DashboardLayout from "./components/Layouts/DashboardLayout";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout/>}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route element={<DashboardLayout/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
