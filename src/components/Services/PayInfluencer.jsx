import React, { useState } from "react";
import Heading from "../../assets/Authentication/Component.png";
import Frame from "../../assets/Authentication/Frame.png";

import Footer from "../Footer";

function PayInfluencer() {
    const [formData, setFormData] = useState({
        influencerName: '',
        amount: '',
        billingEmail: '',
        paymentMethod: '',
        message: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
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
      {/* Form */}
      <div className="mt-20 md:mt-40 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[868px] h-auto bg-cover bg-center text-white flex justify-center items-center py-20 rounded-[50px]"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <div className="form-container text-white w-full px-4 md:px-10">
          {/* Influencer Name and Amount */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="font-roboto font-medium text-lg block">
                Influencer Name
              </label>
              <input
                type="text"
                name="influencerName"
                value={formData.influencerName}
                onChange={handleChange}
                placeholder="Enter influencer's name"
                className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
              />
            </div>
            <div className="flex-1">
              <label className="font-roboto font-medium text-lg block">
                Amount
              </label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
              />
            </div>
          </div>

          {/* Billing Email ID and Payment Method */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="font-roboto font-medium text-lg block">
                Billing Email ID
              </label>
              <input
                type="email"
                name="billingEmail"
                value={formData.billingEmail}
                onChange={handleChange}
                placeholder="Enter your billing email"
                className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4"
              />
            </div>
            <div className="flex-1">
              <label className="font-roboto font-medium text-lg block">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full h-[50px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 px-2"
              >
                <option value="" className="bg-black">Select payment method</option>
                <option value="creditCard" className="bg-black">Credit Card</option>
                <option value="paypal" className="bg-black">PayPal</option>
                <option value="bankTransfer" className="bg-black">Bank Transfer</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="font-roboto font-medium text-lg block">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full h-[131px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4c4c4c] to-[#000]/90 text-white p-4 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
          <button
            type="submit"
            className="hover:bg-[#F5ADB2] bg-[#EFAC16] w-full md:w-auto flex items-center justify-center text-base font-medium text-center text-gray-900 py-2 px-6 mt-4 rounded-bl-3xl rounded-t-3xl focus:ring-1 focus:ring-gray-100"
          >
            Pay Now
          </button>
          </div>
        </div>
      </form>
    </div>
      <Footer></Footer>
    </>
  );
}

export default PayInfluencer;
