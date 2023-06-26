import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import ConfirmationModal from "../../Shared/confirmationModal/confirmationModal";
import { toast } from "react-hot-toast";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            console.log(data);
            setDeletingDoctor(null);
            toast.success(`Successfully deleted ${data.name}`);
            refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="font-bold text-xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}, you cann't undo it.`}
          successActionBtnName="Delete"
          successAction={handleDelete}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
