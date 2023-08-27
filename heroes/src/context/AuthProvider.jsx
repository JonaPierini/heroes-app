import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../auth/types/types'



const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user, //true
    user: user
  }
}


export const AuthProvider = ({children}) => {

  const [authState, dispatch] =  useReducer(AuthReducer, {}, init)

  const login = (name = '') =>{
    const action = {
        type: types.login, //login
        payload: {
            id: 1,
            name: name
        }
    }
    
    localStorage.setItem('user', JSON.stringify({
      id: 1,
      name: name
    }))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = {
      type: types.logout,
    }
    dispatch(action)
  }


  return (
     <AuthContext.Provider value={{
        authState,
        login:login,
        logout:logout
        }}>
        {children}
     </AuthContext.Provider>
  )
}
