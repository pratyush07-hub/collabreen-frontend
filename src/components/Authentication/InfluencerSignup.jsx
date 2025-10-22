import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function InfluencerSignup() {
  const [name, setName] = useState("");
  const [instaHandle, setInstagramHandle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showOtpSection, setShowOtpSection] = useState(false);

  const inputRefs = useRef([]);
  const otpSectionRef = useRef(null);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    // Clear current value
    const updatedOtp = [...otp];
    updatedOtp[index] = "";
    setOtp(updatedOtp);

    // Move focus to previous input if not first
    if (index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  }
};

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
    if (showOtpSection && otpSectionRef.current) {
      otpSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showOtpSection]);

  const handleOtpSubmit = async () => {
    const otpCode = otp.join("");
    console.log(Cookies.get("jwt"));
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/influencer/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
          body: JSON.stringify({ otpCode }),
        }
      );
    

      if (response.ok) {
        const data = await response.json();
        Cookies.set("jwt", data.token);
    
        if (data.msg) {
          navigate("/influencer-insights" , { state: { userDetails: data.userDetails } });
        }
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setOtp(["", "", "", "", "", ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      instaHandle,
      email,
      phoneNumber,
      country,
      gender,
      message,
    };

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/influencer/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Register Response", response);

      if (response.ok) {
        const data = await response.json();
        setShowOtpSection(true);
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
              Influencer Registration
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
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
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
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
                  placeholder="Enter your Instagram handle"
                  value={instaHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
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
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="mb-4">
                <label className="font-roboto font-medium text-lg block">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter your country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-[390px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
              <div className="mb-4">
                <label className="font-roboto font-medium text-lg block">
                  Gender
                </label>
                <input
                  type="text"
                  placeholder="Enter your Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-[390px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="font-roboto font-medium text-lg block">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[131px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
            >
              Signup
            </button>
          </div>
        </form>
      </div>

      {showOtpSection && (
        <div ref={otpSectionRef} className="flex justify-center mt-20 mb-20">
          <div>
            <div className="text-white font-sf text-center mb-16 text-3xl sm:text-5xl font-medium ">
              For OTP Verification
            </div>
            <div
              className="w-full max-w-[868px] h-auto bg-cover bg-center text-white flex justify-center items-center rounded-[50px] py-10"
              style={{ backgroundImage: `url(${Frame})` }}
            >
              <div className="w-full px-4 sm:px-10">
                <div className="text-center">
                  <h1 className="text-[#F5ADB2] font-sf font-medium text-4xl sm:text-5xl">
                    Verify Your ID
                  </h1>
                  <p className="font-roboto font-light text-base mt-2">
                    A Verification code has been sent to your Email
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold font-sf text-white mt-10 sm:mt-20 mb-4">
                    Enter Code
                  </h1>
                
                <div className="flex text-white gap-4 justify-center">
  {[...Array(6)].map((_, index) => (
    <input
      key={index}
      className="h-[60px] w-[80px] text-xl text-center bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px]"
      type="text"
      maxLength="1"
      value={otp[index] || ""}
      ref={(el) => (inputRefs.current[index] = el)}
      onChange={(e) => handleOtpChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  ))}
</div>

                  <h1 className="font-semibold font-sf text-green-300 cursor-pointer hover:underline mt-4 text-right">
                    Resend Code
                  </h1>
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleOtpSubmit}
                      className="bg-[#F5ADB2] text-white py-2 px-6 rounded-full text-lg font-sf font-semibold"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfluencerSignup;
