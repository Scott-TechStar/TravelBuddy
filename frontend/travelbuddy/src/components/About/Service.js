import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CasesIcon from '@mui/icons-material/Cases';
import RoomIcon from '@mui/icons-material/Room';

const Service = (props) => {
  // TODO: use the right icons for each service.

  return (
    <div>
      <div className="max-w-[1440px] ml-16 mx-auto py-10  flex-col justify-between text-center md:flex-row relative">
        {/* property-card-container */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 py-10">
          <div>
            {/* section label */}
            <div className="p-6 md:text-left md:mt-[8s%]">
              <h3 className="text-purple-700 "> {props.label} </h3>
              <h2 className="md:max-w-[70%]font-bold mt-6 text-4xl">{props.header}</h2>
              <p className="text-2xl font-extralight mt-4"> {props.text} </p>
            </div>
          </div>
          <div className="md:ml-8 grid grid-cols-2 gap-4 md:gap-x-8 text-left mr-16">
            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <TravelExploreIcon className="bigIcon"></TravelExploreIcon>
              <h4>Discover Destinations</h4>
              <p>Explore a wide range of destinations worldwide and find the perfect place for your next adventure.</p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <GroupIcon className="bigIcon"></GroupIcon>
              <h4>Connect with Experts</h4>
              <p>Get insider tips and personalized recommendations from experienced local guides in your destination.</p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <CasesIcon className="bigIcon"></CasesIcon>
              <h4>Book Experiences</h4>
              <p>Book flights, accommodations, and activities effortlessly with our user-friendly platform.</p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <RoomIcon className="bigIcon"></RoomIcon>
              <h4>Plan Your Itinerary</h4>
              <p>Plan your itinerary with ease and ensure every detail of your trip is covered.</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 pb-8 items-center md:absolute top-[67%] left-[-41%]">
          <button className="mt-6">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
