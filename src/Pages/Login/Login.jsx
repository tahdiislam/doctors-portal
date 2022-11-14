import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";

const Login = () => {
    const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  const {logInUser} = useContext(UserContext)

  // handle form submit
  const handleFormSubmit = (data) => {
    // log in registered user
    logInUser(data.email, data.password)
    .then(result => {
        console.log(result.user);
    })
    .catch(err => {
        console.log(err.message);
    })
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
            />
            <label className="label">
              <span className="label-text-alt">Forgot Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full text-white my-4"
            value="Login"
          />
        </form>
        <p className="text-center"><small>New to docotor's portal? <Link className="text-primary hover:underline" to="/register">Create new account</Link></small></p>
        <div className="divider">OR</div>
        <button className="btn btn-accent btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
