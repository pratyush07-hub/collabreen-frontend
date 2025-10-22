import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";
import { useNavigate } from "react-router-dom";
import CollabReen from "../../assets/collab-reen.png";
import Footer from "../Footer";

function ScheduleMeeting() {
  const [formData, setFormData] = useState({
    meetingName: "",
    meetingHost: "",
    meetingDate: "",
    meetingTime: "",
    meetingDuration: "",
    meetingPlatform: "Google Meet", // Default
    description: "",
  });
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/register`, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwt", data.token);
        navigate("/explore");
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
              Schedule Meeting
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
            {/* Meeting Name and Host */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Name
                </label>
                <input
                  type="text"
                  name="meetingName"
                  value={formData.meetingName}
                  onChange={handleChange}
                  placeholder="Enter meeting name"
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Host
                </label>
                <input
                  type="text"
                  name="meetingHost"
                  value={formData.meetingHost}
                  onChange={handleChange}
                  placeholder="Enter host name"
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
            </div>

            {/* Meeting Date and Time */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Date
                </label>
                <input
                  type="date"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 cursor-pointer"
                  onFocus={(e) => e.target.showPicker()}
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Time
                </label>
                <input
                  type="time"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 cursor-pointer"
                  onFocus={(e) => e.target.showPicker()}
                />
              </div>
            </div>

            {/* Meeting Duration and Platform */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Duration
                </label>
                <input
                  type="text"
                  name="meetingDuration"
                  value={formData.meetingDuration}
                  onChange={handleChange}
                  placeholder="e.g., 1 hour"
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Meeting Platform
                </label>
                <select
                  name="meetingPlatform"
                  value={formData.meetingPlatform}
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-[#2a2a2a] text-white p-4"
                >
                  <option value="Google Meet">Google Meet</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Microsoft Teams">Microsoft Teams</option>
                  <option value="Skype">Skype</option>
                  <option value="Webex">Webex</option>
                </select>
              </div>
            </div>

            {/* Meeting Description */}
            <div className="mb-4">
              <label className="font-roboto font-medium text-lg block">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter meeting description"
                className="w-full h-[131px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <img src={CollabReen} alt="Collaboration" />
      </div>
      <Footer></Footer>
    </>
  );
}

export default ScheduleMeeting;
