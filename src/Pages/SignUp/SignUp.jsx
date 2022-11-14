import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // form submit handler
  const handleFormSubmit = data => {
    console.log(data);
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
              <small className="text-red-500 mt-2">{errors.email.message}</small>
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
              <small className="text-red-500 mt-2">{errors.email.message}</small>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required", minLength: {
                value: 8,
                message: "Password length should be 8"
              }, pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"}})}
            />
            <label className="label">
              <span className="label-text-alt">Forgot Password?</span>
            </label>
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full text-white my-4"
            value="Login"
          />
        </form>
        <p className="text-center">
          <small>
            Already have an account?{" "}
            <Link className="text-primary hover:underline" to="/login">
              log in here
            </Link>
          </small>
        </p>
        <div className="divider"></div>
        <button className="btn btn-accent btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
