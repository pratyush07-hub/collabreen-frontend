import React from "react";
import { Link } from "react-router-dom";
import influencerVector from "../../assets/Influencervector.png";
import CampaignGenerator from "../../assets/campaignGenerator.png";
import services from "../../assets/Services.png"; 
import CampaignVector from "../../assets/campaignVector.png";


function Services() {
  return (
    <div className="flex justify-center relative mt-40">
      {/* Parent div with background image */}
      <div
        className="p-10 w-full max-w-screen-xl h-[571px] rounded-[50px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${services})` }} // Set the background image
      >
        <div className="flex flex-wrap  gap-10">
          <div className="text-white flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={influencerVector}
              alt="Campaign Generator"
              className="w-[70px] h-[70px] object-contain" 
            />
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Influencer Insights
              </h3>
              <p className="font-roboto font-light text-left">
                Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                placerat cras duis.
              </p>
            </div>
          </div>

          <div className="text-white  mt-10 sm:ml-60 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]">
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Campaign Generator
              </h3>
              <p className="font-roboto font-light text-left">
                Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                placerat cras duis.
              </p>
            </div>
            <img
              src={CampaignGenerator}
              alt="Influencer Insights"
              className="w-[70px] h-[70px] object-contain"
            />
          </div>
        </div>

        <div className="text-white mt-12 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
          <div className="ml-6">
            <h3 className="font-roboto text-lg font-semibold">
              Campaign Insights
            </h3>
            <p className="font-roboto font-light text-left">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
            </p>
          </div>
          <img
            src={CampaignVector}
            alt="Influencer Insights"
            className="w-[70px] h-[70px] object-contain" 
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
