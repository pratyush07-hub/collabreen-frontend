
import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Instagram from "../../assets/Campaign/instagram.png";
import Facebook from "../../assets/Campaign/facebook.png";
import Youtube from "../../assets/Campaign/youtube.png";
import Twitter from "../../assets/Campaign/Twitter.png";
import { Link } from "react-router-dom";

function InfluencerCampaignDetails() {
  // ✅ state for backend-ready data
  const [influencer, setInfluencer] = useState(null);
  const [stats, setStats] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ simulate backend with mock data
  useEffect(() => {
    setTimeout(() => {
      setInfluencer({
        name: "Influencer Name",
        handle: "@influencerID",
        type: "Mega Influencer",
        region: "Delhi",
        category: "Styling, Fashion",
        description:
          "Lorem ipsum dolor sit amet consectetur. Leo dui vitae ut in. Magna egestas tincidunt aliquam sit risus amet. In vestibulum id massa posuere adipiscing.",
      });

      setStats([
        { label: "CPV", value: "Rs.230", color: "bg-[#efac16]" },
        { label: "CPE", value: "Rs.300", color: "bg-[#93B076]" },
        { label: "Views", value: "5.4K", color: "bg-[#F5ADB2]" },
        { label: "Likes", value: "1.2K", color: "bg-[#F77128]" },
        { label: "Comments", value: "500", color: "bg-[#EFAC16]" },
      ]);

      setPlatforms([
        { id: 1, name: "Instagram", img: Instagram, border: "border-pink-400" },
        { id: 2, name: "Facebook", img: Facebook, border: "border-[#F77128]" },
        { id: 3, name: "Youtube", img: Youtube, border: "border-[#93B076]" },
        { id: 4, name: "Twitter", img: Twitter, border: "border-[#EFAC16]" },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  // ✅ loading / error UI
  if (loading) return <p className="text-white p-4">Loading details...</p>;
  if (!influencer) return <p className="text-red-500 p-4">Failed to load</p>;

  return (
    <div className="flex justify-center text-white font-roboto">
      <div className="flex flex-wrap gap-10">
        {/* 🔹 Influencer Details */}
        <div className="bg-gradient-to-b from-[#6a6a6a]/10 to-[#6a6a6a]/30 border border-stone-400 w-[428px] h-[931px] rounded-lg px-4 transition-all hover:shadow-xl hover:shadow-pink-500/20">
          <div className="mt-6 flex gap-6 items-center">
            <div className="bg-[#93B076] h-[88px] w-[88px] rounded-xl"></div>
            <div>
              <p className="font-bold text-xl font-sf">{influencer.name}</p>
              <p className="text-stone-400">{influencer.handle}</p>
            </div>
          </div>

          {/* 🔹 Info */}
          <div className="mt-6 space-y-3">
            <div>
              <p className="font-bold text-lg font-sf">Influencer Type</p>
              <p className="text-stone-400">{influencer.type}</p>
            </div>
            <div>
              <p className="font-bold text-lg font-sf">Region</p>
              <p className="text-stone-400">{influencer.region}</p>
            </div>
            <div>
              <p className="font-bold text-lg font-sf">Category</p>
              <p className="text-stone-400">{influencer.category}</p>
            </div>
          </div>

          {/* 🔹 Followers */}
          <div className="mt-6">
            <h1 className="font-sf font-bold mb-4">Followers</h1>
            <div className="grid grid-cols-2 gap-4">
              {[ // social icons
                { id: 1, icon: <FaInstagram />, followers: "100k", bg: "bg-pink-500" },
                { id: 2, icon: <FaFacebook />, followers: "200k", bg: "bg-blue-600" },
                { id: 3, icon: <FaTwitter />, followers: "150k", bg: "bg-sky-500" },
                { id: 4, icon: <FaYoutube />, followers: "300k", bg: "bg-red-600" },
              ].map((social) => (
                <div
                  key={social.id}
                  className="flex gap-2 items-center p-2 rounded-lg transition-all hover:scale-105 hover:bg-white/10 cursor-pointer"
                  onClick={() => alert(`${social.followers} followers on platform`)}
                >
                  <div className={`w-[38px] h-[34px] rounded flex items-center justify-center ${social.bg}`}>
                    {social.icon}
                  </div>
                  <p>{social.followers}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Description */}
          <div className="mt-10">
            <h1 className="font-sf font-bold text-lg">Description</h1>
            <p className="text-stone-300 text-lg">{influencer.description}</p>
          </div>

          {/* 🔹 CTA */}
          <Link to="/schedule-meeting">
            <button className="text-black px-3 bg-[#F5ADB2] py-2 rounded-md mt-4 w-full font-bold transition-all hover:bg-pink-400 hover:scale-105 active:scale-95">
              Schedule Meeting
            </button>
          </Link>
        </div>

        {/* 🔹 Campaign Statistics */}
        <div className="flex-1">
          <div>
            <h1 className="text-lg font-bold font-sf">Campaign Statistics</h1>
            <p className="text-stone-400 font-sf">
              Timeline: 16 July, 2024 - 23 Aug, 2024
            </p>
          </div>

          {/* 🔹 Stats Grid */}
          <div className="mt-6 flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`w-[122px] p-2 h-[64px] ${stat.color} rounded-lg rounded-tr-none rounded-bl-none cursor-pointer transition-all hover:scale-105 hover:shadow-md hover:shadow-white/20 active:scale-95`}
                onClick={() => alert(`${stat.label}: ${stat.value}`)}
              >
                <p>{stat.label}</p>
                <p className="font-sf font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* 🔹 Platforms */}
          <div className="flex justify-center">
            <div className="mt-14">
              <h1 className="text-white font-sf text-2xl font-medium">Platforms</h1>
              <div className="mt-4 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((p) => (
                  <div
                    key={p.id}
                    className={`w-[327px] h-[63px] border ${p.border} rounded-tr-[9px] rounded-bl-[9px] flex pl-4 items-center gap-4 justify-center cursor-pointer transition-all hover:scale-105 hover:bg-white/10 active:scale-95`}
                    onClick={() => alert(`${p.name} clicked`)}
                  >
                    <img src={p.img} alt={p.name} />
                    <p className="font-semibold font-roboto text-lg">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 CTA Button */}
          <div>
            <button className="text-black px-6 font-bold bg-[#F5ADB2] py-2 rounded-md mt-4 transition-all hover:bg-pink-400 hover:scale-105 active:scale-95">
              View Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerCampaignDetails;
