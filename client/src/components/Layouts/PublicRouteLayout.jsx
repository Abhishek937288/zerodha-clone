import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import {useAuth} from "../../hooks/useAuthStore.jsx"

const  PublicRouteLayout = () => {
  const {user} = useAuth();
  if(user){
   return  <Navigate to="/dashboard" replace={true} />
  }
  return (
    <Outlet />
  )
}
export default PublicRouteLayout;