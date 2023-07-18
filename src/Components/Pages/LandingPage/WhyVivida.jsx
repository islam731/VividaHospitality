import React from 'react'
import Icon from '../Icon'
import { Link } from "react-router-dom";

const WhyVivida = () => {
  return (
    <>
    <div class=" text-white text-5xl p-5 text-center mx-auto md:text-white md:text-7xl ">
      <h1 class="p-10">Why Vivida?</h1>
    <div class="md:flex">
    <Icon animation="zoom-in" src="../../connections-icon.mp4" title="Connections" text="Our strong Database and connections all over the GCC"/>
    <Icon animation="zoom-in" src="../../communication.mp4" title="Communication" text="We are always available to talk"/>
    <Icon animation="zoom-in" src="../../experience.mp4" title="Experience" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptas."/>
    </div>  
    <Link to="/Why-Us">
      <div  data-aos="fade-up" data-aos-duration="500" class="border-solid rounded-full bg-blue-100 p-7 mb-12 text-xl text-blue-950 font-medium mx-auto md:w-44">
       <button>
        More
       </button>
      </div>
    </Link>
    
    </div>
    </>
  )
}

export default WhyVivida