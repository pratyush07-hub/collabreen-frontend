import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FilterModal({ isOpen, onClose, onApplyFilters }) {
    const [filters, setFilters] = useState({
        location: '',
        selectedLocations: [''],
        creatorTypes: [''],
        projectTypes: [''],
        availability: ['']
    });

    if (!isOpen) return null;

    const handleLocationChange = (location) => {
        setFilters((prev) => ({
            ...prev,
            selectedLocations: prev.selectedLocations.includes(location)
                ? prev.selectedLocations.filter((l) => l !== location)
                : [...prev.selectedLocations, location],
        }));
    };

    const handleCreatorTypeChange = (type) => {
        setFilters((prev) => ({
            ...prev,
            creatorTypes: prev.creatorTypes.includes(type)
                ? prev.creatorTypes.filter((t) => t !== type)
                : [...prev.creatorTypes, type],
        }));
    };

    const handleProjectTypeChange = (type) => {
        setFilters((prev) => ({
            ...prev,
            projectTypes: prev.projectTypes.includes(type)
                ? prev.projectTypes.filter((t) => t !== type)
                : [...prev.projectTypes, type],
        }));
    };

    const handleAvailabilityChange = (availability) => {
        setFilters((prev) => ({
            ...prev,
            availability: prev.availability.includes(availability)
                ? prev.availability.filter((a) => a !== availability)
                : [...prev.availability, availability],
        }));
    };

    const handleApply = () => {
        onApplyFilters(filters);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                    Refine your search to find the perfect match
                </p>

                {/* Location */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                    <input
                        type="text"
                        placeholder="City, State/Country"
                        value={filters.location}
                        onChange={(e) =>
                            setFilters((prev) => ({ ...prev, location: e.target.value }))
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
                    />
                    <div className="flex flex-wrap gap-2">
                        {['Delhi', 'Mumbai', 'Jaipur', 'Noida'].map((location) => (
                            <button
                                key={location}
                                onClick={() => handleLocationChange(location)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filters.selectedLocations.includes(location)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {location}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Creator Type */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Creator Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            'Blogger',
                            'Videographer',
                            'Photographer',
                            'Musician',
                            'Music Producer',
                            'Graphic Designer',
                        ].map((type) => (
                            <button
                                key={type}
                                onClick={() => handleCreatorTypeChange(type)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${filters.creatorTypes.includes(type)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Type */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Project Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {['Shoot', 'Music', 'Event', 'Dance', 'Travel', 'Vlog'].map(
                            (type) => (
                                <button
                                    key={type}
                                    onClick={() => handleProjectTypeChange(type)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${filters.projectTypes.includes(type)
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {type}
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                    <div className="flex gap-2">
                        {['Now', 'Soon', 'Free time'].map((availability) => (
                            <button
                                key={availability}
                                onClick={() => handleAvailabilityChange(availability)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filters.availability.includes(availability)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {availability}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Apply Button */}
                <button
                    onClick={handleApply}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
}
