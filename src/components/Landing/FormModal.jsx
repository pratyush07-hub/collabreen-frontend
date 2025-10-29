export default function FormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-[#171717] text-white w-full max-w-md p-8 rounded-3xl relative border border-[#EFAC16]/40 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F5ADB2] hover:text-[#EFAC16] text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-sf text-[#EFAC16] mb-6 text-center">
          Join Winkiz Community
        </h2>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-[#222222] text-white border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg bg-[#222222] text-white border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <input
            type="text"
            placeholder="Company / Brand"
            className="p-3 rounded-lg bg-[#222222] text-white border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          />
          <textarea
            placeholder="Tell us about your goals..."
            rows="3"
            className="p-3 rounded-lg bg-[#222222] text-white border border-[#EFAC16]/40 focus:outline-none focus:border-[#F5ADB2]"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-[#F5ADB2] hover:bg-[#EFAC16] text-black font-semibold py-3 rounded-xl transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
