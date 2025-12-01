import React, { useEffect, useState } from "react";
import { MapPin, Edit3, Instagram, Linkedin, Youtube, Twitter, Link, ArrowLeft } from "lucide-react";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";
import axios from "axios";
import { getMyProfile } from "../../../api/client";
import { useNavigate } from "react-router-dom";

export default function ProfilePreview() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getMyProfile();
        setProfile(res.data.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center mt-20 text-gray-600">Loading your profile...</div>;
  if (!profile) return <div className="text-center mt-20 text-gray-600">No profile found.</div>;

  return (
    <>
    
<button
  onClick={() => navigate(-1)}
  className="flex items-center gap-2 text-white mb-4 mt-4 lg:w-[70%] lg:mx-auto"
>
  <ArrowLeft size={24} />
  <span className="text-white">Back to Dashboard</span>
</button>
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Banner */}
      <div className="relative h-64 w-full">
        <img
          src={getImageUrl(profile.bannerImage)}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-10">
          <img
            src={getImageUrl(profile.profilePicture)}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="mt-20 px-10 pb-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{profile.user?.name}</h2>
            <p className="text-gray-600">{profile.bio}</p>
          </div>
          {/* <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
            <Edit3 size={18} /> Edit Profile
          </button> */}
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={18} className="text-orange-500" /> <span>{profile.location}</span>
          </div>
          {profile.hometown && <div className="text-gray-700">Hometown: {profile.hometown}</div>}
          {profile.gender && <div className="text-gray-700">👤 Gender: {profile.gender}</div>}
          {profile.portfolio && (
            <div className="flex items-center gap-2 text-blue-600">
              <Link size={18} />{" "}
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                View Portfolio
              </a>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-orange-600 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.length > 0 ? (
              profile.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-600 text-sm">No skills added yet.</p>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          {profile.instagram && (
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              <Instagram className="text-pink-600 hover:scale-110 transition-transform" />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="text-blue-600 hover:scale-110 transition-transform" />
            </a>
          )}
          {profile.youtube && (
            <a href={profile.youtube} target="_blank" rel="noreferrer">
              <Youtube className="text-red-600 hover:scale-110 transition-transform" />
            </a>
          )}
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              <Twitter className="text-sky-500 hover:scale-110 transition-transform" />
            </a>
          )}
        </div>

        {/* Availability & Rating */}
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Availability</h3>
            <p
              className={`inline-block px-4 py-1 rounded-full text-white ${
                profile.availability === "full-time"
                  ? "bg-green-500"
                  : profile.availability === "part-time"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}
            >
              {profile.availability || "Not specified"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-700 font-medium">⭐ {profile.rating || 0} / 5</p>
            <p className="text-sm text-gray-500">
              {profile.reviewCount || 0} Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
