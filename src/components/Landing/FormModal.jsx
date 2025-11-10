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
        setSuccessMsg("Thanks for submitting your information, we will contact you shortly!");
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
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
      <div
        className="
          bg-[#171717] text-white 
          w-full max-w-md sm:max-w-lg md:max-w-xl
          p-5 sm:p-6 md:p-7
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

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#EFAC16] mb-3 text-center">
          For Brands Who Need Influencers
        </h2>

        <form
          className="flex flex-col space-y-2 sm:space-y-3"
          onSubmit={handleSubmit}
          noValidate
        >
          {[
            { type: "text", name: "fullName", placeholder: "Full Name", required: true },
            { type: "email", name: "email", placeholder: "Email Address", required: true },
            { type: "text", name: "company", placeholder: "Company / Brand" },
            { type: "url", name: "website", placeholder: "Website URL" },
            { type: "text", name: "position", placeholder: "Your Position" },
            { type: "text", name: "niche", placeholder: "What's your niche?" },
            { type: "tel", name: "phone", placeholder: "Phone Number" },
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
                p-2 sm:p-2.5 
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
