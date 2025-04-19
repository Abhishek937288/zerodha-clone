import React from "react";

function Hero() {
  return (
    <div className="p-4 mb-4 mt-6">
      <div className="text-center">
        <img
          src="images/homeHero.png"
          alt="Hero Image"
          className="mb-15 w-[50%] mx-auto"
        />
        <h1 className="mt-3 p-4 text-5xl font-semibold text-gray-700">
          Invest in everything
        </h1>
        <p className="mt-2 text-2xl text-gray-700">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button
          className="inline-block mt-4 py-2 px-8 bg-blue-600 hover:bg-black cursor-pointer transition-colors duration-500 text-white text-lg font-semibold rounded-sm mx-auto"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;