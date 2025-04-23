import React from "react";

function Hero() {
  return (
    <div className="my-30">
      <div className="mx-auto">
        <h1 className=" flex items-center justify-center font-semibold text-4xl">Pricing</h1>
        <h3 className="flex items-center justify-center py-2 text-xl text-gray-700">
          Free equity investments and flat ₹20 traday and F&O trades{" "}
        </h3>
      </div>
      <div className="grid grid-cols-3 items-center justify-center px-15 mx-15 my-5 ">
        <div className="justify-center items-center">
          <img src="images\pricingEquity.svg" />
          <h1 className=" flex items-center justify-center font-semibold text-3xl pb-2">Free equity delivery</h1>
          <p className="text-gray-700 flex items-center justify-center">
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="justify-center items-center">
          <img src="images\intradayTrades.svg" alt="" />
          <h1 className=" flex items-center justify-center font-semibold text-3xl pb-2">Intraday and F&O trades</h1>
          <p className="text-gray-700 flex items-center justify-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="justify-center items-center">
          <img src="images\pricingEquity.svg" />
          <h1 className=" flex items-center justify-center font-semibold text-3xl pb-2"> Free direct MF</h1>
          <p className="text-gray-700 flex items-center justify-center">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
