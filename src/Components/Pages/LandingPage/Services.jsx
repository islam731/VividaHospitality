import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
    <div class=" overflow-hidden text-5xl p-5 md:text-black md:text-7xl text-center mx-auto">
    Services
    </div>
    <div class="md:flex">
    <Icon animation="zoom-in" src="../../meeting.mp4" title="In-person sales call" text="Introducing Checkin Hotels to top corporate and travel agents in the GCC market."/>
    <Icon animation="zoom-in" src="../../event.mp4" title="Plan FAM visits and PR events" text=" Inviting top corporate, travel, influencer, and media press accounts."/>
    <Icon animation="zoom-in" src="../../tech.mp4" title="Leveraging Technology" text="Use social media and travel magazines to boost Checkin Hotels' brand awareness and drive bookings in the GCC market."/>
    
    </div>
    <Link to="/What-We-Offer">
     <div  data-aos="fade-up" data-aos-duration="500" class="border-solid rounded-full bg-blue-950 p-7 m-12 text-xl text-white font-medium mx-auto text-center md:w-44">
      <button>
        More
      </button>
     </div>
    </Link>
    
    
    </>
  )
}

export default Services