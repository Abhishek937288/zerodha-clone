import React from "react";

function Pricing() {
  return (
    <div className="max-w-[1400px] px-20 py-16 mx-auto">
      <div className="flex justify-between items-start gap-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl mb-5 text-gray-800 font-semibold">
            Unbeatable pricing
          </h1>
          <p className="mb-3 text-gray-700 mt-2">
            We pioneered the concept of transparency in 
            <br />India. Flat fees and no
            hidden charges.
          </p>
          <a
            href=""
            className="no-underline mt-5 text-blue-500 hover:underline"
          >
            See pricing{" "}
            <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>

        <div className="w-full md:w-auto">
          <div className="flex text-center border-1 border-gray-300 ">
            <div className=" p-8 px-14 border-r border-gray-300 ">
              <h1 className="mb-2 text-4xl text-gray-800 font-semibold">₹0</h1>
              <p className="text-sm text-gray-700 w-40">
                Free equity delivery  and direct mutual funds
              </p>
            </div>
            <div className=" p-8  px-14">
              <h1 className="mb-3 text-4xl text-gray-800 font-semibold">₹20</h1>
              <p className="text-sm text-gray-700 w-40">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
