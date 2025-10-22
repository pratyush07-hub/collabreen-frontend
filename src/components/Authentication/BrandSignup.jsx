import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Cookies from "js-cookie"
import { GoUpload } from "react-icons/go";

function BrandSignup() {
  const [brandName, setName] = useState("");
  const [instaHandle, setInstagramHandle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData={
      brandName,
      instaHandle,
      email,
      phoneNumber,
      country,
      message
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/brand/register`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${Cookies.get("jwt")}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set("jwt", data.token);
        Cookies.set("user", data.userDetails);
        navigate("/");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="bg-[#0C0C0C] rounded-3xl shadow border-[#] overflow-hidden h-auto md:h-[530px] relative mb-10 mt-40 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Brand Registration
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis pulvinar placerat
              placerat cras duis.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-20 md:mt-40 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[868px] h-auto bg-cover bg-center text-white flex justify-center items-center py-20 rounded-[50px]"
          style={{ backgroundImage: `url(${Frame})` }}
        >
          <div className="form-container text-white w-full px-4 md:px-10">
            {/* Name and Instagram Handle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={brandName}
                  placeholder="Enter your full brand name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={instaHandle}
                  placeholder="Enter your Instagram handle"
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="font-roboto font-medium text-lg block">
                Country
              </label>
              <input
                type="text"
                value={country}
                placeholder="Enter your country"
                onChange={(e) => setCountry(e.target.value)}
                className="w-[390px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
              />
            </div>

            {/* File Upload */}
            <div className="mb-4 flex flex-col items-center justify-center">
              <label className="font-roboto font-medium text-lg block mb-2">
                Upload File
              </label>
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center h-[131px] w-full rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 cursor-pointer"
              >
                <GoUpload className="text-4xl mb-2" />
                <h1 className="text-center">
                  Drag or click anywhere in the box
                </h1>
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="font-roboto font-medium text-lg block">
                Message
              </label>
              <textarea
                value={message}
                placeholder="Enter your message or additional details"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[131px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-6 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <Footer />
      </div>
    </>
  );
}

export default BrandSignup;
