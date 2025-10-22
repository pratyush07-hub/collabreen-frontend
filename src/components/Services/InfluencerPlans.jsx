import React from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame2.png";
import Footer from "../Footer";


function InfluencerPlans() {
  const plans = [
    {
      name: "Starter Plan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis elit tortor netus magna.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isPopular: false,
    },
    {
      name: "Growth Plan",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      isPopular: true,
    },
    {
      name: "Pro Plan",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      isPopular: false,
    },
    {
      name: "Elite Plan",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
      isPopular: true,
    },
  ];
  return (
    <>
      <div className="bg-[#0C0C0C] rounded-3xl shadow border-[#] overflow-hidden h-auto md:h-[530px] relative mb-10 mt-20 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Influencer Plans
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
            </p>
          </div>
        </div>
      </div>
      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-[248px] h-[420px] rounded-[27px] rounded-tl-none rounded-br-none text-white font-roboto m-4 p-6"
            style={{ backgroundImage: `url(${Frame})` }}
          >
            <h1 className="text-2xl font-medium">{plan.name}</h1>
            <p className="mt-2">{plan.description}</p>
            {/* Features */}
            <ul className="space-y-3 mt-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center ">
                  {/* Circle*/}
                  <div className="w-[20px] h-[20px] bg-[#EFAC16] rounded-full  mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
            <button
              type="submit"
              className="hover:bg-[#F5ADB2] bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
            >
              Get Started
            </button>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default InfluencerPlans;
