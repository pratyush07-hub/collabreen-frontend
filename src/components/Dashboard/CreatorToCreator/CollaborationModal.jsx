import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sendCollaborationRequest } from '../../../api/client';


export default function CollaborationModal({ isOpen, onClose, recipientName, chatId }) {
    const [formData, setFormData] = useState({
        additionalNotes: '',
        projectTitle: '',
        projectDate: '',
        location: '',
    });

    // console.log("ChatId: ", chatId);
    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            const payload = {
                chatId,
                title: formData.projectTitle,        // backend expects 'title'
                description: formData.additionalNotes, // backend expects 'description'
                proposedDate: formData.projectDate,
                location: formData.location,
            };
            const res = await sendCollaborationRequest(payload);
            console.log('Sending collaboration request:', res.data);
            alert('Collaboration request sent successfully!');
            onClose();
        } catch (error){
            console.error('Error sending collaboration request:', error);
            alert('Failed to send collaboration request.');
        }
 
    };

    const handleCancel = () => {
        setFormData({
            additionalNotes: '',
            projectTitle: '',
            projectDate: '',
            location: '',
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Collaboration Request</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                    Send a formal collaboration request to {recipientName}
                </p>

                {/* Additional Notes */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Additional Notes
                    </label>
                    <textarea
                        placeholder="Any additional details about the collaboration....."
                        value={formData.additionalNotes}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, additionalNotes: e.target.value }))
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-20 bg-gray-100"
                    />
                </div>

                {/* Project Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Project Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Fashion Photoshoot"
                        value={formData.projectTitle}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, projectTitle: e.target.value }))
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                    />
                </div>

                {/* Project Date */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Project Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        value={formData.projectDate}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, projectDate: e.target.value }))
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                    />
                </div>

                {/* Location */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="City Park, Mansarovar 302020 - Jaipur"
                        value={formData.location}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, location: e.target.value }))
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    <button
                        onClick={handleCancel}
                        className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                        Send Request
                    </button>
                </div>
            </div>
        </div>
    );
}
