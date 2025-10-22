import React from "react";
import meeting from "../../assets/meeting.png";
import { Link } from "react-router-dom";



function Meeting() {
  return (
    <>
      <section className="bg-[#0C0C0C] rounded-3xl shadow border-[#] overflow-hidden h-auto md:h-[530px] relative mb-10 mt-40">
        <img
          className="absolute object-cover object-center h-full w-full"
          src={meeting}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full max-w-screen-xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-3xl md:text-4xl font-sf">
              Schedule a meeting
            </h1>
            <h1 className="font-sf text-4xl md:text-5xl mt-6 md:mt-10">
              Be a part of our team of Data-<br />Driven Marketers
            </h1>
            <p className="font-roboto font-light text-base mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Ut volutpat sagittis mauris in orci. Sit scelerisque in nulla <br /> venenatis nullam. Sit scelerisque in nulla venenatis nullam.
            </p>
            <span className="mt-10 md:mt-20">
              <Link
                to="/explore"
                className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-36 md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
              >
                Learn More
              </Link>
            </span>
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-40 mb-10">

      </div>
    </>
  );
}

export default Meeting;
