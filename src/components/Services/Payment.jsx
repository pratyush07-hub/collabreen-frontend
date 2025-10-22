import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Footer from "../Footer";

const Payment = () => {
  const data = [
    {
      id: 1,
      name: "Campaign A",
      views: 150,
      likes: 30,
      campaigns: 3,
      status: "Active",
      dueDate: "2024-12-01",
      pay: "pay",
    },
    {
      id: 2,
      name: "Campaign B",
      views: 120,
      likes: 40,
      campaigns: 2,
      status: "Inactive",
      dueDate: "2024-11-20",
      pay: "pay",
    },
    {
      id: 3,
      name: "Campaign C",
      views: 200,
      likes: 70,
      campaigns: 4,
      status: "Active",
      dueDate: "2024-12-15",
      pay: "pay",
    },
    {
      id: 4,
      name: "Campaign D",
      views: 80,
      likes: 10,
      campaigns: 1,
      status: "Completed",
      dueDate: "2024-10-30",
      pay: "pay",
    },
    {
      id: 5,
      name: "Campaign E",
      views: 130,
      likes: 50,
      campaigns: 2,
      status: "Active",
      dueDate: "2024-12-05",
      pay: "pay",
    },
    {
      id: 6,
      name: "Campaign F",
      views: 110,
      likes: 20,
      campaigns: 3,
      status: "Inactive",
      dueDate: "2024-11-25",
      pay: "pay",
    },
    {
      id: 7,
      name: "Campaign G",
      views: 250,
      likes: 90,
      campaigns: 5,
      status: "Active",
      dueDate: "2024-12-20",
      pay: "pay",
    },
    {
      id: 8,
      name: "Campaign H",
      views: 300,
      likes: 120,
      campaigns: 6,
      status: "Completed",
      dueDate: "2024-11-10",
      pay: "pay",
    },

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="bg-[#0C0C0C] rounded-3xl shadow overflow-hidden h-auto md:h-[530px] relative mb-20 mt-20 reg">
        <img
          className="absolute object-cover object-center inset-0 h-full w-full"
          src={Heading}
          alt="Meeting"
        />
        <div className="flex flex-col justify-center items-center text-white font-roboto p-4 md:p-10 h-full w-full absolute top-0 left-0">
          <div className="text-center">
            <h1 className="text-[#EFAC16] font-medium text-4xl md:text-6xl font-sf">
              Payment
            </h1>
            <p className="font-roboto font-light text-base md:text-xl mt-6 md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Duis Pulvinar placerat
              placerat cras duis.
            </p>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-wrap items-center px-[9rem] mb-20 gap-10">
        <div className="flex gap-4 px-4 h-[86px] w-[240px] border  rounded-lg border-[#efac16] bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] items-center">
            <div className="rounded-lg h-[40px] w-[40px] bg-[#EFAC16]"></div>
            <div className="text-white font-roboto"> 
                <p className="font-medium">Budget</p>
                <p>Rs. 1,00,000</p>
            </div>
        </div>
        <div className="flex gap-4 px-4 h-[86px] w-[240px] border  rounded-lg border-[#93B076] bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] items-center">
            <div className="rounded-lg h-[40px] w-[40px] bg-[#93B076]"></div>
            <div className="text-white font-roboto"> 
                <p className="font-medium">Paid</p>
                <p>Rs. 50,000</p>
            </div>
        </div>
        <div className="flex gap-4 px-4 h-[86px] w-[240px] border  rounded-lg border-[#F5ADB2] bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] items-center">
            <div className="rounded-lg h-[40px] w-[40px] bg-[#F5ADB2]"></div>
            <div className="text-white font-roboto"> 
                <p className="font-medium">Remaining</p>
                <p>Rs. 50,000</p>
            </div>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto flex justify-center ">
        <table className="w-[1226px] bg-gradient-to-r from-[#2a2a2a]/40 to-[#2a2a2a] text-white border border-[#F5ADB2] font-roboto">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">S.No</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Views</th>
              <th className="py-3 px-4 text-left">Likes</th>
              <th className="py-3 px-4 text-left">Campaigns</th>
              <th className="py-3 px-4 text-left">Campaign Status</th>
              <th className="py-3 px-4 text-left">Due Date</th>
              <th className="py-3 px-4 text-left">Pay</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-[#3a3a3a] ">
                <td className="py-2 px-4 ">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.views}</td>
                <td className="py-2 px-4">{item.likes}</td>
                <td className="py-2 px-4">{item.campaigns}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="py-2 px-4">{item.dueDate}</td>
                <td className="py-1 bg-[#F5ADB2] flex justify-center mr-4 cursor-pointer hover:opacity-90">{item.pay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex text-white justify-center mt-10 mb-10">
        <div className="w-[320px] h-[44px] bg-[#2a2a2a] rounded-[20px] flex justify-between items-center px-4">
          <button onClick={handlePrevious} disabled={currentPage === 1}>&lt;</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>&gt;</button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Payment;
