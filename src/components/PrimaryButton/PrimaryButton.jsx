import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <div>
      <button className="btn btn-primary h-14 bg-gradient-to-r from-secondary to-primary text-white    ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
