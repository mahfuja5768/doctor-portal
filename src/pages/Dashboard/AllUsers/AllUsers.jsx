import { useQuery } from "@tanstack/react-query";
import { da } from "date-fns/locale";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Make admin successfully.');
            refetch()
        }
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">All Users</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-100">
              <tr className="text-black bg-base-200">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    { user?.role !== 'admin' &&
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-secondary text-white"
                      >
                        Make Admin
                      </button>
                    }
                  </td>
                  <td>
                    <button className="btn btn-xs btn-error text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
