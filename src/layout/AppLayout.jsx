import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

const AppLayout = () => {
  const [cart,setCart]=useState([]);

  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
        <Header/>
        <Outlet context={[cart,setCart]}></Outlet>
        <Footer/>

        {/*fake store API*/}
    </div>


  )
}

export default AppLayout