import React from "react";

function Team() {
  return (
    <div className=" mx-auto">
      <div className="py-5 mt-2 border-t  border-gray-200">
        <h1 className="text-center mb-2 text-2xl font-semibold text-gray-800">People</h1>
      </div>

      <div className="py-2 text-gray-600" style={{ lineHeight: "1.4", fontSize: "1.2em" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
          <div className="text-center items-center">
            <img
              src="images/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="rounded-full w-[50%] mx-auto "
            />
            <h4 className="mt-2 mb-1 text-lg font-semibold text-gray-800">Nithin Kamath</h4>
            <h6 className="text-sm font-medium text-gray-500">Founder, CEO</h6>
          </div>
          <div className="py-2 text-gray-600">
            <p className="py-2">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="py-2">
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="py-2">
              Playing basketball is his zen.
            </p>
            <p className="py-2">
              Connect on <a href="" className="no-underline text-blue-500 hover:underline">Homepage</a> / <a href="" className="no-underline text-blue-500 hover:underline">TradingQnA</a> / <a href="" className="no-underline text-blue-500 hover:underline">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;