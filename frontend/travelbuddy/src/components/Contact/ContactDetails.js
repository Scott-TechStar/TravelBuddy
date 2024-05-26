import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

function ContactDetails() {
  return (
    <div className="bg-zinc-800 mt-20 py-40">
      <div className="ContactDetails flex justify-center max-w-[1440px] w-full ">
        <div className="flex flex-col justify-center  px-10 md:px-16  sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10 divide-x">
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                <PlaceIcon className="bigIcon"></PlaceIcon>
              </div>
              <h5>Kenya</h5>
              <p className="p4">Mtwapa, Mombasa</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                <AccessAlarmIcon className="bigIcon"></AccessAlarmIcon>
              </div>
              <h5>Business Hour</h5>
              <p className="p4">Mon - Sun 09:00 - 20:00</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                <CallSharpIcon className="bigIcon"></CallSharpIcon>
              </div>
              <h5>Call Us</h5>
              <p className="p4">+254 718 800 384</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
                <EmailIcon className="bigIcon"></EmailIcon>
              </div>
              <h5>Email Us</h5>
              <p className="p4">johnniekips@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
