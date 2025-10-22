// import React, { useState } from 'react';
// import { Camera, MapPin, Star, Users, Play, Upload, Paperclip } from 'lucide-react';

// const PhotographerProfile = () => {
//     const [activeTab, setActiveTab] = useState('profile');

//     const profileData = {
//         name: "Alex Johnson",
//         location: "Sanganer, Jaipur",
//         rating: 4.9,
//         reviews: 12,
//         collabs: 5,
//         tags: ["Videographer", "Content Creator", "+2"],
//         joinDate: "January 2023",
//         skills: ["Photography", "Videography", "Editing", "Drone"],
//         lookingFor: ["Photography", "Videography", "Editing", "Drone"],
//         about: "Versatile videographer and content creator. Passionate about storytelling and creating engaging visual content.",
//         lookingForText: "Searching for a talented editor and graphic designer to join my team on exciting new projects. Let's create something amazing together",
//         stats: {
//             totalCollaboration: 5,
//             completeProjects: 4,
//             averageRating: 4.9,
//             totalReviews: 8
//         },
//         portfolio: [
//             {
//                 title: "Brand Video Campaign",
//                 description: "Corporate video for sustainable fashion brand",
//                 thumbnail: "/api/placeholder/300/200"
//             },
//             {
//                 title: "Brand Video Campaign",
//                 description: "Corporate video for sustainable fashion brand",
//                 thumbnail: "/api/placeholder/300/200"
//             },
//             {
//                 title: "Brand Video Campaign",
//                 description: "Corporate video for sustainable fashion brand",
//                 thumbnail: "/api/placeholder/300/200"
//             }
//         ]
//     };

//     const renderProfileContent = () => (
//         <div className="space-y-6">
//             {/* About Section */}
//             <div className="bg-white rounded-lg p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">About</h3>
//                 <p className="text-gray-600 mb-6">{profileData.about}</p>

//                 <div className="grid grid-cols-2 gap-8">
//                     <div>
//                         <h4 className="font-medium mb-2">Joined</h4>
//                         <p className="text-gray-500">{profileData.joinDate}</p>
//                     </div>
//                     <div>
//                         <h4 className="font-medium mb-2">Availability</h4>
//                         <p className="text-gray-500">Available</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Skills Section */}
//             <div className="bg-white rounded-lg p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Skills</h3>
//                 <div className="flex flex-wrap gap-2">
//                     {profileData.skills.map((skill, index) => (
//                         <span
//                             key={index}
//                             className="px-3 py-1 border border-orange-200 text-orange-600 rounded-full text-sm"
//                         >
//                             {skill}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Looking For Section */}
//             <div className="bg-white rounded-lg p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Looking For</h3>
//                 <p className="text-gray-600 mb-4">{profileData.lookingForText}</p>
//                 <div className="flex flex-wrap gap-2">
//                     {profileData.lookingFor.map((item, index) => (
//                         <span
//                             key={index}
//                             className="px-3 py-1 border border-orange-200 text-orange-600 rounded-full text-sm"
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );

//     const renderPortfolioContent = () => (
//         <div className="space-y-6">
//             {/* My Work Section */}
//             <div>
//                 <h3 className="text-xl font-semibold mb-4">My Work</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {profileData.portfolio.map((item, index) => (
//                         <div key={index} className="bg-white rounded-lg overflow-hidden border">
//                             <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
//                                 <Play className="w-12 h-12 text-white" />
//                             </div>
//                             <div className="p-4">
//                                 <h4 className="font-medium mb-1">{item.title}</h4>
//                                 <p className="text-sm text-gray-600">{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Add Work Section */}
//             <div>
//                 <h3 className="text-xl font-semibold mb-4">Add Work</h3>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
//                     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
//                     <h4 className="text-lg font-medium mb-2">Upload Files</h4>
//                     <p className="text-gray-500 mb-4">Drag files here or click to browse</p>
//                     <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm">
//                         <Paperclip className="w-4 h-4 mr-2" />
//                         Choose files
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                     <div>
//                         <label className="block text-sm font-medium mb-2">Add Title</label>
//                         <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium mb-2">Add Description</label>
//                         <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderStatusContent = () => (
//         <div className="grid grid-cols-2 gap-4">
//             <div className="bg-pink-100 rounded-lg p-6 text-center">
//                 <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
//                 <h3 className="text-lg font-medium text-gray-600 mb-1">Total Collaboration</h3>
//                 <p className="text-3xl font-bold text-gray-800">{profileData.stats.totalCollaboration}</p>
//             </div>

//             <div className="bg-green-100 rounded-lg p-6 text-center">
//                 <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
//                 <h3 className="text-lg font-medium text-gray-600 mb-1">Complete Projects</h3>
//                 <p className="text-3xl font-bold text-gray-800">{profileData.stats.completeProjects}</p>
//             </div>

//             <div className="bg-orange-100 rounded-lg p-6 text-center">
//                 <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
//                     <Star className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-600 mb-1">Average Rating</h3>
//                 <div className="flex items-center justify-center">
//                     <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
//                     <p className="text-3xl font-bold text-gray-800">{profileData.stats.averageRating}</p>
//                 </div>
//             </div>

//             <div className="bg-yellow-100 rounded-lg p-6 text-center">
//                 <div className="w-8 h-8 bg-yellow-500 rounded mx-auto mb-2"></div>
//                 <h3 className="text-lg font-medium text-gray-600 mb-1">Total Reviews</h3>
//                 <p className="text-3xl font-bold text-gray-800">{profileData.stats.totalReviews}</p>
//             </div>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header Banner */}
//             <div className="relative h-48 bg-gradient-to-r from-gray-600 to-gray-800">
//                 <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <Camera className="w-16 h-16 text-white" />
//                 </div>
//             </div>

//             {/* Profile Info */}
//             <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
//                 <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//                     <div className="flex items-start justify-between">
//                         <div className="flex items-start space-x-4">
//                             <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
//                                 <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
//                             </div>

//                             <div className="flex-1">
//                                 <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
//                                 <div className="flex items-center text-gray-600 mt-1">
//                                     <MapPin className="w-4 h-4 mr-1" />
//                                     <span>{profileData.location}</span>
//                                 </div>

//                                 <div className="flex items-center mt-2 space-x-4">
//                                     <div className="flex items-center">
//                                         <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
//                                         <span className="font-medium">{profileData.rating}</span>
//                                         <span className="text-gray-500 text-sm ml-1">({profileData.reviews})</span>
//                                     </div>

//                                     <div className="flex items-center text-gray-600">
//                                         <Users className="w-4 h-4 mr-1" />
//                                         <span>{profileData.collabs} Collabs</span>
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mt-3">
//                                     {profileData.tags.map((tag, index) => (
//                                         <span
//                                             key={index}
//                                             className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm border"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex space-x-3">
//                             <button className="px-4 py-2 border border-orange-400 text-orange-600 rounded-md hover:bg-orange-50">
//                                 Available
//                             </button>
//                             <button className="px-4 py-2 border border-orange-400 text-orange-600 rounded-md hover:bg-orange-50">
//                                 Notification
//                             </button>
//                             <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Navigation Tabs */}
//                 <div className="flex space-x-2 mb-6">
//                     <button
//                         onClick={() => setActiveTab('profile')}
//                         className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'profile'
//                                 ? 'bg-orange-500 text-white'
//                                 : 'bg-gray-400 text-white hover:bg-gray-500'
//                             }`}
//                     >
//                         Profile
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('portfolio')}
//                         className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'portfolio'
//                                 ? 'bg-orange-500 text-white'
//                                 : 'bg-gray-400 text-white hover:bg-gray-500'
//                             }`}
//                     >
//                         Portfolio
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('status')}
//                         className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'status'
//                                 ? 'bg-orange-500 text-white'
//                                 : 'bg-gray-400 text-white hover:bg-gray-500'
//                             }`}
//                     >
//                         Status
//                     </button>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="pb-8">
//                     {activeTab === 'profile' && renderProfileContent()}
//                     {activeTab === 'portfolio' && renderPortfolioContent()}
//                     {activeTab === 'status' && renderStatusContent()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PhotographerProfile;


// PhotographerProfile.jsx
import React, { useState, useEffect } from "react";
import {
  Camera,
  MapPin,
  Star,
  Users,
  Play,
  Upload,
  Paperclip,
  Save,
  DollarSign,
  Link,
} from "lucide-react";
import client from "../../../api/client";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";

const PhotographerProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await client.get("/creatorprofiles/me");
        setProfileData(response.data.data);
        setFormData({
          bio: response.data.data.bio,
          skills: response.data.data.skills.join(", "),
          availability: response.data.data.availability,
          location: response.data.data.location,
          instagram: response.data.data.instagram || "",
          twitter: response.data.data.twitter || "",
          youtube: response.data.data.youtube || "",
          hourlyRate: response.data.data.hourlyRate || 0,
          projectRate: response.data.data.projectRate || 0,
          profilePicture: null,
          bannerImage: null,
        });
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "skills") {
          submitData.append(
            key,
            formData[key].split(",").map((s) => s.trim())
          );
        } else if (formData[key]) {
          submitData.append(key, formData[key]);
        }
      });

      const response = await client.put("/creatorprofiles/me", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setProfileData(response.data.data);
        setIsEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Update failed");
    }
    setLoading(false);
  };

  // --- TAB CONTENT ---
  const renderProfileContent = () => (
    <div className="space-y-6">
      {/* About */}
      <div className="bg-white rounded-lg p-6 border border-[#84868B]">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-gray-600 mb-6">{profileData?.bio}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Joined</h4>
            <p className="text-gray-500">
              {profileData?.createdAt
                ? new Date(profileData.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Availability</h4>
            <p className="text-gray-500">{profileData?.availability || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg p-6 border border-[#84868B]">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profileData?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 border border-orange-200 text-orange-600 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Looking For */}
      <div className="bg-white rounded-lg p-6 border border-[#84868B]">
        <h3 className="text-lg font-semibold mb-4">Looking For</h3>
        <p className="text-gray-600 mb-4">{profileData?.lookingFor}</p>
        <div className="flex flex-wrap gap-2">
          {profileData?.skills?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 border border-orange-200 text-orange-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  
  const renderPortfolioContent = () => (
    <div className="space-y-6">
      {/* My Work Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">My Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profileData?.portfolio?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Work Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Add Work</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-medium mb-2">Upload Files</h4>
          <p className="text-gray-500 mb-4">
            Drag files here or click to browse
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm">
            <Paperclip className="w-4 h-4 mr-2" />
            Choose files
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Add Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Add Description
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatusContent = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="bg-pink-100 rounded-lg p-6 text-center">
        <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
        <h3 className="text-lg font-medium text-gray-600 mb-1">
          Total Collaboration
        </h3>
        <p className="text-3xl font-bold text-gray-800">
          {profileData?.stats?.totalCollaboration || 0}
        </p>
      </div>

      <div className="bg-green-100 rounded-lg p-6 text-center">
        <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
        <h3 className="text-lg font-medium text-gray-600 mb-1">
          Complete Projects
        </h3>
        <p className="text-3xl font-bold text-gray-800">
          {profileData?.stats?.completeProjects || 0}
        </p>
      </div>

      <div className="bg-orange-100 rounded-lg p-6 text-center">
        <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
          <Star className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-medium text-gray-600 mb-1">
          Average Rating
        </h3>
        <p className="text-3xl font-bold text-gray-800">
          {profileData?.stats?.averageRating || 0}
        </p>
      </div>

      <div className="bg-yellow-100 rounded-lg p-6 text-center">
        <div className="w-8 h-8 bg-yellow-500 rounded mx-auto mb-2"></div>
        <h3 className="text-lg font-medium text-gray-600 mb-1">Total Reviews</h3>
        <p className="text-3xl font-bold text-gray-800">
          {profileData?.stats?.totalReviews || 0}
        </p>
      </div>
    </div>
  );

  if (loading) return <div className="p-8 text-center">Loading profile...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen mx-auto w-[94%] bg-gray-50">
      {/* Header Banner */}
      <div className="h-[30vh] sm:h-[25vh] mt-24 relative">
        <img
          className="w-full h-full object-cover"
          src={getImageUrl(profileData?.bannerImage)}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Profile Info */}
      <div className="max-w-8xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-lg py-6 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-40 gap-6">
            {/* Left section */}
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto sm:mx-0">
                <img
                  src={
                    getImageUrl(profileData?.profilePicture) ||
                    "/api/placeholder/80/80"
                  }
                  alt={profileData?.user?.name}
                  className="w-full h-full object-cover rounded-full border-2 border-[#93B076]"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">
                  {profileData?.user?.name}
                </h1>
                <div className="flex justify-center sm:justify-start items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{profileData?.location}</span>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">
                      {profileData?.rating || 0}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({profileData?.stats?.totalReviews || 0})
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>
                      {profileData?.stats?.totalCollaboration || 0} Collabs
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                  {profileData?.skills?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section (buttons) */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end mt-4 sm:mt-16 gap-3 sm:space-x-8">
              <button className="px-6 py-2 border-2 flex gap-2 items-center justify-center border-[#EFAC16] text-black rounded-tr-md rounded-bl-md hover:bg-orange-50">
                <div className="w-2 h-2 bg-[#93B076] mt-1 rounded-full"></div>
                <div>{profileData?.availability || "N/A"}</div>
              </button>
              <button className="px-6 py-2 border-2 border-[#EFAC16] text-black rounded-tr-md rounded-bl-md hover:bg-orange-50">
                Notification
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-[#84868B] text-white rounded-tr-md rounded-bl-md hover:bg-gray-600"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-around mb-6 gap-4 mt-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-20 sm:px-40 py-2 rounded-tr-md rounded-bl-md font-medium transition-colors ${
              activeTab === "profile"
                ? "bg-gradient-to-r from-[#EFAC16] to-[#F77128] text-white"
                : "bg-[#84868B] text-white hover:bg-gray-500"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-20 sm:px-40 py-2 rounded-tr-md rounded-bl-md font-medium transition-colors ${
              activeTab === "portfolio"
                ? "bg-gradient-to-r from-[#EFAC16] to-[#F77128] text-white"
                : "bg-[#84868B] text-white hover:bg-gray-500"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("status")}
            className={`px-20 sm:px-40 py-2 rounded-tr-md rounded-bl-md font-medium transition-colors ${
              activeTab === "status"
                ? "bg-gradient-to-r from-[#EFAC16] to-[#F77128] text-white"
                : "bg-[#84868B] text-white hover:bg-gray-500"
            }`}
          >
            Status
          </button>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {activeTab === "profile" && renderProfileContent()}
          {activeTab === "portfolio" && renderPortfolioContent()}
          {activeTab === "status" && renderStatusContent()}
        </div>
      </div>
    </div>
  );
};

export default PhotographerProfile;