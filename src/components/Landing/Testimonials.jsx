import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Yuvraj",
      quote:
        "Winkiz completely changed the way I collaborate! Earlier, finding creators with the same vibe used to take days, but now I just swipe and match instantly. The UI feels like Tinder but built for creators, which makes the whole process super fun. Already did two collabs thanks to Winkiz!",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#93B076",
    },
    {
      id: 2,
      name: "Sumit",
      quote:
        "As an Instagram creator, I always struggled to connect with people outside my niche. Winkiz solved that. The platform shows verified profiles, interests, and collaboration goals clearly. Matched with a travel vlogger and our reel went viral! Highly recommended for serious creators.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#F5ADB2",
    },
    {
      id: 3,
      name: "Mohit",
      quote:
        "Winkiz is honestly a game-changer. Instead of cold messaging hundreds of creators, I now get targeted matches who actually want to collaborate. The chat feature is smooth, and the profile insights help you pick the right partner. Love the modern, swipe-based design!",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#EFAC16",
    },
    {
      id: 4,
      name: "Mukul",
      quote:
        "I never thought finding collaboration partners could be this easy. Winkiz feels like a matchmaking app but strictly for content creators. The swipe feature is addictive, and within a week, I found three high-quality creators in my city. Super helpful for local shoots.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#93B076",
    },
    {
      id: 5,
      name: "Vaishali",
      quote:
        "Winkiz brings professionalism and fun together. The platform helps creators connect based on niche, follower range, and goals — all with Tinder-style matching. It's perfect for YouTubers, Instagram influencers, and even new creators looking to grow fast. My collab rate literally doubled.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#F5ADB2",
    },
    {
      id: 6,
      name: "Lavanya",
      quote:
        "What I love most about Winkiz is how simple it is. Swipe → Match → Collaborate. No complicated forms. The algorithm also suggests creators based on your content style, which feels on point. Perfect platform for small to mid-level influencers looking to grow.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#EFAC16",
    },
  ];

  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust to  scroll
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust to  scroll
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-24 md:mt-40">
      <div className="">
        <h1 className="text-white font-medium text-4xl md:text-6xl font-sf">
          What Our Client’s Say
        </h1>
        {/* <p className="text-white font-light text-md md:text-xl font-roboto mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </p> */}
      </div>

      <div className="overflow-hidden w-full mt-20 relative">
        {/* Scrolling testimonials container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0">
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
                image={testimonial.profilePic}
                borderColor={testimonial.borderColor}
              />
            </div>
          ))}
        </div>
      </div>
            {/* Scroll buttons */}
      <div className="flex justify-between mt-16">
        <button
          onClick={handleScrollLeft}
          className="border px-6 rounded-full text-white opacity-50 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="inline-block mr-2"
          >
            <path d="M14 7l-5 5 5 5V7z" fill="currentColor" />
          </svg>
        </button>
        <button
          onClick={handleScrollRight}
          className="border px-6 rounded-full text-white opacity-50 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="inline-block mr-2"
          >
            <path d="M10 7l5 5-5 5V7z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;


