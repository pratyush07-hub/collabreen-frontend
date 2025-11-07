import React, { useState, useEffect } from "react";
import {
  Save,
  Camera,
  MapPin,
  DollarSign,
  Link as LinkIcon,
  User,
  Home,
} from "lucide-react";
import api from "../../../api/client";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";

export default function ProfileEdit({ onEditComplete, existingProfile }) {
  const [formData, setFormData] = useState({
    bio: "",
    skills: "",
    availability: "",
    location: "",
    hometown: "",
    gender: "",
    portfolio: "",
    instagram: "",
    twitter: "",
    youtube: "",
    linkedin: "",
    hourlyRate: 0,
    projectRate: 0,
    profilePicture: null,
    bannerImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch existing profile data if available
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
          hometown: data.hometown || "",
          gender: data.gender || "",
          portfolio: data.portfolio || "",
          instagram: data.instagram || "",
          twitter: data.twitter || "",
          youtube: data.youtube || "",
          linkedin: data.linkedin || "",
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

    if (!existingProfile) {
      fetchProfile();
    } else {
      setFormData({
        ...formData,
        ...existingProfile,
        skills: Array.isArray(existingProfile.skills)
          ? existingProfile.skills.join(", ")
          : existingProfile.skills || "",
      });
    }
  }, [existingProfile]);

  // ✅ Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // ✅ Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const updateData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "skills") updateData.append(key, formData[key]);
        else if (["profilePicture", "bannerImage"].includes(key)) {
          if (formData[key] instanceof File) updateData.append(key, formData[key]);
        } else updateData.append(key, formData[key] || "");
      });

      const response = await api.put("/creatorprofiles/update", updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        onEditComplete?.();
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Update error:", error);
      setError(error.response?.data?.message || "Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !formData.bio) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading your profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Edit Your Creator Profile
        </h1>
        <p className="text-gray-600">
          Update your profile to showcase your best work and reach more collaborations.
        </p>

        {error && <div className="text-red-500">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center gap-3">
              <Camera size={20} className="text-gray-500" />
              <input
                type="file"
                name="profilePicture"
                onChange={handleInputChange}
                accept="image/*"
                className="file-input"
              />
            </div>
            {formData.profilePicture && (
              <img
                src={
                  formData.profilePicture instanceof File
                    ? URL.createObjectURL(formData.profilePicture)
                    : formData.profilePicture
                }
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mt-3 object-cover border"
              />
            )}
          </div>

          {/* Banner */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Banner Image
            </label>
            <div className="flex items-center gap-3">
              <Camera size={20} className="text-gray-500" />
              <input
                type="file"
                name="bannerImage"
                onChange={handleInputChange}
                accept="image/*"
                className="file-input"
              />
            </div>
            {formData.bannerImage && (
              <img
                src={
                  formData.bannerImage instanceof File
                    ? URL.createObjectURL(formData.bannerImage)
                    : formData.bannerImage
                }
                alt="Banner"
                className="w-full h-32 object-cover mt-3 rounded-md border"
              />
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about yourself..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Location, Hometown, Gender */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
                <MapPin size={16} /> Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State"
                className="input-field"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Home size={16} /> Hometown
              </label>
              <input
                type="text"
                name="hometown"
                value={formData.hometown}
                onChange={handleInputChange}
                placeholder="Your hometown"
                className="input-field"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
                <User size={16} /> Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="Photography, Editing, Videography..."
              className="input-field w-[40vw]"
              required
            />
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 flex items-center gap-1">
              <LinkIcon size={16} /> Portfolio Link
            </label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              placeholder="https://yourportfolio.com"
              className="input-field w-[32vw]"
            />
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["instagram", "youtube", "linkedin", "twitter"].map((social) => (
              <div key={social}>
                <label className="block font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <LinkIcon size={16} />{" "}
                  {social.charAt(0).toUpperCase() + social.slice(1)}
                </label>
                <input
                  type="url"
                  name={social}
                  value={formData[social]}
                  onChange={handleInputChange}
                  placeholder={`https://${social}.com/username`}
                  className="input-field"
                />
              </div>
            ))}
          </div>

          {/* Rates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-2 flex items-center gap-1">
                <DollarSign size={16} /> Hourly Rate
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2 flex items-center gap-1">
                <DollarSign size={16} /> Project Rate
              </label>
              <input
                type="number"
                name="projectRate"
                value={formData.projectRate}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            <Save size={20} />
            <span>{loading ? "Saving..." : "Save Changes"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
