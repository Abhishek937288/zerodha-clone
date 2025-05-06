import React, { useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../../hooks/useAuthStore.jsx"
import { ToastContainer,toast } from "react-toastify";

const Menu = () => {
  const [selectedMenu, setSeletedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profiledropdownRef = useRef(null);
  const {user,logout} = useAuth();

  const handleMenuClick = (index) => {
    setSeletedMenu(index);
  };

    useEffect(() => {
      const handleClickOutside = (event) => {
         if(event.target.id == "profile-btn"){
          return 
         }
        if (
          
          profiledropdownRef.current &&
          !profiledropdownRef.current.contains(event.target) &&
          isProfileDropdownOpen 
        ) {
          setIsProfileDropdownOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isProfileDropdownOpen]);



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
        <button id="profile-btn" onClick={()=>setIsProfileDropdownOpen((prev) => !prev)} className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
        {user.username.slice(0,2)}
        </button>

        {isProfileDropdownOpen && (
          <div
          ref={profiledropdownRef}
          className="absolute  top-15 right-1 bg-white border border-gray-200 shadow-lg rounded-md flex flex-col gap-1 z-10 w-[250px] origin-top-right"
        >
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm text-gray-600 truncate">Signed in as</p>
            <p className="text-sm font-semibold text-gray-800 truncate">{user.email}</p>
          </div>
          
          <div className="py-1">
            <button
              onClick={handlelogout}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white transition duration-150 ease-in-out text-left"
            >
              Logout
            </button>
          </div>
          
        </div>
        )}
      </div>
      </div>

    </div>
  );
};

export default Menu;
