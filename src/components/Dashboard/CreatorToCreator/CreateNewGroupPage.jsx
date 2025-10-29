import React, { useState } from "react";
import { createGroup } from "../../../api/client";
import { ArrowLeft, User, Globe } from "lucide-react";

const CreateNewGroupPage = ({ currentUser, onBack, refreshGroups }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

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
    if (!formData.name || !formData.description || !formData.category) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      const data = {
        ...formData,
        createdBy: currentUser._id,
        privacy: isPrivate ? "private" : "public",
      };
      await createGroup(data);
      setFormData({ name: "", description: "", category: "", image: null });
      setIsPrivate(false);
      refreshGroups();
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
    <div className="min-h-screen bg-black -mt-10 text-white flex flex-col">
      {/* Header */}
      <header className="bg-white text-black h-[10vh] flex flex-col justify-center px-6 shadow-md">
        <div className="flex items-center gap-3">
          <ArrowLeft
            size={24}
            className="cursor-pointer hover:text-blue-600"
            onClick={onBack}
          />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Create a New Group
          </h1>
        </div>
        <p className="text-sm text-gray-600 ml-8">
          Start a new community for creators with similar passions
        </p>
      </header>

      {/* Main content */}
      <main className="flex-grow flex justify-center items-start py-10 px-4">
        <div className="bg-white text-black w-full max-w-3xl rounded-xl shadow-lg p-6 sm:p-8 space-y-10">
          {/* Group Details Section */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-200 rounded-full">
                <User className="text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  Group Details
                </h2>
                <p className="text-sm text-gray-500">
                  Define your group’s identity and purpose
                </p>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-gray-50 border rounded-lg p-4 sm:p-6 mb-6">
              <label className="block font-medium mb-2">Group Logo</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="mb-3"
              />
              {formData.image && (
                <div className="flex items-center gap-4">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Group Logo"
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <p className="text-sm text-gray-600">
                    File size must be under 2MB
                  </p>
                </div>
              )}
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleCreateGroup} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Group Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter group name"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 font-medium">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    <option value="Technology">Technology</option>
                    <option value="Education">Education</option>
                    <option value="Art">Art</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Science">Science</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your group"
                  rows={4}
                />
              </div>

              {/* Privacy Section */}
              <div className="bg-gray-50 border rounded-lg p-4 sm:p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-200 rounded-full">
                    <Globe className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Privacy & Settings</h3>
                    <p className="text-sm text-gray-500">
                      Choose if your group will be public or private
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setIsPrivate(!isPrivate)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    isPrivate ? "bg-gray-400" : "bg-green-500"
                  }`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                      isPrivate ? "translate-x-0" : "translate-x-7"
                    }`}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
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
        </div>
      </main>
    </div>
  );
};

export default CreateNewGroupPage;
