import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { User, Phone, MoreVertical, Youtube, Instagram, Facebook, Clock, Users, PieChart } from 'lucide-react';
import EditProfile from "./EditProfile";

// Mock data structure - easily replaceable with API calls
const mockInfluencerData = {
    id: "influencer_123",
    name: "Akash Sharma",
    title: "Mega Influencer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: {
        totalFollowers: 456000,
        engagementRatio: 86,
        totalWatchHours: 142000000000 // 142B
    },
    platforms: {
        youtube: {
            name: "YouTube",
            icon: "youtube",
            subscribers: 4200000,
            influence: 87,
            engagement: 94,
            reach: 95,
            color: "#FF6B6B"
        },
        instagram: {
            name: "Instagram",
            icon: "instagram",
            subscribers: 4200000,
            influence: 87,
            engagement: 94,
            reach: 95,
            color: "#E17055"
        },
        facebook: {
            name: "Facebook",
            icon: "facebook",
            subscribers: 4200000,
            influence: 87,
            engagement: 94,
            reach: 95,
            color: "#FDCB6E"
        }
    },
    profile: {
        creatorType: "Influencer",
        gender: "Male",
        platforms: ["Instagram", "Facebook", "YouTube"],
        category: "Traveller, Styling",
        regions: ["Delhi"]
    },
    contentUpdates: [
        {
            id: 1,
            date: "18/07/24",
            campaignName: "Nike Air Pro",
            views: 54000,
            leads: 54000,
            reach: 4300,
            engagement: 87
        },
        {
            id: 2,
            date: "18/07/24",
            campaignName: "Nike Air Pro",
            views: 54000,
            leads: 54000,
            reach: 4300,
            engagement: 87
        },
        {
            id: 3,
            date: "18/07/24",
            campaignName: "Nike Air Pro",
            views: 54000,
            leads: 54000,
            reach: 4300,
            engagement: 87
        }
    ]
};

// Helper function to format numbers
const formatNumber = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(0) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
};

const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className={`flex flex-column gap-8 items-center justify-center rounded-lg rounded-tr-none rounded-bl-none p-6 text-white ${color}`}>
        <div className="flex items-center justify-between mb-4">
            <Icon size={40} className="text-white opacity-90" />
        </div>
        <div>
            <h3 className="text-lg font-medium opacity-90 mb-1">{title}</h3>
            <div className="text-3xl font-bold">{value}</div>
            {subtitle && <div className="text-sm opacity-75 mt-1">{subtitle}</div>}
        </div>

    </div>
);

const PlatformCard = ({ platform, data }) => {
    const getIcon = (iconType) => {
        switch (iconType) {
            case 'youtube': return Youtube;
            case 'instagram': return Instagram;
            case 'facebook': return Facebook;
            default: return Users;
        }
    };

    const Icon = getIcon(data.icon);

    return (
        <div className="gray-gradient border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-6">
                <div className={`p-2 rounded`} style={{ backgroundColor: data.color }}>
                    <Icon size={20} className="text-white" />
                </div>
                <span className="ml-3 text-white font-medium">{data.name}</span>
            </div>

            <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">
                    {formatNumber(data.subscribers)}
                </div>
                <div className="text-gray-400 text-sm">Subscribers Count</div>
            </div>

            <div className="border-t border-gray-700 pt-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-white font-semibold">{data.influence}%</div>
                        <div className="text-gray-400 text-xs">Influence</div>
                    </div>
                    <div>
                        <div className="text-green-400 font-semibold">{data.engagement}%</div>
                        <div className="text-gray-400 text-xs">Engagement</div>
                    </div>
                    <div>
                        <div className="text-white font-semibold">{data.reach}%</div>
                        <div className="text-gray-400 text-xs">Reach</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContentUpdateRow = ({ update }) => (
    <tr className="border-t border-gray-700">
        <td className="py-4 px-6 text-gray-300">{update.date}</td>
        <td className="py-4 px-6 text-white">{update.campaignName}</td>
        <td className="py-4 px-6 text-gray-300">{formatNumber(update.views)}</td>
        <td className="py-4 px-6 text-gray-300">{formatNumber(update.leads)}</td>
        <td className="py-4 px-6 text-gray-300">{update.reach}K</td>
        <td className="py-4 px-6 text-green-400">{update.engagement}%</td>
    </tr>
);

const InfluencerProfile = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const [influencerData, setInfluencerData] = useState(mockInfluencerData);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    

    // API-ready functions
    const fetchInfluencerData = async (influencerId) => {
        setIsLoading(true);
        try {
            // Replace with actual API call
            // const response = await fetch(`/api/influencers/${influencerId}`);
            // const data = await response.json();
            // setInfluencerData(data);
            setInfluencerData(mockInfluencerData);
        } catch (error) {
            console.error('Error fetching influencer data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveProfile = async () => {
        try {
            // const response = await fetch(`/api/influencers/${influencerData.id}`, {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ action: 'save' })
            // });
            console.log('Profile saved');
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    const handleContactDetails = async () => {
        try {
            // const response = await fetch(`/api/influencers/${influencerData.id}/contact`);
            // const contactData = await response.json();
            console.log('Fetching contact details');
        } catch (error) {
            console.error('Error fetching contact details:', error);
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        fetchInfluencerData('influencer_123');
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if(selectedItem === "editprofile"){
        return <EditProfile />;

    }else{
        return (
            <>

                <div className="min-h-screen bg-[#09090c] text-white">
                    <div className="container mx-auto px-4 py-6">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold mb-6">Influencer Profile</h1>

                            {/* Profile Header */}
                            <div className="gray-gradient border border-gray-700 rounded-lg p-6" >
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={influencerData.avatar}
                                            alt={influencerData.name}
                                            className="w-20 h-20 rounded-lg object-cover bg-pink-300"
                                        />
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{influencerData.name}</h2>
                                            <p className="text-gray-400">{influencerData.title}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3" ref={menuRef}>
                                        <button
                                            onClick={handleSaveProfile}
                                            className="flex items-center space-x-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg transition-colors"
                                        >
                                            <User size={18} />
                                            <span>Save Profile</span>
                                        </button>
                                        <button
                                            onClick={handleContactDetails}
                                            className="flex items-center space-x-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors"
                                        >
                                            <Phone size={18} />
                                            <span>Contact Details</span>
                                        </button>
                                        <button onClick={() => setOpen((prev) => !prev)} className="p-2 text-gray-400 hover:text-white">
                                            <MoreVertical size={20} />
                                        </button>
                                        {/* Dropdown */}
                                        {open && (
                                            <div className="absolute right-0 mt-2 w-40 rounded-md bg-[#1f1f1f] shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                                                <div className="py-1">
                                                    <button onClick={() => {
                                                        setOpen(false);
                                                        setSelectedItem("editprofile");
                                                    }} className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                                        Edit
                                                    </button>
                                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <StatCard
                                title="Total Followers"
                                value={formatNumber(influencerData.stats.totalFollowers)}
                                icon={Users}
                                color="bg-yellow-500"
                            />
                            <StatCard
                                title="Engagement Ratio"
                                value={`${influencerData.stats.engagementRatio}%`}
                                icon={PieChart}
                                color="bg-green-500"
                            />
                            <StatCard
                                title="Total Watch Hours"
                                value={formatNumber(influencerData.stats.totalWatchHours)}
                                icon={Clock}
                                color="bg-orange-500"
                            />
                        </div>

                        {/* Platform Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {Object.entries(influencerData.platforms).map(([key, platform]) => (
                                <PlatformCard key={key} platform={key} data={platform} />
                            ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* About Section */}
                            <div className="lg:col-span-1">
                                <h3 className="text-xl font-bold mb-4">About</h3>
                                <div className="gray-gradient border border-gray-700 rounded-lg p-6 space-y-4">
                                    <div>
                                        <span className="text-green-400">Creator Type:</span>
                                        <span className="text-white ml-2">{influencerData.profile.creatorType}</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400">Gender:</span>
                                        <span className="text-white ml-2">{influencerData.profile.gender}</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400">Platforms:</span>
                                        <span className="text-white ml-2">{influencerData.profile.platforms.join(', ')}</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400">Category:</span>
                                        <span className="text-white ml-2">{influencerData.profile.category}</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400">Regions:</span>
                                        <span className="text-white ml-2">{influencerData.profile.regions.join(', ')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Updates Section */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold mb-4">Content Updates</h3>
                                <div className="gray-gradient border border-gray-700 rounded-lg overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-750">
                                                <tr>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Date</th>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Campaign Name</th>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Views</th>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Leads</th>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Reach</th>
                                                    <th className="py-4 px-6 text-left text-gray-300 font-medium">Engagement</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {influencerData.contentUpdates.map((update) => (
                                                    <ContentUpdateRow key={update.id} update={update} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
};

export default InfluencerProfile;