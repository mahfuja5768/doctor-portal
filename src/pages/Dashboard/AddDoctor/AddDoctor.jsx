import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
    const imageHostKey = '2aa18a7d0ef3b3a5380c411aa7b555f6';
    // console.log(imageHostKey);

    const {data: specialties = [], isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = res.json();
            return data
        }
    })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method:"POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      if(imgData.status){
        //  console.log(imgData.data.url)
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url,
        }

        fetch('http://localhost:5000/doctors', {
          method:"POST",
          headers: {
            'content-type' : 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          toast.success(`${data.name} is added successfully.`);
          navigate('/dashboard/manageDoctors')
        })
         
      }
    })
  };
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="w-96 p-7">
      <h2 className="text-2xl font-bold">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register('specialty')} className="input-bordered select select-ghost w-full max-w-xs">
            {
              specialties?.map(specialty =><option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
            }
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="input input-bordered w-full"
          />
        </div>
        <input
          type="submit"
          value="Add Doctor"
          className="btn btn-accent w-full mt-5"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
