import React, { useState, useEffect } from "react";
import axios from "./../../utils/axiosConfig.js"
const Positions = () => {
  const [allpositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URI +"/api/v1/positions",{ 
    }).then((res) => {
       setAllPositions(res.data.data);
    }).catch((err) => console.error("API Error:", err));
  }, []);
  const tableTitles = [
    "Product",
    "Instrument",
    "Qty.",
    "Avg.",
    "LTP",
    "P&L",
    "Chg.",
  ];
  return (
    <>
      <h3 className="text-2xl text-gray-600 py-10 font-normal">Positions ({allpositions.length})</h3>

      <div className="">
        <table className="w-full font-normal" >
          <thead > 
            <tr className="border-t border-b py-4 font-bold border-gray-400/70">
            
              {
                tableTitles.map(title =>  <th className="py-3 font-bold" key={title}>{title}</th> )
              }
            </tr>
          </thead>
          <tbody>
            {allpositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index} className="border-b border-gray-400/50 text-center">
                  <td className="py-3">{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
