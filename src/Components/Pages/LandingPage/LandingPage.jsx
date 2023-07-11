import React from 'react'
import Hero from './Hero'
import Rewards from './Rewards'
import Socials from './Socials'
import WhyVivida from './WhyVivida'
import Footer from './Footer'
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
      <section>
        <Rewards/>
      </section>
      <section class="bg-blue-950">
        <WhyVivida/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
    
    </>
  )
}

export default App
