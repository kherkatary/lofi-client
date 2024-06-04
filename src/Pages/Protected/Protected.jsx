import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
const Protected = () => {
    const { token } = useAuth()

    if(!token) return (<Navigate to="/login"/> )
  return (
    <Outlet/>
  )
}

export default Protected