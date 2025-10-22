import React from "react";
import BlogCover from "../../assets/Blogcover.png";
import ProfilePic from "../../assets/profilepic.png";
import Footer from "../Footer";
import BlogPic from "../../assets/blog.png";

import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      <div className="mt-10 mb-10">
        <img
          src={BlogCover}
          alt="Blog Cover"
          className=" h-[529px] w-full object-cover"
        ></img>
      </div>
      <div className="flex flex-wrap justify-between px-[4rem] font-roboto ">
        <div className=" w-[677px]">
          <div className="flex items-center  gap-4">
            <img src={ProfilePic} className="h-12 w-12 rounded-full"></img>
            <div className="text-white">
              <p className="text-[#93B076] text-[28px] font-bold">
                John Walter
              </p>
              <p className="text-base font-medium">
                Published on 1st January 2024h
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[#EFAC16] font-sf font-medium text-[42px]">
              Lorem ipsum dolor sit amet{" "}
            </h1>
            <p className="font-medium text-white text-left text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur. Aliquet nisl potenti
              imperdiet proin nam orci etiam sed. Arcu blandit vulputate
              imperdiet convallis tempus blandit. Vestibulum curabitur donec
              elit ut varius odio in vel. Fermentum donec et ultrices tincidunt
              in a. Senectus sit amet elit amet condimentum. Sit posuere
              facilisi et est quam sit ullamcorper rutrum eget. Fusce eu
              pellentesque auctor tempor.
            </p>
            <p className="font-medium text-white text-left text-sm mb-6">
              Quam quis porttitor nunc pellentesque commodo risus in condimentum
              massa. Arcu odio tempor semper morbi sollicitudin accumsan.
              Quisque sed bibendum mauris fringilla egestas ac mi facilisi hac.
              Diam pharetra sit purus tristique viverra fames tempor elit
              libero. Pellentesque et pulvinar egestas a volutpat a placerat.
              Elit integer sed a enim sollicitudin accumsan leo molestie est.
            </p>
            <p className="font-medium text-white text-left text-sm mb-6">
              Quam quis porttitor nunc pellentesque commodo risus in condimentum
              massa. Arcu odio tempor semper morbi sollicitudin accumsan.
              Quisque sed bibendum mauris fringilla egestas ac mi facilisi hac.
              Diam pharetra sit purus tristique viverra fames tempor elit
              libero. Pellentesque et pulvinar egestas a volutpat a placerat.
              Elit integer sed a enim sollicitudin accumsan leo molestie est.
            </p>
            <p className="font-medium text-white text-left text-sm mb-6">
              Quam quis porttitor nunc pellentesque commodo risus in condimentum
              massa. Arcu odio tempor semper morbi sollicitudin accumsan.
              Quisque sed bibendum mauris fringilla egestas ac mi facilisi hac.
              Diam pharetra sit purus tristique viverra fames tempor elit
              libero. Pellentesque et pulvinar egestas a volutpat a placerat.
              Elit integer sed a enim sollicitudin accumsan leo molestie est.
            </p>
            <p className="font-medium text-white text-left text-sm mb-6">
              Quam quis porttitor nunc pellentesque commodo risus in condimentum
              massa. Arcu odio tempor semper morbi sollicitudin accumsan.
              Quisque sed bibendum mauris fringilla egestas ac mi facilisi hac.
              Diam pharetra sit purus tristique viverra fames tempor elit
              libero. Pellentesque et pulvinar egestas a volutpat a placerat.
              Elit integer sed a enim sollicitudin accumsan leo molestie est.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-20 px-4 justify-center items-center">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-[410px] w-full md:w-[347px] rounded-[30px] rounded-br-none bg-[#0c0c0c]"
              >
                <img
                  src={BlogPic}
                  alt="BlogPic Image"
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
      <Footer></Footer>
    </div>
  );
}

export default Blog;
