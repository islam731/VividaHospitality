import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import Layout from './Components/Layout';
import WhyVivida from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import WhatWeOffer from './Components/Pages/WhatWeOffer/WhatWeOffer';
import Partners from './Components/Pages/Partners/Partners'
function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Why-Us" element={<WhyVivida /> } />
        <Route path="/What-We-Offer" element={<WhatWeOffer /> } />
        <Route path="/Contact-Us" element={<Contact />} />
        <Route path="Our-Partners" element={<Partners />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App