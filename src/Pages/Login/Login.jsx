import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
import GridLoader from "react-spinners/GridLoader";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { logInUser, providerSignIn, loading, setLoading } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    toast.success("Login successfully");
    navigate(from, { replace: true });
  }

  // handle form submit
  const handleFormSubmit = (data) => {
    // log in registered user
    logInUser(data.email, data.password)
      .then((result) => {
        setLoginUserEmail(result.user.email);
      })
      .catch((err) => {
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

  // google sign in handler
  const handleGoogleSignIn = () => {
    providerSignIn(googleProvider)
      .then((result) => {
        toast.success("Sign in successfully.");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      {loading ? (
        <GridLoader
          color={"#10CEE7"}
          loading={loading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="w-96 p-7 shadow-lg border border-gray-300 rounded-lg">
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
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-accent btn-outline w-full"
          >
            Continue With Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
