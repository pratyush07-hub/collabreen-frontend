// import React from 'react'

// function Numbers() {
//     return (
//         <>
//             <section className="flex flex-col gap-10 md:flex-row justify-evenly items-center max-w-screen-4xl py-10 md:mt-14 mx-auto text-white">
//                 <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-br-3xl rounded-t-3xl">
//                     <h1 className="bg-transparent max-w-4xl text-[#EFAC16] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">200M+</h1>
//                     <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
//                 </div>
//                 <span className="w-4 h-4 rounded-full bg-white"></span>
//                 <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-r-3xl">
//                     <h1 className="bg-transparent max-w-4xl text-[#93B076] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">50+</h1>
//                     <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
//                 </div>
//                 <span className="w-4 h-4 rounded-full bg-white"></span>
//                 <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-t-3xl">
//                     <h1 className="bg-transparent max-w-4xl text-[#F5ADB2] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">10K+</h1>
//                     <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Numbers


import React, { useEffect, useState, useRef } from "react";

function Numbers() {
  const [creatorCount, setCreatorCount] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate numbers only once when visible
          animateValue(0, 200, 2000, setCreatorCount); // 200M+
          animateValue(0, 50, 2000, setBrandsCount); // 50+
          animateValue(0, 10, 2000, setCommunityCount); // 10K+
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-10 md:flex-row justify-evenly items-center max-w-screen-4xl py-10 md:mt-14 mx-auto text-white"
    >
      {/* 200M+ */}
      <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-br-3xl rounded-t-3xl">
        <h1 className="bg-transparent max-w-4xl text-[#EFAC16] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">
          {creatorCount}M+
        </h1>
        <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">
          Creator Database
        </p>
      </div>

      <span className="w-4 h-4 rounded-full bg-white"></span>

      {/* 50+ */}
      <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-r-3xl">
        <h1 className="bg-transparent max-w-4xl text-[#93B076] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">
          {brandsCount}+
        </h1>
        <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">
          Brand Partners
        </p>
      </div>

      <span className="w-4 h-4 rounded-full bg-white"></span>

      {/* 10K+ */}
      <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-t-3xl">
        <h1 className="bg-transparent max-w-4xl text-[#F5ADB2] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">
          {communityCount}K+
        </h1>
        <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">
          Active Community
        </p>
      </div>
    </section>
  );
}

export default Numbers;
