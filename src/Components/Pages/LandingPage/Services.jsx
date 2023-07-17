import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
    <div class=" overflow-hidden text-5xl p-5 md:text-white md:text-7xl text-center mx-auto">
    Services
    </div>
    <Icon animation="zoom-in" src="../../meeting.gif" title="In-person sales call" text="Introducing Checkin Hotels to top corporate and travel agents in the GCC market."/>
    <Icon animation="zoom-in" src="../../event.gif" title="Plan FAM visits and PR events" text=" Inviting top corporate, travel, influencer, and media press accounts."/>
    <Icon animation="zoom-in" src="../../tech.gif" title="Leveraging Technology" text="Use social media and travel magazines to boost Checkin Hotels' brand awareness and drive bookings in the GCC market."/>
    <div  data-aos="fade-up" data-aos-duration="500" class="border-solid rounded-full bg-blue-950 p-7 mb-12 text-xl text-white font-medium mx-auto text-center">
    <button>
      <Link to="/What-We-Offer">
      More
      </Link>
    </button>
    </div>
    </>
  )
}

export default Services