import React, { useState } from 'react';
import { Calendar, Download, Play, Eye, Users, MessageCircle, Heart } from 'lucide-react';

const AnalyticsDashboard = () => {
    const [timeRange, setTimeRange] = useState('Last 30 days');
    const [selectedMetric, setSelectedMetric] = useState('Total Earning');
    const [followerPlatform, setFollowerPlatform] = useState('Instagram');
    const [demographicView, setDemographicView] = useState('Gender');
    const [campaignPlatform, setCampaignPlatform] = useState('All Platform');

    // Mock data - replace with API calls later
    const dashboardStats = {
        totalEarning: 24750,
        totalReach: '2.5M',
        engagementRate: '6.8%',
        newFollowers: 12500
    };

    const campaignData = [
        {
            id: 1,
            name: 'Travel Vlog Series',
            subtitle: 'Wanderlust',
            platform: 'youtube',
            status: 'Live',
            views: '156.6k',
            subscribers: '9.5k',
            comments: 670,
            likes: 430,
            engagement: '7.1%',
            earnings: 4000
        },
        // Duplicate entries as shown in the image
        {
            id: 2,
            name: 'Travel Vlog Series',
            subtitle: 'Wanderlust',
            platform: 'youtube',
            status: 'Live',
            views: '156.6k',
            subscribers: '9.5k',
            comments: 670,
            likes: 430,
            engagement: '7.1%',
            earnings: 4000
        },
        {
            id: 3,
            name: 'Travel Vlog Series',
            subtitle: 'Wanderlust',
            platform: 'youtube',
            status: 'Live',
            views: '156.6k',
            subscribers: '9.5k',
            comments: 670,
            likes: 430,
            engagement: '7.1%',
            earnings: 4000
        },
        {
            id: 4,
            name: 'Travel Vlog Series',
            subtitle: 'Wanderlust',
            platform: 'youtube',
            status: 'Live',
            views: '156.6k',
            subscribers: '9.5k',
            comments: 670,
            likes: 430,
            engagement: '7.1%',
            earnings: 4000
        },
        {
            id: 5,
            name: 'Travel Vlog Series',
            subtitle: 'Wanderlust',
            platform: 'youtube',
            status: 'Live',
            views: '156.6k',
            subscribers: '9.5k',
            comments: 670,
            likes: 430,
            engagement: '7.1%',
            earnings: 4000
        }
    ];

    const StatCard = ({ title, value, bgColor, textColor = 'text-white' }) => (
        <div className={`${bgColor} ${textColor} p-6 rounded-lg rounded-tr-none rounded-bl-none flex items-center justify-between`}>
            <div>
                <h3 className="text-sm opacity-80 mb-2">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
            <div className="text-3xl opacity-20">$</div>
        </div>
    );

    const ChartCard = ({ title, children, dropdown, dropdownValue, onDropdownChange }) => (
        <div className="gray-gradient p-6 rounded-lg border border-[#F5ADB2]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-semibold">{title}</h3>
                {dropdown && (
                    <select
                        className="bg-gray-700 text-white px-3 py-1 rounded text-sm border-none outline-none"
                        value={dropdownValue}
                        onChange={(e) => onDropdownChange(e.target.value)}
                    >
                        {dropdown.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                )}
            </div>
            {children}
        </div>
    );

    const mockChartSvg = (color, showTooltip = false, tooltipText = '', tooltipDate = '') => (
        <div className="relative h-48">
            <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                <defs>
                    <pattern id="grid" width="40" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 25" fill="none" stroke="#374151" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Main chart line */}
                <path
                    d="M 20 150 Q 60 120 100 140 T 180 100 Q 220 80 260 90 T 340 70"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                />

                {/* Dotted trend line */}
                <path
                    d="M 20 160 L 380 40"
                    stroke={color}
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    opacity="0.5"
                    fill="none"
                />

                {/* Data points */}
                <circle cx="100" cy="140" r="3" fill={color} />
                <circle cx="180" cy="100" r="3" fill={color} />
                <circle cx="260" cy="90" r="3" fill={color} />

                {/* Month labels */}
                <text x="20" y="190" fill="#9CA3AF" fontSize="12">Jan</text>
                <text x="80" y="190" fill="#9CA3AF" fontSize="12">Feb</text>
                <text x="140" y="190" fill="#9CA3AF" fontSize="12">Mar</text>
                <text x="200" y="190" fill="#9CA3AF" fontSize="12">Apr</text>
                <text x="260" y="190" fill="#9CA3AF" fontSize="12">May</text>
                <text x="320" y="190" fill="#9CA3AF" fontSize="12">Jun</text>
                <text x="380" y="190" fill="#9CA3AF" fontSize="12">Jul</text>

                {/* Y-axis labels */}
                <text x="10" y="180" fill="#9CA3AF" fontSize="12">$100</text>
                <text x="10" y="130" fill="#9CA3AF" fontSize="12">$200</text>
                <text x="10" y="80" fill="#9CA3AF" fontSize="12">$300</text>
                <text x="10" y="30" fill="#9CA3AF" fontSize="12">$450</text>
            </svg>

            {showTooltip && (
                <div className="absolute top-16 left-32 bg-[#F5ADB2] text-white p-3 rounded-lg text-sm">
                    <div className="font-medium">{tooltipDate}</div>
                    <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Daily: $7.5k
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                        {tooltipText}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-[#09090c] text-white p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Analytics & Reports</h1>
                    <p className="text-gray-400">Track your performance, growth, and earnings across all platforms</p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select
                            className="gray-gradient text-white px-4 py-2 rounded-lg border border-gray-700 appearance-none pr-8"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                        >
                            <option>Last 30 days</option>
                            <option>Last 7 days</option>
                            <option>Last 90 days</option>
                            <option>Last year</option>
                        </select>
                    </div>

                    <button className="gray-gradient p-2 rounded-lg border border-gray-700">
                        <Calendar size={20} />
                    </button>

                    <button className="gray-gradient px-4 py-2 rounded-lg border border-gray-700 flex items-center space-x-2">
                        <Download size={16} />
                        <span>Export CSV</span>
                    </button>

                    <button className="gray-gradient px-4 py-2 rounded-lg border border-gray-700 flex items-center space-x-2">
                        <Download size={16} />
                        <span>Export PDF</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Earning"
                    value={`$${dashboardStats.totalEarning.toLocaleString()}`}
                    bgColor="bg-yellow-500"
                />
                <StatCard
                    title="Total Reach"
                    value={dashboardStats.totalReach}
                    bgColor="bg-green-500"
                />
                <StatCard
                    title="Engagement Rate"
                    value={dashboardStats.engagementRate}
                    bgColor="bg-pink-400"
                />
                <StatCard
                    title="New Followers"
                    value={dashboardStats.newFollowers.toLocaleString()}
                    bgColor="bg-orange-500"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <ChartCard
                    title="Earnings & Growth"
                    dropdown={['Total Earning', 'Growth Rate', 'Monthly Revenue']}
                    dropdownValue={selectedMetric}
                    onDropdownChange={setSelectedMetric}
                    className="mb-6 gray-gradient"
                >
                    {mockChartSvg('#10B981', true, 'Cumulative: $2,340', 'Mar 2')}
                </ChartCard>

                <ChartCard
                    title="Follower Growth by Platform"
                    dropdown={['Instagram', 'YouTube', 'TikTok', 'Twitter']}
                    dropdownValue={followerPlatform}
                    onDropdownChange={setFollowerPlatform}
                >
                    {mockChartSvg('#EC4899', true, 'Followers: 24k', 'Mar 24')}
                </ChartCard>
            </div>

            {/* Second Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <ChartCard title="Engagement Rate Trends">
                    {mockChartSvg('#8B5CF6', true, 'Cumulative: $2,340', 'Mar 2')}
                </ChartCard>

                <ChartCard
                    title="Audience Demographics"
                    dropdown={['Gender', 'Age', 'Location']}
                    dropdownValue={demographicView}
                    onDropdownChange={setDemographicView}
                >
                    <div className="flex items-center justify-center">
                        <div className="relative w-48 h-48">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                                {/* Female 58% */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="transparent"
                                    stroke="#F59E0B"
                                    strokeWidth="20"
                                    strokeDasharray={`${58 * 5.02} ${42 * 5.02}`}
                                    strokeLinecap="round"
                                />
                                {/* Male 38% */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="transparent"
                                    stroke="#10B981"
                                    strokeWidth="20"
                                    strokeDasharray={`${38 * 5.02} ${62 * 5.02}`}
                                    strokeDashoffset={`-${58 * 5.02}`}
                                    strokeLinecap="round"
                                />
                                {/* Non-binary 4% */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="transparent"
                                    stroke="#EC4899"
                                    strokeWidth="20"
                                    strokeDasharray={`${4 * 5.02} ${96 * 5.02}`}
                                    strokeDashoffset={`-${(58 + 38) * 5.02}`}
                                    strokeLinecap="round"
                                />
                                <text x="100" y="100" textAnchor="middle" dy="0.3em" className="text-4xl font-bold fill-yellow-500">58%</text>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-4">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-400">Female (58%)</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-400">Male (38%)</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-400">Non-binary (4%)</span>
                        </div>
                    </div>
                </ChartCard>
            </div>

            {/* Campaign Performance Table */}
            <div className="gray-gradient rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold">Campaign Performance Report</h3>
                        <p className="text-gray-400 text-sm mt-1">Showing 8 campaigns</p>
                    </div>
                    <select
                        className="bg-gray-700 text-white px-3 py-2 rounded border-none outline-none"
                        value={campaignPlatform}
                        onChange={(e) => setCampaignPlatform(e.target.value)}
                    >
                        <option>All Platform</option>
                        <option>YouTube</option>
                        <option>Instagram</option>
                        <option>TikTok</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-gray-700">
                                <th className="pb-4 text-gray-400 font-medium">Campaign</th>
                                <th className="pb-4 text-gray-400 font-medium">Platform</th>
                                <th className="pb-4 text-gray-400 font-medium">Status</th>
                                <th className="pb-4 text-gray-400 font-medium">Metrics</th>
                                <th className="pb-4 text-gray-400 font-medium">Engagement</th>
                                <th className="pb-4 text-gray-400 font-medium">Earnings</th>
                                <th className="pb-4 text-gray-400 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaignData.map((campaign, index) => (
                                <tr key={campaign.id} className="border-b border-gray-700 last:border-b-0">
                                    <td className="py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-medium">TV</span>
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{campaign.name}</div>
                                                <div className="text-gray-400 text-sm">{campaign.subtitle}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                                            <Play size={16} className="text-white fill-white" />
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                                            {campaign.status}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center space-x-4 text-sm">
                                            <div className="flex items-center space-x-1">
                                                <Eye size={14} className="text-gray-400" />
                                                <span>{campaign.views}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Users size={14} className="text-gray-400" />
                                                <span>{campaign.subscribers}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <MessageCircle size={14} className="text-gray-400" />
                                                <span>{campaign.comments}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Heart size={14} className="text-gray-400" />
                                                <span>{campaign.likes}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-white">{campaign.engagement}</td>
                                    <td className="py-4 text-white">${campaign.earnings.toLocaleString()}</td>
                                    <td className="py-4">
                                        <button className="bg-gray-700 px-3 py-1 rounded text-sm flex items-center space-x-1">
                                            <Eye size={14} />
                                            <span>View</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;