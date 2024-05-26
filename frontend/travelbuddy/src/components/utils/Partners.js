import React from "react";
import { GiSpookyHouse, GiTreehouse, GiSydneyOperaHouse, GiFamilyHouse } from "react-icons/gi";

const Partners = () => {
  return (
    <div className="Patners">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="flex">
              <GiSpookyHouse className="text-3xl mr-4 text-orange-600" />
              <span>Unique Stays</span>
            </div>
            <div className="flex">
              <GiTreehouse className="text-3xl mr-4 text-orange-600" />
              <p>Treehouse Adventures</p>
            </div>
            <div className="flex">
              <GiSydneyOperaHouse className="text-3xl mr-4 text-orange-600" />
              <p>City Tours</p>
            </div>
            <div className="flex">
              <GiFamilyHouse className="text-3xl mr-4 text-orange-600" />
              <p>Family Resorts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
