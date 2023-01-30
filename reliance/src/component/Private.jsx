import React from 'react'
import { Navigate } from 'react-router-dom'

function Private({children}) {
const username=(localStorage.getItem("signin"))||""
if(!username){
   return <Navigate to="/registration"/>
}
  return children
    
  
}

export default Private