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
          className="text-white flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={influencerVector}
              alt="Campaign Generator"
              className="w-[70px] h-[70px] object-contain"
            />
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Influencer Insights
              </h3>
              <p className="font-roboto font-light text-left">
                Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                placerat cras duis.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
          className="text-white mt-10 sm:ml-60 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]">
            <div className="ml-6">
              <h3 className="font-roboto text-lg font-semibold">
                Campaign Generator
              </h3>
              <p className="font-roboto font-light text-left">
                Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                placerat cras duis.
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
         className="text-white mt-12 flex p-8 items-center justify-between w-full sm:w-[376px] h-[144px] bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 sm:top-[112px] sm:left-[1083px] gap-0 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
          <div className="ml-6">
            <h3 className="font-roboto text-lg font-semibold">
              Campaign Insights
            </h3>
            <p className="font-roboto font-light text-left">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
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

          <div className="flex flex-col items-center gap-6">
            {/* Card 1 */}
            <div className="w-full flex items-center justify-between p-6 rounded-3xl bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 backdrop-blur-sm">
              <img
                src={influencerVector}
                alt="Influencer Insights"
                className="w-[60px] h-[60px] object-contain"
              />
              <div className="ml-4">
                <h3 className="font-roboto text-lg font-semibold">
                  Influencer Insights
                </h3>
                <p className="font-roboto text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                  cras duis.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full flex items-center justify-between p-6 rounded-3xl bg-gradient-to-r from-[#000000]/10 to-[#6a6a6a]/40 backdrop-blur-sm">
              <div className="ml-4">
                <h3 className="font-roboto text-lg font-semibold">
                  Campaign Generator
                </h3>
                <p className="font-roboto text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                  cras duis.
                </p>
              </div>
              <img
                src={CampaignGenerator}
                alt="Campaign Generator"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>

            {/* Card 3 */}
            <div className="w-full flex items-center justify-between p-6 rounded-3xl bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/10 backdrop-blur-sm">
              <div className="ml-4">
                <h3 className="font-roboto text-lg font-semibold">
                  Campaign Insights
                </h3>
                <p className="font-roboto text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
                  cras duis.
                </p>
              </div>
              <img
                src={CampaignVector}
                alt="Campaign Insights"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

