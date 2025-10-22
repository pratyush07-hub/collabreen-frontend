import React from "react";
import Frame from "../../assets/Authentication/Frame.png";
import { Link } from "react-router-dom";
function RegisterAs() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-full max-w-[768px] h-[400px] bg-cover bg-center text-white flex justify-center items-center gap-20 rounded-[50px]"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <Link to="/influencer-register">
          <div className="flex items-center justify-center font-white font-sf font-bold text-3xl  hover:opacity-90 bg-[#f5adb2] hover:bg-[#efac16] px-10 py-2 rounded-lg cursor-pointer ">
            <p>Influencer</p>
          </div>
        </Link>
        <Link to="/brand-register">
          <div className="flex items-center justify-center font-white font-sf font-bold text-3xl   hover:opacity-90 bg-[#f5adb2] hover:bg-[#efac16] px-10 py-2 rounded-lg cursor-pointer">
            <p>Brand</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RegisterAs;
