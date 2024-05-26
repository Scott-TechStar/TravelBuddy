import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ContactDetails from "./ContactDetails";
import GoogleMap from "./GoogleMap";
import ContactFormSection from "./ContactFormSection";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";

function Contact() {
  return (
    <div className="Contact">
      <Header />
      <Hero
        header="Have Questions About Your Next Adventure?"
        text="We're here to assist you! Contact us and we'll get back to you within 2 hours."
      />
      <ContactDetails />
      <GoogleMap />
      <ContactFormSection />
      <div className="pt-10 pb-[100px] text-center">
        <h4>Explore Destinations and Travel Packages</h4>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
