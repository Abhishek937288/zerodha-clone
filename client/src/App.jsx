import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Products from "./pages/Products";
import Support from "./pages/Support";
import { Dashboard } from "./pages/Dashboard";
import LandingPageLayout from "./components/Layouts/LandingPageLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import Orders from "./components/dashboard/Orders";
import Summary from "./components/dashboard/Summary";
import Holdings from "./components/dashboard/Holdings";
import Positions from "./components/dashboard/Position";
import Funds from "./components/dashboard/Funds";
import  Apps from "./components/dashboard/App.jsx";
import PublicRouteLayout from "./components/Layouts/PublicRouteLayout";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "./hooks/useAuthStore.jsx";

const App = () => {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const checkUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(import.meta.env.VITE_BACKEND_URI +"/api/v1/auth/me",{  credentials: 'include'});
      const data = await res.json();
      login(data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    checkUser();
  }, []);

  if (loading) {
    return (
      <h1 className="text-xl font-bold text-blue-400 text-center my-auto">
        Zerodha...
      </h1>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route element={<PublicRouteLayout />}>
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route exact path="summary" element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};
export default App;
