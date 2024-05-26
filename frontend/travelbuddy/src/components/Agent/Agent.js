import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MoreProperty from "../Property/MoreProperty";
import SearchBar from "../utils/SearchBar";
// import FeaturedProperty from "../Property/FeaturedProperty";
import ExpertSection from "../utils/ExpertSection";

function Agent() {
  return (
    <div className="Agent">
      <Header />
      
      <Hero header="Connect with Expert Agents for Your Travel Needs"  />

      <ExpertSection
        header="Meet Our Expert Agents"
        text="Our certified experts are dedicated to assisting you with your travel plans."
      />
      <SearchBar />
      <MoreProperty
        header="Explore More Adventurous Destinations"
        text="Discover additional Places that suit your preferences."
      />
      {/* <FeaturedProperty
        header="Featured Properties"
        text="Top Rated Properties"
      /> */}
      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}

export default Agent;
