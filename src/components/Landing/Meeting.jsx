// import React from "react";
// import meeting from "../../assets/meeting.png";
// import { Link } from "react-router-dom";

// function Meeting() {
//   return (
//     <>
//       <section className="bg-[#0C0C0C] rounded-3xl shadow border-[#] overflow-hidden h-auto md:h-[530px] relative mb-10 mt-40">
//         <img
//           className="absolute object-cover object-center h-full w-full"
//           src={meeting}
//           alt="Meeting"
//         />
//         <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full max-w-screen-xl mx-auto relative">
//           <div className="text-center">
//             <h1 className="text-[#EFAC16] font-medium text-3xl md:text-4xl font-sf">
//               Schedule a meeting
//             </h1>
//             <h1 className="font-sf text-4xl md:text-5xl mt-6 md:mt-10">
//               Be a part of our team of Data-
//               <br />
//               Driven Marketers
//             </h1>
//             <p className="font-roboto font-light text-base mt-6 md:mt-10">
//               Lorem ipsum dolor sit amet consectetur. Ut volutpat sagittis
//               mauris in orci. Sit scelerisque in nulla <br /> venenatis nullam.
//               Sit scelerisque in nulla venenatis nullam.
//             </p>
//             <span className="mt-10 md:mt-20">
//               <div className="flex justify-center">
//               <Link
//                 href="/explore"
//                 className="bg-[#EFAC16] hover:bg-[#F77128] w-36 md:w-40 flex items-center justify-center text-base font-semibold text-center text-gray-900 py-3 px-4 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
//               >
//                 Learn More
//               </Link>
//               </div>
//             </span>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-center mt-40 mb-10"></div>
//     </>
//   );
// }

// export default Meeting;

import React from "react";
import meeting from "../../assets/meeting.png";
import { Link } from "react-router-dom";

function Meeting() {
  return (
    <>
      <section className="bg-[#0C0C0C] rounded-3xl shadow overflow-hidden h-auto md:h-[530px] relative mb-10 mt-20 md:mt-40">
        {/* Background image */}
        <img
          className="absolute object-cover object-center h-full w-full"
          src={meeting}
          alt="Meeting"
        />

        {/* Content */}
        <div className="flex flex-col justify-center items-center text-white font-roboto px-4 sm:px-6 md:px-10 py-10 md:py-0 h-full max-w-screen-xl mx-auto relative text-center">
          <h1 className="text-[#EFAC16] font-medium text-2xl sm:text-3xl md:text-4xl font-sf">
            Schedule a meeting
          </h1>

          <h1 className="font-sf text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-6 md:mt-10 leading-snug">
            Be a part of our team of <br className="hidden sm:block" />
            Data-Driven Marketers
          </h1>

          <p className="font-roboto font-light text-sm sm:text-base mt-4 sm:mt-6 md:mt-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ut volutpat sagittis mauris
            in orci. Sit scelerisque in nulla venenatis nullam. Sit scelerisque
            in nulla venenatis nullam.
          </p>

          <div className="flex justify-center mt-8 sm:mt-10 md:mt-20">
            <Link
              to="/explore"
              className="bg-[#EFAC16] hover:bg-[#F77128] w-32 sm:w-36 md:w-40 flex items-center justify-center 
              text-sm sm:text-base font-semibold text-gray-900 py-2 sm:py-3 px-4 mt-4 
              rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-2 md:mt-40"></div>
    </>
  );
}

export default Meeting;
