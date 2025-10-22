// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Cookies from "js-cookie";
// import { LiaUserSolid } from "react-icons/lia";
// import { FaChartPie } from "react-icons/fa";
// import { BiCategory } from "react-icons/bi";
// import Footer from "../Footer.jsx";

// function InfluencerInsights() {
//   const navigate = useNavigate();
//   const [edit, setEdit] = useState(false);
//   const [insights, setInsights] = useState(null);
//   const [load, setLoad] = useState(true);
//   const [influencer, setInfluencer] = useState(null);
//   const [error, setError] = useState(null);
//   const [categories, setCategories] = useState("");
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   const location = useLocation();
//   const userDetails = location.state?.userDetails;
  
//   useEffect(() => {
//     async function generateInsights() {
//       try {
//         const response = await fetch(
//           `${BACKEND_URL}/api/influencer/auto-generate`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${Cookies.get("jwt")}`,
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           console.log("Response Data:", data);
//           if (data.influencer && data.influencer.insights) {
//             setInsights(data.influencer.insights);
//             setInfluencer(data.influencer);
//             setCategories(data.influencer.insights.categories?.join(" ") || "");
//             setLoad(false);
//           } else {
//             console.error("Invalid response structure:", data);
//             setError("Invalid response from server.");
//             setLoad(false);
//           }
//         } else {
//           console.error("Failed generating insights:", response.statusText);
//           setError("Failed to generate insights.");
//           setLoad(false);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         setError("An error occurred while generating insights.");
//         setLoad(false);
//       }
//     }
//     generateInsights();
//   }, []);

//   const handleEditSubmit = async () => {
//     const newCategories = categories
//       .split(" ")
//       .filter((category) => category.trim() !== "");
//     try {
//       const response = await fetch(
//         `${BACKEND_URL}/api/influencer/edit-insights`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${Cookies.get("jwt")}`,
//           },
//           body: JSON.stringify({ categories: newCategories }),
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setInsights(data.influencer.insights);
//         setInfluencer(data.influencer);
//         setCategories(data.influencer.insights.categories?.join(" ") || "");
//         setEdit(false);
//       } else {
//         console.error("Failed to edit insights:", response.statusText);
//         setError("Failed to edit insights.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred while editing insights.");
//     }
//   };

//   const handleContinue = () => {
//     navigate("/influencerdashboard", { state: { influencer, selectedItem: "analytics" } });
//   };

//   return (
//     <div className="text-white flex justify-center mt-40">
//       {load ? (
//         <p>Your insights are being generated...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="text-white flex justify-center items-center font-roboto w-full">
//           <div className="w-full max-w-5xl px-4">
//             <div className="w-full bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#F5ADB2] flex items-center px-6 py-4 gap-4 rounded-lg">
//               <div className="rounded-xl bg-[#F5ADB2] h-[50px] w-[50px]"></div>
//               <div>
//                 <h1 className="text-2xl font-bold font-sf">{influencer?.instaHandle}</h1>
//                 <p className="text-base">
//                   Type: <span className="font-bold">{insights?.type}</span>
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-wrap w-full justify-center items-center mt-10 gap-6">
//               <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#EFAC16] flex items-center justify-center gap-4">
//                 <LiaUserSolid className="w-12 h-12" />
//                 <div className="text-left">
//                   <p className="text-xl font-medium">Total Followers</p>
//                   <p className="text-xl font-extrabold">{insights?.followerCount}</p>
//                 </div>
//               </div>
//               <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#93B076] flex items-center justify-center gap-4">
//                 <FaChartPie className="w-12 h-12" />
//                 <div className="text-left">
//                   <p className="text-xl font-medium">Engagement Ratio</p>
//                   <p className="text-xl font-extrabold">{insights?.engagementRate}</p>
//                 </div>
//               </div>
//               <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#F77128] flex items-center justify-center gap-4">
//                 <BiCategory className="w-12 h-12" />
//                 <div className="text-left">
//                   <p className="text-xl font-medium">Category</p>
//                   <p className="text-xl font-extrabold">{insights?.categories?.join(", ") || "None"}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end mt-10">
//               <div className="flex items-center gap-4">
//                 <button
//                   className="px-4 py-2 text-lg font-bold rounded-xl bg-[#EFAC16] hover:opacity-90"
//                   onClick={() => setEdit(true)}
//                 >
//                   Edit Insights
//                 </button>
//                 <button
//                   className="px-4 py-2 text-lg font-bold rounded-xl bg-[#EFAC16] hover:opacity-90"
//                   onClick={handleContinue}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//             <Footer />
//           </div>
//           {edit && (
//             <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//               <div className="bg-[#1a1a1a] p-6 rounded-xl w-[90%] max-w-md text-white">
//                 <h2 className="text-2xl font-bold mb-4">Edit Insights</h2>
//                 <div className="mb-4">
//                   <label className="block mb-2 text-sm">Categories</label>
//                   <label className="block mb-2 text-[10px]">Separate categories by space</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 rounded-lg bg-[#333] text-white outline-none"
//                     value={categories}
//                     onChange={(e) => setCategories(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4">
//                   <button
//                     className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
//                     onClick={() => setEdit(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-[#EFAC16] rounded-lg hover:bg-[#dca714]"
//                     onClick={handleEditSubmit}
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default InfluencerInsights;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { LiaUserSolid } from "react-icons/lia";
import { FaChartPie } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Footer from "../Footer.jsx";

function InfluencerInsights() {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [insights, setInsights] = useState(null);
  const [load, setLoad] = useState(true);
  const [influencer, setInfluencer] = useState(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const userDetails = location.state?.userDetails;

  useEffect(() => {
    async function generateInsights() {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/influencer/auto-generate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("jwt")}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Response Data:", data);
          if (data.influencer && data.influencer.insights) {
            setInsights(data.influencer.insights);
            setInfluencer(data.influencer);
            setCategories(data.influencer.insights.categories?.join(" ") || "");
            setLoad(false);
          } else {
            console.error("Invalid response structure:", data);
            setError("Invalid response from server.");
            setLoad(false);
          }
        } else {
          console.error("Failed generating insights:", response.statusText);
          setError("Failed to generate insights.");
          setLoad(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while generating insights.");
        setLoad(false);
      }
    }
    generateInsights();
  }, []);

  const handleEditSubmit = async () => {
    const newCategories = categories
      .split(" ")
      .filter((category) => category.trim() !== "");
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/influencer/edit-insights`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
          body: JSON.stringify({ categories: newCategories }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setInsights(data.influencer.insights);
        setInfluencer(data.influencer);
        setCategories(data.influencer.insights.categories?.join(" ") || "");
        setEdit(false);
      } else {
        console.error("Failed to edit insights:", response.statusText);
        setError("Failed to edit insights.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while editing insights.");
    }
  };

  // Modify handleContinue function
  const handleContinue = async () => {
    try {
      // Check if user has creator profile
      const response = await fetch(`${BACKEND_URL}/api/creatorprofiles/check-status`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        if (!data.hasProfile || !data.isComplete) {
          // Navigate to creator-to-creator with setup section
          navigate("/creator-to-creator", {
            state: {
              showSetup: true,
              userDetails: userDetails,
              influencer: influencer
            }
          });
        } else {
          // Navigate to creator-to-creator with explore section
          navigate("/creator-to-creator", {
            state: {
              showSetup: false,
              userDetails: userDetails,
              influencer: influencer
            }
          });
        }
      }
    } catch (error) {
      console.error("Error checking profile status:", error);
      // Fallback to setup
      navigate("/creator-to-creator", {
        state: {
          showSetup: true,
          userDetails: userDetails,
          influencer: influencer
        }
      });
    }
  };

  return (
    <div className="text-white flex justify-center mt-40">
      {load ? (
        <p>Your insights are being generated...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="text-white flex justify-center items-center font-roboto w-full">
          <div className="w-full max-w-5xl px-4">
            <div className="w-full bg-gradient-to-r from-[#6a6a6a]/10 to-[#6a6a6a]/40 border border-[#F5ADB2] flex items-center px-6 py-4 gap-4 rounded-lg">
              <div className="rounded-xl bg-[#F5ADB2] h-[50px] w-[50px]"></div>
              <div>
                <h1 className="text-2xl font-bold font-sf">{influencer?.instaHandle}</h1>
                <p className="text-base">
                  Type: <span className="font-bold">{insights?.type}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap w-full justify-center items-center mt-10 gap-6">
              <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#EFAC16] flex items-center justify-center gap-4">
                <LiaUserSolid className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-xl font-medium">Total Followers</p>
                  <p className="text-xl font-extrabold">{insights?.followerCount}</p>
                </div>
              </div>
              <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#93B076] flex items-center justify-center gap-4">
                <FaChartPie className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-xl font-medium">Engagement Ratio</p>
                  <p className="text-xl font-extrabold">{insights?.engagementRate}</p>
                </div>
              </div>
              <div className="w-[300px] h-[120px] rounded-tl-xl rounded-br-xl bg-[#F77128] flex items-center justify-center gap-4">
                <BiCategory className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-xl font-medium">Category</p>
                  <p className="text-xl font-extrabold">{insights?.categories?.join(", ") || "None"}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <div className="flex items-center gap-4">
                <button
                  className="px-4 py-2 text-lg font-bold rounded-xl bg-[#EFAC16] hover:opacity-90"
                  onClick={() => setEdit(true)}
                >
                  Edit Insights
                </button>
                <button
                  className="px-4 py-2 text-lg font-bold rounded-xl bg-[#EFAC16] hover:opacity-90"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
            <Footer />
          </div>
          {edit && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
              <div className="bg-[#1a1a1a] p-6 rounded-xl w-[90%] max-w-md text-white">
                <h2 className="text-2xl font-bold mb-4">Edit Insights</h2>
                <div className="mb-4">
                  <label className="block mb-2 text-sm">Categories</label>
                  <label className="block mb-2 text-[10px]">Separate categories by space</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-[#333] text-white outline-none"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                    onClick={() => setEdit(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-[#EFAC16] rounded-lg hover:bg-[#dca714]"
                    onClick={handleEditSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InfluencerInsights;
