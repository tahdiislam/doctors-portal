import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";

const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { logInUser, providerSignIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handle form submit
  const handleFormSubmit = (data) => {
    // log in registered user
    logInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully.");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // google sign in handler 
  const handleGoogleSignIn = () => {
    providerSignIn(googleProvider)
    .then(result => {
      toast.success("Sign in successfully.")
      navigate(from, { replace: true });
    })
    .catch(err => console.log(err))
  }
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
        <p className="text-center">
          <small>
            New to docotor's portal?{" "}
            <Link className="text-primary hover:underline" to="/register">
              Create new account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-accent btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
