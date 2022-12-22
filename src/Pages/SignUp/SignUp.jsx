import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
import GridLoader from "react-spinners/GridLoader";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  // get user access token
  const [token] = useToken(createdUserEmail);
  if (token) {
    navigate("/");
  }

  const { createUser, userProfileUpdate, loading, setLoading } =
    useContext(UserContext);
  // form submit handler
  const handleFormSubmit = (data) => {
    const userInfo = {
      displayName: data.name,
    };
    // create user with email and password
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Account created successfully");
        // update profile
        userProfileUpdate(userInfo)
          .then(() => {
            saveUser(result.user.displayName, result.user.email);
          })
          .catch((err) => {
            console.log(err);
            toast.error(
              err.message
                .split("Firebase: ")
                .join("")
                .split(" (")
                .join(": ")
                .split("/")
                .join(" ")
                .split("-")
                .join(" ")
                .split(")")
                .join("")
            );
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.message
            .split("Firebase: ")
            .join("")
            .split(" (")
            .join(": ")
            .split("/")
            .join(" ")
            .split("-")
            .join(" ")
            .split(")")
            .join("")
        );
        setLoading(false);
      });
  };

  // post user data to server
  const saveUser = (name, email) => {
    const user = { name, email };
    axios
      .post("https://doctors-portal-server-teal.vercel.app/users", user)
      .then((res) => {
        setCreatedUserEmail(email);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[650px] flex justify-center items-center">
      {loading ? (
        <GridLoader
          color={"#10CEE7"}
          loading={loading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="w-96 p-7 shadow-lg rounded-lg border border-gray-300">
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
                <small className="text-red-500 mt-2">
                  {errors.name.message}
                </small>
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
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password length should be 8",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have 1 capital letter, one special sign(!@#$&*), and one number",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">Forgot Password?</span>
              </label>
              {errors.password && (
                <small className="text-red-500">
                  {errors.password.message}
                </small>
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
      )}
    </div>
  );
};

export default SignUp;
