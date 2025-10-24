import Cookies from "js-cookie";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const handleLogout = async () => {
  try {
    // Try to get JWT token (from cookie or localStorage)
    const token = Cookies.get("jwt") || localStorage.getItem("jwt");

    const response = await fetch(`${BACKEND_URL}/api/user/logout`, {
      method: "POST",
      credentials: "include", // include cookies if httpOnly
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      console.error("Logout request failed with status:", response.status);
      const errorText = await response.text();
      console.error("Backend response:", errorText);
    } else {
      console.log("Logout successful");
    }
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    // Always remove local cookies and storage
    Cookies.remove("jwt");
    Cookies.remove("user");
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");

    // Optional: redirect to login page
    // window.location.href = "/signin";
  }
};
