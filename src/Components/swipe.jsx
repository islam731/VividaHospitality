import React from 'react'

const swipe = (props) => {
    const elements =[];
    const src = props.src;
    for(let i=0;i<props.number;i++){
        elements.push(<><img src={props.src[i]} class="snap-center m-5" data-aos="zoom-in" /></> );
        console.log(src[i]);
        console.log(props.src[0]);

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