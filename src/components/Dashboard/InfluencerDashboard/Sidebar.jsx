// import { useState } from "react";
// import { FaBullhorn, FaSearch } from "react-icons/fa";
// import { TiHomeOutline } from "react-icons/ti";
// import { CiUser } from "react-icons/ci";
// import { IoIosLogOut } from "react-icons/io";
// import Cookies from "js-cookie";

// const Sidebar = ({ selectedItem, setSelectedItem }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleSelectItem = (item) => {
//         setSelectedItem(item);
//     };

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div>
//             {/* Hamburger Menu */}
//             <div className="md:hidden flex items-center p-4 z-1">
//                 <button onClick={toggleSidebar}>
//                     <span className="text-3xl text-white">&#9776;</span>
//                 </button>
//             </div>

//             {/* Sidebar */}
//             <div
//                 className={`fixed top-0 left-0 w-[226px] max-h-screen bg-black text-white flex flex-col  border-r border-[#252525] transform md:relative ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//                     } transition-transform duration-300 ease-in-out md:translate-x-0`}
//             >
//                 {/* Sidebar Heading */}
//                 <div className="flex items-center space-x-2 p-4">
//                     <div className="w-[38px] h-[38px] rounded-full bg-gray-600"></div>{" "}
//                     <span className="font-sf font-bold text-[22px]">Collab Reen</span>
//                 </div>

//                 {/* Sidebar Menu Items */}
//                 <div className="flex flex-col h-screen justify-between flex-grow border-t border-[#252525]">
//                     <div className="flex flex-col space-y-6 px-4 py-8">
//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "dashboard"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("dashboard")}
//                         >
//                             <TiHomeOutline className="text-xl text-[#84868B]" />
//                             <span>Dashboard</span>
//                         </div>

//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "campaigns"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("campaigns")}
//                         >
//                             <FaBullhorn className="text-xl text-[#84868B]" />
//                             <span>Campaigns</span>
//                         </div>

//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "discover"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("discover")}
//                         >
//                             <FaSearch className="text-xl text-[#84868B]" />
//                             <span>Discover</span>
//                         </div>

//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "profile"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("profile")}
//                         >
//                             <CiUser className="text-xl text-[#84868B]" />
//                             <span>User Profile</span>
//                         </div>

//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "profile"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("Analytics & Reports")}
//                         >
//                             <CiUser className="text-xl text-[#84868B]" />
//                             <span>Analytics & Reports</span>
//                         </div>

//                         <div
//                             className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "profile"
//                                 ? "bg-gray-700 border-2 border-gray-500"
//                                 : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
//                                 }`}
//                             onClick={() => handleSelectItem("Messaging")}
//                         >
//                             <CiUser className="text-xl text-[#84868B]" />
//                             <span>Messaging</span>
//                         </div>


//                     </div>
//                     <div
//                         className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md hover:bg-gray-700 hover:border-2 hover:border-gray-500`}
//                         onClick={() => {
//                             Cookies.remove("jwt");
//                             setIsSidebarOpen(false);
//                         }}
//                     >
//                         <IoIosLogOut className="text-xl text-[#84868B]" />
//                         <span>Logout</span>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
import { useState } from "react";
import { FaBullhorn, FaSearch } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx"; // for close icon
import Cookies from "js-cookie";
import AnalyticsLogo from '../../../assets/AnalyticsLogo.svg';
import MessageLogo from '../../../assets/MessagingLogo.svg';


const Sidebar = ({ selectedItem, setSelectedItem }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setIsSidebarOpen(false); // close sidebar after selecting (on mobile)
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden  flex items-center p-4 z-20">
                <button onClick={toggleSidebar}>
                    <span className="text-3xl text-white">&#9776;</span>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-[226px] h-screen bg-black text-white flex flex-col border-r border-[#252525] transform md:relative ${isSidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:translate-x-0 md:z-0`}
            >

                {/* Sidebar Heading */}
                <div className="flex items-center justify-between p-4 pb-5 border-b border-[#252525] ">
                    <div className="flex items-center space-x-2">
                        <div className="w-[38px] h-[38px] rounded-full bg-gray-600"></div>
                        <span className="font-sf font-bold text-[22px]">Collab Reen</span>
                    </div>

                    {/* Close Button (Mobile only) */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={toggleSidebar}
                    >
                        <RxCross2 />
                    </button>
                </div>

                {/* Sidebar Menu Items */}
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col space-y-4 px-4 py-8">
                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "dashboard"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("dashboard")}
                        >
                            <TiHomeOutline className="text-xl text-[#84868B]" />
                            <span>Dashboard</span>
                        </div>

                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "campaigns"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("campaigns")}
                        >
                            <FaBullhorn className="text-xl text-[#84868B]" />
                            <span>Campaigns</span>
                        </div>

                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "discover"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("discover")}
                        >
                            <FaSearch className="text-xl text-[#84868B]" />
                            <span>Discover</span>
                        </div>

                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "profile"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("profile")}
                        >
                            <CiUser className="text-xl text-[#84868B]" />
                            <span>User Profile</span>
                        </div>

                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "analytics"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("analytics")}
                        >
                            {/* <CiUser className="text-xl text-[#84868B]" /> */}
                            <img src={AnalyticsLogo} alt="" />
                            <span>Analytics & Reports</span>
                        </div>

                        <div
                            className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md ${selectedItem === "messaging"
                                    ? "bg-gray-700 border-2 border-gray-500"
                                    : "hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                                }`}
                            onClick={() => handleSelectItem("messaging")}
                        >
                            <img src={MessageLogo} alt="" />
                            <span>Messaging</span>
                        </div>
                    </div>

                    {/* Logout */}
                    <div
                        className="flex items-center space-x-2 text-sm cursor-pointer p-2 rounded-md hover:bg-gray-700 hover:border-2 hover:border-gray-500"
                        onClick={() => {
                            Cookies.remove("jwt");
                            setIsSidebarOpen(false);
                        }}
                    >
                        <IoIosLogOut className="text-xl text-[#84868B]" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
