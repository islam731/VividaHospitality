import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Icon(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div class="mx-auto flex overflow-hidden my-10 " data-aos={props.animation}>
    <img src={props.src} class="m-5 h-28 translate-y-3"/>
    <div class="my-10">
    <h1 class="font-sans font-bold text-2xl mx-auto">{props.title}</h1>
    <p class="text-gray-500">{props.text}</p>
    </div>
    
    </div>
    
    
    </>
  )
}

export default Icon