import React from "react";
import Icon from "../Icon";
import Swipe from "../../swipe";

const WhatWeOffer = () => {
  const srcs = [
    "../SEO.gif",
    "../ourwebsite.png",
    "../facebook.gif",
    "../instagram.gif",
    "../google-ads.gif",
  ];
  return (
    <>
      <div class="pb-36 bg-black "></div>
      <div class="p-5 py-10 " data-aos="fade-up">
        <h1 class=" text-3xl p-5 md:text-white md:text-7xl text-center mx-auto font-bold">
          What Do We Offer?
        </h1>
        <p class="text-center">
        We at Vivida Hospitality help hotel chains increase brand awareness, generate leads, and close deals in the GCC market. We offer a range of services, including in-person introductions to top corporate and travel agents, connecting with top accounts in the market, planning FAM visits to the hotels, planning PR events, utilizing social media and travel magazines, participating in major exhibitions, submitting monthly reports, and supporting and delivering leads. These services will help our clients to reach a wider audience, generate interest in the brand, and connect with potential customers and partners.
        </p>
      </div>
      <div class="bg-blue-950 py-10 flex text-blue-950">
        <div class="bg-blue-100 mr-3 p-2 w-1/2" data-aos="fade-right">
          <h1 class="font-sans font-bold text-2xl text-center ">
            Identifying Potential Clients
          </h1>
          <Icon animation="zoom-in" src="../../search.gif" />

          <p class="text-blue-950 text-center pb-10">
            Identify the top GCC accounts that are most likely to be interested
            in working with you.
          </p>
        </div>

        <div class="bg-blue-100 ml-3 p-2 w-1/2" data-aos="fade-left">
          <h1 class="font-sans font-bold text-2xl text-center ">
            In-Person Sales Meetings
          </h1>
          <Icon animation="zoom-in" src="../../sales-meeting.gif" />
          <p class="text-blue-950 text-center pb-10">
            {" "}
            Creating a Strong First Impression to top corporate and travel
            agents in the GCC market.
          </p>
        </div>
      </div>

      <div class="p-20 bg-blue-100">
        <h1
          class=" font-sans font-bold text-2xl text-center text-blue-950 "
          data-aos="fade-up"
        >
          Marketing Channels
        </h1>
        <Swipe number="5" src={srcs} />
        <p class=" text-blue-950 text-center pb-5" data-aos="fade-down">
          Swipe for more!
        </p>
        <p class=" text-blue-950 text-center" data-aos="fade-down">
          We leverage every new piece of technology to ensure the best
          personalized marketing for the hotel, our channels include Facebook,
          Instagram, Search Engine Optimization, and Google{" "}
        </p>
      </div>
      <div class="bg-blue-950 py-5">
        <div class="bg-blue-100 mx-5 rounded-lg" data-aos="fade-right">
          <div class="mx-auto flex overflow-hidden my-10 ">
            <img src="../../../../events.gif" class="m-5 h-28 translate-y-3" />
            <div class="my-10">
              <h1 class="font-sans font-bold text-xl text-left translate-y-5  ">Plan FAM events</h1>
            </div>
          </div>
        </div>

        <div class="bg-blue-100 mx-5 rounded-lg" data-aos="fade-left">
          <div class="mx-auto flex overflow-hidden my-10 ">
            <img src="../../../../groups.gif" class="m-5 h-28 translate-y-3" />
            <div class="my-10">
              <h1 class="font-sans font-bold text-xl text-left   ">Support and deliver leads for individuals and groups</h1>
            </div>
          </div>
        </div>

        <div class="bg-blue-100 py-10 flex text-blue-950">
        <div class="bg-blue-950 mr-3 p-2 w-1/2" data-aos="fade-right">
          <h1 class="font-sans font-bold text-2xl text-center text-white ">
          Plan and Organize PR events
          </h1>
          <Icon animation="zoom-in" src="../../pr.gif" />

          <p class="text-white text-center pb-10">
           Promoting your brand in the GCC market and 
           inviting top corporate, travel, influencer, and media press accounts to these events.
          </p>
        </div>

        <div class="bg-blue-950 ml-3 p-2 w-1/2" data-aos="fade-left">
          <h1 class="font-sans font-bold text-2xl text-center text-white ">
            Participate in major exhibitions
          </h1>
          <Icon animation="zoom-in" src="../../painting.gif" />
          <p class="text-white text-center pb-10">
          Attending major exhibitions to promote your brand in addition to,
          Connecting with potential customers and partners.
          </p>
        </div>
      </div>
      <div class="p-20">
        <h1
          class=" font-sans font-bold text-2xl text-center text-white "
          data-aos="fade-up"
        >
          Submit monthly reports
        </h1>
        <img src="../../../../reports.gif" alt="" />
        <p class=" text-white text-center" data-aos="fade-down">
        Submit monthly reports that outlines the progress that have been made on your tasks and provides updates and status.
        </p>
      </div>
      </div>
      
    </>
  );
};

export default WhatWeOffer;
