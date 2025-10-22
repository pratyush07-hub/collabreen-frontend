import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../Footer";
function CampaignRegistration() {
  const [campaignName, setCampaignName] = useState("");
  const [campaignCategory, setCampaignCategory] = useState("");
  const [campaignDuration, setCampaignDuration] = useState("");
  const [targetAgeGroup, setTargetAgeGroup] = useState("");
  const [targetRegion, setTargetRegion] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredContent, setPreferredContent] = useState();
  const [description, setDescription] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      campaignName,
      preferredContent: preferredContent.toLowerCase(),
      category: campaignCategory,
      duration: campaignDuration,
      ageGroup: targetAgeGroup,
      targetRegion,
      budget,
      description,
    };

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/campaign/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/plans");
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
            {/* Campaign Name and Category */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="campaignName"
                  placeholder="Enter campaign name"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Campaign Category
                </label>
                <input
                  type="text"
                  name="campaignCategory"
                  placeholder="Enter campaign category"
                  value={campaignCategory}
                  onChange={(e) => setCampaignCategory(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
            </div>

            {/* Campaign Duration and Target Age Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Campaign Duration
                </label>
                <input
                  type="text"
                  name="campaignDuration"
                  placeholder="Enter campaign duration"
                  value={campaignDuration}
                  onChange={(e) => setCampaignDuration(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Target Age Group
                </label>
                <input
                  type="text"
                  name="targetAgeGroup"
                  placeholder="Enter target age group"
                  value={targetAgeGroup}
                  onChange={(e) => setTargetAgeGroup(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
            </div>

            {/* Target Region and Budget */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Target Region
                </label>
                <input
                  type="text"
                  name="targetRegion"
                  placeholder="Enter target region"
                  value={targetRegion}
                  onChange={(e) => setTargetRegion(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Enter budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="font-roboto font-medium text-lg block">
                  Preferred Content
                </label>
                <select
                  name="preferredContent"
                  value={preferredContent}
                  onChange={(e) => setPreferredContent(e.target.value)}
                  className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-2"
                >
                  <option value="" className="bg-black">
                    Select Content Type
                  </option>
                  <option className="bg-black" value="reels">
                    Reels
                  </option>
                  <option className="bg-black" value="posts">
                    Posts
                  </option>
                  <option className="bg-black" value="both">
                    Both
                  </option>
                </select>
              </div>
            </div>

            {/* Campaign Description */}
            <div className="mb-4">
              <label className="font-roboto font-medium text-lg block">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter campaign description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-[131px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <Footer></Footer>
      </div>
    </>
  );
}

export default CampaignRegistration;
