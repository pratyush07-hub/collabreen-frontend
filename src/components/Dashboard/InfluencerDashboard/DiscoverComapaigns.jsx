import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Instagram, Youtube, Twitter, Linkedin, Facebook } from 'lucide-react';

// Mock data structure - easily replaceable with API calls
const mockCampaigns = [
    {
        id: 1,
        title: "Summer Skincare Routine Challenge",
        brand: "GlowSkin Beauty",
        category: "Beauty & Skin Care",
        description: "Create authentic content showcasing your 7-day summer skincare routine using our new hydrating serum collection.",
        payment: 850,
        paymentType: "Fixed Fee",
        budget: { min: 250, max: 450 },
        requirements: {
            reels: 3,
            stories: 6,
            productShots: true,
            beforeAfter: true
        },
        platforms: ['instagram', 'facebook', 'twitter'],
        location: "Global",
        daysLeft: 5,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=60&h=60&fit=crop&crop=face"
    },
    {
        id: 2,
        title: "Summer Skincare Routine Challenge",
        brand: "GlowSkin Beauty",
        category: "Beauty & Skin Care",
        description: "Create authentic content showcasing your 7-day summer skincare routine using our new hydrating serum collection.",
        payment: null,
        paymentType: "Budget Range",
        budget: { min: 250, max: 450 },
        requirements: {
            reels: 1,
            stories: 3,
            productShots: true,
            beforeAfter: true
        },
        platforms: ['instagram', 'facebook', 'twitter'],
        location: "India",
        daysLeft: 7,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=60&h=60&fit=crop&crop=face"
    },
    {
        id: 3,
        title: "Summer Skincare Routine Challenge",
        brand: "GlowSkin Beauty",
        category: "Beauty & Skin Care",
        description: "Create authentic content showcasing your 7-day summer skincare routine using our new hydrating serum collection.",
        payment: null,
        paymentType: "Budget Range",
        budget: { min: 250, max: 450 },
        requirements: {
            reels: 1,
            stories: 3,
            productShots: true,
            beforeAfter: true
        },
        platforms: ['instagram', 'facebook', 'twitter'],
        location: "India",
        daysLeft: 7,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=60&h=60&fit=crop&crop=face"
    },
    {
        id: 4,
        title: "Summer Skincare Routine Challenge",
        brand: "GlowSkin Beauty",
        category: "Beauty & Skin Care",
        description: "Create authentic content showcasing your 7-day summer skincare routine using our new hydrating serum collection.",
        payment: null,
        paymentType: "Budget Range",
        budget: { min: 250, max: 450 },
        requirements: {
            reels: 1,
            stories: 3,
            productShots: true,
            beforeAfter: true
        },
        platforms: ['instagram', 'facebook', 'twitter'],
        location: "India",
        daysLeft: 7,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=60&h=60&fit=crop&crop=face"
    }
];

const categories = [
    'Beauty & Skincare',
    'Gaming & Esports',
    'Food & Beverage',
    'Fitness & Health',
    'Fashion & Style',
    'Technology',
    'Travel & Lifestyle',
    'Home & Garden',
    'Entertainment',
    'Education',
    'Finance',
    'Automotive'
];

const platforms = [
    'Instagram',
    'YouTube',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Pinterest'
];

const paymentRanges = [
    { label: '$100-500', min: 100, max: 500 },
    { label: '$500-1k', min: 500, max: 1000 },
    { label: '$1k-2.5k', min: 1000, max: 2500 },
    { label: '$2.5k-5k+', min: 2500, max: 10000 }
];

const PlatformIcon = ({ platform }) => {
    const iconMap = {
        instagram: Instagram,
        facebook: Facebook,
        twitter: Twitter,
        linkedin: Linkedin,
        youtube: Youtube,
        pinterest: Instagram // Using Instagram as placeholder
    };

    const Icon = iconMap[platform] || Instagram;
    return <Icon size={16} />;
};

const CampaignCard = ({ campaign, onApply, onViewDetails }) => {
    return (
        <div className="gray-gradient rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={campaign.image}
                        alt={campaign.brand}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-white font-medium text-lg">{campaign.title}</h3>
                        <p className="text-gray-400 text-sm">{campaign.brand}</p>
                    </div>
                </div>
                <div className="text-right">
                    {campaign.payment ? (
                        <>
                            <div className="text-green-400 font-semibold text-xl">${campaign.payment}</div>
                            <div className="text-gray-400 text-xs">{campaign.paymentType}</div>
                        </>
                    ) : (
                        <>
                            <div className="text-green-400 font-semibold text-xl">
                                ${campaign.budget.min}-${campaign.budget.max}
                            </div>
                            <div className="text-gray-400 text-xs">Budget Range</div>
                        </>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <span className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    #{campaign.category}
                </span>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {campaign.description}
            </p>

            <div className="mb-4">
                <h4 className="text-gray-400 text-xs font-medium mb-2">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {campaign.requirements.reels} Reel + {campaign.requirements.stories} Stories
                    </span>
                    {campaign.requirements.productShots && (
                        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            Product shots
                        </span>
                    )}
                    {campaign.requirements.beforeAfter && (
                        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            Before/after
                        </span>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <h4 className="text-gray-400 text-xs font-medium mb-2">Platform:</h4>
                <div className="flex space-x-2">
                    {campaign.platforms.map((platform, index) => (
                        <div key={index} className="text-gray-400">
                            <PlatformIcon platform={platform} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{campaign.daysLeft} days left</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => onViewDetails(campaign)}
                        className="px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                        View Details
                    </button>
                    <button
                        onClick={() => onApply(campaign)}
                        className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded transition-colors"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const DiscoverComapaigns = () => {
    const [campaigns, setCampaigns] = useState(mockCampaigns);
    const [filteredCampaigns, setFilteredCampaigns] = useState(mockCampaigns);
    const [filters, setFilters] = useState({
        searchTerm: '',
        categories: [],
        platforms: [],
        paymentRange: { min: 0, max: 8000 },
        location: '',
        deadline: ''
    });

    // API-ready functions
    const fetchCampaigns = async () => {
        // Replace with actual API call
        // const response = await fetch('/api/campaigns');
        // const data = await response.json();
        // setCampaigns(data);
        setCampaigns(mockCampaigns);
    };

    const handleApply = async (campaign) => {
        // API call to apply for campaign
        console.log('Applying to campaign:', campaign.id);
        // const response = await fetch(`/api/campaigns/${campaign.id}/apply`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ campaignId: campaign.id })
        // });
    };

    const handleViewDetails = (campaign) => {
        // Navigate to campaign details page or open modal
        console.log('Viewing details for campaign:', campaign.id);
    };

    // Filter logic
    useEffect(() => {
        let filtered = campaigns.filter(campaign => {
            // Search term filter
            if (filters.searchTerm && !campaign.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
                !campaign.brand.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
                return false;
            }

            // Category filter
            if (filters.categories.length > 0 && !filters.categories.includes(campaign.category)) {
                return false;
            }

            // Platform filter
            if (filters.platforms.length > 0 &&
                !filters.platforms.some(platform =>
                    campaign.platforms.includes(platform.toLowerCase()))) {
                return false;
            }

            // Payment range filter
            const campaignPayment = campaign.payment || campaign.budget.max;
            if (campaignPayment < filters.paymentRange.min || campaignPayment > filters.paymentRange.max) {
                return false;
            }

            // Location filter
            if (filters.location && !campaign.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }

            return true;
        });

        setFilteredCampaigns(filtered);
    }, [filters, campaigns]);

    const handleCategoryChange = (category) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const handlePlatformChange = (platform) => {
        setFilters(prev => ({
            ...prev,
            platforms: prev.platforms.includes(platform)
                ? prev.platforms.filter(p => p !== platform)
                : [...prev.platforms, platform]
        }));
    };

    const clearFilters = () => {
        setFilters({
            searchTerm: '',
            categories: [],
            platforms: [],
            paymentRange: { min: 0, max: 8000 },
            location: '',
            deadline: ''
        });
    };

    useEffect(() => {
        fetchCampaigns();
    }, []);

    return (
        <div className="min-h-screen bg-[#09090c] text-white">
            <div className="container mx-auto px-4 py-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-6">Campaigns Discovery</h1>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search campaigns by brand name, campaign title, or keywords"
                            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none"
                            value={filters.searchTerm}
                            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                        />
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 text-sm text-white mb-6">
                        <div>
                            <span className="font-medium">Total Value:</span> <span className='text-green-500'>$2.3M available</span> 
                        </div>
                        <div>
                            <span className="font-medium">47 Campaigns :</span> <span className='text-green-500'>closing this week</span>
                        </div>
                        <div>
                            <span className="font-medium">Global & Local opportunities</span> 
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Sidebar */}
                    <div className="p-7 rounded-lg  lg:w-80 space-y-6 bg-[#1c1c1c]">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Filters</h2>
                            <button
                                onClick={clearFilters}
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Clear
                            </button>
                        </div>

                        
                        {/* Campaign Category */}
                        <div className="gray-gradient border border-green-400 p-4 rounded-lg">
                            <h3 className="font-medium mb-3">Campaign Category</h3>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {categories.map(category => (
                                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.categories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                            className="rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-sm text-gray-300">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Platform Required */}
                        <div className="gray-gradient border border-green-400 p-4 rounded-lg">
                            <h3 className="font-medium mb-3">Platform Required</h3>
                            <div className="space-y-2">
                                {platforms.map(platform => (
                                    <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.platforms.includes(platform)}
                                            onChange={() => handlePlatformChange(platform)}
                                            className="rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-sm text-gray-300">{platform}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Payment Range */}
                        <div className="gray-gradient rounded-lg p-4 border border-yellow-500">
                            <h3 className="font-medium mb-3">Payment Range</h3>
                            <div className="mb-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="8000"
                                    value={filters.paymentRange.max}
                                    onChange={(e) => setFilters(prev => ({
                                        ...prev,
                                        paymentRange: { ...prev.paymentRange, max: parseInt(e.target.value) }
                                    }))}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>$0</span>
                                    <span>$8000+</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {paymentRanges.map(range => (
                                    <button
                                        key={range.label}
                                        onClick={() => setFilters(prev => ({
                                            ...prev,
                                            paymentRange: { min: range.min, max: range.max }
                                        }))}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
                                    >
                                        {range.label}
                                    </button>
                                ))}
                        </div>

                        

                        
                        </div>
                        {/* Location */}
                        <div className="gray-gradient border border-orange-300 rounded-lg p-4">
                            <h3 className="font-medium mb-3">Location</h3>
                            <input
                                type="text"
                                placeholder="Enter city, state, or country"
                                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
                                value={filters.location}
                                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                            />
                        </div>
                        {/* Application Deadline */}
                        <div className="gray-gradient border border-green-200 rounded-lg p-4">
                            <h3 className="font-medium mb-3">Application Deadline</h3>
                            <select
                                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:border-gray-500 focus:outline-none"
                                value={filters.deadline}
                                onChange={(e) => setFilters(prev => ({ ...prev, deadline: e.target.value }))}
                            >
                                <option value="">Select deadline</option>
                                <option value="1">Next 24 hours</option>
                                <option value="3">Next 3 days</option>
                                <option value="7">Next week</option>
                                <option value="30">Next month</option>
                            </select>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4">
                        <div className="mb-6">
                            <h2 className="text-lg md:text-xl font-semibold">
                                {filteredCampaigns.length} Campaign{filteredCampaigns.length !== 1 ? 's' : ''} found
                            </h2>
                        </div>

                        {/* Campaigns Grid */}
                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                            {filteredCampaigns.map(campaign => (
                                <CampaignCard
                                    key={campaign.id}
                                    campaign={campaign}
                                    onApply={handleApply}
                                    onViewDetails={handleViewDetails}
                                />
                            ))}
                        </div>

                        {filteredCampaigns.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-400">No campaigns found matching your filters.</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverComapaigns;