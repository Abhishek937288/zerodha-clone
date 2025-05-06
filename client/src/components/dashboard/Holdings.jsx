import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {
  const [allholdings, setAllHoldings] = useState([]);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URI +"/api/v1/holdings", {
        withCredentials: true,
      })
      .then((res) => {
        setAllHoldings(res.data.data);
        if (res.data && res.data.length > 0) {
          const labels = res.data.map((stock) => stock.name);
          const prices = res.data.map((stock) => stock.price);
          const dataForGraph = {
            labels: labels,
            datasets: [
              {
                label: "Stock Price",
                data: prices,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          };
          setGraphData(dataForGraph);
        } else {
          setGraphData(null); 
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);
  
  

  const totalInvestment = allholdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allholdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercentage =
    totalInvestment !== 0 ? (profitLoss / totalInvestment) * 100 : 0;
  const isProfit = profitLoss >= 0;

  if (allholdings.length > 0) {
    return (
      <>
        <h3 className="text-xl py-3 font-bold">Holdings ({allholdings.length})</h3>
        <div className="order-table">
          <table className="text-center border w-full border-gray-700/50 mb-4">
            <thead>
              <tr className="border-t text-center border-b py-4 font-normal border-gray-400/70" >
                <th className="py-3">Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {allholdings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const stockProfitLoss = curValue - stock.avg * stock.qty;
                const profitClass = stockProfitLoss >= 0 ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                return (
                  <tr key={index}  className="w-full border-t border-gray-400/70 text-center">
                    <td className="py-4">{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profitClass}>{stockProfitLoss.toFixed(2)}</td>
                    <td className={profitClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}

      
            </tbody>
          </table>
        </div>

        <div className="flex justify-end py-4 w-full">
        <div className="max-w-sm min-w-sm my-4 ">
          <div className="flex items-center justify-between gap-3 border-b border-gray-400/40">
            <h5>
              {totalInvestment.toFixed(2)}
            </h5>
            <p>Total investment</p>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-gray-400/40">
            <h5>
              {currentValue.toFixed(2)}
            </h5>
            <p>Current value</p>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-gray-400/40">
            <h5 className={isProfit ? "profit" : "loss"}>
              {profitLoss.toFixed(2)} ({profitLossPercentage.toFixed(2)}%)
            </h5>
            <p>P&L</p>
          </div>
        </div>
        </div>
        {graphData && <VerticalGraph data={graphData} />}
      </>
    );
  } else {
    return (
      <div className="w-full text-center py-5">
        <h3 className="text-xl  pt-10 text-gray-600">Holdings (0)</h3>
        <div className="w-full">
        <img
  src={"/images/EmptyPortfolioImage.svg"}
  alt="Empty Portfolio"
  className="w-[50%] mx-auto py-10"
/>
          <p className="py-3 text-xl text-gray-600">
            Your portfolio is currently empty.
          </p>
          <p className="text-xl text-gray-600">
            Ready to start building your investments? Explore our wide range of
            stocks and funds.
          </p>
        </div>
      </div>
    );
  }
};

export default Holdings;