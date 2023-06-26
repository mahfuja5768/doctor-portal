import React from "react";

const Review = ({ reviewMsg }) => {
  const { _id, name, img, location, review } = reviewMsg;

  return (
    <div className="mb-20">
      <div className="card w-96  shadow-xl p-3">
        <div className="card-body">
          <p>{review}</p>
          <div className="flex items-center mt-5">
          <div>
                <img src={img} className="me-5 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" alt="" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{name}</h3>  
              <h4 className="text-md font-semibold">{location}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
