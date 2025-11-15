import React, { useState } from "react";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");

  const usersPerPage = 10;

  // 15 Dummy Users
  const dummySources = ["Direct", "Referral", "Social Media"];
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `+91-98765432${i + 10}`,
    role: i % 2 === 0 ? "User" : "Admin",
    location: i % 3 === 0 ? "Delhi" : i % 3 === 1 ? "Mumbai" : "Bangalore",
    signupDate: `2025-11-${i + 1}`,
    source: dummySources[i % 3],
  }));

  // Filter users by search and selected filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search);
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesLocation = locationFilter ? user.location === locationFilter : true;
    const matchesSource = sourceFilter ? user.source === sourceFilter : true;
    return matchesSearch && matchesRole && matchesLocation && matchesSource;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

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
        className={`bg-[#1b2333] p-6 flex flex-col gap-4 md:w-[24%] w-full ${
          filtersOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          Filters & Search
          <button className="md:hidden text-white" onClick={() => setFiltersOpen(false)}>
            ✕
          </button>
        </h2>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white placeholder-gray-400 focus:outline-none w-full"
        />

        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white focus:outline-none"
        >
          <option value="">All Roles</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {/* Location Filter */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white focus:outline-none"
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        {/* Signup Source Filter */}
        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="p-2 rounded bg-[rgb(36,46,71)] text-white focus:outline-none"
        >
          <option value="">All Sources</option>
          <option value="Direct">Direct</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social Media</option>
        </select>
      </aside>

      {/* Toggle Filter Button for Mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setFiltersOpen(true)}
          className="px-4 py-2 bg-[rgb(36,46,71)] rounded"
        >
          Show Filters
        </button>
      </div>

      {/* Major Section - Users Table */}
      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-2xl font-semibold">
            <Link
              to="/admin-dashboard"
              className="cursor-pointer hover:text-gray-300"
            >
              Admin Dashboard
            </Link>{" "}
            / Users
          </h1>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-md border border-gray-600">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-[rgb(36,46,71)] text-gray-300">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Role</th>
                <th className="p-3">Location</th>
                <th className="p-3">Signup Date</th>
                <th className="p-3">Signup Source</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-[rgb(36,46,71)] cursor-pointer transition"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.location}</td>
                  <td className="p-3">{user.signupDate}</td>
                  <td className="p-3">{user.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-4 mt-4 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-[rgb(36,46,71)] hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-[rgb(36,46,71)] hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      {/* User Modal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersPage;
