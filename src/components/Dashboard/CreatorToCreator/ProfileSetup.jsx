// import React, { useState } from 'react';
// import { Save, Camera, MapPin, DollarSign, Link } from 'lucide-react';
// import client from '../../../api/client'; // Assume your API client

// export default function ProfileSetup({ onSetupComplete }) {
//     const [formData, setFormData] = useState({
//         bio: '',
//         skills: '',
//         availability: '',
//         location: '',
//         instagram: '',
//         twitter: '',
//         youtube: '',
//         hourlyRate: 0,
//         projectRate: 0,
//         profilePicture: '', // Handle file upload separately
//     });
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             // Upload profile pic if file selected (use FormData for multer)
//             const submitData = new FormData();
//             Object.keys(formData).forEach(key => {
//                 if (key === 'skills') submitData.append(key, formData[key].split(',').map(s => s.trim()));
//                 else submitData.append(key, formData[key]);
//             });

//             const response = await client.post('/creatorprofiles/setup', submitData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });

//             if (response.data.success) {
//                 onSetupComplete(); // Callback to switch sections
//                 alert('Profile setup complete!');
//             }
//         } catch (error) {
//             console.error('Setup error:', error);
//             alert(error.response?.data?.message || 'Setup failed');
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             <div className="max-w-2xl mx-auto">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-6">Complete Your Creator Profile</h1>
//                 <p className="text-gray-600 mb-8">Set up your profile to unlock collaborations and chats.</p>

//                 <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
//                     {/* Profile Picture */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
//                         <div className="flex items-center">
//                             <Camera size={20} className="mr-2 text-gray-500" />
//                             <input
//                                 type="file"
//                                 name="profilePicture"
//                                 onChange={(e) => setFormData(prev => ({ ...prev, profilePicture: e.target.files[0] }))}
//                                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
//                             />
//                         </div>
//                     </div>

//                     {/* Bio */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
//                         <textarea
//                             name="bio"
//                             value={formData.bio}
//                             onChange={handleInputChange}
//                             rows={3}
//                             placeholder="Tell us about yourself..."
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                     </div>

//                     {/* Skills (comma-separated) */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
//                         <input
//                             type="text"
//                             name="skills"
//                             value={formData.skills}
//                             onChange={handleInputChange}
//                             placeholder="e.g., photography, video editing"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                     </div>

//                     {/* Location */}
//                     <div className="flex items-center">
//                         <MapPin size={20} className="mr-2 text-gray-500" />
//                         <input
//                             type="text"
//                             name="location"
//                             value={formData.location}
//                             onChange={handleInputChange}
//                             placeholder="Your location (e.g., Jaipur)"
//                             className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                     </div>

//                     {/* Availability */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
//                         <select
//                             name="availability"
//                             value={formData.availability}
//                             onChange={handleInputChange}
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         >
//                             <option value="">Select...</option>
//                             <option value="full-time">Full-time</option>
//                             <option value="part-time">Part-time</option>
//                             <option value="weekends">Weekends</option>
//                             <option value="project-based">Project-based</option>
//                         </select>
//                     </div>

//                     {/* Rates */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                                 <DollarSign size={16} className="mr-1" /> Hourly Rate
//                             </label>
//                             <input
//                                 type="number"
//                                 name="hourlyRate"
//                                 value={formData.hourlyRate}
//                                 onChange={handleInputChange}
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                                 <DollarSign size={16} className="mr-1" /> Project Rate
//                             </label>
//                             <input
//                                 type="number"
//                                 name="projectRate"
//                                 value={formData.projectRate}
//                                 onChange={handleInputChange}
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Social Links */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                                 <Link size={16} className="mr-1" /> Instagram
//                             </label>
//                             <input
//                                 type="url"
//                                 name="instagram"
//                                 value={formData.instagram}
//                                 onChange={handleInputChange}
//                                 placeholder="https://instagram.com/username"
//                                 className="w-full p-3 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                                 <Link size={16} className="mr-1" /> Twitter
//                             </label>
//                             <input
//                                 type="url"
//                                 name="twitter"
//                                 value={formData.twitter}
//                                 onChange={handleInputChange}
//                                 placeholder="https://twitter.com/username"
//                                 className="w-full p-3 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                                 <Link size={16} className="mr-1" /> YouTube
//                             </label>
//                             <input
//                                 type="url"
//                                 name="youtube"
//                                 value={formData.youtube}
//                                 onChange={handleInputChange}
//                                 placeholder="https://youtube.com/channel/..."
//                                 className="w-full p-3 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
//                     >
//                         <Save size={20} />
//                         <span>{loading ? 'Saving...' : 'Complete Setup'}</span>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// ProfileSetup.jsx
import React, { useState } from 'react';
import { Save, Camera, MapPin, DollarSign, Link } from 'lucide-react';
import api from '../../../api/client';
import Cookies from "js-cookie";

export default function ProfileSetup({ onSetupComplete }) {
    const [formData, setFormData] = useState({
        bio: '',
        skills: '',
        availability: '',
        location: '',
        instagram: '',
        twitter: '',
        youtube: '',
        hourlyRate: 0,
        projectRate: 0,
        profilePicture: null,
        bannerImage: null,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = Cookies.get('jwt');
        console.log('JWT Token:', token);

        try {
            const submitData = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'skills') {
                    submitData.append(key, formData[key] || '');
                } else if (key === 'profilePicture' || key === 'bannerImage') {
                    if (formData[key]) submitData.append(key, formData[key]);
                } else {
                    submitData.append(key, formData[key] || '');
                }
            });

            const response = await api.post('/creatorprofiles/setup', submitData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.success) {
                onSetupComplete();
                alert('Profile setup complete!');
            }
        } catch (error) {
            console.error('Setup error:', error);
            setError(error.response?.data?.message || 'Setup failed');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen mt-16 bg-gray-50 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Complete Your Creator Profile</h1>
                <p className="text-gray-600 mb-6 sm:mb-8">Set up your profile to unlock collaborations and chats.</p>
                {error && <div className="text-red-500 mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow">

                    {/* Profile Picture */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Profile Picture</label>
                        <div className="flex items-center gap-2">
                            <Camera size={20} className="text-gray-500" />
                            <input
                                type="file"
                                name="profilePicture"
                                onChange={handleInputChange}
                                accept="image/*"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                            />
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Banner Image</label>
                        <div className="flex items-center gap-2">
                            <Camera size={20} className="text-gray-500" />
                            <input
                                type="file"
                                name="bannerImage"
                                onChange={handleInputChange}
                                accept="image/*"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Bio</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Skills</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Availability</label>
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
                        {['instagram', 'twitter', 'youtube'].map((social) => (
                            <div key={social}>
                                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                                    <Link size={16} /> {social.charAt(0).toUpperCase() + social.slice(1)}
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
                        <span>{loading ? 'Saving...' : 'Complete Setup'}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
