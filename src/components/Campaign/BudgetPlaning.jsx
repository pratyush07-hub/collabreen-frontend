import React from "react";
import Heading from "../../assets/Authentication/Component.png";
import Profile from "../../assets/Campaign/Profile.png";

import Instagram from "../../assets/Campaign/instagram.png";
import Facebook from "../../assets/Campaign/facebook.png";
import Youtube from "../../assets/Campaign/youtube.png";
import Twitter from "../../assets/Campaign/Twitter.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function BudgetPlaning() {
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
      {/* budget planing */}
      <div className="px-[4rem] mt-20">
        <div>
          <h1 className="text-white font-sf text-3xl font-medium">
            Total Budget
          </h1>
          <p className="text-white font-sf text-lg ">Rs 100000</p>
        </div>
        {/* influencer categories */}
        <div className="mt-14">
          <h1 className="text-white font-sf text-2xl font-medium">
            Influencer Categories
          </h1>

          <div className="mt-4 mb-20 flex gap-14 flex-wrap ">
            <div className="w-[178px] h-[74px] bg-[#F77128] rounded-tl-[10px] rounded-br-[10px] flex pl-4 items-center gap-2">
              <img src={Profile} alt="profile image"></img>
              <div>
                <p className="text-white text-[12px] font-medium">Rs 0000</p>
                <p className="text-white font-semibold font-roboto text-lg">
                  Nano
                </p>
              </div>
            </div>
            <div className="w-[178px] h-[74px] bg-[#EFAC16] rounded-tl-[10px] rounded-br-[10px] flex pl-4 items-center gap-2">
              <img src={Profile} alt="profile image"></img>
              <div>
                <p className="text-white text-[12px] font-medium">Rs 0000</p>
                <p className="text-white font-semibold font-roboto text-lg">
                  Micro
                </p>
              </div>
            </div>
            <div className="w-[178px] h-[74px] bg-[#93B076] rounded-tl-[10px] rounded-br-[10px] flex pl-4 items-center gap-2">
              <img src={Profile} alt="profile image"></img>
              <div>
                <p className="text-white text-[12px] font-medium">Rs 0000</p>
                <p className="text-white font-semibold font-roboto text-lg">
                  Macro
                </p>
              </div>
            </div>
            <div className="w-[178px] h-[74px] bg-[#F5ADB2] rounded-tl-[10px] rounded-br-[10px] flex pl-4 items-center gap-2">
              <img src={Profile} alt="profile image"></img>
              <div>
                <p className="text-white text-[12px] font-medium">Rs 0000</p>
                <p className="text-white font-semibold font-roboto text-lg">
                  Mega
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Platforms */}
        <div className="mt-14">
          <h1 className="text-white font-sf text-2xl font-medium">Platforms</h1>

          <div className="mt-4 mb-20 flex gap-14 flex-wrap">
            <div className="w-[275px] h-[63px] bg-[#F5ADB2] rounded-tr-[9px] rounded-bl-[9px] flex pl-4 items-center gap-4 justify-center">
              <img src={Instagram} alt="Instagram image"></img>
              <p className="text-white font-semibold font-roboto text-lg">
                Instagram
              </p>
            </div>
            <div className="w-[275px] h-[63px] border border-[#F77128] rounded-tr-[9px] rounded-bl-[9px] flex pl-4 items-center gap-4 justify-center">
              <img src={Facebook} alt="Facebook image"></img>
              <p className="text-[#F77128] font-semibold font-roboto text-lg">
                Facebook
              </p>
            </div>
            <div className="w-[275px] h-[63px] border border-[#93B076] rounded-tr-[9px] rounded-bl-[9px] flex pl-4 items-center gap-4 justify-center">
              <img src={Youtube} alt="Youtube image"></img>
              <p className="text-[#93B076] font-semibold font-roboto text-lg">
                Youtube
              </p>
            </div>
            <div className="w-[275px] h-[63px]  border border-[#EFAC16] rounded-tr-[9px] rounded-bl-[9px] flex pl-4 items-center gap-4 justify-center">
              <img src={Twitter} alt="Twitter image"></img>
              <p className="text-[#EFAC16] font-semibold font-roboto text-lg">
                Twitter
              </p>
            </div>
          </div>
        </div>
        {/* Delivarables */}
        <div className="mb-10">
          <div>
            <h1 className="text-white font-sf text-2xl font-medium mb-4">
              Delivarables
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div>
                <label className="font-roboto font-medium text-lg block mb-2">
                  Story
                </label>
                <input
                  type="text"
                  name="Story"
                  placeholder="Enter No. of Stories"
                  className="w-[215px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/85 text-white p-2"
                />
              </div>
              <div>
                <label className="font-roboto font-medium text-lg block mb-2">
                  Posts
                </label>
                <input
                  type="text"
                  name="Posts"
                  placeholder="Enter No. of Posts"
                  className="w-[215px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/85 text-white p-2"
                />
              </div>
              <div>
                <label className="font-roboto font-medium text-lg block mb-2">
                  Reels
                </label>
                <input
                  type="text"
                  name="Reels"
                  placeholder="Enter No. of Reels"
                  className="w-[215px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/85 text-white p-2"
                />
              </div>
              <div>
                <label className="font-roboto font-medium text-lg block mb-2">
                  Live Sessions
                </label>
                <input
                  type="text"
                  name="Story"
                  placeholder="Enter No. of Lives"
                  className="w-[215px] h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/85 text-white p-2"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Submit */}
        <Link to="/plans">
          <div className="flex justify-center mt-20 mb-10">
            <button className="bg-[#EFAC16] text-white py-2 px-10  rounded-full rounded-br-none text-lg font-sf font-semibold">
              View Plans
            </button>
          </div>
        </Link>

        <div className="flex justify-center mt-40 mb-10"></div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default BudgetPlaning;
