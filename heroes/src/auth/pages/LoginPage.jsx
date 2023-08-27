import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { NewContext } from '../../context/NewContext'


export const LoginPage = () => {
  
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)
  // console.log(login)
  // const {handleLog, handleName, name, log} = useContext(NewContext)

 
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastpath') || '/'
    login('Fran')
    // handleName()
    // handleLog()
    // localStorage.setItem("auth", JSON.stringify(name));
    navigate(lastPath, {replace:true})
  }

  // useEffect(() => {
  //   handleName()
  // }, [name])

  // useEffect(() => {
  //   handleLog
  // }, [log])
  

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary'
        onClick={handleLogin}>Login</button>
    </div>
  )
}
