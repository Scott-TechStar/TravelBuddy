import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroImageBox from "../utils/HeroImageBox";
import SearchButton from "../utils/SearchButton";
import MoreProperty from "../Property/MoreProperty";
import ExpertSection from "../utils/ExpertSection";
import Works from "../utils/Works";
import Service from "../About/Service";
import Partners from "../utils/Partners";
import useFetch from "../utils/useFetch";
import FeaturedProperty from "../Property/FeaturedProperty";
import homeImage from "../../assets/home.jpg";


function Home() {

  const {items} = useFetch()

  return (
    <div className="Home">
      <Header />
      <section className="ml-16 mr-16">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10  md:my-auto">
              <h1 className="pb-8 text-4xl md:text-6xl">Plan Your Next Adventure with TravelBuddy</h1>
              <p className="text-xl mb-10">Discover, Plan, and Explore Your Dream Destinations</p>
              <SearchButton />
            </div>
            <HeroImageBox p="Featured Homes" url={homeImage} />
            {/* <HeroImageBox p="Featured Homes" url ={false | require("../../assets/h2.jpg")}/> */}
          </div>
        </div>
      </section>

      <section className="bg-black  text-white flex">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <Service
            label="About TravelBuddy"
            header="Your Ultimate Travel Companion"
            text="TravelBuddy offers a comprehensive platform to plan, book, and manage your travel adventures worldwide. From finding the perfect destination to connecting with local guides, we're here to make your journey unforgettable."
          />
        </div>
      </section>

      <section className="bg-black text-white">
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World " items={items} />
      </section>
      <section className="bg-black  text-white">
        <div className="text-center pt-20">
          <h3 className="text-purple-700 text-2xl">How it Works</h3>
          <p className="mb-12">Simplify Your Travel Experience</p>
        </div>
        <Works />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-20">
          <h3 className="text-purple-700 text-2xl">Meet Local Guides</h3>
          <p>Experience Authentic Adventures with Local Experts</p>
          <p>Connect with knowledgeable guides to explore hidden gems and local culture.</p>
        </div>
        <ExpertSection />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Our Partners</h3>
          <p className="mb-12">We collaborate with trusted partners to enhance your travel experience.</p>
        </div>
        <Partners />
      </section>
      <section className="bg-black  text-center pt-16">
        <h3 className="text-purple-700 text-2xl ">Have a Question?</h3>
        <p className="mb-20 text-white">Let us assist you in planning your next adventure.</p>
        <Footer />
      </section>
    </div>
  );
}

export default Home;