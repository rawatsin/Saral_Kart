import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        <Footer/>

        {/* footer
        
        fake store API*/}
    </div>


  )
}

export default AppLayout