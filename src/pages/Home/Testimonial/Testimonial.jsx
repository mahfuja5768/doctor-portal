import React from "react";
import quoat from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location:'California',
        img: people1
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location:'California',
        img: people2
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location:'California',
        img: people3
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-primary text-xl mb-2">Testimonial</h4>
          <h2 className="text-5xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quoat} className="lg:w-48 w-24" alt="" />
        </div>
      </div>

      <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            reviews.map(reviewMsg =><Review 
             key={reviewMsg._id}
             reviewMsg={reviewMsg}
            ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
