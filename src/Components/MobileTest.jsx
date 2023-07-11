import React from 'react'
import Background from './Background'

function MobileTest() {
  return (
    <>
    <Background class="absolute invisible md:visible" video="../../Home-Page-Banner.mp4" black="../../black.webp" class2="invisible md:visible absolute w-full overflow-hidden opacity-70"/>
    <Background class="absolute visible md:invisible" video="../../Home-Page-Banner2.mp4" black="../../black2.webp.jpg" class2="visible md:invisible absolute w-full overflow-hidden opacity-70 "/>
    </>
  )
}

export default MobileTest