import React, { useEffect, useState } from "react";
import CommunityModal from "./CommunityModal";
import { Link } from "react-router-dom";
import { adminGetAllGroups } from "../api/client";

const Communities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [communities, setCommunities] = useState([]);

  const [filter, setFilter] = useState("All Communities");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const communitiesPerPage = 10;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);

        const response = await adminGetAllGroups();
        // console.log("Fetched groups:", response.data);
        const data = response.data;

        if (data.success) {
          // Transform group data for your table
          const formatted = data.groups.map((group) => ({
            id: group._id,
            name: group.name,
            visibility: group.privacy,
            category: group.category,
            posts: group.postsCount || 0, // depends on your model
            members: group.members?.length,
            createdAt: new Date(group.createdAt).toLocaleString(),
            owner: group.createdBy?.name || "Unknown",
            raw: group, // keep full data for modal
          }));

          setCommunities(formatted);
        }
      } catch (err) {
        console.error("Error fetching groups:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const filteredCommunities = communities
    .filter((community) => {
      if (filter === "Your Communities") return community.owner === "You";
      if (filter === "Archived") return community.posts === 0;
      return true;
    })
    .filter(
      (community) =>
        community.name.toLowerCase().includes(search.toLowerCase()) ||
        community.owner.toLowerCase().includes(search.toLowerCase())
    );


  const indexOfLast = currentPage * communitiesPerPage;
  const indexOfFirst = indexOfLast - communitiesPerPage;
  const current = filteredCommunities.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(
    filteredCommunities.length / communitiesPerPage
  );

  const handleNext = () => currentPage < totalPages && setCurrentPage((p) => p + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col md:flex-row">
      
      {/* Filters */}
      <aside
        className={`w-full md:w-[24%] bg-[#1b2333] p-4 md:p-6 flex flex-col gap-4 ${
          mobileFiltersOpen ? "block" : "hidden md:flex"
        }`}
      >
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search by name or owner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white placeholder-gray-400 mb-4 w-full"
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

      {/* Mobile Toggle */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="bg-[rgb(36,46,71)] px-3 py-2 rounded hover:bg-blue-600"
        >
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Table */}
      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-x-auto">
        <h1 className="text-2xl font-semibold">
          <Link to="/admin-dashboard" className="hover:text-gray-300">
            Admin Dashboard
          </Link>{" "}
          / Communities
        </h1>

        {loading ? (
          <p className="text-center mt-10">Loading communities...</p>
        ) : (
          <div className="overflow-x-auto rounded-md border border-gray-600">
            <table className="w-full text-left min-w-[700px] md:min-w-[900px]">
              <thead className="bg-[rgb(36,46,71)] text-gray-300">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Owner</th>
                  <th className="p-3">Visibility</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Posts</th>
                  <th className="p-3">Members</th>
                  <th className="p-3">CreatedAt</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {current.map((community) => (
                  <tr
                    key={community.id}
                    className="hover:bg-[rgb(36,46,71)] transition cursor-pointer"
                  >
                    <td className="p-3">{community.name}</td>
                    <td className="p-3">{community.owner}</td>
                    <td className="p-3">{community.visibility}</td>
                    <td className="p-3">{community.category}</td>
                    <td className="p-3">{community.posts}</td>
                    <td className="p-3">{community.members}</td>
                    <td className="p-3">{community.createdAt}</td>

                    <td className="p-3">
                      <button
                        onClick={() => setSelectedCommunity(community.raw)}
                        className="bg-[rgb(36,46,71)] px-3 py-1 rounded hover:bg-blue-600"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[rgb(36,46,71)] rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[rgb(36,46,71)] rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      {/* Modal */}
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
