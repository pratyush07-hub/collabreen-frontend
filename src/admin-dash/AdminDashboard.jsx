// AdminDashboard.jsx
import React from "react";

const AdminDashboard = () => {
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
      img: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
      title: "Failed Payment",
      reason: "Card declined by bank",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
      title: "Failed Payment",
      reason: "Network issue during transaction",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
      title: "Failed Payment",
      reason: "Insufficient balance in wallet",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121721] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#1b2333] shadow-md">
  <h1 className="text-2xl font-bold text-white">Winkiz Admin</h1>

  <div className="flex items-center gap-10 text-gray-300">
    <ul className="flex items-center gap-6">
      {["Overview", "Users", "Creators", "Matches", "Communities", "Payments"].map(
        (item) => (
          <li
            key={item}
            className="hover:text-white cursor-pointer transition-colors"
          >
            {item}
          </li>
        )
      )}
    </ul>

    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="Profile"
      className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
    />
  </div>
</nav>


      {/* Main Section */}
      <main className="flex-grow px-10 w-[80vw] mx-auto py-8">
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
                className="bg-[rgb(36,46,71)] p-4 rounded-xl shadow-md flex items-center gap-4"
              >
                {/* Left Image */}
                <img
                  src={alert.img}
                  alt={alert.title}
                  className="w-8 h-8 object-contain"
                />

                {/* Right Text */}
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
