import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Signin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const response = await fetch(`${BACKEND_URL}/api/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.userDetails.isVerified === false) {
          alert("Please verify your email before signing in.");
          return;
        } else if (data.userDetails.role === "user" || "influencer") {
          Cookies.set("jwt", data.token);
          Cookies.set("user", JSON.stringify(data.userDetails));
          console.log(data.userDetails)
          navigate("/influencer-insights", { state: { userDetails: data.userDetails } });
        } else {
          Cookies.set("jwt", data.token);
          navigate("/BrandDashBoard");
        }
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="bg-[#0C0C0C] rounded-3xl shadow overflow-hidden h-auto md:h-[530px] relative mb-10 mt-40 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Heading Background"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Sign Up
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis pulvinar placerat cras duis.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-40 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[868px] h-auto bg-cover bg-center text-white flex justify-center items-center py-20 rounded-[50px]"
          style={{ backgroundImage: `url(${Frame})` }}
        >
          <div className="form-container text-white w-full px-4">
            <div className="flex flex-col gap-6 items-center mb-4">
              <div className="w-full max-w-md">
                <label className="font-roboto font-medium text-lg block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[60px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white px-4"
                />
              </div>
              <div className="w-full max-w-md">
                <label className="font-roboto font-medium text-lg block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[60px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white px-4"
                />
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-5 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
                >
                  Sign In
                </button>
                <Link to="/signup">
                  <button className="text-center mt-10 underline hover:text-white text-[#efac16]">
                    Don't have an account?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
