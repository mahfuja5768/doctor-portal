import React from "react";
import img from "../../assets/images/doctor.png";
import imgBg from "../../assets/images/appointment.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32"
       style={{
        background:`url(${imgBg})`,
        backgroundSize:'cover'
       }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="lg:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-32"  />
          <div className="ms-10 lg:p-5">
            <h4 className="font-bold text-secondary text-xl mb-5">Appointment</h4>
            <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
