import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Profile from "../../assets/Campaign/Profile.png";
import Instagram from "../../assets/Campaign/instagram_yellow.png";
import Facebook from "../../assets/Campaign/facebook_yellow.png";

const socialMediaData = [
  {
    id: 1,
    icon: <FaInstagram className="text-[#F5ADB2]" />,
    followers: "100k",
    bgColor: "#2a2a2a",
  },
  {
    id: 2,
    icon: <FaFacebook className="text-[#F5ADB2]" />,
    followers: "200k",
    bgColor: "#2a2a2a",
  },
  {
    id: 3,
    icon: <FaTwitter className="text-[#F5ADB2]" />,
    followers: "150k",
    bgColor: "#2a2a2a",
  },
  {
    id: 4,
    icon: <FaYoutube className="text-[#F5ADB2]" />,
    followers: "300k",
    bgColor: "#2a2a2a",
  },
];
const campaigns = [
  {
    name: "Campaign 1",
    color: "#EFAC16",
    profileCount: 5,
    startDate: "15 Aug",
    endDate: "15 Sept",
    progress: 50,
  },
  {
    name: "Campaign 2",
    color: "#93B076",
    profileCount: 10,
    startDate: "1 Sept",
    endDate: "1 Oct",
    progress: 30,
  },
  {
    name: "Campaign 3",
    color: "#F5ADB2",
    profileCount: 3,
    startDate: "10 Sept",
    endDate: "10 Oct",
    progress: 70,
  },
];

function BrandDetails() {
  return (
    <div className="mx-4 ">
      <div className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/30 border border-stone-400 w-full  rounded-lg px-4 text-white py-4">
        <div className="mt-6 flex gap-6">
          <div className="bg-[#93B076] h-[88px] w-[88px] rounded-xl"></div>
          <div>
            <p className="font-bold text-xl font-sf">Brand Name</p>
            <p className="text-stone-400">@brandID</p>
          </div>
        </div>
        {/* details */}
        <div>
          <div className="mt-3">
            <p className="font-bold text-lg font-sf">Category</p>
            <p className="text-stone-400 mt-2">Styling, Fashion</p>
          </div>
        </div>
        {/* detials */}
        <div className="flex gap-6 mt-10">
          {/* Followers */}
          <div className="flex-1">
            <h1 className="font-sf font-bold mb-4">Followers</h1>
            <div className="grid grid-cols-2 gap-4">
              {socialMediaData.map((social) => (
                <div key={social.id} className="flex gap-2 items-center">
                  <div
                    className="w-[38px] h-[34px] rounded flex items-center justify-center"
                    style={{ backgroundColor: social.bgColor }}
                  >
                    {social.icon}
                  </div>
                  <p>{social.followers}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-[2px] border-[#F5ADB2] h-[100px] mt-10"></div>{" "}
          {/* Average Views */}
          <div className="flex-1">
            <h1 className="font-sf font-bold mb-4">Average Views</h1>
            <div className="grid grid-cols-2 gap-4">
              {socialMediaData.map((social) => (
                <div key={social.id} className="flex gap-2 items-center">
                  <div
                    className="w-[38px] h-[34px] rounded flex items-center justify-center"
                    style={{ backgroundColor: social.bgColor }}
                  >
                    {social.icon}
                  </div>
                  <p>{social.followers}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-[2px] border-[#F5ADB2] h-[100px] mt-10"></div>{" "}
          {/* Average Likes */}
          <div className="flex-1">
            <h1 className="font-sf font-bold mb-4">Average Likes</h1>
            <div className="grid grid-cols-2 gap-4">
              {socialMediaData.map((social) => (
                <div key={social.id} className="flex gap-2 items-center">
                  <div
                    className="w-[38px] h-[34px] rounded flex items-center justify-center"
                    style={{ backgroundColor: social.bgColor }}
                  >
                    {social.icon}
                  </div>
                  <p>{social.followers}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <div className="mt-10">
            <h1 className="font-sf font-bold text-lg">Brand Description</h1>
            <p className="text-stone-300 text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur. Leo dui vitae ut in. Magna
              egestas tincidunt aliquam sit risus amet. In vestibulum id massa
              posuere adipiscing. Lorem ipsum dolor sit amet consectetur. Leo
              dui vitae ut in. Magna egestas tincidunt aliquam sit risus amet.
              In vestibulum id massa posuere adipiscing.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-sf font-bold text-lg">
              Brand Tone & Personality:
            </h1>
            <p className="text-stone-300 text-lg mt-2">
              LLorem ipsum dolor sit amet consectetur. Leo dui vitae ut in.
              Magna egestas tincidunt aliquam sit risus amet. In vestibulum id
              massa posuere adipiscing.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-sf font-bold text-lg">
              Influencer Expectations:
            </h1>
            <p className="text-stone-300 text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur. Leo dui vitae ut in. Magna
              egestas tincidunt aliquam sit risus amet. In vestibulum id massa
              posuere adipiscing.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-sf font-bold text-lg">Brand Guidelines:</h1>
            <p className="text-stone-300 text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur. Leo dui vitae ut in. Magna
              egestas tincidunt aliquam sit risus amet. In vestibulum id massa
              posuere adipiscing.
            </p>
          </div>
        </div>
        {/* Previous campaigns */}
        <div className="mt-4 text-white font-roboto px-8">
          <h1 className="mb-4 font-bold font-sf text-xl">Previous Campaigns</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="w-full sm:w-[358px] h-[220px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border  rounded-lg"
                style={{ borderColor: campaign.color }}
              >
                <div className=" p-4">
                  <div className="flex gap-2 items-center">
                    <div
                      className="bg-[#EFAC16] rounded-2xl h-12 w-12"
                      style={{ backgroundColor: campaign.color }}
                    ></div>
                    <p className="text-lg font-bold">{campaign.name}</p>
                    <div
                      className="px-4 py-1 flex justify-center items-center gap-1 w-[68px] h-[36px] rounded-xl rounded-tl-none rounded-br-none ml-10"
                      style={{ backgroundColor: campaign.color }}
                    >
                      <img src={Profile} alt="people" className="w-6 h-6" />
                      <p>{campaign.profileCount}</p>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex items-center justify-center bg-black h-[38px] w-[38px] rounded-md">
                      <img src={Instagram} alt="insta" />
                    </div>
                    <div className="flex items-center justify-center bg-black h-[38px] w-[38px] rounded-md">
                      <img src={Facebook} alt="insta" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex  text-sm text-stone-300 mt-2">
                      <span>{campaign.startDate}</span>-
                      <span>{campaign.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Ongoing Campaigns */}
        <div className="mt-10 text-white font-roboto px-8">
          <h1 className="font-bold font-sf mb-6 text-xl">Ongoing Campaigns</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="w-full sm:w-[358px] h-[220px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border  rounded-lg border-[#EFAC16]"
                style={{ borderColor: campaign.color }}
              >
                <div className=" p-4">
                  <div className="flex gap-2 items-center">
                    <div
                      className="bg-[#EFAC16] rounded-2xl h-12 w-12"
                      style={{ backgroundColor: campaign.color }}
                    ></div>
                    <p className="text-lg font-bold">{campaign.name}</p>
                    <div
                      className="px-4 py-1 flex justify-center items-center gap-1 w-[68px] h-[36px] rounded-xl rounded-tl-none rounded-br-none ml-10"
                      style={{ backgroundColor: campaign.color }}
                    >
                      <img src={Profile} alt="people" className="w-6 h-6" />
                      <p>{campaign.profileCount}</p>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex items-center justify-center bg-black h-[38px] w-[38px] rounded-md">
                      <img src={Instagram} alt="insta" />
                    </div>
                    <div className="flex items-center justify-center bg-black h-[38px] w-[38px] rounded-md">
                      <img src={Facebook} alt="insta" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="relative w-full h-2 bg-gray-300 rounded-full">
                      {/*  progress bar */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{
                          backgroundColor: campaign.color,
                          width: `${campaign.progress}%`,
                        }}
                      ></div>
                      {/* Gray bar after the progress */}
                      <div
                        className="absolute left-[50%] top-0 h-full bg-gray-400 rounded-full"
                        style={{ width: `${70 - campaign.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-stone-300 mt-2">
                      <span>{campaign.startDate}</span>
                      <span>{campaign.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandDetails;
