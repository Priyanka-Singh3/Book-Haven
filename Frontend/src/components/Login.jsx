
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { setAuthUser } = useAuth(); // Get setAuthUser from context
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };

    try {
      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      const { user } = response.data;

      if (response.data) {
        toast.success('Logged In Successfully!');
        document.getElementById("my_modal_3").close();
        setAuthUser({ ...user}); // Update the context with user and token
        localStorage.setItem("Users", JSON.stringify({ ...user }));

        setTimeout(() => {
          // window.location.reload();
          navigate("/")
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  
  return (
    <div className='dark:bg-white dark:text-black'>
      <dialog id="my_modal_3" className="modal dark:bg-white dark:text-black">
        <div className="modal-box dark:bg-white dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg dark:bg-white dark:text-black">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
