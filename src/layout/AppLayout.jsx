import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

const AppLayout = () => {
  const path=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
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