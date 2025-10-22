import React, { useState } from "react";
import { createGroup } from "../../../api/client";

const CreateNewGroupPage = ({ currentUser, onBack, refreshGroups }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      const data = { ...formData, createdBy: currentUser._id };
      await createGroup(data);
      setFormData({ name: "", description: "", image: null });
      refreshGroups(); // Refresh groups in dashboard
      onBack();
      alert("Group created successfully!");
    } catch (err) {
      console.error("Failed to create group:", err);
      alert("Failed to create group");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-6 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Create New Group
      </h2>

      <form className="space-y-4" onSubmit={handleCreateGroup}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <label className="block mb-1 sm:w-32 font-medium">Group Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter group name"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
          <label className="block mb-1 sm:w-32 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your group"
            rows={4}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <label className="block mb-1 sm:w-32 font-medium">Group Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            className="w-full sm:w-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 w-full sm:w-auto bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-full sm:w-auto bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors"
          >
            {loading ? "Creating..." : "Create Group"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewGroupPage;
