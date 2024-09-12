import React from "react";
import banner from "../../public/image.png"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Banner() {
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to handle button click
  const handleGetStarted = () => {
    authUser ? navigate("/course") : navigate("/signup");  // Navigate to the signup page
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="space-y-12 mt-12 md:mt-32">
            <h1 className="text-2xl md:text-4xl font-bold ">
              Hello !! Welcome to the <br/>
              <span className="text-pink-500"> Book Haven Application !!</span>
            </h1>
            <p className="md:text-xl">
            At Book Haven, every book has the power to inspire, educate, and transport you to new worlds. Whether you're a reader, explorer, or gift-seeker, our collection has something for everyone.</p>
            {/* <label className="input input-bordered flex items-center gap-2 dark:bg-white dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:bg-white dark:text-black" placeholder="Email" />
            </label> */}
          </div>
          <button className="btn btn-secondary bg-pink-400 mt-12" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="w-full md:w-1/2 order-1 ">
            <div className="mt-28 md:ml-32">
            <img src= {banner} className="w-92 h-92 rounded-3xl border-solid" alt=""></img>
            </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
