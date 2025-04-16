import React, { useState, useEffect } from "react";
import axios from "./axiosConfig";
import NoOrdersImage from "../assets/orders.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (orders.length > 0) {
    return (
      <>
        <h3 className="title">Orders ({orders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price cost</th>
                <th>Mode</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td>{stock.mode}</td>
                    <td>{stock.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return (
     <div className="empty-holdings-container">
             <h3 className="title">Holdings (0)</h3>
             <div className="empty-holdings-content">
               <img
                 src={NoOrdersImage}
                 alt="Empty Portfolio"
                 className="empty-holdings-image"
               />
               <p className="empty-holdings-message">
                 Please place orders
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

export default Orders;