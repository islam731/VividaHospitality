import React from 'react'
import Background from './Background'
import Navbar from '../../Navbar'

function Hero() {
  return (
    <>
    <div class=" w-full overflow-hidden h-screen w-screen object-cover">
    <Background class=" absolute invisible md:visible" video="../../Home-Page-Banner.mp4" black="../../black.webp" class2="invisible md:visible absolute w-full overflow-hidden opacity-70"/>
    <Background class="absolute visible md:invisible h-screen w-screen object-cover" video="../../Home-Page-Banner6.mp4" black="../../black2.webp.jpg" class2="h-screen w-screen visible md:invisible absolute overflow-hidden opacity-70 object-cover"/>
     <Navbar>
    </Navbar>
     <div class=" overflow-hidden text-white md:translate-y-80 translate-y-52 translate-x-3 text-5xl p-5 md:text-white md:text-7xl text-center mx-auto">
     <h1>Your Trusted Hospitality Partner in the GCC!</h1>
    </div>
    </div>    
    </>
  )
}

export default Hero