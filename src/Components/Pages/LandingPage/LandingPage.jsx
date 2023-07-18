import React from 'react'
import Hero from './Hero'
import Rewards from './Rewards'
import Socials from './Socials'
import WhyVivida from './WhyVivida'
import Footer from './Footer'
import Services from './Services'
function App() {

  return (
    <>
    <div class="overflow-hidden">
      <header>
      <Hero/>
      </header>
      <section class="bg-blue-950 py-7">
        <Socials/>
      </section>
      <section class="m-5">
        <Rewards/>
      </section>
      <section class="bg-blue-950">
        <WhyVivida/>
      </section>
      <section class="overflow-hidden">
        <Services/>
      </section>
    </div>
    </>
  )
}

export default App
