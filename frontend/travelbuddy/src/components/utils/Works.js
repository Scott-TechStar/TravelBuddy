import React from "react";
import {FaPlane, FaMapMarkedAlt, FaHandshake, FaHome } from "react-icons/fa";

const Works = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6 text-center">
              <div className=" text-center  pt-6">
              <FaPlane className="text-blue-500 mb-4 text-4xl mx-auto" />
                <h6>Plan Your Trip</h6>
                <p className="text-[12px]">Decide on your destination, budget, and travel dates.</p>
                <p className="text-[12px] ">
                Check out our travel planning tips{" "}
                  <a className="text-violet-600" href="">
                    Here
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
              <FaMapMarkedAlt className="text-blue-500 mb-4 text-4xl mx-auto" />
                <h6>Find Your Destination</h6>
                <p className="text-[12px]">
                Use our extensive search tool to find the perfect place for your holiday.
                  <br />
                  <a className="text-violet-600" href="">
                  Explore Destinations
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
              <FaHandshake className="text-blue-500 mb-4 text-4xl mx-auto" />
                <h6>Book Your Stay</h6>
                <p className="text-[12px]">
                Connect with our agents and book your accommodation.
                  <br />
                  <a className="text-violet-600" href="">
                  Book Now
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-[50px] rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
              <FaHome className="text-blue-500 mb-4 text-4xl mx-auto" />
                <h6>Enjoy Your Stay</h6>

                <p className="text-[12px]">
                Relax and enjoy your holiday with peace of mind. Your perfect getaway awaits. <br />
                  <a className="text-violet-600" href="">
                  Client Stories
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
