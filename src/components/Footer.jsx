import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearchLocation,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";
import logo from "../assets/Winkizlogo.png";
import Winkiz from "../assets/winkiz.png";

function Footer() {
  return (
    <footer className="text-white">
      <div className="flex justify-center mt-10 md:mt-20 mb-10">
        <img src={Winkiz} alt="Collaboration" className="rounded-xl" />
      </div>
      <div className="hidden md:block">
        <div className="bg-black h-auto flex full-width pb-4">
          <div className="h-auto w-full">
            <div className="w-[64%] mx-auto text-left">
              <div className="w-16 h-16 md:h-24 md:w-24 rounded-full">
                <img src={logo} alt="Logo" />
              </div>
              <p className="md:text-xs lg:text-sm">
                Winkiz is the #1 Influencer Marketing Software designed to help
                data-driven marketers finally master creator campaigns. We
                eliminate the guesswork by providing access to over 200M
                creators, AI-powered insights, and real-time ROI tracking,
                ensuring you always partner with the right talent to scale your
                brand efficiently.
              </p>
            </div>
          </div>
          <div className="h-auto w-full">
            <div className="w-[60%] mx-auto text-left">
              <h2 className="text-lg font-semibold mt-10 mb-2">Contact Us</h2>

              {/* Location */}
              <div className="flex items-center gap-3 mb-2">
                <FiMapPin className="w-6 h-6" strokeWidth={1.2} />
                <span className="text-sm">
                  Wisconsin Ave, Suite 700 <br /> Chevy Chase, Maryland 20815
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="w-6 h-6" strokeWidth={1.2} />
                <span className="text-sm">support@example.com</span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h5 className="text-sm font-semibold mt-4">Follow us</h5>
                <div className="flex justify-center sm:justify-end space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-6 h-6 hover:text-blue-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="w-6 h-6 hover:text-black hover:bg-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/winkiz.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6 hover:text-pink-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/winkiz/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-6 h-6 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 full-width bg-white"></div>
        <div className="bg-black full-width flex justify-around items-center py-6">
          <div className="flex gap-14 md:text-sm lg:text-lg">
            <h3>Privacy Policy</h3>
            <h3>Terms of Use</h3>
            <h3>Sales & Refunds</h3>
            <h3>Legal</h3>
          </div>
          <div>
            <p className="text-sm text-white">
              &copy; 2025 All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* mobile and tab */}
      <div className="md:hidden">
        <div className="bg-black h-auto full-width pb-4 p-6">
          <div className="w-16 h-16 md:h-24 md:w-24 rounded-full">
            <img src={logo} alt="Logo" />
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>

            {/* Location */}
            <div className="flex items-center gap-3 mb-2">
              <FiMapPin className="w-6 h-6" strokeWidth={1.2} />
              <span className="text-sm">
                Wisconsin Ave, Suite 700 <br /> Chevy Chase, Maryland 20815
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FiMail className="w-6 h-6" strokeWidth={1.2} />
              <span className="text-sm">support@example.com</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h5 className="text-sm font-semibold mt-4">Follow us</h5>
              <div className="flex justify-center sm:justify-end space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-6 h-6 hover:text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-6 h-6 hover:text-black hover:bg-white" />
                </a>
                <a
                  href="https://www.instagram.com/winkiz.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-6 h-6 hover:text-pink-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/winkiz/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 hover:text-blue-600" />
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full h-0.5 full-width bg-white"></div>
        <div className="bg-black full-width flex justify-around items-center py-6">
          <div className=" text-xs">
            <div className="flex gap-6">
              <h3>Privacy Policy</h3>
              <h3>Terms of Use</h3>
            </div>
            <div className="flex gap-4">
              <h3>Sales & Refunds</h3>
              <h3>Legal</h3>
            </div>
          </div>
          <div>
            <p className="text-xs text-white">
              &copy; 2025 <br /> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
