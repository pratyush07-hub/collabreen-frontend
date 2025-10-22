
// import React from 'react';
// import { Calendar, Clock, Users, TrendingUp, Play, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

// const Dashboard = () => {
//     const [stats, setStats] = useState(null);
//     const [campaigns, setCampaigns] = useState([]);
//     const [payments, setPayments] = useState([]);
//     const [content, setContent] = useState([]);
//     const [activity, setActivity] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // ⏳ simulate backend
//                 setLoading(true);
//                 setTimeout(() => {
//                     setStats({
//                         earnings: "₹2.47L",
//                         campaigns: 8,
//                         followers: "456K",
//                         engagement: "8.7%",
//                     });

//                     setCampaigns([
//                         { status: "Content Creation", progress: 45, color: "bg-yellow-500" },
//                         { status: "Live", progress: 75, color: "bg-yellow-500" },
//                     ]);

//                     setPayments([
//                         { date: "18/07/24", name: "Nike Air Pro", amount: "54K", status: "Completed", statusColor: "text-green-400" },
//                         { date: "19/07/24", name: "Nike Air Max", amount: "65K", status: "Pending", statusColor: "text-yellow-400" },
//                     ]);

//                     setContent([
//                         { platform: "Instagram", icon: "📷", color: "bg-pink-600" },
//                         { platform: "Youtube", icon: "▶️", color: "bg-red-600" },
//                     ]);

//                     setActivity([
//                         { title: "Payment received for Nike Campaign", desc: "₹45,000 credited", time: "2 hours ago" },
//                         { title: "Your deliverable was approved", desc: "", time: "4 hours ago" },
//                     ]);

//                     setLoading(false);
//                 }, 1000);
//             } catch (err) {
//                 setError("Failed to load dashboard");
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="min-h-[80vh] bg-[#09090a] text-white p-4 md:p-6">
//             {/* Header */}
//             <h1 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Dashboard Overview</h1>

//             {/* Stats Cards */}
//             <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
//                 <div className="w-full bg-yellow-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6">
//                     <div className="flex items-center justify-between">
//                         <div className="w-3/4">
//                             <p className="text-yellow-900 text-xs md:text-sm font-medium">Total Earnings</p>
//                             <p className="text-xl md:text-2xl font-bold text-yellow-900">₹2.47L</p>
//                         </div>
//                         <div className="w-1/4 flex justify-end text-yellow-900">
//                             <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
//                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full bg-green-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6">
//                     <div className="flex items-center justify-between">
//                         <div className="w-3/4">
//                             <p className="text-green-900 text-xs md:text-sm font-medium">Active Campaigns</p>
//                             <p className="text-xl md:text-2xl font-bold text-green-900">8</p>
//                         </div>
//                         <div className="w-1/4 flex justify-end text-green-900">
//                             <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full bg-orange-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6 ">
//                     <div className="flex items-center justify-between">
//                         <div className="w-3/4">
//                             <p className="text-orange-900 text-xs md:text-sm font-medium">Total Followers</p>
//                             <p className="text-xl md:text-2xl font-bold text-orange-900">456K</p>
//                         </div>
//                         <div className="w-1/4 flex justify-end text-orange-900">
//                             <Users className="w-6 h-6 md:w-8 md:h-8" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full bg-pink-400 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6">
//                     <div className="flex items-center justify-between">
//                         <div className="w-3/4">
//                             <p className="text-pink-900 text-xs md:text-sm font-medium">Overall Engagement</p>
//                             <p className="text-xl md:text-2xl font-bold text-pink-900">8.7%</p>
//                         </div>
//                         <div className="w-1/4 flex justify-end text-pink-900">
//                             <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="w-full flex  gap-6 md:gap-8">
//                 {/* Left Column */}
//                 <div className="w-1/2">
//                     {/* Ongoing Campaigns */}
//                     <h2 className="text-lg md:text-xl font-semibold mb-4">Ongoing Campaigns</h2>
//                     <div className="w-full space-y-4 mb-8">
//                         {[
//                             { status: 'Content Creation', progress: 45, color: 'bg-yellow-500' },
//                             { status: 'Live', progress: 75, color: 'bg-yellow-500' },
//                             { status: 'Content Creation', progress: 45, color: 'bg-yellow-500' },
//                             { status: 'Live', progress: 75, color: 'bg-yellow-500' }
//                         ].map((campaign, index) => (
//                             <div key={index} className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6">
//                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
//                                     <div className="w-full sm:w-3/5">
//                                         <h3 className="font-semibold text-sm md:text-base">Nike Air Max Campaign</h3>
//                                         <p className="text-gray-400 text-xs md:text-sm">Nike</p>
//                                     </div>
//                                     <div className="w-full sm:w-2/5 flex justify-start sm:justify-end">
//                                         <span className={`${campaign.color} text-black px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap`}>
//                                             {campaign.status}
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-gray-400 mb-4 gap-2 sm:gap-0">
//                                     <div className="flex items-center">
//                                         <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
//                                         <span>Aug 20 - Sep 15</span>
//                                     </div>
//                                     <div className="flex items-center sm:ml-4">
//                                         <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
//                                         <span>12 days left</span>
//                                     </div>
//                                 </div>

//                                 <div className="w-full">
//                                     <div className="flex justify-between items-center mb-2">
//                                         <span className="text-xs md:text-sm">Progress</span>
//                                         <span className="text-xs md:text-sm">{campaign.progress}%</span>
//                                     </div>
//                                     <div className="w-full bg-gray-700 rounded-full h-2">
//                                         <div
//                                             className="bg-white h-2 rounded-full"
//                                             style={{ width: `${campaign.progress}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-full">
//                     {/* Recent Payment */}
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
//                         <h2 className="text-lg md:text-xl font-semibold">Recent Payment</h2>
//                         <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-xs md:text-sm font-medium">
//                             View All
//                         </button>
//                     </div>

//                     <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
//                         <div className="hidden sm:grid grid-cols-4 gap-4 text-xs md:text-sm text-gray-400 mb-4 pb-2 border-b border-gray-700">
//                             <span>Date</span>
//                             <span>Campaign Name</span>
//                             <span>Amount</span>
//                             <span>Status</span>
//                         </div>
//                         {[
//                             { date: '18/07/24', name: 'Nike Air Pro', amount: '54K', status: 'Completed', statusColor: 'text-green-400' },
//                             { date: '18/07/24', name: 'Nike Air Pro', amount: '54K', status: 'Completed', statusColor: 'text-green-400' },
//                             { date: '18/07/24', name: 'Nike Air Pro', amount: '54K', status: 'Pending', statusColor: 'text-yellow-400' }
//                         ].map((payment, index) => (
//                             <div key={index} className="w-full">
//                                 {/* Mobile View */}
//                                 <div className="sm:hidden bg-gray-700 rounded-lg p-3 mb-3">
//                                     <div className="flex justify-between items-start mb-2">
//                                         <div className="w-3/5">
//                                             <p className="text-sm font-medium text-gray-300">{payment.name}</p>
//                                             <p className="text-xs text-gray-400">{payment.date}</p>
//                                         </div>
//                                         <div className="w-2/5 text-right">
//                                             <p className="text-sm font-medium text-gray-300">{payment.amount}</p>
//                                             <p className={`text-xs ${payment.statusColor}`}>{payment.status}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Desktop View */}
//                                 <div className="hidden sm:grid grid-cols-4 gap-4 text-xs md:text-sm py-3 border-b border-gray-700 last:border-b-0">
//                                     <span className="text-gray-300">{payment.date}</span>
//                                     <span className="text-gray-300">{payment.name}</span>
//                                     <span className="text-gray-300">{payment.amount}</span>
//                                     <span className={payment.statusColor}>{payment.status}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Top Performing Content */}
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
//                         <h2 className="text-lg md:text-xl font-semibold">Top Performing Content</h2>
//                         <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-xs md:text-sm font-medium">
//                             View All
//                         </button>
//                     </div>

//                     <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
//                         {[
//                             { platform: 'Instagram', icon: '📷', color: 'bg-pink-600' },
//                             { platform: 'Youtube', icon: '▶️', color: 'bg-red-600' },
//                             { platform: 'Facebook', icon: '👥', color: 'bg-blue-600' },
//                             { platform: 'Instagram', icon: '📷', color: 'bg-pink-600' }
//                         ].map((content, index) => (
//                             <div key={index} className="w-full">
//                                 {/* Mobile View */}
//                                 <div className="sm:hidden py-3 border-b border-gray-700 last:border-b-0">
//                                     <div className="flex items-start space-x-3 mb-3">
//                                         <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                                             <span className="text-lg">{content.icon}</span>
//                                         </div>
//                                         <div className="flex-1 min-w-0">
//                                             <h4 className="font-medium text-sm">Nike Air Max Unboxing</h4>
//                                             <p className="text-xs text-gray-400">8.7% Engagement</p>
//                                         </div>
//                                         <div className={`w-6 h-6 ${content.color} rounded flex items-center justify-center text-white text-xs flex-shrink-0`}>
//                                             {content.platform === 'Instagram' ? '📷' : content.platform === 'Youtube' ? '▶️' : '👥'}
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center justify-between text-xs text-gray-400 pl-13">
//                                         <div className="flex items-center space-x-3">
//                                             <span className="flex items-center">
//                                                 <Eye className="w-3 h-3 mr-1" />
//                                                 45.2K
//                                             </span>
//                                             <span className="flex items-center">
//                                                 <Heart className="w-3 h-3 mr-1" />
//                                                 3.4K
//                                             </span>
//                                         </div>
//                                         <div className="flex items-center space-x-3">
//                                             <span className="flex items-center">
//                                                 <MessageCircle className="w-3 h-3 mr-1" />
//                                                 245
//                                             </span>
//                                             <span className="flex items-center">
//                                                 <Share2 className="w-3 h-3 mr-1" />
//                                                 123
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Desktop View */}
//                                 <div className="hidden sm:flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
//                                     <div className="flex items-center space-x-3 w-1/2">
//                                         <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
//                                             <span className="text-lg">{content.icon}</span>
//                                         </div>
//                                         <div className="min-w-0 flex-1">
//                                             <h4 className="font-medium text-sm md:text-base">Nike Air Max Unboxing</h4>
//                                             <p className="text-xs md:text-sm text-gray-400">8.7% Engagement</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-400 w-1/2 justify-end">
//                                         <span className="flex items-center">
//                                             <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//                                             45.2K
//                                         </span>
//                                         <span className="flex items-center">
//                                             <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//                                             3.4K
//                                         </span>
//                                         <span className="flex items-center">
//                                             <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//                                             245
//                                         </span>
//                                         <span className="flex items-center">
//                                             <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//                                             123
//                                         </span>
//                                         <div className={`w-6 h-6 md:w-8 md:h-6 ${content.color} rounded flex items-center justify-center text-white text-xs`}>
//                                             {content.platform === 'Instagram' ? '📷' : content.platform === 'Youtube' ? '▶️' : '👥'}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Recent Activity */}
//                     <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Activity</h2>
//                     <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6">
//                         <div className="flex items-start justify-between py-3 gap-3">
//                             <div className="w-11/12">
//                                 <h4 className="font-medium text-sm md:text-base">Payment received for Nike Campaign</h4>
//                                 <p className="text-xs md:text-sm text-gray-400">₹45,000 credited to your account</p>
//                                 <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
//                             </div>
//                             <div className="w-1/12 flex justify-end pt-2">
//                                 <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
//                             </div>
//                         </div>

//                         <div className="py-3 border-t border-gray-700">
//                             <div className="w-full">
//                                 <h4 className="font-medium text-sm md:text-base">Your deliverable was approved</h4>
//                                 <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import YoutubeIcon from "../../../assets/Campaign/youtube.png";
import InstagramIcon from "../../../assets/Campaign/instagram_yellow.png";
import FacebookIcon from "../../../assets/Campaign/facebook.png";
import Vector from "../../../assets/Vector.png";
import {
    Calendar,
    Clock,
    Users,
    TrendingUp,
    Heart,
    MessageCircle,
    Share2,
    Eye,
} from "lucide-react";

const Dashboard = () => {
    // 🔹 State
    const [stats, setStats] = useState(null);
    const [campaigns, setCampaigns] = useState([]);
    const [payments, setPayments] = useState([]);
    const [content, setContent] = useState([]);
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 🔹 Mock fetch (replace with API later)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setTimeout(() => {
                    setStats({
                        earnings: "₹2.47L",
                        campaigns: 8,
                        followers: "456K",
                        engagement: "8.7%",
                    });

                    setCampaigns([
                        { status: "Content Creation", progress: 45, color: "bg-yellow-500" },
                        { status: "Live", progress: 75, color: "bg-yellow-500" },
                    ]);

                    setPayments([
                        {
                            date: "18/07/24",
                            name: "Nike Air Pro",
                            amount: "54K",
                            status: "Completed",
                            statusColor: "text-green-400",
                        },
                        {
                            date: "19/07/24",
                            name: "Nike Air Max",
                            amount: "65K",
                            status: "Pending",
                            statusColor: "text-yellow-400",
                        },
                    ]);

                    setContent([
                        { platform: "Instagram", icon: "📷", color: "bg-pink-600" },
                        { platform: "Youtube", icon: "▶️", color: "bg-red-600" },
                        { platform: "Facebook", icon: "👥", color: "bg-blue-600" },
                    ]);

                    setActivity([
                        {
                            title: "Payment received for Nike Campaign",
                            desc: "₹45,000 credited to your account",
                            time: "2 hours ago",
                        },
                        {
                            title: "Your deliverable was approved",
                            desc: "Samsung Tech Campaign - Video Approved",
                            time: "4 hours ago",
                        },
                    ]);

                    setLoading(false);
                }, 1000);
            } catch (err) {
                setError("Failed to load dashboard");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 🔹 Loading & Error
    if (loading) return <p className="text-white p-4">Loading dashboard...</p>;
    if (error) return <p className="text-red-500 p-4">{error}</p>;

    return (
        <div className=" bg-[#09090a] text-white p-4 md:p-6">
            {/* Header */}
            <h1 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                Dashboard Overview
            </h1>

            {/* Stats Cards */}
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                {/* Earnings */}
                <div className="w-full bg-yellow-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6 ">
                    <div className="flex items-center justify-between md:mt-3 gap-4">
                        <div className="w-1/4 flex justify-center text-yellow-900 text-3xl ">
                            $
                        </div>
                        <div className="w-3/4">
                            <p className="text-yellow-900 text-xs md:text-sm font-medium">
                                Total Earnings
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-yellow-900">
                                {stats.earnings}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Campaigns */}
                <div className="w-full bg-green-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6">
                    <div className="flex items-center justify-between md:mt-3 gap-4">
                        <div className="w-1/4 flex  text-green-900">
                            <img className="w-6 h-6 md:w-10 md:h-8" src={Vector}/>
                        </div>
                        <div className="w-3/4">
                            <p className="text-green-900 text-xs md:text-sm font-medium">
                                Active Campaigns
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-green-900">
                                {stats.campaigns}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Followers */}
                <div className="w-full bg-orange-500 rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6 ">
                    <div className="flex items-center justify-between gap-4 md:mt-3">
                        <div className="w-1/4 flex justify-end text-orange-900">
                            <Users className="w-6 h-6 md:w-10 md:h-10" />
                        </div>
                        <div className="w-3/4">
                            <p className="text-orange-900 text-xs md:text-sm font-medium">
                                Total Followers
                            </p>
                            <p className="text-lg md:text-2xl font-bold text-orange-900">
                                {stats.followers}
                            </p>
                        </div>
                        
                    </div>
                </div>

                {/* Engagement */}
                <div className="w-full bg-pink-400 rounded-lg rounded-tr-none rounded-bl-none p-2 md:p-6">
                    <div className="flex items-center justify-between gap-6">
                        <div className="w-1/4 flex justify-end text-pink-900">
                            <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="w-3/4">
                            <p className="text-pink-900 text-xs md:text-sm font-medium">
                                Overall Engagement
                            </p>
                            <p className="text-lg md:text-2xl font-bold text-pink-900">
                                {stats.engagement}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">
                        Ongoing Campaigns
                    </h2>
                    <div className="w-full space-y-4 mb-8">
                        {campaigns.map((campaign, index) => (
                            <div
                                key={index}
                                className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold text-sm md:text-base">
                                        Nike Air Max Campaign
                                    </h3>
                                    <span
                                        className={`${campaign.color} text-black px-3 py-1 rounded-full text-xs md:text-sm`}
                                    >
                                        {campaign.status}
                                    </span>
                                </div>

                                <div className="flex items-center text-xs md:text-sm text-gray-400 mb-4 gap-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                        <span>Aug 20 - Sep 15</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                        <span>12 days left</span>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs md:text-sm">Progress</span>
                                        <span className="text-xs md:text-sm">
                                            {campaign.progress}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-white h-2 rounded-full"
                                            style={{ width: `${campaign.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-1/2 xl:w-2/3">
                    {/* Payments */}
                    <h2 className="text-lg md:text-xl font-semibold mb-4">
                        Recent Payment
                    </h2>
                    <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                        <div className="hidden sm:grid grid-cols-4 gap-4 text-xs md:text-sm text-gray-400 mb-4 pb-2 border-b border-gray-700">
                            <span>Date</span>
                            <span>Campaign Name</span>
                            <span>Amount</span>
                            <span>Status</span>
                        </div>
                        {payments.map((payment, index) => (
                            <div
                                key={index}
                                className="hidden sm:grid grid-cols-4 gap-4 text-xs md:text-sm py-3 border-b border-gray-700 last:border-b-0"
                            >
                                <span className="text-gray-300">{payment.date}</span>
                                <span className="text-gray-300">{payment.name}</span>
                                <span className="text-gray-300">{payment.amount}</span>
                                <span className={payment.statusColor}>{payment.status}</span>
                            </div>
                        ))}
                    </div>

                    {/* Top Content */}
                    <h2 className="text-lg md:text-xl font-semibold mb-4">
                        Top Performing Content
                    </h2>
                    <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                        {content.map((c, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between  py-3 border-b border-gray-700 last:border-b-0"
                            >
                                <div className="flex  space-x-3 w-1/2">
                                    <div className="sm:w-5 md:w-10 h-5 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <span className="text-lg">{c.icon}</span>
                                    </div>
                                    <div className="flex flex-col justify-center min-w-0">
                                        <h4 className="font-medium text-sm md:text-base">
                                            Nike Air Max Unboxing
                                        </h4>
                                        <div className="flex  space-x-3 text-xs md:text-sm text-gray-400 w-1/2 ">
                                            <span className="flex items-center">
                                                <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                                45.2K
                                            </span>
                                            <span className="flex items-center">
                                                <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                                3.4K
                                            </span>
                                            <span className="flex items-center">
                                                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                                245
                                            </span>
                                            <span className="flex items-center">
                                                <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                                123
                                            </span>
                                            
                                        </div>
                                        <p className="text-xs md:text-sm text-green-400">
                                            8.7% Engagement
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={` rounded flex items-center justify-center  text-white ml-5 text-sm xl:text-lg`}
                                >
                                    {c.platform === "Instagram"
                                        ? <div className="flex gap-1 "><img className="-mt-1 ml-2 w-[30px]" src={InstagramIcon} alt="Youtube" /> <span>Instagram</span> </div>
                                        : c.platform === "Youtube"
                                            ? <div className="flex gap-1 "><img className="-mt-1 ml-2" src={YoutubeIcon} alt="Youtube"  /> <span>YouTube</span> </div>
                                        : c.platform === "Facebook"
                                                ? <div className="flex gap-2 "><img className="-mt-1 ml-5" src={FacebookIcon} alt="Youtube"  /> <span>Facebook</span> </div>
                                            : null}
                                </div>

                                
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <h2 className="text-lg md:text-xl font-semibold mb-4">
                        Recent Activity
                    </h2>
                    <div className="w-full bg-[#1c1c1c] rounded-lg p-4 md:p-6">
                        {activity.map((a, index) => (
                            <div
                                key={index}
                                className={`py-3 ${index !== 0 ? "border-t border-gray-700" : ""}`}
                            >
                                <h4 className="font-medium text-sm md:text-base">{a.title}</h4>
                                {a.desc && (
                                    <p className="text-xs md:text-sm text-gray-400">{a.desc}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">{a.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
