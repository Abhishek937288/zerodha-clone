import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "../dashboard/App.jsx";
import Funds from "../dashboard/Funds.jsx";
import Holdings from "../dashboard/Holdings.jsx";

import Orders from "../dashboard/Orders.jsx";
import Positions from "../dashboard/Position.jsx";
import Summary from "../dashboard/Summary.jsx";
import WatchList from "../dashboard/WatchList.jsx";
import { GeneralContextProvider } from "../dashboard/GeneralContext"; 


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;