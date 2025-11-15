import React, { useState } from "react";
import CommunityModal from "./CommunityModal";
import { Link } from "react-router-dom";

const Communities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [filter, setFilter] = useState("All Communities");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const communitiesPerPage = 10;

  // 15 Dummy Communities
  const communities = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Community ${i + 1}`,
    visibility: i % 3 === 0 ? "Public" : "Private",
    moderators: i % 2 === 0 ? 3 : 5,
    posts: 10 + i,
    reports: i % 4,
    analytics: `${Math.floor(Math.random() * 1000)} visits`,
    owner: i % 2 === 0 ? "You" : "Other",
  }));

  // Filtered communities based on filter and search
  const filteredCommunities = communities
    .filter((community) => {
      if (filter === "Your Communities") return community.owner === "You";
      if (filter === "Archived") return community.posts === 0; // dummy logic
      return true;
    })
    .filter(
      (community) =>
        community.name.toLowerCase().includes(search.toLowerCase()) ||
        community.owner.toLowerCase().includes(search.toLowerCase())
    );

  // Pagination logic
  const indexOfLastCommunity = currentPage * communitiesPerPage;
  const indexOfFirstCommunity = indexOfLastCommunity - communitiesPerPage;
  const currentCommunities = filteredCommunities.slice(
    indexOfFirstCommunity,
    indexOfLastCommunity
  );
  const totalPages = Math.ceil(filteredCommunities.length / communitiesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col md:flex-row">
      {/* Minor Section - Filters & Search */}
      <aside
        className={`w-full md:w-[24%] bg-[#1b2333] p-4 md:p-6 flex flex-col gap-4 transition-all ${
          mobileFiltersOpen ? "block" : "hidden md:flex"
        }`}
      >
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search by name or owner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white placeholder-gray-400 focus:outline-none mb-4 w-full"
        />

        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        {["All Communities", "Your Communities", "Archived"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded w-full text-left ${
              filter === f ? "bg-blue-600" : "bg-[rgb(36,46,71)]"
            }`}
          >
            {f}
          </button>
        ))}
      </aside>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="bg-[rgb(36,46,71)] px-3 py-2 rounded hover:bg-blue-600 text-white"
        >
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Major Section - Communities Table */}
      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-2xl font-semibold">
            <Link
              to="/admin-dashboard"
              className="cursor-pointer hover:text-gray-300"
            >
              Admin Dashboard
            </Link>{" "}
            / Communities
          </h1>
        </div>

        {/* Communities Table */}
        <div className="overflow-x-auto rounded-md border border-gray-600">
          <table className="w-full text-left min-w-[700px] md:min-w-[900px]">
            <thead className="bg-[rgb(36,46,71)] text-gray-300">
              <tr>
                <th className="p-2 md:p-3">Name</th>
                <th className="p-2 md:p-3">Owner</th>
                <th className="p-2 md:p-3">Visibility</th>
                <th className="p-2 md:p-3">Moderators</th>
                <th className="p-2 md:p-3">Posts</th>
                <th className="p-2 md:p-3">Reports</th>
                <th className="p-2 md:p-3">Analytics</th>
                <th className="p-2 md:p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCommunities.map((community) => (
                <tr
                  key={community.id}
                  className="hover:bg-[rgb(36,46,71)] cursor-pointer transition"
                >
                  <td className="p-2 md:p-3">{community.name}</td>
                  <td className="p-2 md:p-3">{community.owner}</td>
                  <td className="p-2 md:p-3">{community.visibility}</td>
                  <td className="p-2 md:p-3">{community.moderators}</td>
                  <td className="p-2 md:p-3">{community.posts}</td>
                  <td className="p-2 md:p-3">{community.reports}</td>
                  <td className="p-2 md:p-3">{community.analytics}</td>
                  <td className="p-2 md:p-3">
                    <button
                      onClick={() => setSelectedCommunity(community)}
                      className="bg-[rgb(36,46,71)] px-2 md:px-3 py-1 rounded hover:bg-blue-600 text-sm md:text-base"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-2 md:gap-4 mt-4 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 md:px-4 py-2 rounded bg-[rgb(36,46,71)] hover:bg-blue-600 disabled:opacity-50 text-sm md:text-base"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 md:px-4 py-2 rounded bg-[rgb(36,46,71)] hover:bg-blue-600 disabled:opacity-50 text-sm md:text-base"
          >
            Next
          </button>
        </div>
      </main>

      {/* Community Modal */}
      {selectedCommunity && (
        <CommunityModal
          community={selectedCommunity}
          onClose={() => setSelectedCommunity(null)}
        />
      )}
    </div>
  );
};

export default Communities;
