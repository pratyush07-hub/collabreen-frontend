// import React from "react";
// import { Link } from "react-router-dom";
// import influencerVector from "../../assets/Influencervector.png";
// import CampaignGenerator from "../../assets/campaignGenerator.png";
// import services from "../../assets/Services.png";
// import CampaignVector from "../../assets/campaignVector.png";

// function Services() {
//   return (
//     <div className="flex justify-center relative mt-40">
//       {/* Parent div with background image */}
//       <div
//         className="p-10 w-full max-w-screen-xl h-[571px] rounded-[50px] bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${services})` }} // Set the background image
//       >
//         <div className="flex flex-wrap  gap-10">
//           <div className="text-white flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 rounded-tr-[30px] rounded-bl-[30px]">
//             <img
//               src={influencerVector}
//               alt="Campaign Generator"
//               className="w-[70px] h-[70px] object-contain"
//             />
//             <div className="ml-6">
//               <h3 className="font-roboto text-lg font-semibold">
//                 Influencer Insights
//               </h3>
//               <p className="font-roboto font-light text-left">
//                 Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
//                 placerat cras duis.
//               </p>
//             </div>
//           </div>

//           <div className="text-white  mt-10 sm:ml-60 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]">
//             <div className="ml-6">
//               <h3 className="font-roboto text-lg font-semibold">
//                 Campaign Generator
//               </h3>
//               <p className="font-roboto font-light text-left">
//                 Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
//                 placerat cras duis.
//               </p>
//             </div>
//             <img
//               src={CampaignGenerator}
//               alt="Influencer Insights"
//               className="w-[70px] h-[70px] object-contain"
//             />
//           </div>
//         </div>

//         <div className="text-white mt-12 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
//           <div className="ml-6">
//             <h3 className="font-roboto text-lg font-semibold">
//               Campaign Insights
//             </h3>
//             <p className="font-roboto font-light text-left">
//               Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
//               placerat cras duis.
//             </p>
//           </div>
//           <img
//             src={CampaignVector}
//             alt="Influencer Insights"
//             className="w-[70px] h-[70px] object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import influencerVector from "../../assets/Influencervector.png";
import CampaignGenerator from "../../assets/campaignGenerator.png";
import services from "../../assets/Services.png";
import CampaignVector from "../../assets/campaignVector.png";

function Services() {
  return (
    <section className="flex justify-center relative mt-24 md:mt-40 lg:px-0">
      {/* ===== Desktop version ===== */}
      <div
        className="hidden md:block p-10 w-full max-w-screen-xl h-[571px] rounded-[50px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${services})` }}
      >
        <div className="flex flex-wrap gap-10">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-white flex p-8 items-center justify-between w-full sm:w-[426px] h-[186px] sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 rounded-tr-[30px] rounded-bl-[30px]"
          >
            <img
              src={influencerVector}
              alt="Campaign Generator"
              className="w-[70px] h-[70px] object-contain"
            />
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Community Zone
              </h3>
              <p className="font-roboto font-light text-sm text-left">
                Grow together, not alone. Join exclusive creator groups, share
                experiences, learn from others, and be part of a growing
                community that supports creativity, authenticity, and growth —
                all in one place.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-white mt-10 sm:ml-60 flex p-8 items-center justify-between w-full sm:w-[416px] h-auto bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
          >
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Collaboration Hub
              </h3>
              <p className="font-roboto font-light text-sm text-left">
                Where creators and brands connect. Find perfect partnerships
                without endless searching. Whether you’re a creator looking for
                paid gigs or a brand wanting the right face for your campaign —
                Winkiz makes collaboration seamless and smart.
              </p>
            </div>
            <img
              src={CampaignGenerator}
              alt="Campaign Generator"
              className="w-[70px] h-[70px] object-contain"
            />
          </motion.div>
        </div>

        {/* Box 3 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white mt-0 flex p-4 items-center justify-between w-full sm:w-[376px] h-auto bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
        >
          <div className="ml-6">
            <h3 className="font-roboto text-lg font-semibold">
              Creator Insights
            </h3>
            <p className="font-roboto font-light text-left text-sm">
              Know what works. Learn what’s trending. Stay updated with real
              stories, success journeys, and insights from creators like you.
              Explore what’s driving engagement, discover upcoming trends, and
              get inspired to grow your influence.
            </p>
          </div>
          <img
            src={CampaignVector}
            alt="Campaign Insights"
            className="w-[70px] h-[70px] object-contain"
          />
        </motion.div>
      </div>

      {/* ===== Mobile & Tablet version ===== */}
      <div className="block md:hidden bg-[#0C0C0C] rounded-[40px] overflow-hidden">
        {/* Background image on top */}
        <img
          src={services}
          alt="Services background"
          className="w-full h-60 object-cover object-center"
        />

        <div className="px-2 py-6 text-white">
          <h1 className="text-center text-[#93B076] text-2xl font-semibold mb-8">
            Services
          </h1>

          <div className="flex flex-col items-center gap-6 w-full px-4 text-white">
  {/* Card 1 */}
  <div className="w-full flex flex-col items-center p-5 rounded-3xl bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 backdrop-blur-sm">
    <img
      src={influencerVector}
      alt="Influencer Insights"
      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-contain mb-4"
    />
    <div className="text-center">
      <h3 className="font-roboto text-base sm:text-lg font-semibold mb-2">
        Creator Insights
      </h3>
      <p className="font-roboto text-xs sm:text-sm font-light leading-relaxed">
        Know what works. Learn what’s trending. Stay updated with real stories,
        success journeys, and insights from creators like you. Explore what’s
        driving engagement, discover upcoming trends, and get inspired to grow
        your influence.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full flex flex-col items-center p-5 rounded-3xl bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 backdrop-blur-sm">
    <img
      src={CampaignGenerator}
      alt="Campaign Generator"
      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-contain mb-4"
    />
    <div className="text-center">
      <h3 className="font-roboto text-base sm:text-lg font-semibold mb-2">
        Collaboration Hub
      </h3>
      <p className="font-roboto text-xs sm:text-sm font-light leading-relaxed">
        Where creators and brands connect. Find perfect partnerships without
        endless searching. Whether you’re a creator looking for paid gigs or a
        brand wanting the right face for your campaign — Winkiz makes
        collaboration seamless and smart.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full flex flex-col items-center p-5 rounded-3xl bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 backdrop-blur-sm">
    <img
      src={CampaignVector}
      alt="Community Zone"
      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-contain mb-4"
    />
    <div className="text-center">
      <h3 className="font-roboto text-base sm:text-lg font-semibold mb-2">
        Community Zone
      </h3>
      <p className="font-roboto text-xs sm:text-sm font-light leading-relaxed">
        Grow together, not alone. Join exclusive creator groups, share
        experiences, learn from others, and be part of a growing community that
        supports creativity, authenticity, and growth — all in one place.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Services;
