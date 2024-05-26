import React from "react";
import Header from "../Header/Header";
import Service from "./Service";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import Credibility from "./Credibility";
import Team from "./Team";

function About() {
  return (
    <div className=" About">
      <Header />
      <Service
        label="About TravelBuddy"
        header="Your Ultimate Travel Companion"
        text="TravelBuddy is your go-to platform for all things travel. Whether you're planning a weekend getaway or a global adventure, we're here to make your journey seamless and unforgettable. With our user-friendly search tools and expert guidance, you can discover your dream destinations, connect with local guides, and book your accommodations with ease. Best of all, our service is commission-free, so you can trust that we're always working in your best interest."
      />

      <SearchBar header="Find Your Perfect Destination" />
      <br className=""></br>
      <Credibility header="Why Choose TravelBuddy" text="Experience Peace of Mind with Our Trusted Services" />
      <Team header="Meet Our Team" text="Get to Know the Faces Behind TravelBuddy" />
      <Footer />
    </div>
  );
}

export default About;
