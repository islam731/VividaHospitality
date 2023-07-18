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
    <div class="mx-auto flex overflow-hidden my-10 md:flex-col md:w-1/3 md:m-0" data-aos={props.animation}>
    <video src={props.src} class="m-5 h-28 translate-y-3 md:mx-auto" autoPlay muted loop plays-inline/>
    <div class="my-10">
    <h1 class="font-sans font-bold text-xl text-left md:text-center ">{props.title}</h1>
    <p class="text-gray-500 text-xl text-left md:text-center md:p-5">{props.text}</p>
    </div>
    
    </div>
    
    
    </>
  )
}

export default Icon