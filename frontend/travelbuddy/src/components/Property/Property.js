import React from "react";
//import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProperty from "../Property/FeaturedProperty";
import MoreProperty from "./MoreProperty";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import useFetch  from "../utils/useFetch";
import destinationImage from "../../assets/destination.jpg";


function Property() {

  
  const {items} = useFetch()
  
  return (
    <div className="Property">
      <Header />
      <Hero header="Explore Amazing Destinations in Kenya"  url={destinationImage}/>

      <SearchBar />
    
      <FeaturedProperty header="Featured Places" text="Discover the top-rated places that offer unique and memorable experiences." items={items} />

      
      {/* <MoreProperty /> */}
      <Footer />
    </div>
  );
}

export default Property;