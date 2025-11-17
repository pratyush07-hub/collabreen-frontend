import React, { useState, useEffect } from "react";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";
import { adminGetAllUsers } from "../api/client";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const usersPerPage = 10;

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await adminGetAllUsers();
        console.log("Fetched users:", res.data);
        const data = res.data;

        if (!data.success) {
          setError(data.message || "Failed to fetch users");
          return;
        }

        setUsers(data.users || []);
      } catch (err) {
        setError("Something went wrong while fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()) ||
      user.phone?.includes(search);

    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesLocation = locationFilter ? user.location === locationFilter : true;
    const matchesSource = sourceFilter ? user.source === sourceFilter : true;

    return matchesSearch && matchesRole && matchesLocation && matchesSource;
  });

  // Pagination
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

  // Loading UI
  if (loading) {
    return (
      <div className="text-center text-white mt-20 text-xl">
        Loading users...
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="text-center text-red-400 mt-20 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col md:flex-row">
      {/* Filters Sidebar */}
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
          <option value="user">User</option>
          <option value="admin">Admin</option>
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

      {/* Mobile Filter Toggle */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setFiltersOpen(true)}
          className="px-4 py-2 bg-[rgb(36,46,71)] rounded"
        >
          Show Filters
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-2xl font-semibold">
            <Link to="/admin-dashboard" className="cursor-pointer hover:text-gray-300">
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
                <th className="p-3">InstaHandle</th>
                <th className="p-3">Signup Date</th>
                <th className="p-3">Signup Source</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-[rgb(36,46,71)] cursor-pointer transition"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phoneNumber}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.instaHandle}</td>
                  <td className="p-3">{user.createdAt?.split("T")[0]}</td>
                  <td className="p-3">{user.source || "N/A"}</td>
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

      {/* Modal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersPage;
