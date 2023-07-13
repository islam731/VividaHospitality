import React from 'react'
import Icon from './Icon'
import { Link } from "react-router-dom";

const WhyVivida = () => {
  return (
    <>
    <div class=" text-white overflow-hidden text-5xl p-5 md:text-white md:text-7xl text-center mx-auto">
      <h1 class="p-10">Why Vivida?</h1>
    <Icon animation="zoom-in" src="../../connections-icon.gif" title="Connections" text="Our strong Database and connections all over the GCC"/>
    <Icon animation="zoom-in" src="../../communication.gif" title="Communication" text="We are always available to talk"/>
    <Icon animation="zoom-in" src="../../experience.gif" title="Experience" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptas."/>
    <div  data-aos="fade-up" data-aos-duration="500" class="border-solid rounded-full bg-blue-100 p-7 mb-12 text-xl text-blue-950 font-medium mx-auto">
    <button>
      <Link to="/WhyUs">
      More
      </Link>
    </button>
    </div>
    </div>
    </>
  )
}

export default WhyVivida