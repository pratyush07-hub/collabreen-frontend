import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import Profile from './Profile';
import Campaign from './Campaign';
import BrandDashBoard from './BrandDashBoard';
import InfluencerCampaignDetails from './InfluencerCampaignDetails';
import BrandDetails from './BrandDetails';
import { useLocation } from "react-router-dom";

function DashboardLanding() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const location = useLocation();
  const { userDetails } = location.state || {};
  const role = userDetails.role;

  if (role !== "brand") {
    return (
      <div className="flex bg-black">
        {/* Sidebar */}
        <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        {/* Main Content */}
        <div className="w-full">
          <SearchBar />
          <div className="p-4">
            {/* Conditional Rendering */}
            {selectedItem === "dashboard" && <BrandDashBoard />}
            {selectedItem === "campaigns" && <Campaign />}
            {selectedItem === "discover" && <InfluencerCampaignDetails />}
            {selectedItem === "profile" && <Profile />}
          </div>
        </div>
      </div>
    );

  }else{
    return (
      <div className="flex bg-black">
        {/* Sidebar */}
        <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        {/* Main Content */}
        <div className="w-full">
          <SearchBar />
          <div className="p-4">
            {/* Conditional Rendering */}
            {selectedItem === "dashboard" && <BrandDetails />}
            {selectedItem === "campaigns" && <Campaign />}
            {selectedItem === "discover" && <InfluencerCampaignDetails />}
            {selectedItem === "profile" && <Profile />}
          </div>
          
        </div>
      </div>
    );
  }
  
}

export default DashboardLanding;
