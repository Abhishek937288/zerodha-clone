import React from "react";

function Universe() {
  return (
    <div className=" mx-20">
      <div className="text-center py-5">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">The Zerodha Universe</h1>
        <p className="mt-3 text-gray-600">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        <div className="p-4 px-5 text-center">
          <img src="images/smallcaseLogo.png" alt="Smallcase Logo" className=" w-[50%] mx-25" />
          <p className="text-xs text-gray-500 p-3">
            Thematic investment platform
          </p>
        </div>
        <div className="p-4 text-center">
          <img src="images/streakLogo.png" alt="Streak Logo"  className=" w-[50%] mx-25" />
          <p className="text-xs text-gray-500 p-2">Algo & strategy platform</p>
        </div>
        <div className="p-4 text-center">
          <img src="images/sensibullLogo.svg" alt="Sensibull Logo"  className=" w-[50%] mx-25" />
          <p className="text-xs text-gray-500 p-4">Options trading platform</p>
        </div>
        <div className="p-4 text-center mt-3">
          <img
            src="images/zerodhaFundhouse.png"
            alt="Zerodha Fund House Logo"
             className=" w-[50%] mx-25"
          />
          <p className="text-xs text-gray-500 p-2">Asset management</p>
        </div>
        <div className="p-4 text-center mt-3">
          <img src="images/goldenpiLogo.png" alt="GoldenPi Logo"  className=" w-[50%] mx-25" />
          <p className="text-xs text-gray-500 p-2">Bonds trading platform</p>
        </div>
        <div className="p-4 text-center mt-3">
          <img src="images/dittoLogo.png" alt="Ditto Logo"  className=" w-[40%] mx-30" />
          <p className="text-xs text-gray-500 p-3">Insurance</p>
        </div>
      </div>
      <div className="text-center  mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;