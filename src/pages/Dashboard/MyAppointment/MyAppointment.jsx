import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { da, tr } from "date-fns/locale";

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold"> My Appointment</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-100 text-black">
              <tr className="bg-base-200">
                <th></th>
                <th>NAME</th>
                <th>TREATMENT</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
               {
                bookings?.map((booking, i) =>
                    <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                    </tr>
                    )
               }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
