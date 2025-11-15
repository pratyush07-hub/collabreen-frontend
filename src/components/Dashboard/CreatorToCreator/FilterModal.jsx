import React, { useState } from "react";
import { X } from "lucide-react";

export default function FilterModal({ isOpen, onClose, onApplyFilters }) {
  const [filters, setFilters] = useState({
    location: "",
    creatorTypes: [],
    projectTypes: [],
    availability: [],
  });

  if (!isOpen) return null;

  // Generic multi-select toggle
  const toggleOption = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      const updated = exists
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value];

      return { ...prev, [key]: updated };
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const creatorOptions = ["Frontend", "Backend", "Fullstack", "Designer", "Editor", "Next.js", "React"];
  const projectOptions = ["Web App", "Portfolio", "Landing Page", "Blog Site", "UI Design"];
  const availabilityOptions = ["full-time", "part-time", "freelance"];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Filter Profiles</h2>

        {/* LOCATION */}
        <div className="mb-4">
          <label className="font-medium">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="Enter location..."
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>

        {/* CREATOR TYPES */}
        <div className="mb-4">
          <label className="font-medium">Creator Type</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {creatorOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.creatorTypes.includes(option)}
                  onChange={() => toggleOption("creatorTypes", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* PROJECT TYPES */}
        <div className="mb-4">
          <label className="font-medium">Project Type</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {projectOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.projectTypes.includes(option)}
                  onChange={() => toggleOption("projectTypes", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* AVAILABILITY */}
        <div className="mb-4">
          <label className="font-medium">Availability</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {availabilityOptions.map((option) => (
              <label key={option} className="flex items-center gap-2 capitalize">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(option)}
                  onChange={() => toggleOption("availability", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleApply}
            className="px-4 py-2 bg-[#93B076] text-white rounded-md hover:bg-[#7d985e]"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
