import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'


export const PrivateRoute = ({children}) => {
  const {authState} = useContext(AuthContext)
  const {pathname, search} = useLocation()
  
  

  useEffect(() => {
    const lastPath = pathname + search
    localStorage.setItem('lastpath', lastPath)
  }, [pathname, search])
  
 
 

  return (authState.logged)
  ? children
  : <Navigate to='/login'></Navigate>

}
