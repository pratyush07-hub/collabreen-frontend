import React, { useEffect, useState } from "react";
import { joinNow } from "../../api/client";

export default function FormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    position: "",
    niche: "",
    phone: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!form.fullName.trim() || !form.email.trim()) {
      setErrorMsg("Full Name and Email are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await joinNow(form);
      if (response.data.success) {
        setSuccessMsg("Thank you for joining the Winkiz Community!");
        setForm({
          fullName: "",
          email: "",
          company: "",
          website: "",
          position: "",
          niche: "",
          phone: "",
          goals: "",
        });
        setTimeout(() => {
          setSuccessMsg(null);
          onClose();
        }, 2000);
      } else {
        setErrorMsg(response.data.message || "Submission failed.");
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Server error, try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-[#171717] text-white w-full max-w-xl md:max-w-2xl p-6 sm:p-8 rounded-3xl relative border border-[#EFAC16]/40 shadow-lg max-h-[90vh] md:max-h-[94vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#F5ADB2] hover:text-[#EFAC16] text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-sf text-[#EFAC16] md-4 md:mb-2 text-center">
          Join Winkiz Community
        </h2>

        <form className="flex flex-col space-y-3 sm:space-y-4" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            pattern="^[A-Za-z\s]{2,40}$"
            title="Only letters and spaces, 2–40 characters."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Enter a valid email address."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
            required
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company / Brand"
            pattern="^[A-Za-z0-9\s&.-]{2,50}$"
            title="Letters, numbers, spaces, and .-& allowed (2–50 chars)."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Website url"
            pattern="^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$"
            title="Enter a valid URL (e.g., https://example.com)."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Your Position"
            pattern="^[A-Za-z\s]{2,40}$"
            title="Only letters and spaces, 2–40 characters."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="text"
            name="niche"
            value={form.niche}
            onChange={handleChange}
            placeholder="What's your niche?"
            pattern="^[A-Za-z\s]{2,40}$"
            title="Only letters and spaces, 2–40 characters."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            pattern="^\+?[0-9]{7,15}$"
            title="Enter a valid phone number (7–15 digits, optional +)."
            className="p-2 sm:p-3 md:p-2 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            placeholder="Tell us about your goals..."
            rows="3"
            pattern=".{5,300}"
            title="Must be at least 5 characters long."
            className="p-2 sm:p-3 rounded-lg bg-[#222222] text-white text-sm sm:text-base border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 sm:mt-4 bg-[#F5ADB2] hover:bg-[#EFAC16] text-black font-semibold py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {errorMsg && <p className="text-red-500 mt-2 text-center text-sm sm:text-base">{errorMsg}</p>}
          {successMsg && <p className="text-green-400 mt-2 text-center text-sm sm:text-base">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
}
