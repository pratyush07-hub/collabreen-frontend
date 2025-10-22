import Cookies from "js-cookie";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const handleLogout = async () => {
  try {
    // Call backend logout endpoint
    await fetch(`${BACKEND_URL}/api/user/logout`, {
      method: "POST",
      credentials: "include", // for httpOnly cookies if used
    });
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    // Remove local cookies
    Cookies.remove("jwt");
    Cookies.remove("user");
  }
};
