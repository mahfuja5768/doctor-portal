import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import Service from "./Service";
import Care from "./Care";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img1
    },
    {
      id: 2,
      name: "Cavity Filling",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img2
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img3
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-2xl mb-2 font-bold text-secondary">OUR SERVICES</h2>
        <h3 className="text-3xl mb-10">Services We Provide</h3>
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {
            servicesData.map(service=><Service
               key={service.id}
               service={service}
            ></Service>)
        }
      </div>

      <div className="mt-20">
      <Care></Care>
      </div>
  
    </div>
  );
};

export default Services;
