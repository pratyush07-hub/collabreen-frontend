// import React, { useState } from 'react';
// import { Star, MapPin, Heart, X, Instagram, Linkedin, Filter, Search } from 'lucide-react';
// import FilterModal from './FilterModal';

// export default function ProfileCard({ profile, onStartConversation, onClose, onLike }) {

//         const [searchQuery, setSearchQuery] = useState('');
//     const [isLiked, setIsLiked] = useState(false);
//     const [showFilterModal, setShowFilterModal] = useState(false);


//     const handleLike = () => {
//         setIsLiked(!isLiked);
//         onLike(profile.id);
//     };
//     const handleApplyFilters = (filters: any) => {
//         console.log('Applied filters:', filters);
//         // 🔥 Add your filter logic here (maybe filter profiles list in parent)
//         setShowFilterModal(false);
//     };

//     const renderStars = (rating) => {
//         return Array.from({ length: 5 }, (_, index) => (
//             <Star
//                 key={index}
//                 size={16}
//                 className={`${index < Math.floor(rating)
//                         ? 'text-yellow-400 fill-current'
//                         : 'text-gray-300'
//                     }`}
//             />
//         ));
//     };

//     return (
//         <div className="max-w-full bg-white rounded-2xl shadow-lg overflow-hidden px-10 ">
//             <div className='flex items-center justify-between p-4 space-x-6'>
//                 {/* Search Bar */}
//                 <div className="flex-1 relative">
//                     <div className="relative">
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                         <input
//                             type="text"
//                             placeholder="Search creator by name, skill, location..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                         />
//                     </div>
//                 </div>
//                 {/* Filter Button */}
//                 <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                     <Filter onClick={() => setShowFilterModal(true)} size={20} className="text-gray-600" />
//                 </button>
//             </div>



//             {/* Banner and Profile Image */}
//             <div className="relative h-48">
//                 <img
//                     src={profile.bannerImage}
//                     alt="Profile banner"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-6 transform translate-y-1/2">
//                     <img
//                         src={profile.profileImage}
//                         alt={profile.name}
//                         className="w-24 h-24 rounded-full border-4 border-white object-cover"
//                     />
//                 </div>
//             </div>

//             {/* Profile Content */}
//             <div className="pt-16 p-6">
//                 {/* Name and Title */}
//                 <div className="flex items-start justify-between mb-4">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
//                         <p className="text-blue-600 font-medium">#{profile.title}</p>
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                         <X size={24} className="text-gray-500" />
//                     </button>
//                 </div>

//                 {/* Description */}
//                 <p className="text-black mb-6 leading-relaxed">{profile.description}</p>

//                 {/* Rating, Location, Availability */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center space-x-6">
//                         {/* Rating */}
//                         <div className="flex items-center space-x-2">
//                             <div className="flex items-center">
//                                 {renderStars(profile.rating)}
//                             </div>
//                             <span className="text-gray-700 font-medium">Rating: {profile.rating}</span>
//                             <span className="text-gray-500 text-sm">({profile.reviewCount} reviews)</span>
//                         </div>

//                         {/* Location */}
//                         <div className="flex items-center space-x-1 text-gray-600">
//                             <MapPin size={16} className="text-orange-500" />
//                             <span>{profile.location}</span>
//                         </div>
//                     </div>

//                     {/* Availability */}
//                     <div className={`px-4 py-2 rounded-full text-sm font-medium ${profile.isAvailable
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-gray-100 text-gray-600'
//                         }`}>
//                         {profile.isAvailable ? 'Available' : 'Unavailable'}
//                     </div>
//                 </div>

//                 {/* Looking For Section */}
//                 <div className="mb-6">
//                     <h3 className="text-orange-600 font-semibold mb-2">Looking For:</h3>
//                     <p className="text-gray-700 mb-3">{profile.lookingFor}</p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2">
//                         {profile.tags.map((tag, index) => (
//                             <span
//                                 key={index}
//                                 className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex space-x-4 mb-6">
//                     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <Instagram size={20} className="text-pink-600" />
//                     </button>
//                     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <Linkedin size={20} className="text-blue-600" />
//                     </button>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex items-center space-x-4">
//                     <button
//                         onClick={handleLike}
//                         className={`p-3 rounded-full transition-all transform hover:scale-110 ${isLiked
//                                 ? 'bg-red-100 text-red-500'
//                                 : 'bg-orange-100 text-orange-500 hover:bg-orange-200'
//                             }`}
//                     >
//                         <Heart
//                             size={24}
//                             className={isLiked ? 'fill-current' : ''}
//                         />
//                     </button>

//                     <button
//                         onClick={() => onStartConversation(profile.id)}
//                         className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                         Start Conversation
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { Star, MapPin, Heart, X, Instagram, Linkedin, Filter, Search } from 'lucide-react';
// import FilterModal from './FilterModal';

// export default function ProfileCard({ profile, onStartConversation, onClose, onLike }) {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isLiked, setIsLiked] = useState(false);
//     const [showFilterModal, setShowFilterModal] = useState(false);

//     const handleLike = () => {
//         setIsLiked(!isLiked);
//         onLike(profile.id);
//     };

//     const handleApplyFilters = (filters) => {
//         console.log('Applied filters:', filters);
//         setShowFilterModal(false);
//     };

//     const renderStars = (rating) => {
//         return Array.from({ length: 5 }, (_, index) => (
//             <Star
//                 key={index}
//                 size={16}
//                 className={`${index < Math.floor(rating)
//                     ? 'text-yellow-400 fill-current'
//                     : 'text-gray-300'
//                     }`}
//             />
//         ));
//     };

//     return (
//         <div className="max-w-full bg-white rounded-2xl shadow-lg overflow-hidden px-10">
//             {/* Search & Filter */}
//             <div className="flex items-center justify-between p-4 space-x-6">
//                 <div className="flex-1 relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search creator by name, skill, location..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     />
//                 </div>

//                 <button
//                     onClick={() => setShowFilterModal(true)}
//                     className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                     <Filter size={20} className="text-gray-600" />
//                 </button>
//             </div>

//             {/* Filter Modal */}
//             {showFilterModal && (
//                 <FilterModal
//                     isOpen={showFilterModal}
//                     onClose={() => setShowFilterModal(false)}
//                     onApplyFilters={handleApplyFilters}
//                 />
//             )}

//             {/* Banner & Profile */}
//             <div className="relative h-48">
//                 <img src={profile.bannerImage} alt="Profile banner" className="w-full h-full object-cover" />
//                 <div className="absolute bottom-0 left-6 transform translate-y-1/2">
//                     <img
//                         src={profile.profileImage}
//                         alt={profile.name}
//                         className="w-24 h-24 rounded-full border-4 border-white object-cover"
//                     />
//                 </div>
//             </div>

//             {/* Profile Content */}
//             <div className="pt-16 p-6">
//                 {/* Name + Title + Close */}
//                 <div className="flex items-start justify-between mb-4">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
//                         <p className="text-blue-600 font-medium">#{profile.title}</p>
//                     </div>
//                     <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <X size={24} className="text-gray-500" />
//                     </button>
//                 </div>

//                 {/* Description */}
//                 <p className="text-black mb-6 leading-relaxed">{profile.description}</p>

//                 {/* Rating, Location, Availability */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center space-x-6">
//                         <div className="flex items-center space-x-2">
//                             <div className="flex items-center">{renderStars(profile.rating)}</div>
//                             <span className="text-gray-700 font-medium">Rating: {profile.rating}</span>
//                             <span className="text-gray-500 text-sm">({profile.reviewCount} reviews)</span>
//                         </div>

//                         <div className="flex items-center space-x-1 text-gray-600">
//                             <MapPin size={16} className="text-orange-500" />
//                             <span>{profile.location}</span>
//                         </div>
//                     </div>

//                     <div
//                         className={`px-4 py-2 rounded-full text-sm font-medium ${profile.isAvailable
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-gray-100 text-gray-600'
//                             }`}
//                     >
//                         {profile.isAvailable ? 'Available' : 'Unavailable'}
//                     </div>
//                 </div>

//                 {/* Looking For */}
//                 <div className="mb-6">
//                     <h3 className="text-orange-600 font-semibold mb-2">Looking For:</h3>
//                     <p className="text-gray-700 mb-3">{profile.lookingFor}</p>
//                     <div className="flex flex-wrap gap-2">
//                         {profile.tags?.map((tag, index) => (
//                             <span
//                                 key={index}
//                                 className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex space-x-4 mb-6">
//                     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <Instagram size={20} className="text-pink-600" />
//                     </button>
//                     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <Linkedin size={20} className="text-blue-600" />
//                     </button>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center space-x-4">
//                     <button
//                         onClick={handleLike}
//                         className={`p-3 rounded-full transition-all transform hover:scale-110 ${isLiked
//                             ? 'bg-red-100 text-red-500'
//                             : 'bg-orange-100 text-orange-500 hover:bg-orange-200'
//                             }`}
//                     >
//                         <Heart size={24} className={isLiked ? 'fill-current' : ''} />
//                     </button>

//                     <button
//                         onClick={() => onStartConversation(profile.id)}
//                         className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                         Start Conversation
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useState } from "react";
import { Star, MapPin, Heart, X, Instagram, Linkedin, Filter, Search } from "lucide-react";
import FilterModal from "./FilterModal";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";

export default function ProfileCard({ profile, onLike, onDislike, onStartConversation }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const renderStars = (rating, size = 20, gradientId = "starGradient") => (
    <div className="flex items-center">
      <svg width="0" height="0">
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFAC16" />
          <stop offset="100%" stopColor="#F77128" />
        </linearGradient>
      </svg>
      {Array.from({ length: rating }, (_, index) => (
        <Star key={index} size={size} className={`fill-[url(#${gradientId})] stroke-none`} />
      ))}
    </div>
  );

  if (!profile) {
    return (
      <div className="w-full flex items-center justify-center h-[60vh] text-gray-600 text-xl font-semibold">
        🎉 No more profiles to show!
      </div>
    );
  }

  // ---------------- Desktop Layout ----------------
  const DesktopView = () => (
  <div className="hidden lg:flex justify-center items-start w-full bg-white h-screen mt-12 rounded-2xl shadow-lg overflow-hidden">
    <div className="w-full max-w-6xl h-full rounded-2xl flex flex-col overflow-hidden">
      {/* Search & Filter */}
      <div className="flex items-center justify-between gap-6 p-6 border-b border-gray-200">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
          <input
            type="text"
            placeholder="Search creator by name, skill, location...."
            className="w-full pl-10 pr-4 py-2 text-black border-2 border-[#93B076] rounded-full focus:border-[#93B076] focus:ring-0 outline-none"
          />
        </div>
        <button
          onClick={() => setShowFilterModal(true)}
          className="p-3 border-2 border-[#93B076] rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter size={20} className="text-black" />
        </button>
      </div>

      {showFilterModal && (
        <FilterModal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          onApplyFilters={(filters) => console.log("Applied filters:", filters)}
        />
      )}

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Banner & Profile */}
        <div className="relative h-48">
          <img
            src={getImageUrl(profile.bannerImage)}
            alt="Banner"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-2 left-6">
            <img
              src={getImageUrl(profile.profilePicture)}
              alt={profile.user?.name}
              className="w-44 h-44 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.user?.name}</h2>
              <p className="text-blue-600 font-medium">#{profile.title}</p>
            </div>
          </div>
          <p className="text-black mb-2 leading-relaxed">{profile.bio}</p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {renderStars(profile.rating || 0)}
                <span className="text-gray-700 font-medium text-lg">Rating: {profile.rating || 0}</span>
                <span className="text-gray-500 text-sm pl-2">({profile.reviewCount || 0} reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin size={16} className="text-orange-500" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div
              className={`px-4 py-2 rounded-full ${
                profile.availability === "full-time"
                  ? "bg-green-500 text-white"
                  : profile.availability === "part-time"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {profile.availability}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-orange-600 font-semibold mb-2">Looking For:</h3>
              <p className="text-gray-700 mb-3">{profile.lookingFor}</p>
              <div className="flex flex-wrap gap-2">
                {profile.skills?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              {profile.instagram && (
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Instagram size={20} className="text-pink-600" />
                </button>
              )}
              {profile.linkedin && (
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Linkedin size={20} className="text-blue-600" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-16">
            <button
              onClick={() => {
                setIsLiked(true);
                setTimeout(() => {
                  onLike();
                  setIsLiked(false);
                }, 300);
              }}
              className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                isLiked ? "bg-red-100 text-red-500" : "bg-orange-100 text-orange-500 hover:bg-orange-200"
              }`}
            >
              <Heart size={24} className={isLiked ? "fill-current" : ""} />
            </button>
            <button
              onClick={() => onStartConversation(profile._id)}
              className="w-[60%] bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Start Conversation
            </button>
            <button
              onClick={onDislike}
              className="p-3 rounded-full transition-all transform hover:scale-110 bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  // ---------------- Mobile Layout ----------------
const MobileView = () => (
  <div className="lg:hidden w-full bg-white mt-6 pt-16 rounded-2xl overflow-hidden shadow-lg p-4 flex flex-col">
    {/* Search & Filter */}
    <div className="flex items-center justify-between mt-2 gap-2 mb-4">
      <div className="flex-1 relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
          size={20}
        />
        <input
          type="text"
          placeholder="Search creator by name, skill, location...."
          className="w-full pl-10 pr-4 py-1 text-black border-2 border-[#93B076] rounded-full focus:border-[#93B076] focus:ring-0 outline-none"
        />
      </div>

      <button
        onClick={() => setShowFilterModal(true)}
        className="p-2 border-2 border-[#93B076] rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Filter size={20} className="text-black" />
      </button>
    </div>

    {showFilterModal && (
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onApplyFilters={(filters) => console.log("Applied filters:", filters)}
      />
    )}

    {/* Banner */}
    <div className="relative h-40">
      <img
        src={getImageUrl(profile.bannerImage)}
        alt="Banner"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute -bottom-10 left-4">
        <img
          src={getImageUrl(profile.profilePicture)}
          alt={profile.user?.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>

    <div className="mt-12 px-2">
      <h2 className="text-xl font-bold text-gray-900">{profile.user?.name}</h2>
      <p className="text-blue-600 font-medium">#{profile.title}</p>
      <p className="text-gray-700 text-sm mt-2">{profile.bio}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
                {renderStars(profile.rating || 0)}
                <span className="text-gray-700 font-medium text-md">Rating: {profile.rating || 0}</span>
                <span className="text-gray-500 text-sm pl-1">({profile.reviewCount || 0} reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-sm">{profile.location}</span>
              </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
              {profile.instagram && (
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Instagram size={20} className="text-pink-600" />
                </button>
              )}
              {profile.linkedin && (
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Linkedin size={20} className="text-blue-600" />
                </button>
              )}
            </div>
        <div
          className={`px-2 py-1 rounded-full text-sm ${
            profile.availability === "full-time"
              ? "bg-green-500 text-white"
              : profile.availability === "part-time"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {profile.availability}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        <button
          onClick={() => {
            setIsLiked(true);
            setTimeout(() => {
              onLike();
              setIsLiked(false);
            }, 300);
          }}
          className={`p-3 rounded-full transition-all transform hover:scale-110 ${
            isLiked
              ? "bg-red-100 text-red-500"
              : "bg-orange-100 text-orange-500 hover:bg-orange-200"
          }`}
        >
          <Heart size={18} className={isLiked ? "fill-current" : ""} />
        </button>

        <button
          onClick={() => onStartConversation(profile._id)}
          className="flex-1 text-sm bg-orange-500 text-white py-4 px-4 rounded-full font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Start Conversation
        </button>

        <button
          onClick={onDislike}
          className="p-3 rounded-full transition-all transform hover:scale-110 bg-gray-200 text-gray-600 hover:bg-gray-200"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  </div>
);


  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
}
