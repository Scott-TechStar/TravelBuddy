import { React, useState } from "react";

function ContactFormSection() {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`Form Submited!         
         Thanks ${inputs.firstName}  for your feedback. You will hear from us soon.`);
    }

    setInputs("");
  };

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="ContactFormSection  w-full">
      <div className="flex flex-col md:flex-row justify-between flex-wrap max-w-1440  p-10 pt-20  sm:px-20 md:px-[80px] lg:px-[200px] align-middle ">
        <div className=" mb-10">
          <div className="bg-zinc-800 w-90% rounded-[50px] rounded-tr-none p-8 text-left min-w-[400px] max-w-[500px]">
            <form onSubmit={handleSubmit} action="" method="">
              <div>
                <h5 className="font-thin pb-4 text-5xl">Get In Touch</h5>
                <p> Have questions or need assistance with your travel plans? At
                  Travelbuddy, we're here to help. Whether you're looking for
                  travel tips, booking assistance, or have any inquiries about
                  our services, feel free to reach out to us. We respond within
                  2 hours.</p>
              </div>

              <div>
                <label className="">Full Name</label>
                <input className="formInput" type="text" name="name" onChange={handleInputChange} value={inputs.name} placeholder="Enter full name" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Email Address</label>
                  <input className="formInput" type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="email@email.com" required />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input className="formInput" type="number" name="phoneNumber" onChange={handleInputChange} placeholder="Enter Phone number" value={inputs.phoneNumber} required />
                </div>
              </div>
              <div>
                <label>Message</label>
                <textarea className="formInput h-[100px]" type="textarea" name="message" onChange={handleInputChange} placeholder="" value={inputs.message} required />
              </div>
              <div className="mx-auto text-center text-xl">
                <button type="submit button" className="px-8 py-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="min-w-[300px] max-w-[500px]">
          <div className="px-6">
            <h4>FAQ</h4>
            <p className="">Here are some common questions and answers about Travelbuddy.</p>
            <div className="pl-2 text-l">
              <p className="border-b-2 py-6 quest">
                <span className="font-bold]">+</span> <b>What is Travelbuddy?</b>
                <p>
                Travelbuddy is your ultimate travel companion, offering a range
                of services from booking flights and hotels to providing travel
                tips and guides.
              </p>
              </p>
              
              <p className="border-b-2 py-6 quest">
                <span className="font-bold]">+</span> <b>How do I book a trip with
                Travelbuddy?</b>
                <p>
                You can easily book a trip through our website or mobile app.
                Simply search for your destination, select your preferred
                options, and proceed with the booking process.
              </p>
              </p>
              <p className="border-b-2 py-6 quest">
                <span className="font-bold]">+</span> <b>Can I cancel or modify my
                booking?</b>
                <p>
                Yes, you can cancel or modify your booking through our platform.
                Please refer to our cancellation policy for more details.
              </p>
              </p>
              <p className="border-b-2 py-6 quest">
                <span className="font-bold] ">+</span> <b>What destinations does
                Travelbuddy cover?</b>
                <p>
                Travelbuddy covers a wide range of destinations worldwide. You
                can explore popular destinations or find hidden gems with our
                extensive travel guides.
              </p>
              </p>
              <p className="border-b-2 py-6 quest">
                <span className="font-bold]" >+</span> <b>How can I contact
                Travelbuddy for support?</b>
                <p>
                You can contact our support team via the contact form on our
                website, email, or phone. We are available 24/7 to assist you
                with any inquiries.
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormSection;
