import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import EmptyPortfolioImage from "../assets/EmptyPortfolioImage.svg";
const Holdings = () => {
  const [allholdings, setAllHoldings] = useState([]);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/holdings", {
        withCredentials: true,
      })
      .then((res) => {
        setAllHoldings(res.data);
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
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (allholdings.length > 0) {
    return (
      <>
      <h3 className="title">Holdings ({allholdings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
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
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      {graphData && <VerticalGraph data={graphData} />}
    </>
    );
  } else {
    return (
      <div className="empty-holdings-container">
        <h3 className="title">Holdings (0)</h3>
        <div className="empty-holdings-content">
          <img
            src={EmptyPortfolioImage}
            alt="Empty Portfolio"
            className="empty-holdings-image"
          />
          <p className="empty-holdings-message">
            Your portfolio is currently empty.
          </p>
          <p className="empty-holdings-suggestion">
            Ready to start building your investments? Explore our wide range of
            stocks and funds.
          </p>
        </div>
      </div>
    );
  }
};

export default Holdings;