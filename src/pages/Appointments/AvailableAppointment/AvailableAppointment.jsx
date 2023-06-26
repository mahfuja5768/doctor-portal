import { format } from "date-fns";
import { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [], refetch , isLoading} = useQuery({
    queryKey: ["appointmentOption", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOption?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOption")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointmentOptions(data);
  //     });
  // }, []);

  return (
    <section className="mt-20">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-primary">
          Available Services on {format(selectedDate, "PP")}
        </h1>
        <h1 className=" text-xl ">Please select a service.</h1>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment /* optional chaining */ && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
