import React, { useState, useEffect } from "react";
import payment from "../assets/admin/failed.png";
import abuse from "../assets/admin/abuse.png";
import spike from "../assets/admin/spike.png";
import { Link, useNavigate } from "react-router-dom";
import {
  adminGetAllUsers,
  allCreators,
  allMatches,
  allCollaborations,
  adminLogout,
} from "../api/client";

const AdminDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // REAL METRICS
  const [metrics, setMetrics] = useState({
    users: 0,
    creators: 0,
    matches: 0,
    collaborations: 0,
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const [u, c, m, co] = await Promise.all([
        adminGetAllUsers(),
        allCreators(),
        allMatches(),
        allCollaborations(),
      ]);

      setMetrics({
        users: u.data.total || u.data.count || u.data.users?.length || 0,
        creators: c.data.totalProfiles || c.data.count || c.data.creators?.length || 0,
        matches: m.data.total || m.data.count || m.data.matches?.length || 0,
        collaborations:
          co.data.total || co.data.count || co.data.collaborations?.length || 0,
      });
    } catch (error) {
      console.log("Error fetching metrics:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch (err) {
      console.log("Logout error:", err);
    } finally {
      navigate("/admin-login");
    }
  };

  const metricBlocks = [
    { title: "All Users", count: metrics.users },
    { title: "CreatorProfiles", count: metrics.creators },
    { title: "Successful Matches", count: metrics.matches },
    { title: "Successful Collaborations", count: metrics.collaborations },
    { title: "Open Disputes", count: "0" }, // placeholder
  ];

  const alerts = [
    { id: 1, img: payment, title: "Failed Payment", reason: "Payment failed for user: user123" },
    { id: 2, img: spike, title: "Usage Spike", reason: "High usage spike detected in last hour" },
    { id: 3, img: abuse, title: "Abuse Pattern", reason: "Potential abuse detected from user: spammer456" },
  ];

  const navItems = [
    { name: "Overview", path: "/admin-dashboard" },
    { name: "Users", path: "/all-users" },
    { name: "Creators", path: "/all-creators" },
    { name: "Matches", path: "/matches" },
    { name: "Communities", path: "/communities" },
    { name: "Payments", path: "/payments" },
  ];

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1b2333] shadow-md relative">
        <h1 className="text-md md:text-2xl font-bold text-white">Winkiz Admin</h1>

        <ul className="hidden md:flex items-center gap-6 text-gray-300">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-white cursor-pointer transition-colors">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP PROFILE + LOGOUT */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
          />
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* MOBILE FULLSCREEN MENU */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1b2333] z-50 flex flex-col items-center py-12 px-6">
            {/* PROFILE HEADER */}
            <div className="w-full flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Admin"
                  className="w-12 h-12 rounded-full border border-gray-400"
                />
                <div>
                  <p className="text-white font-semibold text-lg">Admin</p>
                  <p className="text-gray-400 text-sm">admin123@gmail.com</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* MENU LINKS */}
            <ul className="flex flex-col gap-8 items-center text-2xl">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* MOBILE LOGOUT BUTTON */}
              <li>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* MAIN SECTION */}
      <main className="flex-grow px-6 sm:px-10 w-full max-w-[1200px] mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        {/* METRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {metricBlocks.map((metric) => (
            <div key={metric.title} className="bg-[rgb(36,46,71)] p-6 py-14 rounded-2xl shadow-md text-center">
              <h3 className="text-gray-400 text-sm">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.count}</p>
            </div>
          ))}
        </div>

        {/* ALERTS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Real-Time Alerts</h2>
          <div className="flex flex-col gap-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-xl shadow-md flex items-center gap-4">
                <img src={alert.img} alt={alert.title} className="w-6 h-6 object-contain" />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg">{alert.title}</h4>
                  <p className="text-gray-400 text-sm">{alert.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
