import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const equitys = [
    { name: "Available margin", value: "$4,043.10" },
    { name: "Used margin", value: "$3,757.30" },
    { name: "Available cash", value: "$4,043.10" },
    { name: "Opening Balance", value: "$4,043.10" },
    { name: "Opening Balance", value: "$3,736.40" },
    { name: "Payin", value: "$4,064.00" },
    { name: "SPAN", value: "$0.00" },
    { name: "Delivery margin", value: "$0.00" },
    { name: "Exposure", value: "$0.00" },
    { name: "Options premium", value: "$0.00" },
    { name: "Collateral (Liquid funds)", value: "$0.00" },
    { name: "Collateral (Equity)", value: "$0.00" },
    { name: "Total Collateral", value: "$0.00" },]
  return (
    <div className="py-5">
      <div className="flex items-center justify-end gap-4 py-5">
       <p className="text-sm text-gray-700">Instant, zero-cost fund transfers with UPI </p>
        <button className="py-1.5 px-4 rounded-md bg-blue-600 text-white shadow-lg border border-gray-400/60 cursor-pointer hover:opacity-80 transtion-opacity duration-300">Add funds</button>
        <button className="py-1.5 px-4 rounded-md bg-blue-600 text-white shadow-lg border border-gray-400/60 cursor-pointer hover:opacity-80 transtion-opacity duration-300">Withdraw</button>
      </div>

      <div className="grid grid-cols-2 w-full gap-8">
        <div className="px-8">
          <span>
            <p className="text-md text-gray-700 py-3">Equity</p>
          </span>
          <div className="table border w-full  border-gray-300 p-4">
           
            {
              equitys.map(({name,value},index) =>  <div className="flex items-center justify-between border-b border-gray-300 py-2 text-gray-700" key={index} >
                <p>{name}</p>
                <p>{value}</p>
              </div>)
            }
    
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center flex-col gap-6 h-full">
            <p>You don't have a commodity account?</p>
            <button className="py-1.5 px-4 rounded-md bg-blue-600 text-white shadow-lg border border-gray-400/60 cursor-pointer hover:opacity-80 transtion-opacity duration-300">Open Account</button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Funds;