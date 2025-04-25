import React  from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../landing_pages/Navbar";
import Footer from "../landing_pages/Footer";


 const LandingPageLayout = () => {
  return (
    <>
      <Navbar />
       <Outlet />
      <Footer />
    </>
    )}

    export default LandingPageLayout ;