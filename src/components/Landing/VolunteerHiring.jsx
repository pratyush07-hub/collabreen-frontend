import React, { useEffect, useState } from "react";
import { applyVolunteerHiring } from "../../api/client";

export default function VolunteerHiring({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    availability: "",
    experience: "",
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
      const response = await applyVolunteerHiring(form);
      if (response.data.success) {
        setSuccessMsg(
          "Thanks for submitting your information, we will contact you shortly!"
        );
        setForm({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          skills: "",
          availability: "",
          experience: "",
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
      setErrorMsg(
        err.response?.data?.message || "Server error, try again later."
      );
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
      <div
        className="
          bg-[#171717] text-white 
          w-full max-w-md sm:max-w-lg md:max-w-xl
          px-6 py-4
          rounded-2xl
          relative border border-[#EFAC16]/40 shadow-lg
          flex flex-col justify-center
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#F5ADB2] hover:text-[#EFAC16] text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-[#EFAC16] mb-3 text-center">
          Become a Volunteer – Join Our Mission
        </h2>

        <form
          className="flex flex-col space-y-2 sm:space-y-3"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="
    p-2
    rounded-lg bg-[#222222]
    text-white text-sm sm:text-base 
    border border-[#EFAC16]/40
    focus:outline-none focus:border-[#F5ADB2]
    transition-all duration-150
  "
          />
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="
      p-2
      rounded-lg bg-[#222222]
      text-white text-sm sm:text-base 
      border border-[#EFAC16]/40
      focus:outline-none focus:border-[#F5ADB2]
      transition-all duration-150
      md:w-1/2
    "
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="
      p-2
      rounded-lg bg-[#222222]
      text-white text-sm sm:text-base 
      border border-[#EFAC16]/40
      focus:outline-none focus:border-[#F5ADB2]
      transition-all duration-150
      md:w-1/2
    "
            />
          </div>

          {[
            // { type: "text", name: "fullName", placeholder: "Full Name", required: true },
            // { type: "email", name: "email", placeholder: "Email Address", required: true },
            // { type: "tel", name: "phone", placeholder: "Phone Number" },

            { type: "text", name: "city", placeholder: "City / Location" },
            {
              type: "text",
              name: "skills",
              placeholder: "Your Skills (e.g., Writing, Management, Outreach)",
            },
            {
              type: "text",
              name: "availability",
              placeholder: "Availability (e.g., Weekends, 10 hrs/week)",
            },
            {
              type: "text",
              name: "experience",
              placeholder: "Past Volunteer Experience (Optional)",
            },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required || false}
              className="
                p-2
                rounded-lg bg-[#222222]
                text-white text-sm sm:text-base 
                border border-[#EFAC16]/40
                focus:outline-none focus:border-[#F5ADB2]
                transition-all duration-150
              "
            />
          ))}
          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            placeholder="Tell us about your goals..."
            rows="2"
            className="
              p-2 sm:p-2.5 
              rounded-lg bg-[#222222]
              text-white text-sm sm:text-base 
              border border-[#EFAC16]/40
              focus:outline-none focus:border-[#F5ADB2]
              resize-none
            "
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-2 sm:mt-3 
              bg-[#F5ADB2] hover:bg-[#EFAC16]
              text-black font-semibold
              py-2 sm:py-2.5
              rounded-xl transition-all duration-200
              text-sm sm:text-base
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {errorMsg && (
            <p className="text-red-500 mt-1 text-center text-sm sm:text-base">
              {errorMsg}
            </p>
          )}
          {successMsg && (
            <p className="text-green-400 mt-1 text-center text-sm sm:text-base">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
