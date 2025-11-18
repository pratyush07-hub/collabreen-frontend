import React, { useState } from "react";
import { adminLogin } from "../api/client";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await adminLogin(form);
    console.log("Login response:", res.data);

    if (res.data.success) {
      // SUCCESS: The browser has now set the HttpOnly 'adminToken' cookie.
      // Do NOT set anything in localStorage.
      navigate("/admin-dashboard"); // Navigate immediately.
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-[#121721] flex items-center justify-center px-4">
      <div className="bg-[#1b2333] p-8 rounded-2xl w-full max-w-md shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Winkiz Admin
        </h1>
        <p className="text-gray-400 text-center mb-6">Login to continue</p>

        {error && (
          <p className="text-red-400 text-center mb-4 text-sm">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#121721] border border-gray-700 text-white focus:outline-none"
              placeholder="admin123@gmail.com"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#121721] border border-gray-700 text-white focus:outline-none"
              placeholder="admin123@"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
