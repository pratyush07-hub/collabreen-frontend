import React from 'react'
import { useState } from 'react';
import {useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import SearchBar from '../Searchbar';
import Profile from '../Profile';
import Campaign from '../Campaign';
import BrandDashBoard from '../BrandDashBoard';
import InfluencerCampaignDetails from '../InfluencerCampaignDetails';
import BrandDetails from '../BrandDetails';
import Dashboard from './Dashboard';
import DiscoverComapaigns from './DiscoverComapaigns';
import InfluencerProfile from './InfluencerProfile';
import EditProfile from './EditProfile';
import AnalyticsDashboard from './AnalyticsDashboard';
import MessagingInterface from './MessagingInterface';
import { useEffect } from 'react';

const InfluencerDashboardPage = () => {
      const [selectedItem, setSelectedItem] = useState("dashboard");
    const location = useLocation();
    const influencerData = location.state?.influencer; // This will contain the influencer object

    useEffect(() => {
        console.log("Influencer Data:", influencerData);
    }, [influencerData]);

    return (
        <div className="flex h-screen bg-black">
            {/* Sidebar */}
            <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

            {/* Main Content */}
            <div className="w-full">
                <SearchBar />
                <div className="h-[90vh] overflow-y-auto scrollbar-hide ">
                    {/* Conditional Rendering */}
                    {selectedItem === "dashboard" && <Dashboard influencer={influencerData} />}
                    {selectedItem === "campaigns" && <Campaign />}
                    {selectedItem === "discover" && <DiscoverComapaigns />}
                    {selectedItem === "profile" && <InfluencerProfile />}
                    {selectedItem === "analytics" && <AnalyticsDashboard />}
                    {selectedItem === "messaging" && <MessagingInterface />}

                </div>
            </div>
        </div>
    );
}

export default InfluencerDashboardPage