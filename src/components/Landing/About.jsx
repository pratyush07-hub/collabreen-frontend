import { Link } from "react-router-dom";
import Search from "../../assets/Search.jpeg";
function About() {
  return (
    <>
      <section className="grid max-w-screen-4xl py-10 mt-14 mx-auto text-white">
        <h1 className="text-white font-sf inline-block font-medium text-3xl md:text-4xl xl:text-5xl text-center">
          Well Your Search Is Over!
        </h1>
        <p className="text-gray-300 text-sm lg:text-base font-roboto py-2 text-center">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="grid items-center justify-center gap-14 lg:gap-8 xl:gap-0 py-16 md:grid-rows-2">
          <div className="lg:mt-0 md:col-span-6 flex items-center justify-center">
            <img
              className="w-[80vw] h-[60vh] object-cover rounded-xl"
              src={Search}
              alt="mockup"
            />
          </div>

          <div className="mx-auto place-self-center md:col-span-6 relative text-center">
  <h1 className="max-w-4xl mb-4 text-[#F5ADB2] text-3xl font-normal md:text-4xl xl:text-5xl mx-auto">
    Winkiz
  </h1>

  <div className="flex flex-col items-center gap-4 md:gap-0">
    <p className="text-gray-300 text-lg lg:text-xl md:w-10/12 py-2 font-roboto text-center">
      Lorem ipsum dolor sit amet consectetur. Commodo ultricies
      facilisi ornare justo malesuada pretium purus consequat dui.
      Lorem ipsum dolor sit amet consectetur. Commodo ultricies
      facilisi ornare justo malesuada pretium purus consequat dui.
      Lorem ipsum dolor sit amet consectetur. Commodo ultricies
      facilisi ornare justo malesuada pretium purus consequat dui.
      Lorem ipsum dolor sit amet consectetur. Commodo ultricies
      facilisi ornare justo malesuada pretium purus consequat dui.
    </p>

    <p className="text-gray-300 text-lg lg:text-xl md:w-10/12 py-2 font-roboto text-center">
      Consequat leo nulla egestas mollis dui facilisis nulla eu.
      Consequat leo nulla egestas mollis dui facilisis nulla eu.
    </p>

    {/* Uncomment if you want the button */}
    {/* <span className="flex items-center justify-center">
      <Link
        href="/explore"
        className="bg-[#F5ADB2] hover:bg-[#EFAC16] w-36 md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-3 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
      >
        Learn More
      </Link>
    </span> */}
  </div>

  <span className="w-6 h-6 absolute left-3/4 -translate-x-1/2 rounded-full bg-[#93B076] mt-4"></span>
</div>

        </div>
      </section>
    </>
  );
}

export default About;
