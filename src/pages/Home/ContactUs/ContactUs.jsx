import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import imgBg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="py-10  " 
    style={{ background: `url(${imgBg})`, backgroundSize:'cover' }}
    >
      <div
        className="md:w-96  mx-auto mt-20 text-center w-72"
      >
        <h4 className="font-bold text-primary text-xl mb-2">Contact Us</h4>
        <h2 className="font-bold text-xl text-white mb-10">Stay connected with us</h2>
        <div>
          <div className="form-control mb-3">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-3">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your message"
              className="input input-bordered "
            />
          </div>
          <div className="form-control mt-6">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
