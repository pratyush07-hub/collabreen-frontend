import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../assets/Authentication/Component.png";
import Blog from "../../assets/blog.png";
import Footer from "../Footer";

function Blogs() {
  return (
    <>
      <div className="bg-[#0C0C0C] rounded-3xl shadow overflow-hidden h-auto md:h-[530px] relative mb-20 mt-20 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Blog
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 mb-20">
        <div>
          {/* Search */}
          <div className="flex justify-center">
            <input
              className="w-full max-w-[1126px] h-[40px] px-4 bg-[#202020] rounded-lg"
              placeholder="Search for latest influencer news and updates"
            />
          </div>
          {/* Category */}
          <div className="flex flex-wrap justify-center items-center mt-20 gap-10 md:gap-20">
            <div className="w-[246px] h-[133px] rounded-[30px] rounded-bl-none bg-gradient-to-r from-[#6a6a6a]/40 to-[#6a6a6a]/10 flex justify-center items-center">
              <h1 className="text-2xl font-bold font-sf text-[#efac16] text-center">
                Influencer
                <br /> Spotlight
              </h1>
            </div>
            <div className="w-[246px] h-[133px] rounded-[30px] rounded-bl-none bg-gradient-to-r from-[#6a6a6a]/40 to-[#6a6a6a]/10 flex justify-center items-center">
              <h1 className="text-2xl font-bold font-sf text-[#93B076] text-center">
                Success
                <br /> Stories
              </h1>
            </div>
            <div className="w-[246px] h-[133px] rounded-[30px] rounded-bl-none bg-gradient-to-r from-[#6a6a6a]/40 to-[#6a6a6a]/10 flex justify-center items-center">
              <h1 className="text-2xl font-bold font-sf text-[#F5ADB2] text-center">
                Latest
                <br /> Trends
              </h1>
            </div>
          </div>
          {/* Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-[410px] w-full md:w-[347px] rounded-[30px] rounded-br-none bg-[#0c0c0c]"
              >
                <img
                  src={Blog}
                  alt="Blog Image"
                  className="rounded-t-[30px] h-[226px] w-full object-cover"
                />
                <div className="font-roboto px-4 mt-4 text-white">
                  <p className="text-sm">5 Min Read</p>
                  <h1 className="text-[#93b076] font-sf font-bold text-xl">
                    Lorem ipsum sit amet consecteur
                  </h1>
                  <p className="font-medium text-sm">
                    Lorem ipsum dolor sit amet consectetur. Turpis cursus metus
                    ut quisque. Porttitor tempor cras nisl quisque lacus.
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-[#F77128] font-bold text-[12px]">
                        John Walter
                      </p>
                      <p className="font-thin text-[10px]">01.02.2024</p>
                    </div>
                    <Link
                      to="/blog"
                      className="text-[#F77128] underline font-medium cursor-pointer"
                    >
                      Read Blog
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Blogs;
