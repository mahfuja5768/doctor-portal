

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { _id, name, slots } = appointmentOption;


  return (
    <div className="mt-10">
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="card-body ">
          <h2 className=" text-primary font-semibold text-2xl mb-5">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try another day "}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={()=> setTreatment(appointmentOption)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
