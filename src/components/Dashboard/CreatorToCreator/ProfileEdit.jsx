import React, { useState, useEffect } from "react";
import { Save, Camera, MapPin, DollarSign, Link } from "lucide-react";
import api from "../../../api/client";
import Cookies from "js-cookie";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";

export default function ProfileEdit({ onEditComplete, existingProfile }) {
  const [formData, setFormData] = useState({
    bio: "",
    skills: "",
    availability: "",
    location: "",
    instagram: "",
    twitter: "",
    youtube: "",
    hourlyRate: 0,
    projectRate: 0,
    profilePicture: null,
    bannerImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch logged-in user's profile details automatically
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await api.get("/creatorprofiles/me");
        const data = res.data.data || res.data;

        setFormData({
          bio: data.bio || "",
          skills: Array.isArray(data.skills)
            ? data.skills.join(", ")
            : data.skills || "",
          availability: data.availability || "",
          location: data.location || "",
          instagram: data.instagram || "",
          twitter: data.twitter || "",
          youtube: data.youtube || "",
          hourlyRate: data.hourlyRate || 0,
          projectRate: data.projectRate || 0,
          profilePicture: getImageUrl(data.profilePicture),
          bannerImage: getImageUrl(data.bannerImage),
        });
      } catch (err) {
        console.error("Failed to load profile:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    // If no pre-passed profile, fetch from backend
    if (!existingProfile) {
      fetchProfile();
    } else {
      // Pre-fill with prop data if provided
      setFormData({
        bio: existingProfile.bio || "",
        skills: Array.isArray(existingProfile.skills)
          ? existingProfile.skills.join(", ")
          : existingProfile.skills || "",
        availability: existingProfile.availability || "",
        location: existingProfile.location || "",
        instagram: existingProfile.instagram || "",
        twitter: existingProfile.twitter || "",
        youtube: existingProfile.youtube || "",
        hourlyRate: existingProfile.hourlyRate || 0,
        projectRate: existingProfile.projectRate || 0,
        profilePicture: getImageUrl(existingProfile.profilePicture),
        bannerImage: getImageUrl(existingProfile.bannerImage),
      });
    }
  }, [existingProfile]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const updateData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "skills") {
          updateData.append(key, formData[key]);
        } else if (key === "profilePicture" || key === "bannerImage") {
          if (formData[key] instanceof File) {
            updateData.append(key, formData[key]);
          }
        } else {
          updateData.append(key, formData[key] || "");
        }
      });
    //   console.log("Submitting update with data:");
    //   for (let [key, value] of updateData.entries()) {
    //     console.log(key, value);
    //   }

      const response = await api.put("/creatorprofiles/update", updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Update response:", response);
      if (response.data.success) {
        onEditComplete?.();
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Update error:", error);
      setError(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !formData.bio && !formData.skills) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading your profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          Edit Your Creator Profile
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8">
          Update your details to keep your profile fresh and relevant.
        </p>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow"
        >
          {/* (All your existing form inputs remain the same below) */}
          {/* Profile Picture, Banner, Bio, Skills, etc. */}
          {/* ... */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Profile Picture
            </label>
            <div className="flex items-center gap-3">
              <Camera size={20} className="text-gray-500" />
              <input
                type="file"
                name="profilePicture"
                onChange={handleInputChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
            </div>
            {formData.profilePicture &&
              typeof formData.profilePicture === "string" && (
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mt-2 object-cover border"
                />
              )}
            {formData.profilePicture instanceof File && (
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Preview"
                className="w-24 h-24 rounded-full mt-2 object-cover border"
              />
            )}
          </div>

          {/* Banner Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Banner Image
            </label>
            <div className="flex items-center gap-3">
              <Camera size={20} className="text-gray-500" />
              <input
                type="file"
                name="bannerImage"
                onChange={handleInputChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
            </div>
            {formData.bannerImage &&
              typeof formData.bannerImage === "string" && (
                <img
                  src={formData.bannerImage}
                  alt="Banner"
                  className="w-full h-32 object-cover mt-2 rounded-md border"
                />
              )}
            {formData.bannerImage instanceof File && (
              <img
                src={URL.createObjectURL(formData.bannerImage)}
                alt="Preview"
                className="w-full h-32 object-cover mt-2 rounded-md border"
              />
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about yourself..."
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="e.g., photography, video editing"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-gray-500" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Your location (e.g., Jaipur)"
              className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select...</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="weekends">Weekends</option>
              <option value="project-based">Project-based</option>
            </select>
          </div>

          {/* Rates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                <DollarSign size={16} /> Hourly Rate
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleInputChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                <DollarSign size={16} /> Project Rate
              </label>
              <input
                type="number"
                name="projectRate"
                value={formData.projectRate}
                onChange={handleInputChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["instagram", "twitter", "youtube"].map((social) => (
              <div key={social}>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                  <Link size={16} />{" "}
                  {social.charAt(0).toUpperCase() + social.slice(1)}
                </label>
                <input
                  type="url"
                  name={social}
                  value={formData[social]}
                  onChange={handleInputChange}
                  placeholder={`https://${social}.com/username`}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            <Save size={20} />
            <span>{loading ? "Saving..." : "Save Changes"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
