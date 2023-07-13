import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div class="pb-36 bg-black"></div>
    <div class="p-5 py-10 " data-aos="fade-up">
    <h1 class=" text-3xl p-5 md:text-white md:text-7xl text-center mx-auto font-bold">Who are we?</h1>
    <p class="text-gray-500 text-center">Vivida Hospitality, A new breed of hoteliers aimed at creating high performing Hotels, an independent Hotel Management Company, and Hospitality Consulting Firm, specialized in the Niche Hospitality Sales, Marketing and PR Representation within the Middle East. </p>
    </div>
    <div class="bg-blue-950 p-5 py-10" data-aos="fade-up">
      <p class="text-white text-center">Vivida Hospitality proudly announces the opening of its first headquarters office in the United Arab Emirates.</p>
    </div>
    <div data-aos="fade-up">
      <div class=" text-center py-10">
        <h1 class="text-3xl font-bold">
          What do we offer?
        </h1>
        <p class="p-5 text-gray-500">
        A seamless extension to the Sales, Marketing, and PR forces of Luxury Hotels that are interested in growing their market share from the niche outbound Middle East Region.
        </p>
      </div>
      <div class=" text-center pt-5 py-10" data-aos="fade-up">
      <h1 class="text-3xl font-bold">
        Where are we present?
        </h1>
        <p class="p-5 text-gray-500">
        We cover all the main Middle East Markets namely, the Kingdom of Saudi Arabia, the United Arab Emirates, Kuwait, Bahrain, and Qatar.
        </p>
      </div>
    </div>
    <div class="bg-blue-950 p-5 py-10" data-aos="fade-up">
      <h1 class="text-3xl font-bold text-center text-white pb-5"> Why the Middle East?</h1>
      <p class="text-white text-center p-3">The Middle East market is a very profitable yet highly challenging one but, we at Vivida Hospitality pride ourselves on our highly experienced, skillful, and talented dedicated sales team, who are the core essence of our company’s success.</p>
    </div>
    </>
  )
}

export default About