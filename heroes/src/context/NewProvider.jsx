import React, { useEffect, useState } from 'react'
import { NewContext } from './NewContext'

export const NewProvider = ({children}) => {

 
  const init = JSON.parse(localStorage.getItem("auth"))
  console.log(init)

    const [log, setLog] = useState(false)
    const [name, setName] = useState(init)

    
    const handleLog =  () =>{
         setLog(!log) 
    }

    const handleName = () => {
      setName('Pepe')
     
    }
    
   

  return (
    <NewContext.Provider value={{handleLog, log, handleName, name}}>
        {children}
    </NewContext.Provider>
  )
}
