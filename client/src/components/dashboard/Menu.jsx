import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../../hooks/useAuthStore.jsx"
import { ToastContainer,toast } from "react-toastify";

const Menu = () => {
  const [selectedMenu, setSeletedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const {user,logout} = useAuth();

  const handleMenuClick = (index) => {
    setSeletedMenu(index);
  };

  const handlelogout= async()=>{
    try{
      const res = await fetch(import.meta.env.VITE_BACKEND_URI +"/api/v1/auth/logout");
      if(res.ok) { 
        logout()
      }
    }catch(error){
      toast.error("Logout failed. Please try again.")
    }
  }

  const baseMenuClass = "py-2 px-4 text-sm cursor-pointer hover:text-blue-600";
  const activeMenuClass = "text-red-600 font-semibold";

  return ( 
    <div className="flex items-center w-full justify-between px-5">
      <img src="\images\kite-logo.svg" alt="Logo" className="w-10" />

      <div className="flex items-center">
      <ul className="flex ">
        {[
          { name: "Home", path: "/dashboard" },
          { name: "Orders", path: "/dashboard/orders" },
          { name: "Holdings", path: "/dashboard/holdings" },
          { name: "Positions", path: "/dashboard/positions" },
          { name: "Funds", path: "/dashboard/funds" },
          { name: "Apps", path: "/dashboard/apps" },
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
      <div className="relative flex items-center cursor-pointer" >
        <button onClick={()=>setIsProfileDropdownOpen(prev => !prev)} className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
        <span>{user.username.slice(0,2)}</span>
        </button>

        {isProfileDropdownOpen && (
          <div className="absolute top-12 right-0 bg-white border border-slate-300 shadow-md rounded-lg flex flex-col gap-2 z-10">
           <div className="flex items-center gap-2 border-b border-slate-300 px-3 pt-4 pb-2">
            <p className="text-xs text-gray-500">sign in as {user.email}</p>
           </div>
            {/* <Link to="/dashboard/profile" onClick={() => setIsProfileDropdownOpen(false)}>Profile</Link> */}
            <div className="px-2 py-2" >
            <button onClick={handlelogout} className="text-start hover:bg-red-300/30 w-full py-2 px-2 rounded-md">Logout</button> 
            </div>
            {/* <button onClick={() => navigate("/signup")} className="text-sm hover:text-blue-600">Signup</button> */}
          </div>
        )}
      </div>
      </div>

    </div>
  );
};

export default Menu;
