import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading";

export default function AddDoctors() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // img hosting server api key
  const imageHostKey = import.meta.env.VITE_imgbb_key;

  // load specialty data
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-teal.vercel.app/appointment-specialty");
      const data = await res.json();
      return data.result;
    },
  });

  // add doctor handler
  const handleAddDoctor = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image = imgData?.data?.image?.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image,
          };
          console.log(doctor);
          // save doctor's to server
          axios
            .post("https://doctors-portal-server-teal.vercel.app/doctors", doctor, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("dpt")}`,
              },
            })
            .then((res) => {
              if (res.data.result.acknowledged) {
                toast.success("Doctor added successfully");
                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };

  // loading spinner
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl font-bold mb-7">Add a New Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)} className="mx-4 w-1/2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-red-500 mt-2">{errors.name.message}</small>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <small className="text-red-500 mt-2">
              {errors?.email?.message}
            </small>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label"></label>
          <span className="label-text">Specialty</span>
          <select
            {...register("specialty", { required: "Specialty is required" })}
            className="select select-bordered mt-4 w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <small className="text-red-500 mt-2">
              {errors.specialty.message}
            </small>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("img", { required: "Photo is required" })}
          />
          {errors.img && (
            <small className="text-red-500 mt-2">{errors?.img?.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-accent w-full text-white my-4"
          value="Login"
        />
      </form>
    </div>
  );
}