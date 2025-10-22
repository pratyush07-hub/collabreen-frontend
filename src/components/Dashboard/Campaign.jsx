// // import React from "react";
// // import instagram from "../../assets/Campaign/instagram_yellow.png";
// // import facebook from "../../assets/Campaign/facebook_yellow.png";
// // import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// // function Campaign() {
// //   const data = [
// //     {
// //       sNo: 1,
// //       name: "Rahul Sharma",
// //       views: 150,
// //       likes: 30,
// //       reach: 300,
// //       leads: 20,
// //       region: "India",
// //       content: "view",
// //     },
// //     {
// //       sNo: 2,
// //       name: "Priya Singh",
// //       views: 120,
// //       likes: 40,
// //       reach: 250,
// //       leads: 15,
// //       region: "India",
// //       content: "view",
// //     },
// //     {
// //       sNo: 3,
// //       name: "Anjali Verma",
// //       views: 200,
// //       likes: 70,
// //       reach: 400,
// //       leads: 35,
// //       region: "India",
// //       content: "view",
// //     },
// //     {
// //       sNo: 4,
// //       name: "Vikram Patil",
// //       views: 80,
// //       likes: 10,
// //       reach: 150,
// //       leads: 5,
// //       region: "India",
// //       content: "view",
// //     },
// //     {
// //       sNo: 5,
// //       name: "Kavya Iyer",
// //       views: 130,
// //       likes: 50,
// //       reach: 300,
// //       leads: 25,
// //       region: "India",
// //       content: "view",
// //     },
// //   ];

// //   return (
// //     <div className="p-6 text-white">
// //       <div className="flex flex-wrap gap-10">
// //         {/* Campaign Header */}
// //         <div className="border border-[#93B076] justify-between w-full md:w-[428px] h-auto md:h-[355px] items-start bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 p-4 rounded-lg">
// //           <div className="flex items-center gap-6 mb-10">
// //             {/* Campaign Icon */}
// //             <div className="w-[88px] h-[88px] bg-green-500 rounded-md"></div>
// //             {/* Campaign Info */}
// //             <div>
// //               <h2 className="text-lg font-semibold mb-4">Campaign Name</h2>
// //               <p className="text-sm text-gray-400">Brand: Brand Name</p>
// //               <p className="text-sm text-gray-400">
// //                 Timeline: 13 Aug 2024 - 25 Aug 2024
// //               </p>
// //             </div>
// //           </div>
// //           {/* Description */}
// //           <p className="font-sf text-lg font-bold">Description</p>
// //           <p className="text-[18px] text-gray-300 max-w-md">
// //             Lorem ipsum dolor sit amet consectetur. Ut auctor enim in lacus
// //             egestas et suspendisse volutpat ut. Ut blandit eu massa praesent
// //             suspendisse.
// //           </p>
// //         </div>

// //         {/* Campaign Statistics */}
// //         <div>
// //           {/* First Row */}
// //           <div className="mt-6 flex flex-wrap gap-4">
// //             {[
// //               { label: "CPV", value: "Rs.230", color: "bg-[#efac16]" },
// //               { label: "CPE", value: "Rs.300", color: "bg-[#93B076]" },
// //               { label: "Views", value: "5.4K", color: "bg-[#F5ADB2]" },
// //               { label: "Likes", value: "1.2K", color: "bg-[#F77128]" },
// //               { label: "Comments", value: "500", color: "bg-[#EFAC16]" },
// //             ].map((stat, index) => (
// //               <div
// //                 key={index}
// //                 className={`w-[122px] p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none`}
// //               >
// //                 <p>{stat.label}</p>
// //                 <p className="font-sf font-bold">{stat.value}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Second Row */}
// //           <div className="mt-6 flex flex-wrap gap-4">
// //             {[
// //               { label: "Impressions", value: "122K", color: "bg-[#efac16]" },
// //               { label: "Reach", value: "100K", color: "bg-[#93B076]" },
// //               { label: "Shares", value: "3.2K", color: "bg-[#F5ADB2]" },
// //               { label: "Saves", value: "800", color: "bg-[#F77128]" },
// //               { label: "Conversations", value: "150", color: "bg-[#EFAC16]" },
// //             ].map((stat, index) => (
// //               <div
// //                 key={index}
// //                 className={`w-[122px] p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none`}
// //               >
// //                 <p>{stat.label}</p>
// //                 <p className="font-sf font-bold">{stat.value}</p>
// //               </div>
// //             ))}
// //           </div>
// //           {/* Top Influencer */}
// //           <h1 className="mt-6 font-sf font-bold text-xl mb-2">
// //             Top Influencer
// //           </h1>
// //           <div className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#EFAC16] p-4 rounded-lg flex items-center justify-between">
// //             <div className="flex items-center space-x-4">
// //               <div className="w-12 h-12 bg-yellow-500 rounded-lg"></div>
// //               <div>
// //                 <h3 className="text-lg font-semibold">Akash Sharma</h3>
// //                 <p className="text-sm text-gray-400">Mega Influencer</p>
// //               </div>
// //             </div>
// //             <div className="flex space-x-6">
// //               <div>
// //                 <p className="text-sm text-gray-400">Views</p>
// //                 <div className="flex gap-2">
// //                   <div className="flex bg-black px-4 rounded-lg py-2 gap-2">
// //                     <img src={instagram} alt="Instagram" />
// //                     430k
// //                   </div>
// //                   <div className="flex bg-black px-4 rounded-lg py-2 gap-2">
// //                     <img src={facebook} alt="Facebook" />
// //                     430k
// //                   </div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <p className="text-sm text-gray-400">Clicks</p>
// //                 <div className="flex gap-2">
// //                   <div className="flex bg-black px-4 rounded-lg py-2 gap-2">
// //                     <img src={instagram} alt="Instagram" />
// //                     430k
// //                   </div>
// //                   <div className="flex bg-black px-4 rounded-lg py-2 gap-2">
// //                     <img src={facebook} alt="Facebook" />
// //                     430k
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Creator Analytics Table */}
// //       <div>
// //         <h1 className="mt-8 font-sf font-bold text-xl mb-8">
// //           Creator Analytics
// //         </h1>
// //         <div className="flex gap-6 mb-8">
// //           {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map(
// //             (Icon, index) => (
// //               <div
// //                 key={index}
// //                 className="flex items-center rounded-md justify-center w-[52px] h-[45px] bg-[#2A2A2A]"
// //               >
// //                 <Icon size={24} color="#F5ADB2" />
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //       <div className="overflow-x-auto">
// //         <table className="w-full text-white bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] border border-[#F5ADB2] font-roboto">
// //           <thead>
// //             <tr>
// //               {[
// //                 "S.No",
// //                 "Name",
// //                 "Views",
// //                 "Likes",
// //                 "Reach",
// //                 "Leads",
// //                 "Region",
// //                 "Content",
// //               ].map((header, index) => (
// //                 <th key={index} className="py-3 px-4 text-left">
// //                   {header}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.map((item) => (
// //               <tr key={item.id} className="hover:bg-[#3a3a3a]">
// //                 <td className="py-2 px-4">{item.id}</td>
// //                 <td className="py-2 px-4">{item.name}</td>
// //                 <td className="py-2 px-4">{item.views}</td>
// //                 <td className="py-2 px-4">{item.likes}</td>
// //                 <td className="py-2 px-4">{item.reach}</td>
// //                 <td className="py-2 px-4">{item.leads}</td>
// //                 <td className="py-2 px-4">{item.region}</td>
// //                 <td className="py-2 px-4 ">{item.content}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Campaign;

// import React, { useState, useEffect } from "react";
// import instagram from "../../assets/Campaign/instagram_yellow.png";
// import facebook from "../../assets/Campaign/facebook_yellow.png";
// import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// function Campaign() {
//   // 🔹 States
//   const [campaign, setCampaign] = useState(null);
//   const [stats, setStats] = useState([]);
//   const [topInfluencer, setTopInfluencer] = useState(null);
//   const [creatorAnalytics, setCreatorAnalytics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔹 Simulate backend fetch
//   useEffect(() => {
//     try {
//       setTimeout(() => {
//         // Campaign info
//         setCampaign({
//           name: "Nike Air Max Campaign",
//           brand: "Nike",
//           timeline: "13 Aug 2024 - 25 Aug 2024",
//           description:
//             "Lorem ipsum dolor sit amet consectetur. Ut auctor enim in lacus egestas et suspendisse volutpat ut. Ut blandit eu massa praesent suspendisse.",
//         });

//         // Campaign stats
//         setStats([
//           { label: "CPV", value: "Rs.230", color: "bg-[#efac16]" },
//           { label: "CPE", value: "Rs.300", color: "bg-[#93B076]" },
//           { label: "Views", value: "5.4K", color: "bg-[#F5ADB2]" },
//           { label: "Likes", value: "1.2K", color: "bg-[#F77128]" },
//           { label: "Comments", value: "500", color: "bg-[#EFAC16]" },
//           { label: "Impressions", value: "122K", color: "bg-[#efac16]" },
//           { label: "Reach", value: "100K", color: "bg-[#93B076]" },
//           { label: "Shares", value: "3.2K", color: "bg-[#F5ADB2]" },
//           { label: "Saves", value: "800", color: "bg-[#F77128]" },
//           { label: "Conversations", value: "150", color: "bg-[#EFAC16]" },
//         ]);

//         // Top Influencer
//         setTopInfluencer({
//           name: "Akash Sharma",
//           type: "Mega Influencer",
//           metrics: {
//             views: { instagram: "430k", facebook: "430k" },
//             clicks: { instagram: "430k", facebook: "430k" },
//           },
//         });

//         // Creator analytics table
//         setCreatorAnalytics([
//           {
//             sNo: 1,
//             name: "Rahul Sharma",
//             views: 150,
//             likes: 30,
//             reach: 300,
//             leads: 20,
//             region: "India",
//             content: "view",
//           },
//           {
//             sNo: 2,
//             name: "Priya Singh",
//             views: 120,
//             likes: 40,
//             reach: 250,
//             leads: 15,
//             region: "India",
//             content: "view",
//           },
//           {
//             sNo: 3,
//             name: "Anjali Verma",
//             views: 200,
//             likes: 70,
//             reach: 400,
//             leads: 35,
//             region: "India",
//             content: "view",
//           },
//         ]);

//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       setError("Failed to fetch campaign data");
//       setLoading(false);
//     }
//   }, []);

//   // 🔹 Loading & Error
//   if (loading) return <p className="text-white p-4">Loading campaign...</p>;
//   if (error) return <p className="text-red-500 p-4">{error}</p>;

//   return (
//     <div className="p-4 sm:p-6 text-white">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Campaign Header */}
//         <div className="border border-[#93B076] w-full lg:w-[428px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 p-4 rounded-lg">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 sm:w-[88px] sm:h-[88px] bg-green-500 rounded-md"></div>
//             <div>
//               <h2 className="text-lg font-semibold mb-2">{campaign.name}</h2>
//               <p className="text-sm text-gray-400">Brand: {campaign.brand}</p>
//               <p className="text-sm text-gray-400">{campaign.timeline}</p>
//             </div>
//           </div>
//           <p className="font-sf text-lg font-bold">Description</p>
//           <p className="text-sm sm:text-base text-gray-300">
//             {campaign.description}
//           </p>
//         </div>

//         {/* Campaign Statistics */}
//         <div className="flex-1">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none`}
//               >
//                 <p className="text-xs">{stat.label}</p>
//                 <p className="font-sf font-bold text-sm sm:text-base">
//                   {stat.value}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Top Influencer */}
//           <h1 className="mt-6 font-sf font-bold text-lg sm:text-xl mb-2">
//             Top Influencer
//           </h1>
//           <div className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#EFAC16] p-4 rounded-lg flex flex-col lg:flex-row justify-between">
//             <div className="flex items-center space-x-4 mb-4 lg:mb-0">
//               <div className="w-12 h-12 bg-yellow-500 rounded-lg"></div>
//               <div>
//                 <h3 className="text-lg font-semibold">{topInfluencer.name}</h3>
//                 <p className="text-sm text-gray-400">{topInfluencer.type}</p>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-6">
//               {/* Views */}
//               <div>
//                 <p className="text-sm text-gray-400">Views</p>
//                 <div className="flex gap-2 mt-1">
//                   <div className="flex bg-black px-3 py-1 rounded-lg gap-2">
//                     <img src={instagram} alt="Instagram" />{" "}
//                     {topInfluencer.metrics.views.instagram}
//                   </div>
//                   <div className="flex bg-black px-3 py-1 rounded-lg gap-2">
//                     <img src={facebook} alt="Facebook" />{" "}
//                     {topInfluencer.metrics.views.facebook}
//                   </div>
//                 </div>
//               </div>
//               {/* Clicks */}
//               <div>
//                 <p className="text-sm text-gray-400">Clicks</p>
//                 <div className="flex gap-2 mt-1">
//                   <div className="flex bg-black px-3 py-1 rounded-lg gap-2">
//                     <img src={instagram} alt="Instagram" />{" "}
//                     {topInfluencer.metrics.clicks.instagram}
//                   </div>
//                   <div className="flex bg-black px-3 py-1 rounded-lg gap-2">
//                     <img src={facebook} alt="Facebook" />{" "}
//                     {topInfluencer.metrics.clicks.facebook}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Creator Analytics Table */}
//       <h1 className="mt-8 font-sf font-bold text-lg sm:text-xl mb-4">
//         Creator Analytics
//       </h1>
//       <div className="flex gap-4 sm:gap-6 mb-6">
//         {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map((Icon, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center w-12 h-10 sm:w-[52px] sm:h-[45px] bg-[#2A2A2A] rounded-md"
//           >
//             <Icon size={20} color="#F5ADB2" />
//           </div>
//         ))}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-white bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] border border-[#F5ADB2] text-sm sm:text-base">
//           <thead>
//             <tr>
//               {[
//                 "S.No",
//                 "Name",
//                 "Views",
//                 "Likes",
//                 "Reach",
//                 "Leads",
//                 "Region",
//                 "Content",
//               ].map((header, index) => (
//                 <th
//                   key={index}
//                   className="py-2 sm:py-3 px-2 sm:px-4 text-left whitespace-nowrap"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {creatorAnalytics.map((item) => (
//               <tr key={item.sNo} className="hover:bg-[#3a3a3a]">
//                 <td className="py-2 px-2 sm:px-4">{item.sNo}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.name}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.views}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.likes}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.reach}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.leads}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.region}</td>
//                 <td className="py-2 px-2 sm:px-4">{item.content}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Campaign;

import React, { useState, useEffect } from "react";
import instagram from "../../assets/Campaign/instagram_yellow.png";
import facebook from "../../assets/Campaign/facebook_yellow.png";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios"; // For API calls

function Campaign() {
  // State for campaign data, loading, and error
  const [campaignData, setCampaignData] = useState({
    campaign: null,
    stats: [],
    topInfluencer: null,
    creators: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default fallback data in case API fails or for initial development
  const defaultData = {
    campaign: {
      name: "Campaign Name",
      brand: "Brand Name",
      timeline: "13 Aug 2024 - 25 Aug 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut auctor enim in lacus egestas et suspendisse volutpat ut. Ut blandit eu massa praesent suspendisse.",
    },
    stats: [
      { label: "CPV", value: "Rs.230", color: "bg-[#efac16]" },
      { label: "CPE", value: "Rs.300", color: "bg-[#93B076]" },
      { label: "Views", value: "5.4K", color: "bg-[#F5ADB2]" },
      { label: "Likes", value: "1.2K", color: "bg-[#F77128]" },
      { label: "Comments", value: "500", color: "bg-[#EFAC16]" },
      { label: "Impressions", value: "122K", color: "bg-[#efac16]" },
      { label: "Reach", value: "100K", color: "bg-[#93B076]" },
      { label: "Shares", value: "3.2K", color: "bg-[#F5ADB2]" },
      { label: "Saves", value: "800", color: "bg-[#F77128]" },
      { label: "Conversations", value: "150", color: "bg-[#EFAC16]" },
    ],
    topInfluencer: {
      name: "Akash Sharma",
      type: "Mega Influencer",
      views: { instagram: "430k", facebook: "430k" },
      clicks: { instagram: "430k", facebook: "430k" },
    },
    creators: [
      {
        id: 1,
        name: "Rahul Sharma",
        views: 150,
        likes: 30,
        reach: 300,
        leads: 20,
        region: "India",
        content: "view",
      },
      {
        id: 2,
        name: "Priya Singh",
        views: 120,
        likes: 40,
        reach: 250,
        leads: 15,
        region: "India",
        content: "view",
      },
      {
        id: 3,
        name: "Anjali Verma",
        views: 200,
        likes: 70,
        reach: 400,
        leads: 35,
        region: "India",
        content: "view",
      },
      {
        id: 4,
        name: "Vikram Patil",
        views: 80,
        likes: 10,
        reach: 150,
        leads: 5,
        region: "India",
        content: "view",
      },
      {
        id: 5,
        name: "Kavya Iyer",
        views: 130,
        likes: 50,
        reach: 300,
        leads: 25,
        region: "India",
        content: "view",
      },
    ],
  };
  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("https://api.example.com/campaign/1"); // Replace with your API endpoint
        const response = defaultData;
        setCampaignData({
          campaign: response.campaign,
          stats: response.stats,
          topInfluencer: response.topInfluencer,
          creators: response.creators,
        });
      } catch (err) {
        setError("Failed to fetch campaign data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, []);

  

  // Use fetched data or fallback to default data
  const { campaign, stats, topInfluencer, creators } = campaignData.campaign
    ? campaignData
    : defaultData;

  // Split stats into two rows for display
  const firstRowStats = stats.slice(0, 5);
  const secondRowStats = stats.slice(5);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className=" p-4 sm:p-6 text-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10">
        {/* Campaign Header */}
        <div className="border border-[#93B076] w-full md:w-[428px] h-auto bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
            {/* Campaign Icon */}
            <div className="w-[88px] h-[88px] bg-green-500 rounded-md flex-shrink-0"></div>
            {/* Campaign Info */}
            <div>
              <h2 className="text-lg font-semibold mb-4">{campaign.name}</h2>
              <p className="text-sm text-gray-400">Brand: {campaign.brand}</p>
              <p className="text-sm text-gray-400">Timeline: {campaign.timeline}</p>
            </div>
          </div>
          {/* Description */}
          <p className="font-sf text-lg font-bold">Description</p>
          <p className="text-base text-gray-300 max-w-md">{campaign.description}</p>
        </div>

        {/* Campaign Statistics */}
        <div className="flex-1">
          {/* First Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {firstRowStats.map((stat, index) => (
              <div
                key={index}
                className={`p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none flex flex-col justify-center`}
              >
                <p className="text-sm">{stat.label}</p>
                <p className="font-sf font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {secondRowStats.map((stat, index) => (
              <div
                key={index}
                className={`p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none flex flex-col justify-center`}
              >
                <p className="text-sm">{stat.label}</p>
                <p className="font-sf font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Top Influencer */}
          <h1 className="mt-6 font-sf font-bold text-xl mb-2">Top Influencer</h1>
          <div className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#EFAC16] p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold">{topInfluencer.name}</h3>
                <p className="text-sm text-gray-400">{topInfluencer.type}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <div>
                <p className="text-sm text-gray-400">Views</p>
                <div className="flex gap-2">
                  <div className="flex bg-black px-4 rounded-lg py-2 gap-2 items-center">
                    <img src={instagram} alt="Instagram" className="h-5" />
                    {topInfluencer.views.instagram}
                  </div>
                  <div className="flex bg-black px-4 rounded-lg py-2 gap-2 items-center">
                    <img src={facebook} alt="Facebook" className="h-5" />
                    {topInfluencer.views.facebook}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Clicks</p>
                <div className="flex gap-2">
                  <div className="flex bg-black px-4 rounded-lg py-2 gap-2 items-center">
                    <img src={instagram} alt="Instagram" className="h-5" />
                    {topInfluencer.clicks.instagram}
                  </div>
                  <div className="flex bg-black px-4 rounded-lg py-2 gap-2 items-center">
                    <img src={facebook} alt="Facebook" className="h-5" />
                    {topInfluencer.clicks.facebook}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Analytics Table */}
      <div>
        <h1 className="mt-8 font-sf font-bold text-xl mb-8">Creator Analytics</h1>
        <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap">
          {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map((Icon, index) => (
            <div
              key={index}
              className="flex items-center rounded-md justify-center w-[52px] h-[45px] bg-[#2A2A2A]"
            >
              <Icon size={24} color="#F5ADB2" />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-white bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] border border-[#F5ADB2] font-roboto">
          <thead>
            <tr>
              {[
                "S.No",
                "Name",
                "Views",
                "Likes",
                "Reach",
                "Leads",
                "Region",
                "Content",
              ].map((header, index) => (
                <th key={index} className="py-3 px-2 sm:px-4 text-left text-sm sm:text-base">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {creators.map((item) => (
              <tr key={item.id} className="hover:bg-[#3a3a3a]">
                <td className="py-2 px-2 sm:px-4">{item.id}</td>
                <td className="py-2 px-2 sm:px-4">{item.name}</td>
                <td className="py-2 px-2 sm:px-4">{item.views}</td>
                <td className="py-2 px-2 sm:px-4">{item.likes}</td>
                <td className="py-2 px-2 sm:px-4">{item.reach}</td>
                <td className="py-2 px-2 sm:px-4">{item.leads}</td>
                <td className="py-2 px-2 sm:px-4">{item.region}</td>
                <td className="py-2 px-2 sm:px-4">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Campaign;