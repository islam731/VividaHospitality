import React from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Pages/LandingPage/Footer'

const Layout = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <Navbar/>
    <div class="overflow-hidden">
    {children}
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Layout