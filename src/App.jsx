// ================= App.jsx =================
// import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import { getSocket, initializeSocket } from "./socket.js" // import the socket instance
import "./App.css";

// Components
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Landing/Navbar";
import Signup from "./components/Authentication/Signup";
import InfluencerSignup from "./components/Authentication/InfluencerSignup";
import BrandSignup from "./components/Authentication/BrandSignup";
import CampaignRegistration from "./components/Campaign/CampaignRegistration";
import BudgetPlaning from "./components/Campaign/BudgetPlaning";
import Plans from "./components/Campaign/Plans";
import ScheduleMeeting from "./components/Campaign/ScheduleMeeting";
import InfluencerPlans from "./components/Services/InfluencerPlans";
import Payment from "./components/Services/Payment";
import PayInfluencer from "./components/Services/PayInfluencer";
import Blogs from "./components/Blog/Blogs";
import Blog from "./components/Blog/Blog";
import RegisterAs from "./components/Authentication/RegisterAs";
import InfluencerInsights from "./components/Services/InfluencerInsights";
import Signin from "./components/Authentication/Signin";
import DashboardLanding from "./components/Dashboard/DashboardLanding";
import Profile from "./components/Dashboard/Profile";
import BrandDashBoard from "./components/Dashboard/BrandDashBoard";
import InfluencerDashboardPage from "./components/Dashboard/InfluencerDashboard/InfluencerDashboardPage";
import EditProfile from "./components/Dashboard/InfluencerDashboard/EditProfile";
import CreatorToCreatorMain from "./components/Dashboard/CreatorToCreator/CreatorToCreatorMain";
import ErrorBoundary from "./components/Dashboard/CreatorToCreator/ErrorBoundary";
import CollabReqAcceptReject from "./components/Dashboard/CreatorToCreator/CollabReqAcceptReject";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/dashboard",
    "/ProfileDashboard",
    "/influencerdashboard",
    "/influencerdashboard/editprofile",
    "/creator-to-creator",
  ];

  

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/register-as" element={<RegisterAs />} />
        <Route exact path="/influencer-register" element={<InfluencerSignup />} />
        <Route exact path="/brand-register" element={<BrandSignup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/ProfileDashboard" element={<DashboardLanding />} />
        <Route exact path="/BrandDashBoard" element={<BrandDashBoard />} />
        <Route exact path="/influencer-insights" element={<InfluencerInsights />} />
        <Route exact path="/campaign-register" element={<CampaignRegistration />} />
        <Route exact path="/budget-planing" element={<BudgetPlaning />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route exact path="/services/influencer-plans" element={<InfluencerPlans />} />
        <Route exact path="/services/payments" element={<Payment />} />
        <Route exact path="/services/payment/influencer" element={<PayInfluencer />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/kk" element={<CollabReqAcceptReject />} />

        {/* Influencer Dashboard */}
        <Route exact path="/influencerdashboard" element={<InfluencerDashboardPage />} />
        <Route exact path="/influencerdashboard/editprofile" element={<EditProfile />} />

        {/* Creator-to-Creator */}
        <Route
          exact
          path="/creator-to-creator"
          element={
            <ErrorBoundary>
              <CreatorToCreatorMain />
            </ErrorBoundary>
          }
        />

        <Route exact path="/dashboard" element={<DashboardLanding />} />
      </Routes>
    </>
  );
}

export default App;
