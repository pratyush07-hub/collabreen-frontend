import React from "react";
import { useParams, Link } from "react-router-dom";

import BlogCover from "../../assets/Blogcover.png";
import ProfilePic from "../../assets/profilepic.png";
import Footer from "../Footer";
import BlogPic from "../../assets/blog.png";

function Blog() {
  const { id } = useParams();

  // Temporary blog data
  const blogs = [
    {
      id: 1,
      title: "Understanding Waste Management",
      author: "John Walter",
      date: "1 Jan 2024",
      image: BlogCover,
      content: `
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl potenti imperdiet 
        proin nam orci etiam sed. Arcu blandit vulputate imperdiet convallis 
        tempus blandit. Vestibulum curabitur donec elit ut varius odio in vel. 
        Fermentum donec et ultrices tincidunt in a. Senectus sit amet elit amet 
        condimentum. Sit posuere facilisi et est quam sit ullamcorper rutrum eget. 
        Fusce eu pellentesque auctor tempor.

        Quam quis porttitor nunc pellentesque commodo risus in condimentum massa. 
        Arcu odio tempor semper morbi sollicitudin accumsan. Quisque sed bibendum 
        mauris fringilla egestas ac mi facilisi hac. Diam pharetra sit purus 
        tristique viverra fames tempor elit libero.

        Lorem ipsum dolor sit amet consectetur. Aliquet nisl potenti imperdiet 
        proin nam orci etiam sed. Arcu blandit vulputate imperdiet convallis 
        tempus blandit. Vestibulum curabitur donec elit ut varius odio in vel. 
        Fermentum donec et ultrices tincidunt in a. Senectus sit amet elit amet 
        condimentum. Sit posuere facilisi et est quam sit ullamcorper rutrum eget. 
        Fusce eu pellentesque auctor tempor.

        Quam quis porttitor nunc pellentesque commodo risus in condimentum massa. 
        Arcu odio tempor semper morbi sollicitudin accumsan. Quisque sed bibendum 
        mauris fringilla egestas ac mi facilisi hac. Diam pharetra sit purus 
        tristique viverra fames tempor elit libero.
        
        Lorem ipsum dolor sit amet consectetur. Aliquet nisl potenti imperdiet 
        proin nam orci etiam sed. Arcu blandit vulputate imperdiet convallis 
        tempus blandit. Vestibulum curabitur donec elit ut varius odio in vel. 
        Fermentum donec et ultrices tincidunt in a. Senectus sit amet elit amet 
        condimentum. Sit posuere facilisi et est quam sit ullamcorper rutrum eget. 
        Fusce eu pellentesque auctor tempor.

        Quam quis porttitor nunc pellentesque commodo risus in condimentum massa. 
        Arcu odio tempor semper morbi sollicitudin accumsan. Quisque sed bibendum 
        mauris fringilla egestas ac mi facilisi hac. Diam pharetra sit purus 
        tristique viverra fames tempor elit libero.
        `,
    },
    {
      id: 2,
      title: "Sustainable Living Tips",
      author: "John Walter",
      date: "2 Feb 2024",
      image: BlogPic,
      content: `
        Quam quis porttitor nunc pellentesque commodo risus in condimentum massa. 
        Arcu odio tempor semper morbi sollicitudin accumsan.
      `,
    },
    {
      id: 3,
      title: "How Recycling Helps the Planet",
      author: "John Walter",
      date: "12 Feb 2024",
      image: BlogPic,
      content: `
        Diam pharetra sit purus tristique viverra. Pellentesque et pulvinar 
        egestas a volutpat a placerat.
      `,
    },
  ];

  const blog = blogs.find((b) => String(b.id) === id) || blogs[0];

  return (
    <div>
      {/* Banner */}
      <div className="mt-10 mb-10">
        <img src={blog.image} alt="Blog Cover" className="h-[300px] md:h-[529px] w-full" />
      </div>

      {/* Main Layout Responsive */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-20 lg:px-40 font-roboto">

        {/* LEFT SECTION — 60% */}
        <div className="lg:w-[60%] w-full min-h-full">
          <div className="flex items-center gap-4">
            <img src={ProfilePic} className="h-12 w-12 rounded-full" />
            <div className="text-white">
              <p className="text-[#93B076] text-[24px] md:text-[28px] font-bold">
                {blog.author}
              </p>
              <p className="text-sm md:text-base">Published on {blog.date}</p>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-[#EFAC16] font-sf font-medium text-[28px] md:text-[42px] leading-tight">
              {blog.title}
            </h1>

            <p className="font-medium text-white text-left text-sm md:text-base whitespace-pre-line mt-4">
              {blog.content}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION — 40% */}
        <div className="lg:w-[40%] w-full flex flex-col gap-10 shrink-0">

          {blogs.map((item) => (
            <div
              key={item.id}
              className="rounded-[30px] rounded-br-none bg-[#0c0c0c] overflow-hidden"
            >
              <img
                src={item.image}
                alt="BlogPic Image"
                className="h-[200px] md:h-[226px] w-full object-cover"
              />

              <div className="font-roboto px-4 mt-4 text-white pb-4">
                <p className="text-sm">5 Min Read</p>

                <h1 className="text-[#93b076] font-sf font-bold text-lg md:text-xl">
                  {item.title}
                </h1>

                <p className="font-medium text-sm mt-1">
                  {item.content.substring(0, 100)}...
                </p>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-[#F77128] font-bold text-[12px]">
                      {item.author}
                    </p>
                    <p className="font-thin text-[10px]">{item.date}</p>
                  </div>

                  <Link
                    to={`/blog/${item.id}`}
                    className="text-[#F77128] underline text-sm cursor-pointer"
                  >
                    Read Blog
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
