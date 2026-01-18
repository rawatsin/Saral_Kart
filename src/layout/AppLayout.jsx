import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header"

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        {/* footer
        
        fake store API*/}
    </div>


  )
}

export default AppLayout