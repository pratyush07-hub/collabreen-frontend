import React from "react";
import { FaChartPie } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { LiaUserSolid } from "react-icons/lia";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

function Profile() {
  const campaignData = [
    {
      date: "2024-11-01",
      campaignName: "Campaign A",
      views: 1500,
      leads: 250,
      reach: 2000,
      engagement: "30%",
    },
    {
      date: "2024-11-05",
      campaignName: "Campaign B",
      views: 3000,
      leads: 450,
      reach: 3500,
      engagement: "40%",
    },
    {
      date: "2024-11-10",
      campaignName: "Campaign C",
      views: 2200,
      leads: 350,
      reach: 2500,
      engagement: "35%",
    },
    {
      date: "2024-11-12",
      campaignName: "Campaign D",
      views: 1800,
      leads: 275,
      reach: 2200,
      engagement: "32%",
    },
  ];

  return (
    <div>
      <div className="text-white flex justify-center items-center font-roboto w-full mt-10">
        <div className="w-full max-w-7xl px-4">
          <h1 className="font-sf text-3xl mb-10">Influencer Profile</h1>
          {/* Profile heading */}
          <div className="w-full bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#F5ADB2] flex items-center px-6 py-4 gap-4 rounded-lg">
            <div className="rounded-xl bg-[#F5ADB2] h-[50px] w-[50px]"></div>
            <div>
              <h1 className="text-2xl font-bold font-sf">@examplehandle</h1>
              <p className="text-base">
                <span className="font-bold">micro</span>
              </p>
            </div>
          </div>
          {/* insights */}
          <div className="flex flex-wrap w-full justify-center items-center mt-10 gap-10">
            <div className="w-[342px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#f77128] flex items-center justify-center gap-4">
              <LiaUserSolid className="w-12 h-12" />
              <div className="text-left">
                <p className="text-xl font-medium">Total Followers</p>
                <p className="text-xl font-extrabold">500K</p>
              </div>
            </div>
            <div className="w-[342px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#93B076] flex items-center justify-center gap-4">
              <FaChartPie className="w-12 h-12" />
              <div className="text-left">
                <p className="text-xl font-medium">Engagement Ratio</p>
                <p className="text-xl font-extrabold">5.2%</p>
              </div>
            </div>
            <div className="w-[342px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#F77128] flex items-center justify-center gap-4">
              <BiCategory className="w-12 h-12" />
              <div className="text-left">
                <p className="text-xl font-medium">Total Watch Hours</p>
                <p className="text-xl font-extrabold">142B</p>
              </div>
            </div>
          </div>
          {/* platforms */}
          <div className="flex flex-wrap w-full justify-center items-center mt-10 gap-10">
            <div className="w-[342px] h-[257px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 rounded-lg border border-[#f77128]">
              <div className="flex items-center justify-start p-4 gap-4">
                <FaYoutube className="w-10 h-10 text-[#F5ADB2]" />
                <p className="text-xl font-medium">YouTube</p>
              </div>
              <div className="flex items-center justify-center text-center">
                <div>
                  <p className="text-3xl font-bold">500K</p>
                  <p> Subscriber Count</p>
                </div>
              </div>
              <div className="flex justify-around items-center mt-4 gap-4 border-t border-[#f77128] py-4">
                <div className="text-center">
                  <p className="text-xl font-medium">Influence</p>
                  <p className="text-xl font-extrabold ">12%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Engagement</p>
                  <p className="text-xl font-extrabold text-green-500">5.2%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Reach</p>
                  <p className="text-xl font-extrabold text-green-500">8%</p>
                </div>
              </div>
            </div>

            <div className="w-[342px] h-[257px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 rounded-lg border border-[#f77128]">
              <div className="flex items-center justify-start p-4 gap-4">
                <FaInstagram className="w-12 h-12 text-[#F77128]" />
                <p className="text-xl font-medium">Instagram</p>
              </div>
              <div className="flex items-center justify-center text-center">
                <div>
                  <p className="text-3xl font-bold">500K</p>
                  <p> Follower Count</p>
                </div>
              </div>
              <div className="flex justify-around items-center mt-4 gap-4 border-t border-[#f77128] py-4">
                <div className="text-center">
                  <p className="text-xl font-medium">Influence</p>
                  <p className="text-xl font-extrabold ">15%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Engagement</p>
                  <p className="text-xl font-extrabold text-green-500">8.1%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Reach</p>
                  <p className="text-xl font-extrabold text-green-500">5.6%</p>
                </div>
              </div>
            </div>

            <div className="w-[342px] h-[257px] bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 rounded-lg border border-[#f77128]">
              <div className="flex items-center justify-start p-4 gap-4">
                <FaFacebookF className="w-12 h-12 text-[#EFAC16]" />
                <p className="text-xl font-medium">Facebook</p>
              </div>
              <div className="flex items-center justify-center text-center">
                <div>
                  <p className="text-3xl font-bold">500K</p>
                  <p> Follower Count</p>
                </div>
              </div>
              <div className="flex justify-around items-center mt-4 gap-4 border-t border-[#f77128] py-4">
                <div className="text-center">
                  <p className="text-xl font-medium">Influence</p>
                  <p className="text-xl font-extrabold">20%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Engagement</p>
                  <p className="text-xl font-extrabold text-green-500">10.2%</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-medium">Reach</p>
                  <p className="text-xl font-extrabold text-green-500">7.5%</p>
                </div>
              </div>
            </div>
          </div>
          {/*about and content updates  */}
          <div className="flex flex-wrap gap-10 mt-4 items-center">
            <div >
                <h1 className="text-white font-sf font-medium text-3xl mb-4">About</h1>
                <div className="px-4 g-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 w-[341px] h-[181px] rounded-lg border-[0.5px] border-[#93B076] py-4 font-roboto text-lg">
                <p className="text-[#93B076]">Creator Type<span className="text-white">: Influencer</span></p>
                <p className="text-[#93B076]">Gender<span className="text-white">: Male</span></p>
                <p className="text-[#93B076]">Platforms<span className="text-white">: Instagram, Facebook</span></p>
                <p className="text-[#93B076]">Category<span className="text-white">: Fashion, Tech</span></p>
                <p className="text-[#93B076]">Regions<span className="text-white">: Delhi</span></p>
                </div>
            </div>
            <div className="overflow-x-auto">
            <h1 className="text-white font-sf font-medium text-3xl mb-4">Content Updates</h1>

              <table className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/40 w-[734px] h-[181px] rounded-[8px] border-[0.5px] border-[#f77128]">
                <thead>
                  <tr>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Campaign Name</th>
                    <th className="text-left p-2">Views</th>
                    <th className="text-left p-2">Leads</th>
                    <th className="text-left p-2">Reach</th>
                    <th className="text-left p-2">Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignData.map((campaign, index) => (
                    <tr key={index}>
                      <td className="p-2">{campaign.date}</td>
                      <td className="p-2">{campaign.campaignName}</td>
                      <td className="p-2">{campaign.views}</td>
                      <td className="p-2">{campaign.leads}</td>
                      <td className="p-2">{campaign.reach}</td>
                      <td className="p-2">{campaign.engagement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
