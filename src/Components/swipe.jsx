import React from 'react'

const swipe = (props) => {
    const elements =[];
    const src = props.src;
    
    for(let i=0;i<props.number;i++){
    let le=src[i].length;
    let poin=src[i].lastIndexOf(".");
    let accu1=src[i].substring(poin,le);
    let accu = accu1.toLowerCase(); 
    if (accu ==".png" || accu==".jpg"){
      elements.push(<><img src={props.src[i]} class="snap-center m-5" data-aos="zoom-in" /></> );
    }
    else{
      elements.push(<><video src={props.src[i]} class="snap-center m-5" data-aos="zoom-in" autoPlay muted loop plays-inline /></> );
    }
    }

  return (
    <>
    <div class="snap-x snap-mandatory overflow-scroll flex h-40">
       {elements}
    </div>
    </>
  )
}

export default swipe