import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-[1100px] flex justify-between mx-auto my-6">
        <Link to={"/"}>
          <img src="images\logo.svg" className="w-32" alt="Logo" />
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
        </button>

        <ul className="flex gap-8 items-center ">
          <li className="text-gray-700 hover:text-gray-900">
            <Link aria-current="page" to={dashboardUrl}>
              Signup
            </Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link to={"about"}>About</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link to={"product"}>Product</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link to={"pricing"}>Pricing</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link to={"support"}>Support</Link>
          </li>
          <li className=" hover:text-gray-900">
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={toggleDropDown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute flex-row flex gap-[30px] shadow-2xl bg-white z-100 items-start p-5 rounded-[10px] top-[60px] right-[10px] border-[#ccc] w-[500px] h-[250px]"
              >
                {" "}
                <Link to={dashboardUrl} className="flex items-center justify-center flex-col">
                  <img src="images/kite-logo.svg" className="h-[50px] w-[50px]" alt="" />
                  <p className="text-center">Kite</p>
                  <p className="text-sm text-gray-800">Trading platform</p>
                </Link>
                <Link to={""}className="flex items-center justify-center flex-col" >
                  <img src="images/console.svg" className="h-[50px] w-[50px]" alt="" />
                  <p className="text-center">Console</p>
                  <p className="text-sm text-gray-700">Backoffice</p>
                </Link>
                <Link to={""}className="flex items-center justify-center flex-col" >
                  <img src="images/kite-connect.svg" className="h-[50px] w-[50px]" alt="" />
                  <p className="text-center">Kite connect</p>
                  <p className="text-sm text-gray-700">Trading APIs</p>
                </Link>
                <Link to={""}className="flex items-center justify-center flex-col" >
                  <img src="images/coin.svg" className="h-[50px] w-[50px]" alt="" />
                  <p className="text-center">Coin</p>
                  <p className="text-sm text-gray-700">Mutual funds</p>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
