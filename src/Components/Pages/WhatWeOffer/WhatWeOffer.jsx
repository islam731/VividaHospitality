import React from "react";
import Icon from "../Icon";
import Swipe from "../../swipe";

const WhatWeOffer = () => {
  const srcs = [
    "../SEO.mp4",
    "../ourwebsite.png",
    "../facebook.mp4",
    "../instagram.mp4",
    "../google-ads.mp4",
  ];
  return (
    <>
      <div class="pb-36 bg-black md:pb-52 "></div>
      <div class="p-5 py-10 " data-aos="fade-up">
        <h1 class=" text-3xl p-5 md:text-7xl text-center mx-auto font-bold">
          What Do We Offer?
        </h1>
        <p class="text-center md:text-4xl md:py-10">
        We at Vivida Hospitality help hotel chains increase brand awareness, generate leads, and close deals in the GCC market. We offer a range of services, including in-person introductions to top corporate and travel agents, connecting with top accounts in the market, planning FAM visits to the hotels, planning PR events, utilizing social media and travel magazines, participating in major exhibitions, submitting monthly reports, and supporting and delivering leads. These services will help our clients to reach a wider audience, generate interest in the brand, and connect with potential customers and partners.
        </p>
      </div>
      <div class="bg-blue-950 py-10 flex text-blue-950">
        <div class="bg-blue-100 mr-3 p-2 w-1/2" data-aos="fade-right">
          <h1 class="font-sans font-bold text-2xl text-center md:text-5xl">
            Identifying Potential Clients
          </h1>
          <video src="../../../../search.mp4" alt="" class="md:h-52 md:mx-auto" autoPlay muted loop plays-inline />

          <p class="text-blue-950 text-center pb-10 md:text-3xl">
            Identify the top GCC accounts that are most likely to be interested
            in working with you.
          </p>
        </div>

        <div class="bg-blue-100 ml-3 p-2 w-1/2" data-aos="fade-left">
          <h1 class="font-sans font-bold text-2xl text-center md:text-5xl ">
            In-Person Sales Meetings
          </h1>
          <video src="../../../../sales-meeting.mp4" alt="" class="md:h-52 md:mx-auto" autoPlay muted loop plays-inline/>
          <p class="text-blue-950 text-center pb-10 md:text-3xl">
            Creating a Strong First Impression to top corporate and travel
            agents in the GCC market.
          </p>
        </div>
      </div>

      <div class="p-20 bg-blue-100">
        <h1
          class=" font-sans font-bold text-2xl text-center text-blue-950 md:text-7xl "
          data-aos="fade-up"
        >
          Marketing Channels
        </h1>
        <Swipe number="5" src={srcs} />
        <p class=" text-blue-950 text-center pb-5 md:text-2xl" data-aos="fade-down">
          Swipe for more!
        </p>
        <p class=" text-blue-950 text-center md:text-3xl" data-aos="fade-down">
          We leverage every new piece of technology to ensure the best
          personalized marketing for the hotel, our channels include Facebook,
          Instagram, Search Engine Optimization, and Google{" "}
        </p>
      </div>
      <div class="bg-blue-950 py-5">
        <div class="md:flex p-10">
        <div class="bg-blue-100 mx-5 rounded-lg md:w-1/2" data-aos="fade-right">
          <div class="mx-auto flex overflow-hidden my-10 ">
            <video src="../../../../events.mp4" class="m-5 h-28 translate-y-3" data-aos="zoom-in" autoPlay muted loop plays-inline />
            <div class="my-10">
              <h1 class="font-sans font-bold text-xl text-left translate-y-5  ">Plan FAM events</h1>
            </div>
          </div>
        </div>

        <div class="bg-blue-100 mx-5 rounded-lg md:w-1/2" data-aos="fade-left">
          <div class="mx-auto flex overflow-hidden my-10 ">
            <video src="../../../../groups.mp4" class="m-5 h-28 translate-y-3"autoPlay muted loop plays-inline />
            <div class="my-10">
              <h1 class="font-sans font-bold text-xl text-left   ">Support and deliver leads for individuals and groups</h1>
            </div>
          </div>
        </div>
        </div>
        

        <div class="bg-blue-100 py-10 flex text-blue-950 md:py-20">
        <div class="bg-blue-950 mr-3 p-2 w-1/2 md:p-10" data-aos="fade-right">
          <h1 class="font-sans font-bold text-2xl text-center text-white md:text-5xl ">
          Plan and Organize PR events
          </h1>
          <video src="../../../../pr.mp4" alt="" class="md:h-52 md:mx-auto" data-aos="zoom-in" autoPlay muted loop plays-inline/>
          <p class="text-white text-center pb-10 md:text-3xl">
           Promoting your brand in the GCC market and 
           inviting top corporate, travel, influencer, and media press accounts to these events.
          </p>
        </div>

        <div class="bg-blue-950 ml-3 p-2 w-1/2 md:p-10" data-aos="fade-left">
          <h1 class="font-sans font-bold text-2xl text-center text-white md:text-5xl ">
            Participate in major exhibitions
          </h1>
          <video src="../../../../painting.mp4" alt="" class="md:h-52 md:mx-auto" data-aos="zoom-in" autoPlay muted loop plays-inline/>
          <p class="text-white text-center pb-10 md:text-3xl">
          Attending major exhibitions to promote your brand in addition to,
          Connecting with potential customers and partners.
          </p>
        </div>
      </div>
      <div class="p-20">
        <h1
          class=" font-sans font-bold text-2xl text-center text-white md:text-7xl "
          data-aos="fade-up"
        >
          Submit monthly reports
        </h1>
        <video src="../../../../reports.mp4" alt="" class="md:h-96 mx-auto" autoPlay muted loop plays-inline/>
        <p class=" text-white text-center md:text-3xl" data-aos="fade-down">
        Submit monthly reports that outlines the progress that have been made on your tasks and provides updates and status.
        </p>
      </div>
      </div>
      
    </>
  );
};

export default WhatWeOffer;
