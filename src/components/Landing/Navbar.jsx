import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import logo from "../../assets/react.svg";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#171717] text-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-6 md:h-8" alt="Collab-Reen Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap font-sf">
            Collab-Reen
          </span>
        </NavLink>

        <div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink
            to="/signup"
            className="bg-[#F5ADB2] hover:bg-[#EFAC16] inline-flex items-center justify-center px-3 md:px-4 py-1 md:py-2 text-sm md:text-base text-black font-medium text-center rounded-tr-3xl rounded-l-2xl focus:ring-1 focus:ring-gray-100"
          >
            Get Started <HiArrowUpRight className="bg-transparent w-4 h-4" />
          </NavLink>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            navbarOpen ? "flex mt-4" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="bg-[#171717] text-white w-full flex flex-col p-4 md:p-0 mt-6 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-roboto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-1 py-2 md:px-3 rounded text-white hover:text-[#F5ADB2] inline-block hover:border-b-2 ${
                    isActive ? "border-b-2" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-1 py-2 md:px-3 rounded text-white hover:text-[#F5ADB2] inline-block hover:border-b-2 ${
                    isActive ? "border-b-2" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-1 py-2 md:px-3 rounded text-white hover:text-[#F5ADB2] inline-block hover:border-b-2"
              >
                <span className="flex items-center justify-center w-full">
                  Products
                  <svg
                    className="w-2.5 h-2.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </span>
              </button>
              {dropdownOpen && (
                <div
                  className={`bg-[#171717] ${
                    navbarOpen ? "relative" : "absolute"
                  } z-10 font-normal divide-y divide-gray-100 rounded-lg shadow md:w-44 flex justify-center items-center flex-col`}
                >
                  <ul className="py-2 text-sm">
                    <li>
                      <NavLink
                        to="/dash"
                        className={({ isActive }) =>
                          `px-4 py-2 text-white hover:text-[#F5ADB2] inline-block hover:border-b-2 rounded ${
                            isActive ? "border-b-2" : ""
                          }`
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          `px-4 py-2 text-white hover:text-[#F5ADB2] inline-block hover:border-b-2 rounded ${
                            isActive ? "border-b-2" : ""
                          }`
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                          `px-4 py-2 text-white hover:text-[#F5ADB2] inline-block hover:border-b-2 rounded ${
                            isActive ? "border-b-2" : ""
                          }`
                        }
                      >
                        Settings
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-1 py-2 md:px-3 rounded-b-lg text-white hover:text-[#F5ADB2] hover:border-b-2 inline-block ${
                    isActive ? "border-b-2" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
