import React, { useState } from "react";
import { HiX } from "react-icons/hi";

const PaymentModal = ({ isOpen, onClose }) => {
  const [paymentData, setPaymentData] = useState({
    paymentFor: "School fees",
    paymentType: "Transfer",
    matricNumber: "F/ND/21/3210121",
    surname: "Oduneye",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMakePayment = () => {
    // Add logic to handle payment submission
    console.log("Payment submitted:", paymentData);
    // Close the modal after handling payment
    onClose();
  };

  return (
    
    <div
      className={`fixed inset-0 bg-shades-black bg-opacity-80 z-50 flex items-center justify-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="bg-shades-white p-6 rounded-2xl w-[450px]">
        <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-green-200">Payment Portal</h2>

          <button onClick={onClose}>
            <HiX className="text-grey-60" />
          </button>
        </div>
        <div className="mb-4">
          <label className="text-grey-70 font-semibolds">What are you paying for?</label>
          <input
            type="text"
            name="paymentFor"
            value={paymentData.paymentFor}
            onChange={handleInputChange}
            className="w-full bg-grey-30 rounded-[8px] p-3 font-semibold mt-2"
            />
        </div>
        <div className="mb-4">
          <label className="text-grey-70 font-semibolds">Payment Type</label>
          <input
            type="text"
            name="paymentType"
            value={paymentData.paymentType}
            onChange={handleInputChange}
            className="w-full bg-grey-30 rounded-[8px] p-3 font-semibold mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-grey-70 font-semibolds">Enter your matric number</label>
          <input
            type="text"
            name="matricNumber"
            value={paymentData.matricNumber}
            onChange={handleInputChange}
            className="w-full bg-grey-30 rounded-[8px] p-3 font-semibold mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-grey-70 font-semibolds">Enter your surname</label>
          <input
            type="text"
            name="surname"
            value={paymentData.surname}
            onChange={handleInputChange}
            className="w-full bg-grey-30 rounded-[8px] p-3 font-semibold mt-2"
          />
        </div>
        <button
          onClick={handleMakePayment}
          className="w-full bg-green-500 text-shades-white font-semibold py-5 px-4 rounded"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
