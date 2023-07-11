import React from 'react'
import Icon from './Icon'
import { Link } from "react-router-dom";

const WhyVivida = () => {
  return (
    <>
    <div class=" text-white overflow-hidden text-5xl p-5 md:text-white md:text-7xl text-center mx-auto">
      <h1 class="p-10">Why Vivida?</h1>
    <Icon animation="zoom-in" src="../../connections-icon.gif" title="Connections"/>
    <Icon animation="zoom-in" src="../../connections-icon.gif" title="Connections"/>
    <Icon animation="zoom-in" src="../../connections-icon.gif" title="Connections"/>
    <div  data-aos="fade-up" data-aos-duration="500" class="border-solid rounded-full bg-blue-100 p-7 mb-12 text-xl text-blue-950 font-medium">
    <button>
      <Link to="/WhyUs">
      More About Vivida Hositality
      </Link>
    </button>
    </div>
    
    </div>
    </>
  )
}

export default WhyVivida