import React from 'react'
import Navbar from './Navbar'
import Footer from './Pages/LandingPage/Footer'

const Layout = ({children}) => {
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