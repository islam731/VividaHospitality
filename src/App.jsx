import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import Layout from './Components/Layout';
import WhyVivida from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import Partners from './Components/Pages/Partners/Partners'
function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/WhyUs" element={<WhyVivida /> } />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Partners" element={<Partners />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App