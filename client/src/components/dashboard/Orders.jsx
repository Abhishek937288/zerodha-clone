import React, { useState, useEffect } from "react";
import axios from "./../../utils/axiosConfig.js"


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const loadOrders = async () => {
      const res = await fetch(import.meta.env.VITE_BACKEND_URI +"/api/v1/orders",{credentials: 'include',});
      const data = await res.json();
      setOrders(data.data);
    }
    loadOrders()
  }, []);

  if (orders.length > 0) {
    return (
      <>
        <h3 className="text-lg py-3 font-bold">Orders ({orders.length})</h3>
        <div>
          <table  className="border w-full border-gray-400/70">
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
                  <tr key={index} className="w-full border-t border-gray-400/70 text-center py-5 ">
                    <td className="py-2">{stock.name}</td>
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
     <div className="w-full text-center py-5">
             <h3 className="text-xl  pt-10 text-gray-600">Holdings (0)</h3>
             <div className="w-full">
             <img
  src={"/images/orders.svg"}
  alt="Empty Portfolio"
  className="w-[50%] mx-auto py-10"
/>
               <p className="py-3 text-xl text-gray-600">
                 Please place orders
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

export default Orders;