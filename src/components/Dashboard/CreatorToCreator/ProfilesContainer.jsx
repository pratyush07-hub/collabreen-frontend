// ProfilesContainer.jsx
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import client from '../../../api/client';

export default function ProfilesContainer() {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const response = await client.get('/creatorprofiles');
        if (response.data.success && Array.isArray(response.data.data)) {
          setProfiles(response.data.data);
        } else {
          setError('Invalid response from server');
        }
      } catch (err) {
        console.error('Error fetching profiles:', err);
        setError('Failed to fetch profiles');
      }
      setLoading(false);
    };

    fetchProfiles();
  }, []);

  const showNextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('🎉 You have seen all profiles!');
    }
  };

  const handleLike = (id) => {
    console.log('Liked:', id);
    showNextProfile();
  };

  const handleDislike = () => {
    console.log('Disliked profile');
    showNextProfile();
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {loading ? (
        <p className="text-gray-600 text-lg">Loading profiles...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : currentProfile ? (
        <ProfileCard
          profile={currentProfile}
          onStartConversation={() => console.log('Chat with', currentProfile.name)}
          onClose={handleDislike}
          onLike={handleLike}
        />
      ) : (
        <p className="text-gray-600 text-lg">No more profiles available.</p>
      )}
    </div>
  );
}
