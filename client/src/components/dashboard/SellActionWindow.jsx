import React, { useState } from "react";
import { toast } from "react-toastify";
import {useBuySellStore} from "../../hooks/useBuySell"

const SellActionWindow = () => {
  const [sellData, setSellData] = useState({stockPrice: 0.0 , stockQuantity: 0});
  const {closeSell,sellUid} = useBuySellStore();
  const [isloading,setIsLoading]=useState(false);

  const handleCancelClick = () => {
    closeSell();
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setSellData((prev)=> {
      return {...prev,[name]:value}
    })
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
      
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URI +"/api/v1/orders/sell",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
              name: sellUid,
              qty: sellData.stockQuantity,
              price: sellData.stockPrice,
              mode: "sell",
            }),
          }
      
        );
        const result = await res.json();
        toast.success("Sell placed successfully");
        closeSell();
      }catch (err) {
        toast.error("Order failed");
        console.log(err);
      } finally{setIsLoading(false)}
    }
  return (
    <form onSubmit={handleSubmit} className="container absolute" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              name="stockQuantity"
              id="qty"
              onChange={handleChange}
              value={sellData.stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="stockPrice"
              id="price"
              step="0.05"
              onChange={handleChange}
              value={sellData.stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
  
          <button type="submit" className="btn btn-blue" disabled={isloading}>
            {isloading ? "Loading..": "Sell"}
          </button>
          <button type="button"  onClick={handleCancelClick} className="btn btn-grey">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};


export default SellActionWindow;
