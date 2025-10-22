import Footer from "../Footer";
import Hero from "./Hero";
import Meeting from "./Meeting";
import Navbar from "./Navbar";
import Numbers from "./Numbers";
import Searchover from "./Searchover";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Whatsnew from "./Whatsnew";

function Landing() {
  return (
    <div className="root">
  
    <Hero/>
    <Whatsnew/>
    <Searchover/>
    <Numbers/>
    <Services/>
    <Testimonials/>
    <Meeting></Meeting>
    <Footer></Footer>
    </div>
  )
}

export default Landing;
