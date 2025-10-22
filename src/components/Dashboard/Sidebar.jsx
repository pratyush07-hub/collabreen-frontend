import { useState } from "react";
import { FaBullhorn, FaSearch } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Cookies from "js-cookie";

const Sidebar = ({ selectedItem, setSelectedItem }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div >
      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center p-4 z-1">
        <button onClick={toggleSidebar}>
          <span className="text-3xl text-white">&#9776;</span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[226px] bg-[#09090a] text-white flex flex-col border-r border-[#252525] transform md:relative ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        {/* Sidebar Heading */}
        <div className="flex items-center space-x-2 p-4">
          <div className="w-[38px] h-[38px] rounded-full bg-gray-600"></div>{" "}
          <span className="font-sf font-bold text-[22px]">Collab Reen</span>
        </div>

        {/* Sidebar Menu Items */}
        <div className="flex flex-col space-y-6 px-4 py-8">
          <div
            className={`flex items-center space-x-2 text-lg cursor-pointer p-2 rounded-md ${
              selectedItem === "dashboard"
                ? "bg-gray-700 border-2 border-gray-500"
                : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
            }`}
            onClick={() => handleSelectItem("dashboard")}
          >
            <TiHomeOutline className="text-2xl text-[#84868B]" />
            <span>Dashboard</span>
          </div>

          <div
            className={`flex items-center space-x-2 text-lg cursor-pointer p-2 rounded-md ${
              selectedItem === "campaigns"
                ? "bg-gray-700 border-2 border-gray-500"
                : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
            }`}
            onClick={() => handleSelectItem("campaigns")}
          >
            <FaBullhorn className="text-2xl text-[#84868B]" />
            <span>Campaigns</span>
          </div>

          <div
            className={`flex items-center space-x-2 text-lg cursor-pointer p-2 rounded-md ${
              selectedItem === "discover"
                ? "bg-gray-700 border-2 border-gray-500"
                : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
            }`}
            onClick={() => handleSelectItem("discover")}
          >
            <FaSearch className="text-2xl text-[#84868B]" />
            <span>Discover</span>
          </div>

          <div
            className={`flex items-center space-x-2 text-lg cursor-pointer p-2 rounded-md ${
              selectedItem === "profile"
                ? "bg-gray-700 border-2 border-gray-500"
                : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
            }`}
            onClick={() => handleSelectItem("profile")}
          >
            <CiUser className="text-3xl text-[#84868B]" />
            <span>User Profile</span>
          </div>

          <div
            className={`flex items-center space-x-2 text-lg cursor-pointer p-2 rounded-md hover:bg-gray-700 hover:border-2 hover:border-gray-500`}
            onClick={() => {
              Cookies.remove("jwt");
              setIsSidebarOpen(false); 
            }}
          >
            <IoIosLogOut className="text-3xl text-[#84868B]" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
