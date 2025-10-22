import React from "react";
import Heading from "../../assets/Authentication/Component.png";
import Profile from "../../assets/Campaign/Profile.png";
import Instagram from "../../assets/Campaign/instagram_yellow.png";
import Facebook from "../../assets/Campaign/facebook_yellow.png";
import Footer from "../Footer";

function Plans() {
  const data = [
    {
      name: "Campaign Alpha",
      profileCount: 5,
      duration: "2 Months",
      cost: "Rs:50000",
      roi: "10%",
    },
    {
      name: "Campaign Beta",
      profileCount: 3,
      duration: "1 Month",
      cost: "Rs:30000",
      roi: "15%",
    },
    {
      name: "Campaign Gamma",
      profileCount: 8,
      duration: "3 Months",
      cost: "Rs:80000",
      roi: "20%",
    },
    {
      name: "Campaign Delta",
      profileCount: 4,
      duration: "6 Weeks",
      cost: "Rs:25000",
      roi: "5%",
    },
    {
      name: "Campaign Epsilon",
      profileCount: 6,
      duration: "4 Months",
      cost: "Rs:60000",
      roi: "25%",
    },
    {
      name: "Campaign Zeta",
      profileCount: 7,
      duration: "5 Months",
      cost: "Rs:70000",
      roi: "30%",
    },
  ];

  return (
    <>
      <div className="bg-[#0C0C0C] rounded-3xl shadow border-[#] overflow-hidden h-auto md:h-[530px] relative mb-10 mt-40 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Budget Planing
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
            </p>
          </div>
        </div>
      </div>
      {/* plans */}
      <div className="mt-10 flex flex-wrap px-[4rem] justify-center gap-8">
        {data.map((campaign, index) => (
          <div
            key={index}
            className="h-[229px] w-[328px] rounded-lg bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] border border-[#EFAC16] px-1 flex justify-center items-center m-4"
          >
            <div>
              <div className="flex justify-center items-center gap-4">
                <div className="w-10 h-10 bg-[#EFAC16] rounded-lg"></div>
                <div>
                  <h1 className="text-white font-roboto font-bold text-base">
                    {campaign.name}
                  </h1>
                </div>
                <div className="w-10 px-8 ml-10 h-10 bg-[#EFAC16] rounded-lg rounded-tl-none rounded-br-none flex justify-center items-center">
                  <img src={Profile} alt="Profile" />
                  <p className="font-medium font-roboto text-white">
                    {campaign.profileCount}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                    <img src={Instagram} alt="instagram" />
                  </div>
                  <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                    <img src={Facebook} alt="Facebook icon" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-center text-white font-roboto text-sm gap-2">
                  <p>{campaign.duration}</p>
                  <p>Cost: {campaign.cost}</p>
                  <p>Expected ROI: {campaign.roi}</p>
                </div>
              </div>
              <div className="mt-4">
                <a className="text-white font-roboto underline">See Plan</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Submit */}
      <div className="flex justify-center mt-20 mb-10">
        <button className="bg-[#EFAC16] text-white py-2 px-10  rounded-full rounded-br-none text-lg font-sf font-semibold">
          Change Requirements
        </button>
      </div>

      <div className="flex justify-center mt-40 mb-10">
      </div>
      <Footer></Footer>
    </>
  );
}

export default Plans;
