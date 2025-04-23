import React from "react";
import ProductsHero from "../components/landing_pages/ProductsHero";
 import LeftSection from "../components/landing_pages/LeftSection";
import RightSection from "../components/landing_pages/RightSection";
import Universe from "../components/landing_pages/Universe";

function Products() {
  return (
    <>
      <ProductsHero />
        <LeftSection
        imageURL="images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection imageURL="images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""/>
      <LeftSection
        imageURL="images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      
      <RightSection imageURL="images\kite.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""/>

      <LeftSection
        imageURL="images\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="  flex items-center justify-center text-lg text-gray-800 mb-6">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />  
       
    </>
  );
}

export default Products;
