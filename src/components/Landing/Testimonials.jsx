import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#93B076",
    },
    {
      id: 2,
      name: "Jane Doe",
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      profilePic: "../../assets/profilepic.png",
      borderColor: "#F5ADB2",
    },
    {
      id: 3,
      name: "Alice Johnson",
      quote:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
        <p className="text-white font-light text-md md:text-xl font-roboto mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
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


