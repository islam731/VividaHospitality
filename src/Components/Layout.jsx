import React from 'react'
import Navbar from './Navbar'
import Footer from './Pages/LandingPage/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div>
    {children}
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Layout