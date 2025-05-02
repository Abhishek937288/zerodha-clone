import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div
      className="w-full h-[10vh] flex items-center shadow-[0px_0px_4px_2px_rgb(236,235,235)] box-border px-5 fixed top-0 right-0 z-[100] bg-white" >
      <div className="flex gap-6 w-full border-r border-slate-300/60 justify-between px-3 h-full max-w-[380px]">
        <div className="flex items-center">
          <p className="text-sm font-font-lg pr-5 text-slate-600 ">NIFTY 50</p>
          <p className="text-sm text-red-600">{100.2}</p>
          <p className="text-sm"></p>
        </div>
        <div className="flex items-center pr-4">
          <p className="text-sm font-lg pr-5 text-slate-600">SENSEX</p>
          <p className="text-sm text-red-600">{100.2}</p>
          <p className="text-sm"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
