import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Checkout from "../pages/Checkout.jsx"

function ProtectedRoute() {
  const [isAuthenticated, SetIsAuthenticated] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("User")!== null) SetIsAuthenticated(true)
  },[])
  return !isAuthenticated ? <Navigate to="/login" replace/> : <Checkout/> 
}

export default ProtectedRoute
