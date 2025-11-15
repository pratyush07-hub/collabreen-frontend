import React, { useState } from "react";
import payment from "../assets/admin/failed.png";
import abuse from "../assets/admin/abuse.png";
import spike from "../assets/admin/spike.png";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const metrics = [
    { title: "Active Users", count: "1,245" },
    { title: "New Signups", count: "320" },
    { title: "Matches per Day", count: "87" },
    { title: "Successful Collaborations", count: "45" },
    { title: "Open Disputes", count: "6" },
  ];

  const alerts = [
    {
      id: 1,
      img: payment,
      title: "Failed Payment",
      reason: "Payment failed for user: user123",
    },
    {
      id: 2,
      img: spike,
      title: "Usage Spike",
      reason: "High usage spike detected in last hour",
    },
    {
      id: 3,
      img: abuse,
      title: "Abuse Pattern",
      reason: "Potential abuse detected from user: spammer456",
    },
  ];

  const navItems = [
    "Overview",
    "Users",
    "Creators",
    "Matches",
    "Communities",
    "Payments",
  ];

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1b2333] shadow-md relative">
        <h1 className="text-md md:text-2xl font-bold text-white">
          Winkiz Admin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300">
          {[
            { name: "Overview", path: "/admin-dashboard" },
            { name: "Users", path: "/all-users" },
            { name: "Creators", path: "/all-creators" },
            { name: "Matches", path: "/matches" },
            { name: "Communities", path: "/communities" },
            { name: "Payments", path: "/payments" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-white cursor-pointer transition-colors"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Profile & Hamburger */}
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
          />
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#1b2333] flex flex-col items-start px-6 py-4 gap-4 md:hidden">
            {[
              { name: "Overview", path: "/" },
              { name: "Users", path: "/users" },
              { name: "Creators", path: "/creators" },
              { name: "Matches", path: "/matches" },
              { name: "Communities", path: "/communities" },
              { name: "Payments", path: "/payments" },
            ].map((item) => (
              <li
                key={item.name}
                className="hover:text-white cursor-pointer transition-colors"
              >
                <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Main Section */}
      <main className="flex-grow px-6 sm:px-10 w-full max-w-[1200px] mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        {/* 5 Block Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="bg-[rgb(36,46,71)] p-6 py-14 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-gray-400 text-sm">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.count}</p>
            </div>
          ))}
        </div>

        {/* Real-Time Alerts Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Real-Time Alerts</h2>
          <div className="flex flex-col gap-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-xl shadow-md flex items-center gap-4"
              >
                <img
                  src={alert.img}
                  alt={alert.title}
                  className="w-6 h-6 object-contain"
                />
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
