import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div
      className="w-full h-[10vh]   flex items-center shadow-[0px_0px_4px_2px_rgb(236,235,235)] box-border z-[9]
 "
    >
      <div className="flex gap-6 min-w-max px-10">
        <div className="flex items-center ">
          <p className="text-sm font-font-lg pr-3  mr-2">NIFTY 50</p>
          <p className="text-sm mr-5 text-red-600">{100.2}</p>
          <p className="text-sm mr-5"></p>
        </div>
        <div className="flex items-center ">
          <p className="text-sm font-lg  pr-3 ">SENSEX</p>
          <p className="text-sm mr-5 text-red-600">{100.2}</p>
          <p className="text-sm mr-5"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
