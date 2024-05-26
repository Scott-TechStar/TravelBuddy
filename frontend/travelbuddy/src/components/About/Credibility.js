import React, { useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaToolbox } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
const Credibility = (props) => {
  return (
    <div className="Credibility w-full max-w-[1440px] my-20 ">
      {/* section label */}
      <div className="pb-6 text-center">
        <h3 className="text-purple-700"> {props.header} </h3>
        <h5 className="pt-4"> {props.text} </h5>
      </div>

      <div className="flex flex-col justify-center  px-10 md:px-16 sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="text-center">
          <div className="bg-zinc-800 rounded-[50px] rounded-tr-none hover:border border-zinc-400 duration-500 text-center px-8 py-10 inline-block w-[280px] ">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <VscWorkspaceTrusted />
              </p>
            </div>
            <h5 className=" text-purple-500 text-[20px] ">
            Discover Your Dream Destinations
            </h5>
            <p className="text-[18px]">
            Explore a wide range of destinations worldwide and find the perfect place for your next adventure.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-[50px] rounded-tr-none hover:border border-zinc-400 duration-500 text-center px-8 py-10 inline-block w-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <div className="bg-zinc-300 p-2 rounded-full text-[33px]">
                <GrUserExpert />
              </div>
            </div>
            <h5 className=" text-purple-500 text-[20px] ">Connect with Local Experts</h5>
            <p className="text-[18px]">
            Get insider tips and personalized recommendations from experienced local guides in your destination.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-[50px] rounded-tr-none hover:border border-zinc-400 duration-500 text-center px-8 py-10 inline-block w-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <FaToolbox />
              </p>
            </div>
            <h5 className=" text-purple-500 text-[20px] ">Seamless Booking Experience</h5>
            <p className="text-[18px]">
            Book flights, accommodations, and activities effortlessly with our user-friendly platform.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-[50px] rounded-tr-none hover:border border-zinc-400 duration-500 text-center px-8 py-10 inline-block w-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <FaClock />
              </p>
            </div>
            <h5 className=" text-purple-500 text-[20px] ">Reliable and Timely Service</h5>
            <p className="text-[18px]">
            Count on us to deliver high-quality service and support to ensure your travel plans are executed seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credibility;
