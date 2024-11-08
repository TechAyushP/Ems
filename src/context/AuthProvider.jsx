import React, { createContext, useState } from 'react'

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [userData,setUserData]=useState(null)
  return (
    <div>
    <AuthContext.Provider value={"ayush"}>
    {children}
    

 

    </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
 