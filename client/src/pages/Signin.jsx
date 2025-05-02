import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth} from "../hooks/useAuthStore.jsx"

function Signin() {
  const [signInData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)


  const {login} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true) // zerodha-clone.com <- import.meta.env.VITE_BACKEND_URI +
      const response = await fetch(import.meta.env.VITE_BACKEND_URI + "/api/v1/auth/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(signInData)
      });
      const resData = await response.json();
      if(!resData.success){
        return toast.error(resData.message)
      }
      login(resData.data)
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false)
    }
  };

  const signUpFromData = [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      id: 2,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      id: 3,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-20  flex items-center justify-center bg-gray-100">
      <form
        className="bg-white py-10 px-8 border border-gray-200 rounded-xl shadow-xl w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl text-blue-500 font-semibold mb-6">
          Hello Again! 👋
        </h2>
        {signUpFromData.map((formItem) => (
          <div key={formItem.id} className="mb-4">
            <label
              htmlFor={formItem.name}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {formItem.label}
            </label>
            <input
              id={formItem.name}
              value={signInData[formItem.name]}
              type={formItem.type}
              name={formItem.name}
              placeholder={formItem.placeholder}
              onChange={handleChange}
              className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-xl w-full focus:outline-none focus:shadow-outline disabled:opacity-70 "
          disabled={loading}
        >
          {
            loading ? "Submiting..." : "Sign In"
          }
        </button>
        <div className="mt-4 text-center text-gray-600 text-sm">
        Don't you have account yet?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </div>
      </form>
    
    </div>
  );
}

export default Signin;
