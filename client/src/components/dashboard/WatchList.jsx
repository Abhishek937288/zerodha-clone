import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { DoughnutChart } from "./DoughnutChart";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import {
  BarChartOutlined,
  Dataset,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import {useBuySellStore} from "../../hooks/useBuySell"

import { watchlist } from "../../data/data"; 

const labels = watchlist.map((subArray) => subArray["name"]); 

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-[400px] overflow-y-auto  border-r border-slate-400/60 sticky top-0 left-0 h-screen z-[20] pt-[11vh] bg-white">
      <div className="flex items-center justify-center relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full px-[15px] py-[13px] text-[0.9rem] font-[400] text-[rgb(241,241,241) border-b border-slate-400/60 "
        />
        <span className="absolute right-[1px] text-sm text-slate-400"> {watchlist.length} / 50</span>
      </div>

      <ul className="">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

     <div className="p-3">
     <DoughnutChart data={data} />
     </div>

    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  
  const {isBuyOpen,isSellOpen} = useBuySellStore()
  const statusClass = stock.isDown ? "text-red-700 z-[12]" : "text-green-700 z-[12]"
  return (
    <li  className="border-b  border-slate-400/10 group relative">
      <div className="flex items-center justify-between p-3 py-4 ">
        <p className={statusClass}>{stock.name}</p>
        <div className="text-sm">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className={statusClass} />
          ) : (
            <KeyboardArrowUp className={statusClass} />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
       <div className="hidden group-hover:flex">
        <WatchListActions uid={stock.name} />
       </div>
       <div className="absolute">
       {isBuyOpen && <BuyActionWindow    />}
       {isSellOpen && <SellActionWindow    />}
       </div>
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const {openBuy, openSell} = useBuySellStore()

  const handleBuyClick = () => {
    openBuy(uid)
  };
  
  const handleSellClick = () => {
   openSell(uid)
  };

  return (
    <div className="flex justify-end items-center w-full absolute right-[1px] top-0 py-4 bg-slate-100 z-[10] gap-2">
       <div className="relative">
       <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="bg-[#4184f3]  text-white px-3 py-1 text-sm rounded-sm ">Buy</button>
        </Tooltip>
       
       </div>
        <Tooltip
          title="Sell (S)"
  placement="top"
  arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="bg-[#ff5722]  text-white px-3 py-1 text-sm rounded-sm ">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="text-black bg-white px-3 py-[2px] text-sm rounded-sm border border-slate-400">
            <BarChartOutlined className="size-4" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="text-black bg-white px-3 py-[2px] text-sm rounded-sm border border-slate-400">
            <MoreHoriz className="size-4" />
          </button>
        </Tooltip>
    </div>
  );
};