import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { json } from "react-router-dom";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment , refetch}) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
        appointmentDate: date,
        treatment: treatment.name,
        patient: name,
        slot,
        email,
        phone,
    }

    /* send data to the server */
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        console.log(data);
        setTreatment(null);
        toast.success('Booking confirm.');
        refetch();
      }
      else{
        toast.error(data.message);
      }
    })
  
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
            <input
              value={date}
              disabled
              type="text"
              placeholder="Type here"
              className="input input-bordered  w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered  w-full"
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered  w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered  w-full"
              readOnly
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
