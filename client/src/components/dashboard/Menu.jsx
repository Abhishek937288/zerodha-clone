import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSeletedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSeletedMenu(index);
  };

  const baseMenuClass = "py-2 px-7 text-sm font-medium cursor-pointer hover:text-blue-600";
  const activeMenuClass = "text-red-600 font-semibold";

  return ( 
    <div className="flex items-center w-full   ml-10 ">
      <img src="images/kite-logo.svg" alt="Logo" className="w-10 mr-20 " />

      <ul className="flex ">
        {[
          { name: "DashboardHome", path: "/dashboardhome" },
          { name: "Orders", path: "/orders" },
          { name: "Holdings", path: "/holdings" },
          { name: "Positions", path: "/positions" },
          { name: "Funds", path: "/funds" },
          { name: "Apps", path: "/apps" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => handleMenuClick(index)}>
              <p className={`${baseMenuClass} ${selectedMenu === index ? activeMenuClass : ""}`}>
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <hr className="h-5 border-l mx-6" />

      <div className="relative flex items-center cursor-pointer" onClick={()=>console.log("woriking well")}>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          ZU
        </div>
        <p className="ml-2 text-sm font-medium">USERID</p>

        {isProfileDropdownOpen && (
          <div className="absolute top-12 right-0 bg-white border shadow-md rounded-md py-2 px-4 flex flex-col gap-2 z-10">
            <button onClick={() => navigate("/login")} className="text-sm hover:text-blue-600">Login</button>
            <button onClick={() => navigate("/signup")} className="text-sm hover:text-blue-600">Signup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
