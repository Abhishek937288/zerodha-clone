import React from "react";

function OpenAccount() {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto mt-20 mb-20 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-60 text-center">
      <h1 className="text-4xl  font-semibold text-gray-700 mb-2">
        Open a Zerodha account
      </h1>
      <p className="text-m text-gray-700 mb-3">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;