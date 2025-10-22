import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Check, X } from 'lucide-react';
import PropTypes from 'prop-types';
import SearchBar from '../Searchbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Campaign from '../Campaign';
import DiscoverComapaigns from './DiscoverComapaigns';
import InfluencerProfile from './InfluencerProfile';
import AnalyticsDashboard from './AnalyticsDashboard';
import Messaging from './MessagingInterface';

// Utility to check if objects have changed
const hasChanges = (initial, current) => JSON.stringify(initial) !== JSON.stringify(current);

const EditProfile = ({
    initialData = {},
    categoriesList = [],
    servicesList = [],
    onSubmit = () => { },
    onCancel = () => { },
    fetchProfileData = async () => { },
    uploadProfileImage = async () => { },
}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        businessEmail: '',
        influencerType: '',
        bio: '',
        profileImage: '',
        address: '',
        categories: [],
        services: [],
        socialMedia: [],
        rates: {
            instagramPost: '',
            instagramStory: '',
            youtubeVideo: '',
            tiktokVideo: '',
            blogPost: '',
        },
    });
    const [initialFormData, setInitialFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [selectedItem, setSelectedItem] = useState("dashboard");


    // Fetch initial profile data
    useEffect(() => {
        const loadProfileData = async () => {
            setLoading(true);
            try {
                const data = await fetchProfileData();
                const profileData = {
                    fullName: data.fullName || 'Vikas Tharol',
                    contactNumber: data.contactNumber || '6373546782',
                    businessEmail: data.businessEmail || 'vikas65@gmail.com',
                    influencerType: data.influencerType || 'Mega',
                    bio: data.bio || 'Fashion & Lifestyle Content Creator. Sharing my journey through style and wellness.',
                    profileImage: data.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                    address: data.address || '',
                    categories: data.categories || ['Fashion', 'Beauty', 'Lifestyle'],
                    services: data.services || ['Sponsored Posts', 'Product Reviews', 'Brand Partnerships', 'Video Creation'],
                    socialMedia: data.socialMedia || [
                        { platform: 'Instagram', handle: '@vikas_choudhary', connected: true },
                        { platform: 'Facebook', handle: '@vikas_choudhary', connected: true },
                        { platform: 'Twitter', handle: '@vikas_choudhary', connected: false },
                    ],
                    rates: {
                        instagramPost: data.rates?.instagramPost || '$ 800',
                        instagramStory: data.rates?.instagramStory || '$ 300',
                        youtubeVideo: data.rates?.youtubeVideo || '$ 2500',
                        tiktokVideo: data.rates?.tiktokVideo || '$ 300',
                        blogPost: data.rates?.blogPost || '$ 2500',
                    },
                };
                setFormData(profileData);
                setInitialFormData(profileData);
            } catch (err) {
                setError('Failed to load profile data.');
            } finally {
                setLoading(false);
            }
        };
        loadProfileData();
    }, [fetchProfileData]);

    // Update unsaved changes status
    useEffect(() => {
        setHasUnsavedChanges(hasChanges(initialFormData, formData));
    }, [formData, initialFormData]);

    // Handle input changes
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setFormErrors((prev) => ({ ...prev, [field]: '' }));
    };

    // Handle nested rate changes
    const handleRateChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            rates: { ...prev.rates, [field]: value },
        }));
        setFormErrors((prev) => ({ ...prev, [field]: '' }));
    };

    // Handle category toggle
    const toggleCategory = (category) => {
        setFormData((prev) => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter((c) => c !== category)
                : [...prev.categories, category],
        }));
    };

    // Handle service toggle
    const toggleService = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    // Handle social media connection
    const toggleSocialMediaConnection = (platform) => {
        setFormData((prev) => ({
            ...prev,
            socialMedia: prev.socialMedia.map((account) =>
                account.platform === platform
                    ? { ...account, connected: !account.connected }
                    : account
            ),
        }));
    };

    // Handle profile image upload
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setLoading(true);
        try {
            const imageUrl = await uploadProfileImage(file);
            setFormData((prev) => ({ ...prev, profileImage: imageUrl }));
        } catch (err) {
            setError('Failed to upload profile image.');
        } finally {
            setLoading(false);
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = 'Full name is required';
        if (!formData.businessEmail || !/\S+@\S+\.\S+/.test(formData.businessEmail))
            errors.businessEmail = 'Valid email is required';
        if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
            errors.contactNumber = 'Valid 10-digit phone number is required';
        if (formData.categories.length === 0) errors.categories = 'At least one category is required';
        if (formData.services.length === 0) errors.services = 'At least one service is required';
        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setLoading(true);
        try {
            await onSubmit(formData);
            setInitialFormData(formData);
            setError(null);
        } catch (err) {
            setError('Failed to save profile data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex  h-screen bg-black">
            {/* <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> */}

            <div className='w-full bg-[#09090c]'>
                {/* <div className="w-full">
                    <SearchBar />
                </div>
                <div className="h-[90vh] overflow-y-auto scrollbar-hide ">
                    
                    {selectedItem === "dashboard" && <Dashboard />}
                    {selectedItem === "campaigns" && <Campaign />}
                    {selectedItem === "discover" && <DiscoverComapaigns />}
                    {selectedItem === "profile" && <InfluencerProfile />}
                    {selectedItem === "Analytics & Reports" && <AnalyticsDashboard />}
                    {selectedItem === "Messaging" && <Messaging />} */}

                {/* </div> */}
                <div className="w-full h-[90vh] text-white p-6 overflow-y-auto scrollbar-hide ">
                    <div className=" mx-auto">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-semibold">Edit Profile</h1>
                            <p className="text-gray-400 text-sm mt-1">
                                Update your profile information to attract the right brand partnership
                            </p>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    {/* Basic Information */}
                                    <div className="gray-gradient rounded-lg p-6">
                                        <h2 className="text-lg font-medium mb-6">Basic Information</h2>

                                        {/* Profile Image */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="relative">
                                                <img
                                                    src={formData.profileImage}
                                                    alt=""
                                                    className="w-20 h-20 rounded-full object-cover bg-gray-700"
                                                />
                                                <label className="absolute bottom-0 right-0 bg-gray-700 p-1 rounded-full cursor-pointer">
                                                    <Camera className="w-4 h-4" />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handleImageUpload}
                                                    />
                                                </label>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleInputChange('address', prompt('Enter address'))}
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                                            >
                                                Add Address →
                                            </button>
                                        </div>

                                        {/* Form Fields */}
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Full Name', field: 'fullName', type: 'text' },
                                                { label: 'Contact Number', field: 'contactNumber', type: 'text' },
                                                { label: 'Business Email', field: 'businessEmail', type: 'email' },
                                                { label: 'Influencer Type', field: 'influencerType', type: 'text' },
                                            ].map(({ label, field, type }) => (
                                                <div key={field}>
                                                    <label className="text-sm text-gray-400 block mb-2">{label}</label>
                                                    <input
                                                        type={type}
                                                        value={formData[field]}
                                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                                        className="w-full gray-gradient border border-green-200 px-4 py-3 rounded-lg rounded-tr-none rounded-bl-none  "
                                                    />
                                                    {formErrors[field] && (
                                                        <p className="text-red-500 text-xs mt-1">{formErrors[field]}</p>
                                                    )}
                                                </div>
                                            ))}

                                            <div>
                                                <label className="text-sm text-gray-400 block mb-2">Bio/Tagline</label>
                                                <textarea
                                                    value={formData.bio}
                                                    onChange={(e) => handleInputChange('bio', e.target.value)}
                                                    className="w-full gray-gradient border border-green-200 px-4 py-3 rounded-lg rounded-tr-none rounded-bl-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Professional Details */}
                                    <div className="gray-gradient rounded-lg p-6">
                                        <h2 className="text-lg font-medium mb-4">Professional Details</h2>
                                        <div className="mb-4">
                                            <label className="text-sm text-gray-400 block mb-3">Content Categories</label>
                                            <p className="text-xs text-gray-500 mb-3">
                                                Select all categories that describe your content
                                            </p>
                                            <div className="grid grid-cols-3 gap-3">
                                                {categoriesList.map((category) => (
                                                    <button
                                                        key={category}
                                                        type="button"
                                                        onClick={() => toggleCategory(category)}
                                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${formData.categories.includes(category)
                                                            ? 'bg-orange-500 text-white'
                                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                            }`}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>
                                            {formErrors.categories && (
                                                <p className="text-red-500 text-xs mt-2">{formErrors.categories}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* Social Media Accounts */}
                                    <div className="gray-gradient rounded-lg p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-lg font-medium">Social Media Accounts</h2>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const newAccount = prompt('Enter platform and handle (e.g., Instagram:@handle)');
                                                    if (newAccount) {
                                                        const [platform, handle] = newAccount.split(':');
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            socialMedia: [
                                                                ...prev.socialMedia,
                                                                { platform, handle, connected: false },
                                                            ],
                                                        }));
                                                    }
                                                }}
                                                className="text-orange-500 text-sm hover:text-orange-400"
                                            >
                                                Add Account
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            {formData.socialMedia.map((account) => (
                                                <div
                                                    key={account.platform}
                                                    className="flex items-center justify-between bg-gray-700 rounded-lg p-4"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${account.platform === 'Instagram'
                                                                ? 'bg-gradient-to-br from-purple-600 to-pink-500'
                                                                : account.platform === 'Facebook'
                                                                    ? 'bg-blue-600'
                                                                    : 'bg-gray-900'
                                                                }`}
                                                        >
                                                            <span className="text-white text-xs font-bold">
                                                                {account.platform.charAt(0)}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">{account.platform}</p>
                                                            <p className="text-xs text-gray-400">{account.handle}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <span
                                                            className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${account.connected
                                                                ? 'bg-green-500/20 text-green-400'
                                                                : 'bg-gray-600 text-gray-400'
                                                                }`}
                                                        >
                                                            {account.connected && <Check className="w-3 h-3" />}
                                                            {account.connected ? 'Connected' : 'Disconnected'}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleSocialMediaConnection(account.platform)}
                                                            className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600"
                                                        >
                                                            {account.connected ? 'Disconnect' : 'Connect'}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Collaboration & Rates */}
                                    <div className="gray-gradient rounded-lg p-6">
                                        <h2 className="text-lg font-medium mb-6">Collaboration & Rates</h2>

                                        {/* Services */}
                                        <div className="mb-6">
                                            <label className="text-sm text-gray-400 block mb-3">Services You Offer</label>
                                            <p className="text-xs text-gray-500 mb-3">
                                                Select all types of collaborations you provide
                                            </p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {servicesList.map((service) => (
                                                    <button
                                                        key={service}
                                                        type="button"
                                                        onClick={() => toggleService(service)}
                                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${formData.services.includes(service)
                                                            ? 'bg-orange-500 text-white'
                                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                            }`}
                                                    >
                                                        {service}
                                                    </button>
                                                ))}
                                            </div>
                                            {formErrors.services && (
                                                <p className="text-red-500 text-xs mt-2">{formErrors.services}</p>
                                            )}
                                        </div>

                                        {/* Rate Card */}
                                        <div>
                                            <label className="text-sm text-gray-400 block mb-3">Rate Card</label>
                                            <p className="text-xs text-gray-500 mb-4">Set your pricing for different services (USD)</p>
                                            <div className="space-y-4">
                                                {[
                                                    { label: 'Instagram Post', field: 'instagramPost' },
                                                    { label: 'Instagram Story', field: 'instagramStory' },
                                                    { label: 'YouTube Video', field: 'youtubeVideo' },
                                                    { label: 'TikTok Video', field: 'tiktokVideo' },
                                                    { label: 'Blog Post', field: 'blogPost' },
                                                ].map(({ label, field }) => (
                                                    <div key={field} className={field === 'blogPost' ? '' : 'grid grid-cols-2 gap-4'}>
                                                        <div className={field === 'blogPost' ? '' : 'col-span-1'}>
                                                            <label className="text-xs text-gray-500 block mb-2">{label}</label>
                                                            <input
                                                                type="text"
                                                                value={formData.rates[field]}
                                                                onChange={(e) => handleRateChange(field, e.target.value)}
                                                                className="w-full gray-gradient border border-green-200 px-4 py-3 rounded-lg rounded-tr-none rounded-bl-none "
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                                {hasUnsavedChanges && (
                                    <p className="text-sm text-yellow-500 flex items-center gap-2">
                                        <span className="text-yellow-400">⚠</span> You have unsaved changes
                                    </p>
                                )}
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={onCancel}
                                        className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors"
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

EditProfile.propTypes = {
    initialData: PropTypes.object,
    categoriesList: PropTypes.arrayOf(PropTypes.string),
    servicesList: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    fetchProfileData: PropTypes.func,
    uploadProfileImage: PropTypes.func,
};

export default EditProfile;