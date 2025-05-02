import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import TopBar from "../dashboard/Topbar";
import WatchList from "../dashboard/WatchList";
import {useAuth} from "../../hooks/useAuthStore.jsx"
const DashboardLayout = () => {
  const {user} = useAuth();
  if (!user) {
    return <Navigate to="/signin"  replace={true} />;
  }
  return (
    <div>
      <TopBar />
      <div className="flex w-full h-full">
      <WatchList />
     <div className="flex-1 p-4 pt-[11vh]">
     <Outlet />
        </div>
    </div>
    </div>
  );
};

export default DashboardLayout;
