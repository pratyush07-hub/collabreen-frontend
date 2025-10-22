import React from "react";
import Profile from "../../assets/Campaign/Profile.png";
import Instagram from "../../assets/Campaign/instagram_yellow.png";
import Facebook from "../../assets/Campaign/facebook_yellow.png";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function BrandDashBoard() {
  // function to generate random data for the graph
  const randomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 30000));
  };

  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Traffic 1",
        data: randomData(),
        borderColor: "#F5ADB2", 
        backgroundColor: "rgba(247, 113, 40, 0.1)", 
        fill: false,
        tension: 0.4,
      },
      {
        label: "Traffic 2",
        data: randomData(),
        borderColor: "#F5ADB2", 
        backgroundColor: "rgba(247, 113, 40, 0.1)", 
        borderDash: [5, 5], // Dotted line 
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          padding: 20,
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 30000,
        ticks: {
          stepSize: 10000,
          padding: 10,
        },
        grid: {
          borderColor: "#F77128",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 30,
      },
    },
  };
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

  return (
    <>
  {/* Overview Section */}
  <div className="mt-10 text-white font-roboto px-4">
    <h1 className="font-sf font-bold text-xl">Overview</h1>
    <div className="mt-6 flex flex-wrap gap-4 justify-center">
      {[
        { label: "Total Users", value: "7,286", color: "bg-[#F77128]" },
        { label: "Total Creators", value: "7,286", color: "bg-[#efac16]" },
        { label: "Total Brands", value: "7,286", color: "bg-[#93B076]" },
        { label: "Total Campaigns", value: "7,286", color: "bg-[#F5ADB2]" },
      ].map((stat, index) => (
        <div
          key={index}
          className={`w-[173px] p-2 h-[74px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none flex gap-2 items-center`}
        >
          <img src={Profile} alt="profile" />
          <div>
            <p className="text-[13px]">{stat.label}</p>
            <p className="font-sf font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Graph and Recent Campaign Section */}
  <div className="mt-6 flex flex-wrap justify-center text-white font-roboto gap-8">
    <div className="w-full sm:w-[744px] h-[413px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#F77128] px-8 overflow-hidden rounded-lg">
      <div className="flex mt-2 justify-between">
        <div>
          <h1 className="font-bold text-md">Impressions & Data Traffic</h1>
          <p className="text-[12px] text-stone-300">increase 16% from last month</p>
        </div>
        <p className="text-stone-300">1 Aug 2024 - 1 Sept 2024</p>
      </div>
      <div className="mt-4">
        <Line data={data} options={options} height={400} width={700} />
      </div>
    </div>
    <div className="w-full sm:w-[358px]">
      <h1 className="font-bold font-sf text-lg mb-2">Recent Campaign</h1>
      <div className="w-full h-[373px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#F77128] rounded-lg p-4">
        <div className="flex gap-2 items-center">
          <div className="bg-[#F77128] rounded-2xl h-12 w-12"></div>
          <p className="text-lg font-bold">Campaign Name</p>
          <div className="px-4 py-1 flex justify-center items-center gap-1 w-[68px] h-[36px] rounded-xl rounded-tl-none rounded-br-none bg-[#F77128] ml-10">
            <img src={Profile} alt="people" className="w-6 h-6" />
            <p>5</p>
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
        <div className="flex justify-end border-b border-[#F77128] py-4 ">
          <p className="text-[14px] text-stone-300">18 July, 2024</p>
        </div>
        <div className="mt-4">
          <h1>Top Performers</h1>
          {/* performer 1 */}
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-black h-[45px] w-[45px] rounded-lg"></div>
            <div>
              <p className="text">Akash Sharma</p>
              <p className="text-[12px]">Mega Influencer</p>
            </div>
            <div className="h-[45px] w-[63px] bg-[#f77128] rounded-xl flex flex-col items-center justify-center">
              <p className="text-[12px]">Views</p>
              <p className="font-bold">45k</p>
            </div>
            <div className="h-[45px] w-[63px] bg-[#f77128] rounded-xl flex flex-col items-center justify-center">
              <p className="text-[12px]">Likes</p>
              <p className="font-bold">45k</p>
            </div>
          </div>
          {/* performer 2 */}
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-black h-[45px] w-[45px] rounded-lg"></div>
            <div>
              <p className="text">Akash Sharma</p>
              <p className="text-[12px]">Mega Influencer</p>
            </div>
            <div className="h-[45px] w-[63px] bg-[#f77128] rounded-xl flex flex-col items-center justify-center">
              <p className="text-[12px]">Views</p>
              <p className="font-bold">45k</p>
            </div>
            <div className="h-[45px] w-[63px] bg-[#f77128] rounded-xl flex flex-col items-center justify-center">
              <p className="text-[12px]">Likes</p>
              <p className="font-bold">45k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Ongoing Campaigns */}
  <div className="mt-4 text-white font-roboto px-8">
    <h1 className="mb-4 font-bold font-sf">Ongoing Campaigns</h1>
    <div className="flex flex-wrap gap-4 justify-center">
      {campaigns.map((campaign, index) => (
        <div
          key={index}
          className="w-full sm:w-[358px] h-[220px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border  rounded-lg border-[#EFAC16]"
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
</>

  );
}

export default BrandDashBoard;
