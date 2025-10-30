import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpeg";
import FormModal from "./FormModal";
import { useState } from "react";

function Hero() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <section className="text-white pt-8 md:pt-24">
        <div className="grid max-w-screen-4xl px-4 py-8 mx-auto gap-14 lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-7 relative">
            <h1 className="max-w-2xl mb-4 text-left text-3xl font-normal md:text-4xl xl:text-5xl relative">
              The #1 Influencer{" "}
              <span className="w-6 h-6 absolute left-[80%] md:left-[70%] rounded-full border-2 border-[#F5ADB2]"></span>{" "}
              <br />
              <span className="text-[#EFAC16] inline-block font-medium text-4xl md:text-5xl xl:text-6xl">
                Marketing Software
              </span>{" "}
              <br />
              for Marketers
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
              <p className="text-left text-gray-300 text-lg lg:text-xl md:w-8/12">
                Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                placerat cras duis.
              </p>
              <span className="md:flex md:items-center md:justify-center">
                <div className="flex gap-4">
                  <Link
                    href="/explore"
                    className="bg-[#F5ADB2] hover:bg-[#F5ADB2] w-26 text-sm md:w-auto flex items-center justify-center md:text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
                  >
                    Explore Now
                  </Link>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-[#EFAC16] w-26 text-sm md:w-auto flex items-center justify-center md:text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
                  >
                    Join Now
                  </button>
                </div>
              </span>
            </div>
            <span className="w-6 h-6 absolute left-[100%] rounded-full bg-[#EFAC16]"></span>
          </div>
          <div className="lg:mt-0 md:col-span-5 flex items-center justify-center">
            <img className="w-80" src={hero} alt="mockup" />
          </div>
        </div>
      </section>
      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}

export default Hero;
