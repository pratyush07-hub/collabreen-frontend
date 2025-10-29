import React from 'react';
import quotes from "../../assets/quotes.png";
import profilepic from "../../assets/profilepic.png"

function TestimonialCard({ name, quote, profilePic, borderColor }) {
  return (
    <div className={`text-white w-[260px] md:w-[529px] h-[460px] md:h-[302px] border-[10px] font-roboto rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[10px] rounded-br-[10px] border-[${borderColor}] p-6`}>
      <div>
        <img src={quotes} alt="quotes" />
      </div>
      <div className="mt-6">
        <p className="text-center">{quote}</p>
      </div>
      <div className="flex gap-4 mt-8 items-center justify-end">
        <p className="font-bold">{name}</p>
        <img src={profilepic} alt="profile Pic" className="h-[44px] w-[44px] rounded-full border-[3px] border-[#F77128]" />
      </div>
    </div>
  );
}

export default TestimonialCard;
